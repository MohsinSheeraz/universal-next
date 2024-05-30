"use client";
import { checkEmail } from "@/services/profile";
import { useUserStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[40px]  py-1 text-[12px]  ">
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
        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
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
        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
          <li className="list-none">+49 471 9731 9003</li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
          <li className="list-none">+81 50 5050 8550</li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
          <li className="list-none">info@universalmotorsltd.com</li>
        </Accordion.Content>

        <Accordion.Content className="h-[30px]  py-1 text-[12px]  ">
          <Link href={"/contact"} className="cursor-pointer">
            <li className="list-none text-blue-700 flex gap-1 underline"><svg fill="#1A56DB" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 217.762 217.762" xmlSpace="preserve">
              <path d="M108.881,5.334C48.844,5.334,0,45.339,0,94.512c0,28.976,16.84,55.715,45.332,72.454
	c-3.953,18.48-12.812,31.448-12.909,31.588l-9.685,13.873l16.798-2.153c1.935-0.249,47.001-6.222,79.122-26.942
	c26.378-1.92,50.877-11.597,69.181-27.364c19.296-16.623,29.923-38.448,29.923-61.455C217.762,45.339,168.918,5.334,108.881,5.334z
	 M115.762,168.489l-2.049,0.117l-1.704,1.145c-18.679,12.548-43.685,19.509-59.416,22.913c3.3-7.377,6.768-17.184,8.499-28.506
	l0.809-5.292l-4.741-2.485C30.761,142.547,15,119.42,15,94.512c0-40.901,42.115-74.178,93.881-74.178s93.881,33.276,93.881,74.178
	C202.762,133.194,164.547,165.688,115.762,168.489z"/>
            </svg> Lets Talk</li>
          </Link>

        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
