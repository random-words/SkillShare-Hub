import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error.js";

import authRoutes from "./modules/auth/auth.routes.js";
import usersRoutes from "./modules/users/users.routes.js";
import skillsRoutes from "./modules/skills/skills.routes.js";
import matchesRoutes from "./modules/matches/matches.routes.js";
import scheduleRoutes from "./modules/schedule/schedule.routes.js";
import chatRoutes from "./modules/chat/chat.routes.js";

const app = express();

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/matches", matchesRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/chat", chatRoutes);

app.use((req, res) =>
  res.status(404).json({ message: "Not found", path: req.path })
);

app.use(errorHandler);

export default app;
