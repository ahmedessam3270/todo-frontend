"use server";

import { IUser } from "@/interfaces";
import { login, register } from "@/lib/auth.lib";
// import { redirect } from "next/navigation";

export async function loginAction(data: IUser) {
  await login(data);
}
export async function registerAction(data: IUser) {
  await register(data);
  // redirect("/login");
}
