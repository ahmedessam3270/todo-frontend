import { TodoFormValues } from "@/validation";
import { revalidatePath } from "next/cache";
import axiosInstance from "./../app/lib/axios";
export const getTodoListAction = async () => {
  const data = await axiosInstance.get("/todo");
  return data;
};
export const createTodoAction = async ({
  title,
  description,
  category,
}: TodoFormValues) => {
  // to execute the controller function
  await axiosInstance.post("/todo", { title, description, category });
};
export const markTodoAsComplete = async (id: string) => {
  await axiosInstance.patch(`/todo/${id}`, { complete: true });
};
export const deleteTodoAction = async (id: string) => {
  await axiosInstance.delete(`/todo/${id}`);
};
