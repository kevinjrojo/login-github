import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, require: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    code: { type: Number, required: true, unique: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);

productSchema.plugin(mongoosePaginate);

export default mongoose.model("product", productSchema);
