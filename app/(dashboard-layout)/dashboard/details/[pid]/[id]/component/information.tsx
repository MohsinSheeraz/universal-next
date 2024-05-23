import { SalesOrderDetail } from "@/models/Customer";
import { getFormatedDate } from "@/utils/dateFormat";
import Link from "next/link";
import { toast } from "react-toastify";

type Prop = {
  stock: SalesOrderDetail | undefined;
};
export default function Information({ stock }: Prop) {
  const download = () => {
    toast.info("Sorry, this feature is currently unavailable.");
  };
  const etd = new Date(stock?.etd || 0);
  const eta = new Date(stock?.eta || 0);
  const created = new Date(stock?.createdOn || 0);
  return (
    <div className="row w-[95%] mt-5 m-auto">
      <div className="w-full py-2  bg-[#221C63] mt-3">
        <p className="text-white font-semibold">INFORMATION</p>
      </div>
      <div className="row justify-between  !w-full mt-3">
        <table className="keyinfo !w-[50%]">
          <thead>
            <tr>
              <td colSpan={2} className="first !text-[12px] sm:!text-[16px]">
                Shipping Information
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">Voyage Number </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {" "}
                {stock?.voyageNumber.replaceAll(" ", "") ? (
                  stock?.voyageNumber
                ) : (
                  <span className="text-red-800 text-[14px]">
                    NOT AVALAIBLE
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]"> Ship Name </td>
              <td className="!text-[12px] sm:!text-[16px]">
                {" "}
                {stock?.shipName ? (
                  stock?.shipName
                ) : (
                  <span className="text-red-800 text-[14px]">
                    NOT AVALAIBLE
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">ETA</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {etd < created ? (
                  <span className="text-red-800 text-[14px]">
                    NOT AVALAIBLE
                  </span>
                ) : (
                  getFormatedDate(stock?.etd)
                )}
              </td>
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">ETD</td>
              <td className="!text-[12px] sm:!text-[16px]">
                {eta < created ? (
                  <span className="text-red-800 text-[14px]">
                    NOT AVALAIBLE
                  </span>
                ) : (
                  getFormatedDate(stock?.eta)
                )}
              </td>
            </tr>
            {/* <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> </td>
                            <td className="!text-[12px] sm:!text-[16px]"></td>
                        </tr> */}
          </tbody>
        </table>
        <table className="keyinfo !w-[45%]">
          <thead>
            <tr>
              <td colSpan={2} className="first !text-[12px] sm:!text-[16px]">
                Documents
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">B/L</td>
              {stock?.billLadingURL === "Unavailable" ? (
                <td className="text-red-800  !text-[12px] sm:!text-[14px]  ">
                  NOT AVALAIBLE
                </td>
              ) : (
                <td className="!text-[12px] sm:!text-[16px] cursor-pointer text-blue-400 underline">
                  {" "}
                  <Link href={stock?.billLadingURL ?? ""} target="_blank">
                    Download{" "}
                  </Link>
                </td>
              )}
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">Inspection</td>
              {stock?.inspectionCertURL === "Unavailable" ? (
                <td className="text-red-800  !text-[12px] sm:!text-[14px]  ">
                  NOT AVALAIBLE
                </td>
              ) : (
                <td className="!text-[12px] sm:!text-[16px] cursor-pointer text-blue-400 underline">
                  <Link href={stock?.inspectionCertURL ?? ""} target="_blank">
                    Download
                  </Link>
                </td>
              )}
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">
                Export Certificate
              </td>
              {stock?.exportCertURL === "Unavailable" ? (
                <td className="text-red-800  !text-[12px] sm:!text-[14px]  ">
                  NOT AVALAIBLE
                </td>
              ) : (
                <td className="!text-[12px] sm:!text-[16px] cursor-pointer text-blue-400 underline">
                  <Link href={stock?.exportCertURL ?? ""} target="_blank">
                    Download
                  </Link>
                </td>
              )}
            </tr>
            <tr>
              <td className="!text-[12px] sm:!text-[16px]">Invoice</td>
              {stock?.invoiceURL === "Unavailable" ? (
                <td className="text-red-800  !text-[12px] sm:!text-[14px]  ">
                  NOT AVALAIBLE
                </td>
              ) : (
                <td className="!text-[12px] sm:!text-[16px] cursor-pointer text-blue-400 underline">
                  <Link href={stock?.invoiceURL ?? ""} target="_blank">
                    Download
                  </Link>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
