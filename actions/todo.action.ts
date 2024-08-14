"use server";

export const getTodoListAction = async () => {};
export const createTodoAction = async ({
  title,
  body,
}: {
  title: string;
  body?: string | undefined;
}) => {
  // to execute the controller function
  console.log(title, body);
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
