"use client";

import agent from "@/api/agent";
import { SalesOrderDetail } from "@/models/Customer";
import { useUserStore } from "@/store/store";
import { useEffect, useState } from "react";
import Documents from "./documents";
import Information from "./information";
import Status from "./status";

type Prop = {
  stockID: number;
};
export default function Detailed({ stockID }: Prop) {
  const [stock, setStock] = useState<SalesOrderDetail>();
  const { user } = useUserStore();

  useEffect(() => {
    const getData = async () => {
      // 33, 17260
      const Stock = await agent.LoadData.getSalesOrderDetailPerStock(
        user?.customerId,
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
