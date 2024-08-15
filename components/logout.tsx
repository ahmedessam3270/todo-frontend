"use client";

import { logoutAction } from "@/actions/auth.action";
import { Button } from "./ui/button";
import { DoorClosed } from "lucide-react";

export default function Logout() {
  return (
    <Button>
      <DoorClosed size={14} className="mr-1" onClick={logoutAction} />
    </Button>
  );
}
