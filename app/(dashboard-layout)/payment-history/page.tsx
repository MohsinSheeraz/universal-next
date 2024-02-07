"use client";

import agent from "@/api/agent";
import { TransactionInfo } from "@/models/Customer";
import { useUserStore } from "@/store/store";
import { useEffect, useState } from "react";
import HistoryTable from "./components/historyTable";

export default function Page() {
  const [historyData, setHistoryData] = useState<TransactionInfo[]>([]);
  const { user } = useUserStore();
  useEffect(() => {
    const getData = async () => {
      // 36
      const details = await agent.LoadData.getSalesOrderDepositInformation(
        user.customerId
      );
      // let data = details.data.filter(
      //     (itm: TransactionInfo) => itm.isVoucher === true
      // );
      setHistoryData(details.data);
    };
    getData();
  }, []);

  return (
    <div className="w-full">
      <p className="text-lg text-[#221C63] text-center mt-3 mb-2">
        Payment History
      </p>
      <HistoryTable data={historyData} />
    </div>
  );
}
