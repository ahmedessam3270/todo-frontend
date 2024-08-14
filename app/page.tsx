import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";

export default function Home() {
  const dummyTodos = [
    {
      id: "1",
      title: "Create a new project",
      description: "Create a new project using the latest version of Next.js",
      complete: true,
      category: "work",
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Create a new project",
      description: "Create a new project using the latest version of Next.js",
      complete: false,
      category: "work",
      createdAt: new Date(),
    },
    {
      id: "3",
      title: "Create a new project",
      description: "Create a new project using the latest version of Next.js",
      complete: true,
      category: "work",
      createdAt: new Date(),
    },
  ];

  return (
    <main className="container">
      <AddTodoForm />
      <TodoTable todos={dummyTodos} />
    </main>
  );
}
