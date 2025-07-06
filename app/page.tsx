"use client";

import TodoForm from "@/components/custom/Form";
import BaseLayout from "@/components/custom/BaseLayout";
import Todo from "@/components/custom/Todo";
import { useState } from "react";
import { TodoInterface } from "@/interface/todo.interface";
import Sort from "@/components/custom/Sort";
import { useTodos } from "@/hooks/todoLocalStorage";
import { toast } from "sonner";

export default function Home() {
  const [sort, setSort] = useState<{
    direction: "asc" | "desc";
    field: string;
  }>({
    direction: "asc",
    field: "name",
  });
  const { addTodo, toggleTodo, deleteTodo: deleteTodoLocalStorage, todos: allTodos } = useTodos();

  const handleAddTodo = async (newTodo: TodoInterface) => {
    try {
      addTodo(newTodo);
      toast.success("Todo added successfully", {
        duration: 1000,
        position: "top-center",
      });
    } catch (error) {
      console.error("Error adding todo:", error);
      toast.error("Error adding todo", {
        duration: 1000,
        position: "top-center",
      });
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      deleteTodoLocalStorage(id);
      toast.success("Todo deleted successfully", {
        duration: 1000,
        position: "top-center",
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error("Error deleting todo", {
        duration: 1000,
        position: "top-center",
      });
    }
  };

  const handleUpdateTodo = async (id: string) => {
    try {
      toggleTodo(id);
      toast.success("Todo updated successfully", {
        duration: 1000,
        position: "top-center",
      });
    } catch (error) {
      console.error("Error updating todo:", error);
      toast.error("Error updating todo", {
        duration: 1000,
        position: "top-center",
      });
    }
  };

  const handleSort = (direction: "asc" | "desc", field: string) => {
    setSort({ direction, field });
  };

  return (
    <BaseLayout>
      <div className="flex flex-col gap-4 items-center m-10">
        <h1 className="text-4xl font-bold text-left">Todo list app</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <div className="space-y-6 w-full max-w-2xl">
          <div className="flex gap-4">
            <Sort
              direction={sort.direction}
              label="name"
              field={sort.field}
              onSort={handleSort}
            />
            <Sort
              direction={sort.direction}
              label="priority"
              field={sort.field}
              onSort={handleSort}
            />
            <Sort
              direction={sort.direction}
              label="date"
              field={sort.field}
              onSort={handleSort}
            />
          </div>
          {allTodos.map((todo) => (
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
