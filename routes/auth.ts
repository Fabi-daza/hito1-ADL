import express from "express"
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

if(!SECRET_KEY){
    throw new Error("Falta la clave secreta");
}
const router = express.Router();

const users = [
    {
        username: "admin",
        password: "$2a$12$SJQ.8Hg8nynV4hNMI5T2I.DtpleE5R/JI37zB7iWw6CRlHeo0gz9u"
    }
]

router.post('/', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = users.find(u => { return u.username === username });

    if (!user) {
        res.status(401).json({ message: "Credenciales no válidas" });
        return
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        res.status(401).json({ message: "Credenciales no válidas" });
        return
    }
    
    const token = jwt.sign({ username: user.username }, SECRET_KEY, {
        expiresIn: "1h",
    });

    res.status(200).json({ token });
});

export default router