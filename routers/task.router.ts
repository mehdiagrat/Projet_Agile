import { Router } from "express";
import taskController from "../controllers/task.controller.js";

const router = Router();

// GET /api/tasks
router.get("/", taskController.getAllTasks);

// GET /api/tasks/owner/:ownerId
router.get("/owner/:ownerId", taskController.getTasksByOwner);

// GET /api/tasks/:id
router.get("/:id", taskController.getTaskById);

// POST /api/tasks
router.post("/", taskController.createTask);

// PUT /api/tasks/:id
router.put("/:id", taskController.updateTask);

// DELETE /api/tasks/:id
router.delete("/:id", taskController.deleteTask);

export default router;