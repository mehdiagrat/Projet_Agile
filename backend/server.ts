import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routers/taskrouter"; 

// Cette ligne est obligatoire pour lire le fichier .env
dotenv.config();

const app = express();
// Utilise le port du .env, ou 3000 si introuvable
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", taskRoutes);

// On va chercher la variable MONGO_URI du fichier .env
const MONGO_URI = process.env.MONGO_URI as string;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connecté à MongoDB sur db_agile");
    app.listen(PORT, () => {
      console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Erreur de connexion à MongoDB :", error);
  });