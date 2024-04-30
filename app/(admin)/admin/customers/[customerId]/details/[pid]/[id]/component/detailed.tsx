"use client";

import agent from "@/api/agent";
import Documents from "@/app/(dashboard-layout)/dashboard/details/[pid]/[id]/component/documents";
import Information from "@/app/(dashboard-layout)/dashboard/details/[pid]/[id]/component/information";
import Status from "@/app/(dashboard-layout)/dashboard/details/[pid]/[id]/component/status";
import { SalesOrderDetail } from "@/models/Customer";
import { useEffect, useState } from "react";

type Prop = {
  stockID: number;
  customerId: number;
};
export default function Detailed({ stockID, customerId }: Prop) {
  const [stock, setStock] = useState<SalesOrderDetail>();
  useEffect(() => {
    const getData = async () => {
      // 33, 17260
      const Stock = await agent.LoadData.getSalesOrderDetailPerStock(
        customerId,
        stockID
      );
      if (Stock) {
        setStock(Stock.data);
      }
    };
    getData();
  }, []);
  return (
    <>
      <Status stock={stock} />
      <Information stock={stock} />
      <Documents stock={stock} />
    </>
  );
}
