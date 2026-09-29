import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    // Connexion à MongoDB en spécifiant le port et le nom de la base de données
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/projet_agile");
    console.log(`✅ Base de données MongoDB connectée : ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error);
    process.exit(1); // Arrête le processus en cas d'échec
  }
};

export default connectDB;