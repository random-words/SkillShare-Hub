import * as chatService from "./chat.service.js";

export function registerChatHandlers(io, socket) {
  socket.on("chat:join", ({ matchId }) => {
    if (!matchId) return;
    socket.join(`match:${matchId}`);
  });

  socket.on("chat:message", async ({ matchId, body, userId }) => {
    if (!matchId || !body || !userId) return;

    const message = await chatService.createMessage({
      matchId,
      senderId: userId,
      body,
    });

    io.to(`match:${matchId}`).emit("chat:message", message);
  });
}
