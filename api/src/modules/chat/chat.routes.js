import { Router } from "express";
import * as controller from "./chat.controller.js";
import { authRequired } from "../../middleware/auth.js";

const r = Router();

// GET /api/chat/matches/:matchId/messages
r.get("/matches/:matchId/messages", authRequired, controller.listMessages);

// POST /api/chat/matches/:matchId/messages
r.post("/matches/:matchId/messages", authRequired, controller.sendMessage);

export default r;
