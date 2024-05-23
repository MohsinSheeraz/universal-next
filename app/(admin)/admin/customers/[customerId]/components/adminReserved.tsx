"use client";

import agent from "@/api/agent";
import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import { useEffect, useState } from "react";
import AdminCarReservedTable from "./adminTables/adminCarReserved";

type Prop = {
  id: number;
};
export default function AdminReserved({ id }: Prop) {
  const [sort, setSort] = useState("Cars");
  const [reservedData, setReservedData] = useState<
    StockCars[] | Trucks[] | Machinery[]
  >([]);
  useEffect(() => {
    const getData = async () => {
      if (id)
        switch (sort) {
          case "Trucks":
            const TruckReserved =
              await agent.LoadData.reservedTrucksByCustomerID(id);
            setReservedData(TruckReserved.data);
            return;
          case "Machinery":
            const machineReserved =
              await agent.LoadData.reservedMachineryByCustomerID(id);
            setReservedData(machineReserved.data);
            return;

          default:
            // 36
            const carReserved =
              await agent.LoadData.reservedCarsByCustomerID(id);
            setReservedData(carReserved.data);
        }
    };
    getData();
  }, [sort]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div></div>

        <h1 className="text-xl font-bold text-center pb-8">
          Reserved Vehicles
        </h1>
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
      </div>

      <AdminCarReservedTable id={id} data={reservedData} />
    </div>
  );
}
