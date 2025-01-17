import { Router } from "express";
import { getProducts, createProducts, getProductById, updateProduct, deleteProduct } from "../controllers/productsController.js";

const router = Router();

router.get("/", getProducts);
router.post("/create", createProducts);
router.get("/:id", getProductById);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
