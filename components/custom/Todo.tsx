"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { LucideCheck, Circle, Trash2, Pencil } from "lucide-react";
import { TodoFunctionInterface } from "@/interface/todo.interface";

const Todo = ({
  id,
  title,
  description,
  is_completed,
  priority,
  category,
  onDeleteTodo,
  onUpdateTodo,
}: TodoFunctionInterface) => {
  const [isCompleted, setIsCompleted] = useState(is_completed);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <Card
      className={`
      w-full max-w-full
      rounded-none
      transition-all duration-200 hover:shadow-md
      border-l-4 ${getPriorityColor(priority)}
      ${isCompleted ? "opacity-75 bg-muted/50" : ""}
    `}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle
              className={`
              text-base sm:text-lg lg:text-xl
              ${isCompleted ? "line-through text-muted-foreground" : ""}
              break-words
            `}
            >
              {title}
            </CardTitle>
            {description && (
              <CardDescription
                className={`
                mt-1 text-sm sm:text-base
                ${isCompleted ? "line-through" : ""}
                break-words
              `}
              >
                {description}
              </CardDescription>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className={`
              text-xs px-2 py-1 rounded-full font-medium
              ${priority === "high" ? "bg-red-100 text-red-800" : ""}
              ${priority === "medium" ? "bg-yellow-100 text-yellow-800" : ""}
              ${priority === "low" ? "bg-green-100 text-green-800" : ""}`}
            >
              {priority}
            </span>
            <span
              className={`
              text-xs px-2 py-1 rounded-full font-medium
              ${category === "personal" ? "bg-blue-100 text-blue-800" : ""}
              ${category === "work" ? "bg-green-100 text-green-800" : ""}
              ${category === "study" ? "bg-yellow-100 text-yellow-800" : ""}
              ${category === "health" ? "bg-red-100 text-red-800" : ""}
              ${category === "finance" ? "bg-purple-100 text-purple-800" : ""}
              ${category === "other" ? "bg-gray-100 text-gray-800" : ""}`}
            >
              {category}
            </span>
            <button className="w-5 h-5 cursor-pointer" onClick={() => onDeleteTodo(id)}>
              <Trash2 className="w-full h-full text-gray-500 hover:text-red-500 transition-colors duration-200" />
            </button>
            <button className="w-5 h-5 cursor-pointer" onClick={() => onUpdateTodo(id, {
              id,
              title,
              description,
              is_completed,
              priority,
              category,
            })}>
              <Pencil className="w-full h-full text-gray-500 hover:text-blue-500 transition-colors duration-200" />
            </button>
            <button
              className={`
              w-5 h-5 rounded-full border-2 flex-shrink-0 cursor-pointer
              ${
                isCompleted
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300"
              }
            `}
              onClick={() => setIsCompleted(!isCompleted)}
            >
              {isCompleted && (
                <LucideCheck className="w-full h-full text-white" />
              )}
              {!isCompleted && <Circle className="w-full h-full text-white" />}
            </button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Todo;
