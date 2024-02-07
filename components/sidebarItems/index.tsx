"use client";
import { useUserStore } from "@/store/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SidebarItems() {
  const { deleteData, isUpdate, user } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className=" col-lg-2 bg-[#221C63] hidden lg:flex flex-none flex-col justify-between p-6 text-white border-y-[1px] border-[#ffff14]">
      <nav className="space-y-2">
        <Link
          className={`block px-6 py-2 hover:/dashboard transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14] ${
            pathname === "/dashboard" ||
            pathname.includes("/reserve") ||
            pathname.includes("/purchase") ||
            pathname.includes("cosignee") ||
            pathname.includes("courier")
              ? "bg-[#006aff]"
              : "hover:bg-[#006aff]"
          }`}
          href={"/dashboard"}
        >
          Account Information
        </Link>
        <Link
          className={`block px-6 py-2 hover:/dashboard transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14] ${
            pathname === "/favorite" ? "bg-[#006aff]" : "hover:bg-[#006aff]"
          }`}
          onClick={() => {
            if (user?.email && !isUpdate) {
              toast.info("Create Profile First");
            }
          }}
          href={!isUpdate ? "" : "/favorite"}
        >
          My Favorite
        </Link>
        {/* 
        <Link
          onClick={() => {
            if (user?.email && !isUpdate) {
              toast.info("Create Profile First")
            }
          }}
          className={`block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14] ${pathname === "/contact-information"
            ? "bg-[#006aff]"
            : "hover:bg-[#006aff]"
            }`}
          href={user?.email && !isUpdate ? "" : "/contact-information"}
        >
          Contact Information
        </Link> */}

        {/* <Link
          onClick={() => {
            if (user?.email && !isUpdate) {
              toast.info("Create Profile First")
            }
          }}
          className={`block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14] ${pathname === "/connect-accounts"
            ? "bg-[#006aff]"
            : "hover:bg-[#006aff]"
            }`}
          href={user?.email && !isUpdate ? "" : "/connect-accounts"}
        >
          Connect Accounts
        </Link> */}

        <Link
          onClick={() => {
            if (user?.email && !isUpdate) {
              toast.info("Create Profile First");
            }
          }}
          className={`block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14] ${
            pathname === "/payment-history"
              ? "bg-[#006aff]"
              : "hover:bg-[#006aff]"
          }`}
          href={user?.email && !isUpdate ? "" : "/payment-history"}
        >
          Payment History
        </Link>

        <Link
          onClick={() => {
            if (user?.email && !isUpdate) {
              toast.info("Create Profile First");
            }
          }}
          className={`block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14]  ${
            pathname === "/account-activity"
              ? "bg-[#006aff]"
              : "hover:bg-[#006aff]"
          }`}
          href={user?.email && !isUpdate ? "" : "/account-activity"}
        >
          Account Activity
        </Link>
      </nav>
      {/* <div className="w-full h-12 px-[46px] py-2 bg-[#474747] bg-opacity-20 rounded-lg justify-start items-center gap-3 inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <div className="w-5 h-5 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </div>
        </div>

        <div
          onClick={() => {
            router.push("/");
            googleLogout();
            deleteData();
          }}
          className="w-full h-6 text-white text-lg font-medium leading-normal cursor-pointer"
        >
          Logout
        </div>
      </div> */}
    </div>
  );
}
