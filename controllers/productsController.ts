import { Request,Response } from "express";
import pool from "../db/db";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM productos");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los productos" });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM productos WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: "Producto no encontrado" });
            return
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    const { titulo, descripcion, stock, precio } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO productos (titulo, descripcion, stock, precio) VALUES ($1, $2, $3, $4)",
            [titulo, descripcion,stock, precio]
        );
        res.status(201).json({message: "Producto agregado con exito"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al agregar el producto" });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { titulo, descripcion, stock, precio } = req.body;
    try {
        const result = await pool.query(
            "UPDATE productos SET titulo = $1, descripcion = $2, stock = $3, precio = $4 WHERE id = $5",
            [titulo, descripcion,stock, precio, id]
        );
        if (result.rowCount === 0) {
            res.status(404).json({ error: "Producto no encontrado" });
            return
        }
        res.json({ message: "Producto actualizado con éxito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM productos WHERE id = $1", [id]);
        if (result.rowCount === 0) {
            res.status(404).json({ error: "Producto no encontrado" });
            return
        }
        res.json({ message: "Producto eliminado con éxito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el producto" });
    }
};

