import Task, { ITask } from "../models/tasks";

// Créer une tâche
export const createTaskService = async (data: Partial<ITask>) => {
  return await Task.create(data);
};

// Récupérer toutes les tâches
export const getTasksService = async () => {
  return await Task.find(); 
  // On pourrait ajouter .populate("ownerId") si on veut les infos de l'utilisateur
};

// Récupérer une tâche par son ID
export const getTaskByIdService = async (id: string) => {
  return await Task.findById(id);
};

// Mettre à jour une tâche
export const updateTaskService = async (id: string, data: Partial<ITask>) => {
  // { new: true } renvoie le document mis à jour plutôt que l'ancien
  return await Task.findByIdAndUpdate(id, data, { new: true });
};

// Supprimer une tâche
export const deleteTaskService = async (id: string) => {
  return await Task.findByIdAndDelete(id);
};