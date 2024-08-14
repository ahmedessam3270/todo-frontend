"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  todoFormSchema,
  TodoFormValues,
  userFormValues,
  userSchema,
} from "@/validation";
import { createTodoAction } from "@/actions/todo.action";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { loginAction } from "@/actions/auth.action";
import { IUser } from "@/interfaces";
import LoginForm from "@/components/LoginForm";

const Page = () => {
  return (
    <section className="container max-w-3xl ">
      <h1 className="text-2xl font-semibold flex items-center justify-center mb-6">
        Sign In
      </h1>
      <LoginForm />
    </section>
  );
};

export default Page;
