import { useState } from "react";
import { Button } from "./ui/button";
import { CopyX, Pen, SquareCheckBig, Trash } from "lucide-react";
import { deleteTodoAction, markTodoAsComplete } from "@/actions/todo.action";
import SpinnerMini from "./SpinnerMini";
import { revalidatePath } from "next/cache";

const TodoActionsBtns = async ({ id }: { id: string }) => {
  const todoCompleted = async () => {
    "use server";
    await markTodoAsComplete(id);
    revalidatePath("/");
  };

  const deleteTodo = async () => {
    "use server";
    await deleteTodoAction(id);
    revalidatePath("/");
  };
  return (
    <>
      <form action={todoCompleted}>
        <Button size="icon">
          <SquareCheckBig size={16} />
        </Button>
      </form>
      <form action={deleteTodo}>
        <Button size="icon" variant="destructive">
          <Trash size={16} />
        </Button>
      </form>
    </>
  );
};

export default TodoActionsBtns;
