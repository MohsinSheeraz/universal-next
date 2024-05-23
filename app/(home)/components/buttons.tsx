"use client";
import { BodyType } from "@/models/Master/BodyType";
import { Colors } from "@/models/Master/Colors";
import { Country } from "@/models/Master/Country";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { VehicleCategory } from "@/models/Master/VehicleCategory";
import { useUserStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomComponent from "./accordion";
import ByMake from "./byMake";
import BySearch from "./bySearch";
import ByType from "./byType";
interface Props {
  locations: Country[];
  bodyTlist: BodyType[];
  makeList: Make[];
  color: Colors[];
  transmission: Transmission[];
  drivetrain: DrivetrainType[];
  fuel: FuelType[];
  vehicleCategory: VehicleCategory[];
}
export default function TabButtons({
  makeList,
  bodyTlist,
  color,
  transmission,
  drivetrain,
  fuel,
  locations,
  vehicleCategory,
}: Props) {
  const [current, setCurrent] = useState("By Make");
  const [type, setType] = useState(false);

  const currentYear = new Date().getFullYear();
  const fromYear = 1970;
  const yearList = Array.from({ length: currentYear - fromYear }, (_, index) =>
    (fromYear + index).toString()
  );

  const button = ["By Make", "By Inventory Location", "Quick Search"];
  const getCurrent = () => {
    switch (current) {
      case "By Make":
        return <ByMake makes={makeList} />;

      case "By Inventory Location":
        return <ByType locations={locations} />;

      case "Quick Search":
        return (
          <BySearch
            vehicleCategory={vehicleCategory}
            drivetrain={drivetrain}
            color={color}
            transmission={transmission}
            fuel={fuel}
            makeList={makeList}
            bodyTlist={bodyTlist}
            yearList={yearList}
          />
        );
      default:
        break;
    }
  };
  const { isSignedIn } = useUser();
  const router = useRouter();
  const { user, isUpdate } = useUserStore();
  const checkUser = () => {
    if (user?.email && !isUpdate) {
      return toast.info("Create Profile First");
    }
  };
  return (
    <>
      {!isSignedIn && (
        <button
          className="bg-[#221C63] w-full h-[45px] text-white text-[15px] rounded-lg"
          onClick={() => {
            router.push("/sign-up");
          }}
        >
          Free <span className="text-[24px]">Signup </span> for Membership
        </button>
      )}
      <div className="mt-2">
        <Link
          onClick={checkUser}
          href={
            user?.email && !isUpdate
              ? ""
              : "/global/information?page=bank-information"
          }
        >
          <button
            className="bg-[#221C63] w-full h-[45px] text-white text-[20px] rounded-lg"
            onClick={() => {
              router.push("");
            }}
          >
            Bank Information
          </button>
        </Link>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-2 mb-2 mt-4">
          {button.map((e, i) => {
            return (
              <button
                key={i}
                className={`w-full h-auto py-1 border text-[12px] ${current === e ? "bg-[#221C63] text-white" : "text-[#333333] bg-[#efefef] "} `}
                onClick={() => setCurrent(e)}
              >
                {e}
              </button>
            );
          })}
        </div>
        {getCurrent()}
        <CustomComponent />
      </div>
    </>
  );
}
