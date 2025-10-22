import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "../config/env.js";
import { errorHandler } from "../middleware/error.js";
import authRoutes from "../modules/auth/auth.routes.js";

const a = 5;

const app = express();
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);

// 404
app.use((req, res) => res.status(404).json({ message: "Not found", path: req.path }));

// centralized error
app.use(errorHandler);

export default app;
