"use client";
import { useUserStore } from "@/store/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

type Prop = {
  children: JSX.Element;
};

export default function CheckAdminLogin({ children }: Prop) {
  const { user } = useUserStore();

  useEffect(() => {
    console.log("out", user)
    if (!user.isAdmin) {
      console.log("in", user)
      redirect("/");
    }
  }, []);

  return <>{children}</>;
}
