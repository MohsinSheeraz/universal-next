'use client'
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {useStore} from "@/store/store";


export  default async function Page() {
    //const session = await getServerSession(options)
    const {userStore} = useStore();
    return (
        <>
            {
                userStore.isLoggedIn ? ("Test") : (
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen m-auto flex items-center justify-center">
                        <h1>You shall not Pass</h1>
                        {/*<SignUpForm setSignIn={} countries={[]} ports={[]} portMapping={[]}/>*/}
                    </div>
                )
            }

        </>
    )
}