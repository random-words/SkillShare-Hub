import * as service from "./chat.service.js";
import { ok, created } from "../../utils/http.js";

export async function listMessages(req, res, next) {
  try {
    const matchId = Number(req.params.matchId);
    const messages = await service.getMessages(matchId);
    return ok(res, { items: messages });
  } catch (e) {
    next(e);
  }
}

export async function sendMessage(req, res, next) {
  try {
    const matchId = Number(req.params.matchId);
    const { body } = req.body ?? {};

    if (!body) {
      return res.status(400).json({ message: "Message body is required" });
    }

    const msg = await service.createMessage({
      matchId,
      senderId: req.user.id,
      body,
    });

    const io = req.app.get("io");
    if (io) {
      io.to(`match:${matchId}`).emit("chat:message", msg);
    }

    return created(res, msg);
  } catch (e) {
    next(e);
  }
}
