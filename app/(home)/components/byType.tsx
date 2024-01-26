import { Country } from "@/models/Master/Country";
import Link from "next/link";
import React from "react";
type prop = {
  locations: Country[];
};
export default function ByType({ locations }: prop) {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {locations
        .sort((a, b) => b.stockCount - a.stockCount)
        .filter((location) => location.isInventoryLocation)
        .map((location) => (
          <li
            key={location.countryId}
            className="w-full  h-[60px] border mb-2 flex items-center justify-center bg-[#efefef]"
          >
            <Link
              href={{
                pathname: `/global/results/${location.slug}/cars`,
                query: {
                  countryID: location.countryId,
                },
              }}
            >
              <div className=" flex flex-col justify-center items-center rounded-md ">
                <div>
                  <img
                    src={"/assets/images/flags/" + location.slug + ".svg"}
                    className="w-[30px]"
                    alt={location.slug ?? ""}
                  />
                </div>
                <div className="text-[8px] text-center mt-1 font-semibold">
                  {location.countryName}
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}
