import { IUser } from "@/interfaces";

export const loginAction = async (inputData: IUser) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_SERVER}/auth/login`,
      {
        method: "POST",
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to login.");
    }

    // Handle successful login, e.g., updating user context or state
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

// services/auth.js

export const registerAction = async ({ email, password }: IUser) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_SERVER}/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // userData should include necessary fields like name, email, password, etc.
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register.");
    }

    const data = await response.json();
    // Handle successful registration, e.g., redirecting to login page

    return data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};
