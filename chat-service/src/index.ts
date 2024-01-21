import { createServer } from "node:http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer);

const onConnection = (socket: Socket) => {};

io.on("connection", onConnection);

httpServer.listen(3000);
