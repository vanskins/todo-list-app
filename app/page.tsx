import TodoForm from "@/components/custom/Form";
import BaseLayout from "@/components/custom/BaseLayout";
import Todo from "@/components/custom/Todo";

export default function Home() {
  return (
    <BaseLayout>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold text-left">Todo list app</h1>
        <TodoForm />
        <Todo title="Todo 1" description="Todo 1 description" />
        <Todo title="Todo 2" description="Todo 2 description" />
        <Todo title="Todo 3" description="Todo 3 description" />
      </div>
    </BaseLayout>
  );
}
