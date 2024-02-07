"use client";

import agent from "@/api/agent";
import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import { useUserStore } from "@/store/store";
import { useEffect, useState } from "react";
import CarReservedTable from "./tables/carReserved";

export default function Reserved() {
  const [sort, setSort] = useState("Cars");
  const { user } = useUserStore();
  const [reservedData, setReservedData] = useState<
    StockCars[] | Trucks[] | Machinery[]
  >([]);
  useEffect(() => {
    const getData = async () => {
      if (user && user?.customerId)
        switch (sort) {
          case "Trucks":
            const TruckReserved =
              await agent.LoadData.reservedTrucksByCustomerID(user?.customerId);
            setReservedData(TruckReserved.data);
            return;
          case "Machinery":
            const machineReserved =
              await agent.LoadData.reservedMachineryByCustomerID(
                user?.customerId
              );
            setReservedData(machineReserved.data);
            return;

          default:
            // 36
            const carReserved = await agent.LoadData.reservedCarsByCustomerID(
              user?.customerId
            );
            setReservedData(carReserved.data);
        }
    };
    getData();
  }, [sort]);
  return (
    <div>
      <p className="text-lg text-[#221C63] text-end mt-3 mb-2">
        Reserved{" "}
        <select
          className="w-auto rounded-md bg-white px-6 py-2 !text-[9px] sm:!text-sm font-semibold text-blue-900 hover:bg-blue-100"
          aria-expanded="true"
          aria-haspopup="true"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value={"Cars"}> Car</option>
          <option value={"Trucks"}>Truck</option>
          <option value={"Machinery"}>Machinery</option>
        </select>
      </p>
      <CarReservedTable data={reservedData} />
    </div>
  );
}
