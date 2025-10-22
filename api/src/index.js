import http from "http";
import { Server } from "socket.io";
import app from "./utils/app.js";
import { env } from "./config/env.js";

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: env.CORS_ORIGIN, credentials: true },
});

// простий socket namespace
io.on("connection", socket => {
  socket.on("ping", () => socket.emit("pong"));
});

const port = env.PORT || 4000;
server.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
