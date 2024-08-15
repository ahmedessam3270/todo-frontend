import AddTodoForm from "@/components/AddTodoForm";
import Logout from "@/components/logout";
import TodoTable from "@/components/TodoTable";

export default function Home() {
  return (
    <>
      <div className="flex justify-end mr-3">
        <Logout />
      </div>
      <main className="container">
        <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4">
          <AddTodoForm />
          <TodoTable />
        </div>
      </main>
    </>
  );
}
