
import type { Request, Response, NextFunction } from "express";
import taskService from "../Services/task.service.js";

class TaskController {
  // GET /api/tasks
  async getAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await taskService.getAllTasks();
          // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/tasks/:id
  async getTaskById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
                // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      if (typeof id !== "string") {
        res.status(400).json({ message: "Identifiant invalide" });
        return;
      }

      const task = await taskService.getTaskById(id);

      if (!task) {
        res.status(404).json({ message: "Tâche introuvable" });
        return;
      }

      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  // POST /api/tasks
  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
                // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      const task = await taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }

  // PUT /api/tasks/:id
  async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
                // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      const id = req.params.id;

      if (typeof id !== "string") {
        res.status(400).json({ message: "Identifiant invalide" });
        return;
      }

      const task = await taskService.updateTask(id, req.body);

      if (!task) {
        res.status(404).json({ message: "Tâche introuvable" });
        return;
      }

      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  // DELETE /api/tasks/:id
  async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
                // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      const id = req.params.id;

      if (typeof id !== "string") {
        res.status(400).json({ message: "Identifiant invalide" });
        return;
      }

      const task = await taskService.deleteTask(id);

      if (!task) {
        res.status(404).json({ message: "Tâche introuvable" });
        return;
      }

      res.status(200).json({
        message: "Tâche supprimée avec succès",
      });
    } catch (error) {
      next(error);
    }
  }

  // GET /api/tasks/owner/:ownerId
  async getTasksByOwner(req: Request, res: Response, next: NextFunction) {
    try {
                // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      const ownerId = req.params.ownerId;

      if (typeof ownerId !== "string") {
        res.status(400).json({ message: "Identifiant utilisateur invalide" });
        return;
      }

      const tasks = await taskService.getTasksByOwner(ownerId);
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }
}

export default new TaskController();