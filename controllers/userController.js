import Usuarios from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const SECRET_KEY = process.env.SECRETKEY 

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const userExists = await Usuarios.findOne({ where: { username } });
        if (userExists) {
            return res.status(400).json({ message: "El usuario ya está registrado" });
        }

        const newUser = await Usuarios.create({ username, password });

        res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await Usuarios.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json({ message: "Login exitoso", token });
    } catch (error) {
        res.status(500).json({ message: "Error en el login", error });
    }
};


