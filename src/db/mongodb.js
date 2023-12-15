import mongoose from "mongoose";

export const URI =
  "mongodb+srv://kevinrojokevin17:nlV63mpFT5kY5v78@cluster0.kfs8toa.mongodb.net/ecommerce";

export const init = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database is ok 🚀");
  } catch (error) {
    console.error(
      "Ha ocurrido un problema al tratar de acceder a la mongodb 😨",
      error.message
    );
  }
};
