import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    // 1. On récupère l'URL injectée par le docker-compose (MONGO_URI)
    // 2. Si elle n'existe pas, on met l'URL Docker par défaut ("mongodb" au lieu de "127.0.0.1")
    const mongoURI = process.env.MONGO_URI || "mongodb://mongodb:27017/projet_agile";
    
    const conn = await mongoose.connect(mongoURI);
    console.log(`✅ Base de données MongoDB connectée : ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error);
    process.exit(1);
  }
};

export default connectDB;