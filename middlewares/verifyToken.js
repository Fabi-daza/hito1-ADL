import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const SECRET_KEY = process.env.SECRETKEY 

export const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ message: "Token requerido" });
    }

    jwt.verify(token.split(" ")[1], SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token inválido" });
        }
        req.user = decoded;
        next();
    });
};