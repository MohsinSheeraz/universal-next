import { Make } from "@/models/Master/Make";
import Link from "next/link";
import React from "react";

type prop = {
  makes: Make[];
};
export default function ByMake({ makes }: prop) {
  return (
    <div>
      <ul className=" grid grid-cols-4 gap-2 mb-2">
        {makes
          .filter((x) => x.vehicleTypeId == 1)
          .sort((a, b) => b.stockCount - a.stockCount)
          .slice(0, 24) // Get the first 10 records
          .map((make) => (
            <li
              key={make.makeId}
              className="w-full h-[66px] flex  flex-col justify-center items-center border bg-[#efefef]"
            >
              <Link
                href={{
                  pathname: `/global/results/${make.slug}/cars`,
                  query: {
                    makeID: make.makeId,
                  },
                }}
              >
                <div className="flex flex-col justify-center items-center ">
                  <img
                    src={make.imageURL ?? ""}
                    alt={make.slug}
                    className="w-[30px] "
                  />
                  <div className="text-[11px] text-center">{make.makeName}</div>

                  {/* <span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                            <svg
                                className="h-1.5 w-1.5 fill-blue-500"
                                viewBox="0 0 6 6"
                                aria-hidden="true"
                            >
                                <circle cx={3} cy={3} r={3} />
                            </svg>
                            {make.stockCount}
                        </span> */}
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
