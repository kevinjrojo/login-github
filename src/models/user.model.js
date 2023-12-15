import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    age: Number,
    password: String,
    provider: String,
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
