import { Router } from "express";
import ProductManager from "../../dao/ProductManager.js";

const router = Router();

router.get("/products", async (req, res) => {
  const { query = {} } = req;
  const products = await ProductManager.get(query);
  res.status(200).json(products);
});

router.get("/products/:sid", async (req, res) => {
  try {
    const {
      params: { sid },
    } = req;
    const product = await ProductManager.getById(sid);
    res.status(200).json(product);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.post("/products", async (req, res) => {
  try {
    const { body } = req;
    const product = await ProductManager.create(body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/products/:sid", async (req, res) => {
  try {
    const {
      params: { sid },
      body,
    } = req;
    await ProductManager.updateById(sid, body);
    res.status(204).end();
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.delete("/products/:sid", async (req, res) => {
  try {
    const {
      params: { sid },
    } = req;
    await ProductManager.deleteById(sid);
    res.status(204).end();
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

export default router;
