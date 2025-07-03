import TodoForm from "@/components/custom/Form";
import BaseLayout from "@/components/custom/BaseLayout";
import Todo from "@/components/custom/Todo";

export default function Home() {
  const todos = [
    {
      title: "Todo 1",
      description: "Todo 1 description",
      completed: false,
      priority: "high",
      category: "personal",
    },
    {
      title: "Todo 2",
      description: "Todo 2 description",
      completed: false,
      priority: "medium",
      category: "work",
    },
    {
      title: "Todo 3",
      description: "Todo 3 description",
      completed: true,
      priority: "low",
      category: "study",
    },
    {
      title: "Todo 4",
      description: "Todo 4 description",
      completed: false,
      priority: "high",
      category: "health",
    },
    {
      title: "Todo 5",
      description: "Todo 5 description",
      completed: false,
      priority: "medium",
      category: "finance",
    },
  ];

  return (
    <BaseLayout>
      <div className="flex flex-col gap-4 items-center m-10">
        <h1 className="text-4xl font-bold text-left">Todo list app</h1>
        <TodoForm />
        <div className="space-y-6 w-full max-w-2xl">
          {todos.map((todo) => (
            <Todo
              key={todo.title}
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
              priority={todo.priority as "low" | "medium" | "high"}
              category={todo.category as "personal" | "work" | "study" | "health" | "finance" | "other"}
            />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
