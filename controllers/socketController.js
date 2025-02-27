import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRETKEY;

export default function setupSocket(io) {
    io.use((socket, next) => {
        const token = socket.handshake.auth.token;
        if (!token) return next(new Error("Token requerido"));

        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            socket.user = decoded;
            next();
        } catch (error) {
            console.error("Error de autenticación:", error.message);
            return next(new Error("Token inválido"));
        }
    });

    io.on("connection", (socket) => {
        console.log(`Usuario conectado: ${socket.user.username}`);

        socket.on("message", (data) => {
            if (!data.message) {
                console.error("Mensaje no proporcionado");
                return;
            }
            console.log(`Mensaje recibido de ${socket.user.username}: ${data.message}`);
            io.emit("message", { user: socket.user.username, message: data.message });
        });

        socket.on("disconnect", () => {
            console.log(`Usuario desconectado: ${socket.user.username}`);
        });
    });
}
