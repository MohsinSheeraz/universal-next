import agent from "@/api/agent";
import { SalesOrderDetail } from "@/models/Customer";
import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import { getFormatedDate } from "@/utils/dateFormat";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Prop = {
  item: StockCars | Trucks | Machinery;
};
export default function CarTableItem({ item }: Prop) {
  const [stock, setStock] = useState<SalesOrderDetail>();
  const { user } = useUserStore();
  const param = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      // 33, 17260
      const Stock = await agent.LoadData.getSalesOrderDetailPerStock(
        user?.customerId,
        item?.stockId
      );
      if (Stock) {
        setStock(Stock.data);
      }
    };
    getData();
  }, []);
  const etd = new Date(stock?.etd || 0);
  const eta = new Date(stock?.eta || 0);
  const created = new Date(stock?.createdOn || 0);
  return (
    <div className="mt-3 min-w-[1200px] flex gap-3 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="!min-w-60">
        <img src={item?.imageUrl} className="!w-60 !h-36" alt="" />
        <p className="text-center text-[14px] py-2">
          Stock ID: {item?.stockCode}
        </p>
      </div>
      <div className="w-[60%]">
        <p className="font-semibold text-xl">{item.listingTitle}</p>
        <div className="w-full mt-5">
          <table>
            <tr>
              <td className="w-36 font-semibold text-center bg-slate-100 p-1 mr-1">
                Ok to Book
              </td>
              <td className="w-36 bg-slate-50 py-1 px-3 text-center">
                {stock?.shipOk ? (
                  getFormatedDate(stock?.shipOkDate)
                ) : (
                  <span className="text-red-800 text-center text-[14px]">
                    NOT AVAILABLE
                  </span>
                )}
              </td>
              <td className="w-36 font-semibold bg-slate-100 p-1 text-center">
                ETA
              </td>
              <td className="w-36 text-sm bg-slate-50 p-1 text-center">
                {eta < created ? (
                  <span className="text-red-800 text-[14px]">
                    not Available
                  </span>
                ) : (
                  getFormatedDate(stock?.eta)
                )}
              </td>
            </tr>
            <tr>
              <td className="w-36 font-semibold bg-slate-100 p-1 text-center">
                Order Date
              </td>
              <td className="w-36 bg-slate-50 p-1 text-sm text-center">
                {getFormatedDate(stock?.createdOn)}
              </td>
              <td className="w-36 font-semibold bg-slate-100 p-1 text-center">
                ETD
              </td>
              <td className="w-36 text-sm bg-slate-50 p-1 text-center">
                {etd < created ? (
                  <span className="text-red-800 text-[14px]">
                    not Available
                  </span>
                ) : (
                  getFormatedDate(stock?.etd)
                )}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="w-72 ">
        <p className="font-semibold text-xl mb-14">
          Vehicle Price: <PriceFormat carPrice={stock?.totalCnf || 0} />
        </p>
        <Link
          className="w-full !no-underline"
          href={
            param?.get("tabs") == "Reserved-Vehicles"
              ? `/dashboard/details/reserve/${item.stockId}`
              : `/dashboard/details/purchase/${item.stockId}`
          }
        >
          <div className="w-full bg-[#221C63] py-3 rounded-xl">
            <p className="font-medium text-center text-white dark:text-blue-500 hover:underline">
              UM (Tracking)
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
