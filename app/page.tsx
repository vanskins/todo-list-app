"use client";

import TodoForm from "@/components/custom/Form";
import BaseLayout from "@/components/custom/BaseLayout";
import Todo from "@/components/custom/Todo";
import { useState, useEffect } from "react";
import { TodoInterface } from "@/interface/todo.interface";
import { getTodos, createTodo, deleteTodo, updateTodo } from "@/services/todo.service";

export default function Home() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async (newTodo: TodoInterface) => {
    try {
      await createTodo(newTodo);
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdateTodo = async (id: string, updatedTodo: Partial<TodoInterface>) => {
    try {
      await updateTodo(id, updatedTodo);
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <BaseLayout>
      <div className="flex flex-col gap-4 items-center m-10">
        <h1 className="text-4xl font-bold text-left">Todo list app</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <div className="space-y-6 w-full max-w-2xl">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              is_completed={todo.is_completed}
              priority={todo.priority}
              category={todo.category}
              onDeleteTodo={handleDeleteTodo}
              onUpdateTodo={handleUpdateTodo}
            />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
