
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("La variable MONGO_URI est absente du fichier .env");
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connecté !");
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error);
    throw error;
  }
};

export default connectDB;