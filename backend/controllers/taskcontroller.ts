import { Request, Response } from "express";
import * as taskService from "../services/taskservice";

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTaskService(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de la tâche", error });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération", error });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await taskService.getTaskByIdService(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération", error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.updateTaskService(req.params.id, req.body);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour", error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.deleteTaskService(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    
    res.status(200).json({ message: "Tâche supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression", error });
  }
};