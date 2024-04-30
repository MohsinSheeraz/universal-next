"use client";
import { useAdminStore } from "@/store/store";
import SignInForm from "../user/Auth/SignInForm";

type Prop = {
  children: JSX.Element;
};

export default function CheckAdminLogin({ children }: Prop) {
  const { isLogin } = useAdminStore();
  // const route = usePathname();
  // useEffect(() => {
  //   if (user?.email && !isUpdate && route !== "/dashboard") {
  //     toast.info("Create Profile First");
  //     redirect("/dashboard");
  //   }
  // }, [user, isUpdate]);
  // useEffect(() => {
  //   if (!isLogin) return redirect("/");
  // }, []);

  // if (!user.email) {
  //     return null;
  // }
  if (!isLogin) {
    return <SignInForm />
  }
  return <>{children}</>;
}
