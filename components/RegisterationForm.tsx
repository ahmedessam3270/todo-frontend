"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { userFormValues, userSchema } from "@/validation";
import Link from "next/link";
import { registerAction } from "@/actions/auth.action";
import { useRouter } from 'next/navigation';
const RegisterationForm = () => {
  const router = useRouter();
  const defaultValues: Partial<userFormValues> = {
    email: "",
    password: "",
  };

  const onSubmit = async (data: userFormValues) => {
    console.log(data);
    // to wire the things up
    await registerAction(data);
    
    router.push('/login');
  };

  const form = useForm<userFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues,
    mode: "onChange",
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter you email..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter you password..." {...field} />
              </FormControl>
              <FormMessage />
              <div className="mt-1">
                <Link href="/login" className="hover:underline">
                  Have an account?
                </Link>
              </div>
            </FormItem>
          )}
        />

        <div className="flex items-center justify-center">
          <Button type="submit" size="lg">
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterationForm;
