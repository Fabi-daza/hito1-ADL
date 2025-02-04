import express from "express";
import { register, login } from "../controllers/userController.js"
import { verifyToken } from "../middlewares/verifyToken.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/profile", verifyToken, (req, res) => {
    res.json({ message: "Acceso permitido", user: req.user });
});

export default router;
