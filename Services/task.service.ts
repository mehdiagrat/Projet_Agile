import Task, { type ITask } from '../models/task.model.js';
import type { Types } from "mongoose";

interface CreateTaskDTO {
  title: string;
  description: string;
  dueDate: Date;
  category: string;
  completed?: boolean;
  ownerId?: Types.ObjectId;
}

interface UpdateTaskDTO {
  title?: string;
  description?: string;
  dueDate?: Date;
  category?: string;
  completed?: boolean;
}

class TaskService {
  // Récupérer toutes les tâches
  async getAllTasks() {
    return await Task.find().sort({ dueDate: 1 });
  }

  // Récupérer une tâche par son ID
  async getTaskById(id: string) {
    return await Task.findById(id);
  }

  // Créer une tâche
  async createTask(data: CreateTaskDTO) {
    const task = new Task(data);
    return await task.save();
  }

  // Modifier une tâche
  async updateTask(id: string, data: UpdateTaskDTO) {
    return await Task.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  // Supprimer une tâche
  async deleteTask(id: string) {
    return await Task.findByIdAndDelete(id);
  }

  // Récupérer les tâches d'un utilisateur
  async getTasksByOwner(ownerId: string) {
    return await Task.find({ ownerId }).sort({ dueDate: 1 });
  }
}

export default new TaskService();