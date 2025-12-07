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
    credentials: true,
  },
});

app.set("io", io);

io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on("error", (err) => console.error("Socket error:", err));

  registerChatHandlers(io, socket);
});

server.listen(env.PORT, () => {
  console.log(`API listening on http://localhost:${env.PORT}`);
});
