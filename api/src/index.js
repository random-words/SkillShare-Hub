import http from "http";
import { Server as SocketIOServer } from "socket.io";
import app from "./app.js";
import { env } from "./config/env.js";
import { registerChatHandlers } from "./modules/chat/chat.gateway.js";

const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: env.CORS_ORIGIN,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  registerChatHandlers(io, socket);
});

server.listen(env.PORT, () => {
  console.log(`API listening on http://localhost:${env.PORT}`);
});
