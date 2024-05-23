"use client";

import agent from "@/api/agent";
import HistoryTable from "@/app/(dashboard-layout)/payment-history/components/historyTable";
import { TransactionInfo } from "@/models/Customer";
import { useEffect, useState } from "react";

type Props = {
  id: number;
};
export default function AdminPaymentHistory({ id }: Props) {
  const [historyData, setHistoryData] = useState<TransactionInfo[]>([]);
  useEffect(() => {
    const getData = async () => {
      // 36
      const details = await agent.LoadData.getSalesOrderDepositInformation(id);
      // let data = details.data.filter(
      //     (itm: TransactionInfo) => itm.isVoucher === true
      // );
      setHistoryData(details.data);
    };
    getData();
  }, []);

  return (
    <div className="w-[95%] overflow-x-auto mx-auto">
      <p className="text-lg text-[#221C63] text-center mt-3 mb-2">
        Payment History
      </p>
      <HistoryTable data={historyData} />
    </div>
  );
}
