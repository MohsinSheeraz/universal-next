import agent from "@/api/agent";
import { SalesOrderDetail } from "@/models/Customer";
import { useEffect, useState } from "react";

type Prop = {
  stock: SalesOrderDetail | undefined;
};
export default function Documents({ stock }: Prop) {
  const [countries, setCounties] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const Countries = await agent.LoadData.countryList();
      setCounties(Countries.data);
    };
    getData();
  }, []);
  const getCountry = (id: any) => {
    return countries.find((itm: any) => itm.countryId === id)?.countryName;
  };
  return (
    <div className="row w-[95%] m-auto mt-5">
      <div className="w-full py-2  bg-[#221C63] mt-3">
        <p className="text-white font-semibold">
          CONSIGNEE / NOTIFY PARTY OF YOUR REQUEST
        </p>
      </div>
      <div className="row justify-between items-start  !w-full mt-3">
        <table className="keyinfo !w-[50%]">
          <thead>
            <tr>
              <td colSpan={2} className="first !text-[12px] sm:!text-[16px]">
                Consignee
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]"> Consignee Name </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.consigneeName}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Consignee Address
              </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.consigneeAddress}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">Consignee City</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.consigneeCity}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Consignee Country
              </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {getCountry(stock?.consigneeCountryID)}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">Consignee Phone</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.consigneePhone}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">Consignee Email</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.consigneeEmail}
              </td>
            </tr>
            {/* -------------------------------------------------------------------- */}
            <tr>
              <td colSpan={2} className="first !text-[12px] sm:!text-[16px]">
                Notify Party
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Notify Party Name{" "}
              </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.notifyPartyName}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Notify Party Address
              </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.notifyPartyAddress}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Notify Party City
              </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.notifyPartyCity}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Notify Party Country
              </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {getCountry(stock?.notifyPartyCountryID)}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Notify Party Phone
              </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.notifyPartyPhone}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Notify Party Email
              </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.notifyPartyEmail}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="keyinfo !w-[45%]">
          <thead>
            <tr>
              <td colSpan={2} className="first !text-[12px] sm:!text-[16px]">
                Courier Person
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]"> Name </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.courierPersonName}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]"> Address</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.courierPersonAddress}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]"> City</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.courierPersonCity}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]"> Country</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {getCountry(stock?.courierPersonCountryID)}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]"> Phone</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.courierPersonPhone}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]"> Email</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {stock?.courierPersonEmail}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
