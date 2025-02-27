export const socketController = (socket, io) => {
    socket.on("message", (data) => {
        console.log("Mensaje recibido:", data);
        io.emit("message", data);
    });

    socket.on("disconnect", () => {
        console.log("Cliente desconectado:", socket.id);
    });
};
