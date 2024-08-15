"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoAction, markTodoAsComplete } from "@/actions/todo.action";
import SpinnerMini from "./SpinnerMini";

const TodoActionsBtns = ({ id }: { id: string }) => {
  const [isLoading, setIsloading] = useState(false);
  return (
    <>
      <Button
        size="icon"
        onClick={async () => {
          setIsloading(true);
          await markTodoAsComplete(id);
          setIsloading(false);
        }}
      >
        <Pen size={16} />
      </Button>
      <Button
        size="icon"
        variant="destructive"
        onClick={async () => {
          setIsloading(true);
          await deleteTodoAction(id);
          setIsloading(false);
        }}
      >
        {isLoading ? <SpinnerMini /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoActionsBtns;
