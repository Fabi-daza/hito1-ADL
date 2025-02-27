import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import userRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import setupSocket from "./controllers/socketController.js";
import sequelize from "./db/db.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: "*",
    },
});

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(express.static("public"));

setupSocket(io);

sequelize.sync().then(() => {
    console.log("Base de datos sincronizada");
    server.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor corriendo en el puerto ${process.env.PORT || 3000}`);
    });
});
