import { query } from "../../db/index.js";
import {
  hashPassword,
  comparePassword,
  createToken,
} from "../../utils/crypto.js";
import { httpError } from "../../utils/http.js";

export async function register({ email, password, name }) {
  if (!email || !email.includes("@")) {
    throw httpError(400, "Valid email is required");
  }
  if (!password || password.length < 6) {
    throw httpError(400, "Password must be at least 6 characters");
  }

  const existing = await query("SELECT id FROM users WHERE email = $1", [
    email,
  ]);
  if (existing.rowCount > 0) {
    throw httpError(409, "User with this email already exists");
  }

  const passwordHash = await hashPassword(password);
  const displayName = name || email.split("@")[0];

  const result = await query(
    `INSERT INTO users (email, password_hash, display_name)
     VALUES ($1, $2, $3)
     RETURNING id, email, display_name, headline, rating, lessons_count`,
    [email, passwordHash, displayName]
  );

  const user = result.rows[0];
  const token = createToken({ sub: user.id, email: user.email });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.display_name,
    },
  };
}

export async function login({ email, password }) {
  if (!email || !password) {
    throw httpError(400, "Email and password are required");
  }

  const result = await query(
    `SELECT id, email, password_hash, display_name
     FROM users WHERE email = $1`,
    [email]
  );

  if (result.rowCount === 0) {
    throw httpError(401, "Invalid email or password");
  }

  const user = result.rows[0];
  const matches = await comparePassword(password, user.password_hash);
  if (!matches) {
    throw httpError(401, "Invalid email or password");
  }

  const token = createToken({ sub: user.id, email: user.email });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.display_name,
    },
  };
}

export async function getMe(userId) {
  const res = await query(
    `SELECT id, email, display_name, headline, rating, lessons_count
     FROM users
     WHERE id = $1`,
    [userId]
  );

  if (res.rowCount === 0) {
    throw httpError(404, "User not found");
  }

  const u = res.rows[0];
  return {
    user: {
      id: u.id,
      email: u.email,
      name: u.display_name,
      subtitle: u.headline,
      rating: Number(u.rating),
      lessons: u.lessons_count,
    },
  };
}
