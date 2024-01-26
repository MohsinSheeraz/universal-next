"use client";
import agent from "@/api/agent";
import { Country } from "@/models/Master/Country";
import { Make } from "@/models/Master/Make";
import Link from "next/link";
import React, { useState } from "react";
import ByMake from "./byMake";
import ByType from "./byType";
import BySearch from "./bySearch";
import { GetBodyTypes } from "@/app/global/results/[pid]/cars/list/[id]/components/loadData";
import { BodyType } from "@/models/Master/BodyType";
import Accordion from "./accordion";
import CustomComponent from "./accordion";

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

  const button = ["By Make", "By Type", "Quick Search"];
  const getCurrent = () => {
    switch (current) {
      case "By Make":
        return <ByMake makes={makes} />;

      case "By Type":
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
