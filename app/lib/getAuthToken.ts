import { cookies } from "next/headers";

// Function to get the auth token from cookies
export const getAuthToken = () => {
  return cookies().get("Authentication")?.value || "";
};


