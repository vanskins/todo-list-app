import Dexie from 'dexie';
import { TodoInterface } from '@/interface/todo.interface';


// Create the database using object-style
export const db = new Dexie('TodoDatabase');

db.version(1).stores({
  todos: '++id, title, description, is_completed, priority, category',
});

export const todos = db.table<TodoInterface, string>('todos');
