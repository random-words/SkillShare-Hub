import * as service from "./chat.service.js";
import { ok, created } from "../../utils/http.js";

// Ця функція могла загубитися. Вона потрібна для GET запиту
export async function listMessages(req, res, next) {
  try {
    const matchId = Number(req.params.matchId);
    // Викликаємо оновлений сервіс, який шукає повідомлення за парою користувачів
    const messages = await service.getMessages(matchId);
    return ok(res, { items: messages });
  } catch (e) {
    next(e);
  }
}

// Це оновлена функція відправки
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
      // 1. Відправляємо у поточну кімнату
      io.to(`match:${matchId}`).emit("chat:message", msg);

      // 2. Відправляємо у "дзеркальну" кімнату партнера
      const mirrorId = await service.getMirrorMatchId(matchId);
      if (mirrorId) {
        io.to(`match:${mirrorId}`).emit("chat:message", msg);
      }
    }

    return created(res, msg);
  } catch (e) {
    next(e);
  }
}
