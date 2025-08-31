import { createContext, useCallback, useState, type ReactNode } from "react";
import { apiPrivate } from "../api/axios";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt?: string;
  finishedAt?: string | null;
}

interface CreateTaskData {
  title: string;
}

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  fetchTasks: () => Promise<Task[]>;
  createTask: (data: CreateTaskData) => Promise<Task>;
  deleteTask: (id: number) => Promise<void>;
  updateTaskCompleted: (id: number, completed: boolean) => Promise<Task>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  toast: { message: string; type: "success" | "danger" } | null;
  setToast: React.Dispatch<
    React.SetStateAction<{ message: string; type: "success" | "danger" } | null>
  >;
}

interface TaskContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

const API_URL = "https://9dtczf-3000.csb.app/tasks";

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "danger";
  } | null>(null);

  const fetchTasks = useCallback(async () => {
    const response = await apiPrivate.get<Task[]>(API_URL);
    setTasks(response.data);
    return response.data;
  }, []);

  const createTask = useCallback(
    async (data: CreateTaskData): Promise<Task> => {
      try {
        const taskData = {
          ...data,
          completed: false,
          createdAt: new Date().toISOString(),
          finishedAt: null,
        };
        const response = await apiPrivate.post<Task>(API_URL, taskData);
        setTasks((prev) => [...prev, response.data]);
        setToast({ message: "Tarefa adicionada", type: "success" });
        return response.data;
      } catch (error: unknown) {
        setToast({ message: "Erro ao criar tarefa", type: "danger" });
        throw error;
      }
    },
    []
  );

  const deleteTask = useCallback(async (id: number) => {
    try {
      await apiPrivate.delete(`${API_URL}/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      setToast({ message: "Tarefa excluída", type: "success" });
    } catch (error: unknown) {
      setToast({ message: "Erro ao excluir tarefa", type: "danger" });
      throw error;
    }
  }, []);

  const updateTaskCompleted = useCallback(
    async (id: number, completed: boolean): Promise<Task> => {
      try {
        const task = tasks.find((t) => t.id === id);
        if (!task) throw new Error("Task not found");

        const updatedTask = {
          ...task,
          completed,
          finishedAt: completed ? new Date().toISOString() : null,
        };
        const response = await apiPrivate.put<Task>(
          `${API_URL}/${id}`,
          updatedTask
        );
        setTasks((prev) => prev.map((t) => (t.id === id ? response.data : t)));

        if (!task.completed && completed) {
          setToast({ message: "Tarefa concluída", type: "success" });
        }
        return response.data;
      } catch (error: unknown) {
        setToast({ message: "Erro ao atualizar tarefa", type: "danger" });
        throw error;
      }
    },
    [tasks]
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        fetchTasks,
        createTask,
        deleteTask,
        updateTaskCompleted,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        toast,
        setToast,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
