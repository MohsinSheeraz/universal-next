"use client";
import { BodyType } from "@/models/Master/BodyType";
import { Country } from "@/models/Master/Country";
import { Make } from "@/models/Master/Make";
import { useState } from "react";
import CustomComponent from "./accordion";
import ByMake from "./byMake";
import BySearch from "./bySearch";
import ByType from "./byType";

interface Props {
  locations: Country[];
  makes: Make[];
  bodyTypes: BodyType[];
}
export default function TabButtons({ makes, locations, bodyTypes }: Props) {
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
        return <ByMake makes={makes} />;

      case "By Inventory Location":
        return <ByType locations={locations} />;

      case "Quick Search":
        return (
          <BySearch bodyTypes={bodyTypes} makes={makes} yearList={yearList} />
        );
      default:
        break;
    }
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mb-2 ">
        {button.map((e, i) => {
          return (
            <button
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
  );
}
