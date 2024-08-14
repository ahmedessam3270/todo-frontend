"use server";

import { IUser } from "@/interfaces";
import { redirect } from "next/navigation";

export const loginAction = async (inputData: IUser) => {
  console.log("login action inputData", inputData);
  try {
    const response = await fetch(`${process.env.BACK_SERVER}/auth/login`, {
      method: "POST",
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to login.");
    }

    const data = await response.json();
    // Handle successful login, e.g., updating user context or state
    if (response.ok) redirect("/");
    return data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

// services/auth.js

export const registerAction = async ({ email, password }: IUser) => {
  console.log("register action inputData", { email, password });
  try {
    const response = await fetch(`${process.env.BACK_SERVER}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // userData should include necessary fields like name, email, password, etc.
    });
    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register.");
    }

    const data = await response.json();
    // Handle successful registration, e.g., redirecting to login page
    if (response.ok) redirect("/login");
    return data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};
