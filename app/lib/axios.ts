import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BACK_SERVER;
const isServer = typeof window === "undefined";
import Cookies from "js-cookie";
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  let token: string | undefined;
  // const token = Cookies.get('Authentication');
  if (isServer) {
    const { cookies } = await import("next/headers");
    token = cookies().get("Authentication")?.value || "";
  } else {
    const sessionCookie = Cookies.get("Authentication");
    if (sessionCookie) {
      token = sessionCookie;
    }
  }

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
