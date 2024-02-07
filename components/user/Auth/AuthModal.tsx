"use client";
import { Country } from "@/models/Master/Country";
import { Ports } from "@/models/Master/Ports";
import { useUserStore } from "@/store/store";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
// import { signOut, useSession } from "next-auth/react";
// import jwt_decode from "jwt-decode";
// const jwt_decode = require('jwt-decode');
interface Props {
  countryList: Country[];
  portList: Ports[];
  portMapping: any;
}

export default function AuthModal({
  countryList,
  portList,
  portMapping,
}: Props) {
  // Check if user is authenticated

  const { isSignedIn } = useUser();
  const { user } = useUserStore();
  const router = useRouter();
  // const { deleteData } = useUserStore();
  // const { user, update: updateData, deleteData, setIsUpdate } = useUserStore();
  const [dropdown, setDropdown] = useState(false);
  // let [isOpen, setIsOpen] = useState(false);
  // let [isSignIn, setIsSignIn] = useState(true);
  //
  // function closeModal() {
  //   setIsOpen(false);
  //   setIsSignIn(true);
  // }
  //
  // function openModal() {
  //   setIsOpen(true);
  // }
  //
  // const handleSignUp = () => {
  //   setIsSignIn(false);
  // };
  // const checkEmail = async (email: string, img: string, name: string) => {
  //   try {
  //     updateData({ ...initialUserData, email: email, name: name, img: img });
  //     let res = await axios({
  //       method: "get",
  //       url: `https://api20230805195433.azurewebsites.net/api/customers/Exists/${email}`,
  //       // data: reqBody
  //     });
  //     if (res && res.data) {
  //       // setUpdate(true);
  //       setIsUpdate(true);
  //       try {
  //         let res = await axios({
  //           method: "get",
  //           url: `https://api20230805195433.azurewebsites.net/api/customers/ByEmail/${email}/`,
  //           // data: reqBody
  //         });
  //         updateData({ ...res.data, img: img });
  //       } catch (error: any) {
  //         if (
  //           error &&
  //           error.message === "Request failed with status code 404"
  //         ) {
  //           console.log(error.message);
  //         } // this is the main part. Use the response property from the error object
  //         // return error.response;
  //       }
  //     }
  //     router.push("/dashboard");
  //   } catch (error: any) {
  //     if (error && error.message === "Request failed with status code 404") {
  //       console.log(error.message);
  //       updateData({ ...initialUserData, email: email, name: name });
  //       setIsUpdate(false);
  //     } // this is the main part. Use the response property from the error object

  //     // return error.response;
  //   }
  // };

  // const responseGoogle = (response: any) => {
  //   const userObject: any = jwtDecode(response.credential);
  //   console.log(response);
  //   checkEmail(
  //     userObject.email,
  //     userObject?.picture,
  //     userObject?.name,
  //     setIsUpdate,
  //     updateData,
  //     router
  //   );
  // };
  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse: any) => {
  //     await axios
  //       .get("https://www.googleapis.com/oauth2/v3/userinfo", {
  //         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //       })
  //       .then((res) => {
  //         checkEmail(
  //           res.data.email,
  //           res.data?.picture,
  //           res.data?.name,
  //           setIsUpdate,
  //           updateData,
  //           router
  //         );
  //       });

  //     // const userObject: any = await jwtDecode(tokenResponse.access_token
  //     // );
  //     // console.log(userObject)
  //   },
  // });

  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="registerbox">
          <h2>
            {/* { user.email && (
              <div className="flex items-center ">
                <div className="relative mt-2">
                  <button
                    onClick={() => {
                      setDropdown(!dropdown);
                    }}
                    id="dropdownAvatarNameButton"
                    data-dropdown-toggle="dropdownAvatarName"
                    className="flex items-center text-sm font-medium text-white rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0  dark:text-white"
                    type="button"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 mr-2 rounded-full"
                      src={user.img}
                      alt="user photo"
                    />
                    {user?.name}
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdownAvatarName"
                    className={`${!dropdown && "hidden"
                      } z-50 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <div className="px-1 py-3 text-sm text-gray-900 dark:text-white">
                      <div className="font-medium ">{user?.name}</div>
                      <div className="truncate text-[10px]">{user?.email}</div>
                    </div>

                    <div className="py-2">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </div>
                    <div className="py-2">
                      <Link
                        href="/favorite"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Favourites
                      </Link>
                    </div>

                    <div className="py-2 cursor-pointer">
                      <p
                        // onClick={() => {
                        //   redirect("/") googleLogout()
                        //   deleteData()

                        // }}
                        onClick={() => {
                          router.push("/");
                          googleLogout();
                          deleteData();
                        }}
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </h2>
          <div className="currencydropdown">
            {!isSignedIn && (
              <button className="text-[10px] 2xl:text-sm px:1 py-1 2xl:px-4 2xl:py-2 border flex justify-center items-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-200 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-400 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <span
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                >
                  Login / SignUp
                </span>
              </button>
            )}
            <div className="flex gap-2 items-center mt-2">
              <UserButton afterSignOutUrl="/" />
              {isSignedIn && (
                <div
                  className="text-white border-2 border-white rounded-lg font-semibold text-[11px] p-2 cursor-pointer"
                  onClick={() => {
                    if (!isSignedIn) return toast.info("Create Profile First");
                    router.push("/dashboard");
                  }}
                >
                  Dashboard
                </div>
              )}
            </div>

            {/* {!user?.email && (
              // <GoogleLogin
              //   // auto_select
              //   useOneTap
              //   onSuccess={responseGoogle}
              //   // onFailure={responseGoogle}
              //   // cookiePolicy="single_host_origin"
              // />
              <button className="text-[10px] 2xl:text-sm px:1 py-1 2xl:px-4 2xl:py-2 border flex justify-center items-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-200 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-400 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span
                  onClick={() => {
                    login();
                  }}
                >
                  Login with Google
                </span>
              </button>
            )} */}
            {/* {
              status === "unauthenticated" && (
                <button
                  onClick={() => signIn("google")}
                  className="text-sm px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-200 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-400 dark:hover:text-slate-300 hover:shadow transition duration-150"
                >
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span>Login with Google</span>
                </button>
              )
              //  <button
              //   type="button"
              //   onClick={() => signIn("google")}
              //   className="rounded-md bg-blue-300 bg-opacity-100 px-4 py-2 text-sm font-medium hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-opacity-75"
              // >

              //   <div> Hello, Sign in<br />My Account</div>

              // </button>
            // } */}
          </div>
        </div>
      </div>

      {/*<Transition appear show={isOpen} as={Fragment}>*/}
      {/*  <Dialog as="div" className="relative z-10" onClose={closeModal}>*/}
      {/*    <Transition.Child*/}
      {/*      as={Fragment}*/}
      {/*      enter="ease-out duration-300"*/}
      {/*      enterFrom="opacity-0"*/}
      {/*      enterTo="opacity-100"*/}
      {/*      leave="ease-in duration-200"*/}
      {/*      leaveFrom="opacity-100"*/}
      {/*      leaveTo="opacity-0"*/}
      {/*    >*/}
      {/*      <div className="fixed inset-0 bg-black bg-opacity-25" />*/}
      {/*    </Transition.Child>*/}

      {/*    <div className="fixed inset-0 overflow-y-auto">*/}
      {/*      <div className="flex min-h-full items-center justify-center p-4 text-center">*/}
      {/*        <Transition.Child*/}
      {/*          as={Fragment}*/}
      {/*          enter="ease-out duration-300"*/}
      {/*          enterFrom="opacity-0 scale-95"*/}
      {/*          enterTo="opacity-100 scale-100"*/}
      {/*          leave="ease-in duration-200"*/}
      {/*          leaveFrom="opacity-100 scale-100"*/}
      {/*          leaveTo="opacity-0 scale-95"*/}
      {/*        >*/}
      {/*          <Dialog.Panel className="w-full max-w-md  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">*/}
      {/*            <Dialog.Title*/}
      {/*              as="h3"*/}
      {/*              className="text-lg text-center uppercase font-medium leading-6 text-gray-900 p-2"*/}
      {/*            >*/}
      {/*              {isSignIn ? "Sign In" : "Sign Up"}*/}
      {/*            </Dialog.Title>*/}
      {/*            {isSignIn ? (*/}
      {/*              <p signin={true} setSignIn={setIsSignIn} />*/}
      {/*            ) : (*/}
      {/*              <SignUpForm*/}
      {/*                setSignIn={setIsSignIn}*/}
      {/*                countries={countryList}*/}
      {/*                ports={portList}*/}
      {/*                portMapping={portMapping}*/}
      {/*              />*/}
      {/*            )}*/}
      {/*          </Dialog.Panel>*/}
      {/*        </Transition.Child>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Dialog>*/}
      {/*</Transition>*/}
    </>
  );
}
