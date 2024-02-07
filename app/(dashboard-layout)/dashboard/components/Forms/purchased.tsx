"use client";

import agent from "@/api/agent";
import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import { useUserStore } from "@/store/store";
import { useEffect, useState } from "react";
import CarPurchasedTable from "./tables/carPurchased";

export default function Purchased() {
  // reservedCarsByCustomerID
  const [sort, setSort] = useState("Cars");
  const { user } = useUserStore();
  const [purchasedData, setPurchasedData] = useState<
    StockCars[] | Trucks[] | Machinery[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      if (user && user?.customerId)
        switch (sort) {
          case "Trucks":
            const TruckPurchased =
              await agent.LoadData.purchasedTrucksByCustomerID(
                user?.customerId
              );
            setPurchasedData(TruckPurchased.data);
            return;
          case "Machinery":
            const machinePurchased =
              await agent.LoadData.purchasedMachineryByCustomerID(
                user?.customerId
              );
            setPurchasedData(machinePurchased.data);
            return;

          default:
            // 5
            const carPurchased = await agent.LoadData.purchasedCarsByCustomerID(
              user?.customerId
            );
            setPurchasedData(carPurchased.data);
        }
    };
    getData();
  }, [sort]);
  return (
    <div>
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
      <CarPurchasedTable data={purchasedData} />
    </div>
  );
}
