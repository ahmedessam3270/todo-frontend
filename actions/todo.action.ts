"use server";

import { TodoFormValues } from "@/validation";
import { revalidatePath } from "next/cache";

export const getTodoListAction = async () => {
  const res = await fetch("http://localhost:8000/todo");
  const data = await res.json();
  revalidatePath("/");
  console.log(data);
};
export const createTodoAction = async ({
  title,
  description,
  complete,
}: TodoFormValues) => {
  // to execute the controller function
  console.log(title, description, complete);
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async (id: string) => {
  console.log(id);
  revalidatePath("/");
};
