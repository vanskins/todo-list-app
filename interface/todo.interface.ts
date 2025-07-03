export type Priority = "low" | "medium" | "high";
export type Category = "personal" | "work" | "study" | "health" | "finance" | "other";

export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  category: Category;
}

export interface TodoFunctionInterface extends TodoInterface {
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, updatedTodo: TodoInterface) => void;
}