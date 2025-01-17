import Producto from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Producto.findAll();
    res.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { titulo, descripcion, stock, precio } = req.body;
    const newProduct = await Producto.create({ titulo, descripcion, stock, precio });
    res.status(201).json({message: "Producto creado correctamente"});
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error al crear producto" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Producto.findByPk(id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ message: "Error al obtener producto" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, stock, precio } = req.body;
    const product = await Producto.findByPk(id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });

    product.titulo = titulo;
    product.descripcion = descripcion;
    product.stock = stock;
    product.precio = precio;
    await product.save();

    res.json({message : "Producto actualizado correctamente"});
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ message: "Error al actualizar producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Producto.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Producto no encontrado" });
    res.status(200).json({message: "Producto eliminado correctamente"});
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ message: "Error al eliminar producto" });
  }
};
