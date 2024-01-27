import { createServer } from "node:http";
import express from "express";
import { Server, Socket } from "socket.io";
import registerMessageHandlers from "./handlers/messageHandler";

const app = express();
const server = createServer(app);
const io = new Server(server);

const onConnection = (socket: Socket) => {
  registerMessageHandlers(socket);
};

io.on("connection", onConnection);

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
