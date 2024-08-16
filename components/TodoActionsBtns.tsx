"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { CopyX, Pen, SquareCheckBig, Trash } from "lucide-react";
import { deleteTodoAction, markTodoAsComplete } from "@/actions/todo.action";
import SpinnerMini from "./SpinnerMini";

const TodoActionsBtns = ({ id }: { id: string }) => {
  const [isLoadingDeleting, setIsloadingDeleting] = useState(false);
  const [isLoadingCompleting, setIsloadingCompleting] = useState(false);

  return (
    <>
      <Button
        size="icon"
        onClick={async () => {
          setIsloadingCompleting(true);
          await markTodoAsComplete(id);
          setIsloadingCompleting(false);
        }}
      >
        {isLoadingCompleting ? <SpinnerMini /> : <SquareCheckBig size={16} />}
      </Button>
      <Button
        size="icon"
        variant="destructive"
        onClick={async () => {
          setIsloadingDeleting(true);
          await deleteTodoAction(id);
          setIsloadingDeleting(false);
        }}
      >
        {isLoadingDeleting ? <SpinnerMini /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoActionsBtns;
