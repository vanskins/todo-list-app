export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  category: "personal" | "work" | "study" | "health" | "finance" | "other";
}