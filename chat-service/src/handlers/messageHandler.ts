import { Socket } from "socket.io";

export default function registerMessageHandlers(socket: Socket) {
  const handleSendMessage = (msg: string) => {
    socket.emit("message:receive", `Received Message: ${msg}`);
  };

  socket.on("message:send", handleSendMessage);
}
