"use client";
import { useUserStore } from "@/store/store";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

type Prop = {
  children: JSX.Element;
};

export default function CheckAdminLogin({ children }: Prop) {
  const { user, isUpdate } = useUserStore();
  const route = usePathname();
  // useEffect(() => {
  //   if (user?.email && !isUpdate && route !== "/dashboard") {
  //     toast.info("Create Profile First");
  //     redirect("/dashboard");
  //   }
  // }, [user, isUpdate]);
  useEffect(() => {
    if (!user.isAdmin) {
      redirect("/");
    }
  }, [user]);

  // if (!user.email) {
  //     return null;
  // }
  return <>{children}</>;
}
