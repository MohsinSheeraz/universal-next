"use client";

import agent from "@/api/agent";
import ActivityTable from "@/app/(dashboard-layout)/payment-history/components/activity";
import { TransactionInfo } from "@/models/Customer";
import { useEffect, useState } from "react";

type Props = {
  id: number;
};
export default function AdminAccountActivity({ id }: Props) {
  const [historyData, setHistoryData] = useState<TransactionInfo[]>([]);
  useEffect(() => {
    const getData = async () => {
      // 36
      const details = await agent.LoadData.getTransactionsHistory(id);
      setHistoryData(details.data);
    };
    getData();
  }, []);

  return (
    <div className="w-[95%] mx-auto overflow-x-auto">
      <p className="text-lg text-[#221C63] text-center mt-3 mb-2">
        Account Activity
      </p>
      <ActivityTable data={historyData} />
    </div>
  );
}
