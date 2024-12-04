import express from "express"
import { Request, Response } from "express";
import authenticateToken from "../middleware/authenticate";


const router = express.Router();


router.get("/private", authenticateToken, (req: Request, res: Response) => {
    res.send("Hola mundo en vista privada")
})

export default router