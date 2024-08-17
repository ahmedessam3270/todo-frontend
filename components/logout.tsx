import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Logout() {
  async function handleLogout() {
    "use server";
    // Get the cookies object
    const cookieStore = cookies();

    // To remove all cookies, you'd need to do this for each cookie
    cookieStore.set("Authentication", "");
    cookieStore.set("Refresh", "");
    redirect("/login");
  }
  return (
    <form action={handleLogout}>
      <Button>
        <LogOut size={14} />
      </Button>
    </form>
  );
}
