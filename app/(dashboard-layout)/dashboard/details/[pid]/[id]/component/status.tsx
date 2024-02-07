import { SalesOrderDetail } from "@/models/Customer";
import PriceFormat from "@/utils/PriceFormat";
import { PieChart } from "react-minimal-pie-chart";

type Prop = {
  stock: SalesOrderDetail | undefined;
};
export default function Status({ stock }: Prop) {
  return (
    <div className="row w-[95%] m-auto">
      <div className="w-full py-2 flex   bg-[#221C63] mt-7 mb-3">
        <div className="w-1/2">
          <p className="text-white font-semibold ">Paid / Remaining Amount</p>
        </div>
        <div className="w-1/2">
          <p className="text-white font-semibold ">STATUS</p>
        </div>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="w-1/2 ">
          <div className="ml-6">
            <div className="flex gap-3 items-center">
              <div className="w-4 h-4 bg-[#221C63]"></div>
              <p>Paid {stock?.paidPercent}% </p>
            </div>
            <div className="flex gap-3  items-center">
              <div className="w-4 h-4 bg-[#9ca3af]"></div>
              Remaining {stock?.balancePercent}%
            </div>
          </div>
          <div className="w-[300px] mt-2 mx-auto">
            <PieChart
              animate
              data={[
                {
                  title: "Paid",
                  value: stock?.paidPercent ?? 0,
                  color: "#221C63",
                },
                {
                  title: "unpaid",
                  value: stock?.balancePercent ?? 0,
                  color: "#9ca3af",
                },
              ]}
            />
          </div>
          <div className="flex gap-3  font-bold items-center">
            Total Price: <PriceFormat carPrice={stock?.totalCnf ?? 0} />
          </div>
        </div>
        <table className="keyinfo !w-1/2">
          <thead>
            <tr>
              {/* <td className="first !text-[12px] sm:!text-[16px]">Stage</td> */}
              <td className="first !text-[12px] sm:!text-[16px]">
                Action Tracker
              </td>
              <td className="first !text-[12px] sm:!text-[16px]">Date</td>
              <td className="first !text-[12px] sm:!text-[16px]">Status</td>

              {/* <td className="first !text-[12px] sm:!text-[16px]">Action</td> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" !text-[12px] sm:!text-[16px]">Consignee</td>
              <td className=" !text-[12px] sm:!text-[16px]"></td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.consigneeName ? "✔️" : "❌"}
              </td>
            </tr>
            <tr>
              <td className=" !text-[12px] sm:!text-[16px]">Notify Party</td>
              <td className=" !text-[12px] sm:!text-[16px]"></td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.notifyPartyName ? "✔️" : "❌"}
              </td>
            </tr>
            <tr>
              <td className=" !text-[12px] sm:!text-[16px]">OK to Book</td>
              <td className=" !text-[12px] sm:!text-[16px]"></td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.shipOk ? "✔️" : "❌"}
              </td>
            </tr>

            <tr>
              <td className=" !text-[12px] sm:!text-[16px]">
                Courier Address Updated
              </td>
              <td className=" !text-[12px] sm:!text-[16px]"></td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.courierPersonName ? "✔️" : "❌"}
              </td>
            </tr>
            <tr>
              <td className=" !text-[12px] sm:!text-[16px]">
                Documents Dispatched
              </td>
              <td className=" !text-[12px] sm:!text-[16px]"></td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.release ? "✔️" : "❌"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
