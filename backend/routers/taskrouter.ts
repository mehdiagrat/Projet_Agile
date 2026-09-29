import { Router } from "express";
import { 
  createTask, 
  getTasks, 
  getTaskById, 
  updateTask, 
  deleteTask 
} from "../controllers/taskController";

const router = Router();

// Routes pour la collection globale
router.route("/tasks")
  .get(getTasks)
  .post(createTask);

// Routes pour un document spécifique (via son ID)
router.route("/tasks/:id")
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

export default router;