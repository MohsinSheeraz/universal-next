"use client";
import { checkEmail } from "@/services/profile";
import { useUserStore } from "@/store/store";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function CustomComponent() {
  const router = useRouter();
  const {
    deleteData,
    user,
    setIsUpdate,
    update: updateData,
    isUpdate,
  } = useUserStore();
  const { user: clerkUser, isSignedIn } = useUser();
  useEffect(() => {
    if (
      !user?.email &&
      clerkUser &&
      clerkUser?.primaryEmailAddress?.emailAddress
    ) {
      // customFunction();
      checkEmail(
        clerkUser?.primaryEmailAddress?.emailAddress,
        clerkUser?.imageUrl,
        clerkUser?.fullName ?? "",
        setIsUpdate,
        updateData,
        router
      );
    }
  }, [clerkUser]);
  useEffect(() => {
    if (!isSignedIn) {
      deleteData();
    }
  }, [isSignedIn]);
  const checkUser = () => {
    if (user?.email && !isUpdate) {
      return toast.info("Create Profile First");
    }
  };
  return (
    <Accordion collapseAll className="mb-3">
      <Accordion.Panel className="list-none">
        <Accordion.Title className="h-[4px]  py-4 text-[12px] text-[#393939] bg-[#edebeb]">
          About Universal Motors
        </Accordion.Title>
        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/about-universal-motors?page=company-profile"
              }
            >
              Company Profile
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/about-universal-motors?page=global-offices"
              }
            >
              Global Offices
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/about-universal-motors?page=terms-of-service"
              }
            >
              Terms Of Services
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/about-universal-motors?page=privacy-policy"
              }
            >
              Privacy Policy
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/about-universal-motors?page=security-export-control"
              }
            >
              Secutiy Export Control
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[40px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/about-universal-motors?page=policy-against-anti-social"
              }
            >
              Basic Policy Against Anti-Social Forces
            </Link>
          </li>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="mt-2">
        <Accordion.Title className="h-[4px]  py-4 text-[12px] text-[#393939] bg-[#edebeb]">
          Need Help
        </Accordion.Title>
        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/information?page=why-choose-universal-motors"
              }
            >
              Why Choose UM?
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/information?page=how-to-buy"
              }
            >
              How To Buy
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/information?page=how-to-pay"
              }
            >
              How to Pay?
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate ? "" : "/global/information?page=faqs"
              }
            >
              FAQs
            </Link>
          </li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">
            <Link
              onClick={checkUser}
              href={
                user?.email && !isUpdate
                  ? ""
                  : "/global/information?page=export-information"
              }
            >
              Exports Information
            </Link>
          </li>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="">
        <Accordion.Title className="h-[4px]  py-4 text-[12px] text-[#393939] bg-[#edebeb]">
          Contact Us
        </Accordion.Title>
        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">+49 471 9731 9003</li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">+81 50 5050 8550</li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px] bg-black text-white ">
          <li className="list-none">info@universalmotorsltd.com</li>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
