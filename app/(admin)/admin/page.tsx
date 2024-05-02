"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";


export default async function Dashboard() {
  //const session = await getServerSession(options)
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
