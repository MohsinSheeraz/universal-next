"use client";
import { useUserStore } from "@/store/store";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

type Prop = {
  children: JSX.Element;
};

export default function CheckIsLogin({ children }: Prop) {
  const { user, isUpdate } = useUserStore();
  const route = usePathname();
  useEffect(() => {
    if (user?.email && !isUpdate && route !== "/dashboard") {
      toast.info("Create Profile First");
      redirect("/dashboard");
    }
  }, [user, isUpdate]);
  useEffect(() => {
    if (!user.email) return redirect("/");
  }, []);

  // if (!user.email) {
  //     return null;
  // }
  return <>{children}</>;
}
