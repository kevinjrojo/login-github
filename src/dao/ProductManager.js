import ProductsModel from "../models/product.model.js";
import { Exception } from "../utils.js";

export default class ProductManager {
  static get(query = {}) {
    const criteria = {};
    if (query.course) {
      criteria.course = query.course;
    }
    return ProductsModel.find(criteria);
  }
  static async getById(sid) {
    const product = await ProductsModel.findById(sid);
    if (!product) {
      throw new Exception("No existe el producto 😨", 404);
    }
    return product;
  }

  static async create(data) {
    const product = await ProductsModel.create(data);
    console.log("Producto creado correctamente 😁");
    return product;
  }

  static async updateById(sid, data) {
    const product = await ProductsModel.findById(sid);
    if (!product) {
      throw new Exception("No existe el Producto 😨", 404);
    }
    const criteria = { _id: sid };
    const operation = { $set: data };
    await ProductsModel.updateOne(criteria, operation);
    console.log("Producto actualizado correctamente 😁");
  }

  static async deleteById(sid) {
    const product = await ProductsModel.findById(sid);
    if (!product) {
      throw new Exception("No existe el producto 😨", 404);
    }
    const criteria = { _id: sid };
    await ProductsModel.deleteOne(criteria);
    console.log("Producto eliminado correctamente 😑");
  }
}
