"use client";
import agent from "@/api/agent";
import { Country } from "@/models/Master/Country";
import { Make } from "@/models/Master/Make";
import Link from "next/link";
import React, { useState } from "react";
import ByMake from "./byMake";
import ByType from "./byType";

interface Props {
  locations: Country[];
  makes: Make[];
}
export default async function TabButtons({ makes, locations }: Props) {
  const [current, setCurrent] = useState("By Make");
  const [type, setType] = useState(false);

  const button = ["By Make", "By Type", "Quick Search"];
  const getCurrent = () => {
    switch (current) {
      case "By Make":
        return <ByMake makes={makes} />;

      case "By Type":
        return <ByType locations={locations} />;

      default:
        break;
    }
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {button.map((e, i) => {
          return (
            <button
              className={`w-full h-auto py-1 border ${current === e ? "bg-[#221C63] text-white" : "text-[#333333] bg-[#efefef] "} `}
              onClick={() => setCurrent(e)}
            >
              {e}
            </button>
          );
        })}
      </div>
      {getCurrent()}
    </div>
  );
}
