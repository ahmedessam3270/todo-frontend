"use client";

import { logoutAction } from "@/actions/auth.action";
import { Button } from "./ui/button";
import { DoorClosed, LogOut } from "lucide-react";

export default function Logout() {
  return (
    <Button>
      <LogOut size={14} onClick={logoutAction} />
    </Button>
  );
}
