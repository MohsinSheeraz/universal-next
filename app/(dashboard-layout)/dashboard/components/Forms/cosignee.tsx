"use client";
import agent from "@/api/agent";
import { ConsigneeCourier, CourierDispatch } from "@/models/Customer";
import { useUserStore } from "@/store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CosigneeForm() {
  const [consignee, setConsignee] = useState<ConsigneeCourier[]>([]);
  const [courier, setCourier] = useState<CourierDispatch[]>([]);
  const { user, update: updateData, isUpdate, setIsUpdate } = useUserStore();

  useEffect(() => {
    const getData = async () => {
      const countries = await agent.LoadData.countryList();
      const { data } = await agent.LoadData.consigneeCourierByCustomer(
        user.customerId
      );
      const { data: courier } = await agent.LoadData.courierDispatchByCustomer(
        user.customerId
      );
      setConsignee(data);
      setCourier(courier);
    };

    getData();
  }, []);

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-5 my-5">
      <div>
        <div className="flex justify-between">
          <div></div>
          <div className="flex  justify-between w-[800px]">
            <div>
              <h1 className="text-xl font-bold text-center pb-8">
                Cosignee / Notify
              </h1>
            </div>
            <div>
              <Link href={"/dashboard/addcosignee/" + 0}>
                <button className="bg-[#221C63] hover:bg-[#857de0] text-white font-bold py-2 px-4 rounded">
                  Add{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {consignee.map((item: ConsigneeCourier) => {
                return (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">{item.consigneeName}</td>
                    <td className="px-6 py-4">{item.consigneeEmail}</td>
                    <td className="px-6 py-4">{item.consigneePhone}</td>
                    <td className="px-6 py-4 flex gap-1">
                      <Link href={"/dashboard/cosignee/" + item.id}>
                        <button className="border-3 border-[#221C63]  text-[#221C63] font-bold py-2 px-4 rounded">
                          view{" "}
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div></div>
          <div className="flex  justify-between w-[800px]">
            <div>
              <h1 className="text-xl font-bold text-center pb-8">Courier</h1>
            </div>
            <div>
              <Link href={"/dashboard/addcourier/" + 0}>
                <button className="bg-[#221C63] hover:bg-[#857de0] text-white font-bold py-2 px-4 rounded">
                  Add{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {courier.map((item: CourierDispatch) => {
                return (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">{item.personName}</td>
                    <td className="px-6 py-4">{item.courierPersonEmail}</td>
                    <td className="px-6 py-4">{item.courierPersonPhone}</td>
                    <td className="px-6 py-4 flex gap-1">
                      <Link href={"/dashboard/courier/" + item.id}>
                        <button className="border-3 border-[#221C63]  text-[#221C63] font-bold py-2 px-4 rounded">
                          view{" "}
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
