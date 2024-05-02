"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Dashboard() {
  //const sessio = await getServerSession(options)
  // const { userStore } = useStore();
  // console.log(userStore.isLoggedIn);
  useEffect(() => {

    redirect("/admin/customers");

  }, []);
  return (
    <>

      {/* <Forms /> */}
    </>
  );
}
