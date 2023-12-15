import { Router } from "express";
import ProductManager from "../../dao/ProductManager.js";

const router = Router();

router.get("/products", async (req, res) => {
  let products = await ProductManager.get();
  res.render("products", { products: products.map((s) => s.toJSON()) });
});

export default router;
