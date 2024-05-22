"use client";

import agent from "@/api/agent";
import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import { useEffect, useState } from "react";
import AdminCarPurchasedTable from "./adminTables/adminCarPurchased";

type Prop = {
  id: number;
};
export default function AdminPurchased({ id }: Prop) {
  // reservedCarsByCustomerID
  const [sort, setSort] = useState("Cars");
  const [purchasedData, setPurchasedData] = useState<
    StockCars[] | Trucks[] | Machinery[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      if (id)
        switch (sort) {
          case "Trucks":
            const TruckPurchased =
              await agent.LoadData.purchasedTrucksByCustomerID(id);
            setPurchasedData(TruckPurchased.data);
            return;
          case "Machinery":
            const machinePurchased =
              await agent.LoadData.purchasedMachineryByCustomerID(id);
            setPurchasedData(machinePurchased.data);
            return;

          default:
            // 5
            const carPurchased =
              await agent.LoadData.purchasedCarsByCustomerID(id);
            setPurchasedData(carPurchased.data);
        }
    };
    getData();
  }, [sort]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div></div>

        <h1 className="text-xl font-bold text-center pb-8">
          Purchased Vehicles
        </h1>
        <p className="text-lg text-[#221C63] text-end mt-3 mb-2">
          Purchased{" "}
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

      <AdminCarPurchasedTable id={id} data={purchasedData} />
    </div>
  );
}
