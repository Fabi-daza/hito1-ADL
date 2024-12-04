import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from "express";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

function authenticateToken(req: Request, res:Response, next: NextFunction) {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'token no proporcionado' });
    return 
  }

  try {
    if (!SECRET_KEY) {
      throw new Error('Falta la clave secreta en el archivo .env');
    }
    const user = jwt.verify(token, SECRET_KEY);
    (req as any).user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token inválido o expirado' });
    return 
  }
}

export default authenticateToken;
