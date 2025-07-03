import { TodoInterface } from "@/interface/todo.interface";
import api from "./apiConfig";

export const getTodos = async () => {
  const response = await api.get("/todos");
  return response.data;
};

export const createTodo = async (todo: TodoInterface) => {
  const response = await api.post("/todos", todo);
  return response.data;
};

export const deleteTodo = async (id: string) => {
  const response = await api.delete(`/todos/${id}`);
  return response.data;
};

export const updateTodo = async (id: string, todo: Partial<TodoInterface>) => {
  const response = await api.put(`/todos/${id}`, todo);
  return response.data;
};