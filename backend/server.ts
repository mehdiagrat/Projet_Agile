import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// 1. Importation de votre fichier de routes (attention à garder le .js si vous utilisez ESM)
import taskRoutes from "./routes/task.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON dans le corps des requêtes (req.body)
app.use(express.json());

// 2. Lier les routes importées à l'URL de base "/api/tasks"
app.use("/api/tasks", taskRoutes);

// Route de test (optionnelle, pour vérifier que la racine de l'API fonctionne)
app.get("/", (req, res) => {
  res.send("API opérationnelle avec base de données !");
});

const startServer = async (): Promise => {
  try {
    // On attend que la connexion à la base de données soit établie
    await connectDB();

    // Ensuite, on démarre le serveur Express
    app.listen(PORT, () => {
      console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
    });
  } catch (error) {
    console.error("Impossible de démarrer le serveur :", error);
    process.exit(1);
  }
};

startServer();