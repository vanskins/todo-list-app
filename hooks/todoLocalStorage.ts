'use client';

import { useEffect, useState } from 'react';
import { todos } from '@/lib/db';
import { TodoInterface } from '@/interface/todo.interface';

export function useTodos() {
  const [allTodos, setAllTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const items = await todos.toArray();
      setAllTodos(items);
    };
    fetch();
  }, []);

  const addTodo = async (todo: TodoInterface) => {
    await todos.add(todo);
    setAllTodos(await todos.toArray());
  };

  const toggleTodo = async (id: string) => {
    const todo = await todos.get(id);
    if (todo) {
      await todos.update(id, { is_completed: !todo.is_completed });
      setAllTodos(await todos.toArray());
    }
  };

  const deleteTodo = async (id: string) => {
    console.log("deleteTodo", id);
    const deleted = await todos.delete(id);
    console.log("deleted", deleted);
    setAllTodos(await todos.toArray());
  };

  return {
    todos: allTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
