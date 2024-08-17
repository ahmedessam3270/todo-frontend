import { z } from "zod";

// todo schema
export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "title must be at least 5 characters.",
    })
    .max(30, {
      message: "title must not be longer than 30 characters.",
    }),
  category: z
    .string()
    .min(5, {
      message: "title must be at least 5 characters.",
    })
    .max(30, {
      message: "title must not be longer than 30 characters.",
    }),
  description: z
    .string()
    .max(100, {
      message: "description must not be longer than 100 characters.",
    })
    .optional(),
});
export type TodoFormValues = z.infer<typeof todoFormSchema>;

// todo schema
export const userSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(8, {
      message: "password must be at least 8 characters.",
    })
    .max(50, {
      message: "title must not be longer than 50 characters.",
    }),
});
export type userFormValues = z.infer<typeof userSchema>;
