"use server";

import { revalidatePath } from "next/cache";
import { createTodoAction } from "./todo.action";
import { TodoFormValues } from "@/validation";

export const createTodoAction2 = async ({
  title,
  description,
  category,
}: TodoFormValues) => {
  await createTodoAction({ title, description, category });
  revalidatePath("/");
};
