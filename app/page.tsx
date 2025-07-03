"use client";

import TodoForm from "@/components/custom/Form";
import BaseLayout from "@/components/custom/BaseLayout";
import Todo from "@/components/custom/Todo";
import { useState } from "react";
import { TodoInterface } from "@/interface/todo.interface";

export default function Home() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const handleAddTodo = (newTodo: TodoInterface) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (id: string, updatedTodo: TodoInterface) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

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
              completed={todo.completed}
              priority={todo.priority}
              category={todo.category}
            />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
