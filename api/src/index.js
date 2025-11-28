import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

console.log("=== SKH API v2 LOADED ===");

const app = express();

const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_key";

// ===== "БД" в пам'яті =====
let users = [];
let nextId = 1;

// створення JWT
function createToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "7d" },
  );
}

// мідлвар для перевірки токена
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    console.error("Token error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// ===== мідлвари =====
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  }),
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// ===== ROOT =====
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "SkillShare Hub API" });
});

// ===== AUTH =====

// реєстрація
app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Valid email is required" });
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const existing = users.find(
      u => u.email.toLowerCase() === email.toLowerCase(),
    );
    if (existing) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
      id: nextId++,
      email,
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    const token = createToken(newUser);

    return res.status(201).json({
      user: { id: newUser.id, email: newUser.email },
      token,
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// логін
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase(),
    );
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createToken(user);

    return res.json({
      user: { id: user.id, email: user.email },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// поточний користувач (захищений)
app.get("/api/auth/me", authMiddleware, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ user: { id: user.id, email: user.email } });
});

// демо-дані (захищений)
app.get("/api/skills", authMiddleware, (req, res) => {
  res.json({
    items: [
      { id: 1, name: "JavaScript", level: "intermediate" },
      { id: 2, name: "Photography", level: "beginner" },
    ],
  });
});

// 404 — В САМОМУ КІНЦІ
app.use((req, res) => {
  res.status(404).json({ message: "Not found", path: req.path });
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
