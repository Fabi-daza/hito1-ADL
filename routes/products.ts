import express from "express"
import { getProducts, getProductById, createProduct,
    updateProduct, deleteProduct} from "../controllers/productsController";

const router = express.Router();

router.get("/all", getProducts);
router.get("/:id", getProductById);
router.post("/add", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router