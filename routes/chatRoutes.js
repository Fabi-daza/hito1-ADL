import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    res.json({ message: "Bienvenido al chat" });
});

export default router;
