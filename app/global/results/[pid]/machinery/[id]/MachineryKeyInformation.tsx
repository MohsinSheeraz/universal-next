import agent from "@/api/agent";
import NumberFormat from "@/lib/utils";
import { Trucks } from "@/models/Trucks";

interface Props {
  car: Trucks;
}
export default async function MachineryKeyInformation({ car }: Props) {
  const stockOptions = await agent.LoadData.caroptionMappingList(car.stockId);
  const optionsMaster = await agent.LoadData.caroptionsList(); //db.tblCarOptions.findMany({where: {isActive:true}});

  return (
    <>
      <div>
        <h2 className="!text-[14px] sm:!text-[20px]">Key Information</h2>
      </div>

      <div className="row features-table ">
        <table className="keyinfo shadow-md sm:rounded-lg">
          <tbody>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">Model Code</td>
              {car.modelCode !== "" ? (
                <td className="!text-[9px] sm:!text-[12px] text-center">
                  {" "}
                  {car.modelCode}
                </td>
              ) : (
                <td className="!text-[9px] sm:!text-[12px] text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            {/*<tr>*/}
            {/*    <td className="first">Auction Grade</td>*/}
            {/*    {*/}
            {/*        car.auctionGrade !== '' ? ( <td> {car.auctionGrade}</td>) : (<td>Not Available</td>)*/}
            {/*    }*/}
            {/*</tr>*/}

            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">Engine Size</td>
              <td className="!text-[9px] sm:!text-[12px] text-center">
                {car.engineSize}
              </td>
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">
                Engine Number
              </td>
              {car.engineNumber != undefined ? (
                <td className="!text-[9px] sm:!text-[12px] text-center">
                  {" "}
                  {car.engineNumber}
                </td>
              ) : (
                <td className="!text-[9px] sm:!text-[12px] text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">
                Vehicle Category
              </td>
              <td className="!text-[9px] sm:!text-[12px] text-center">
                {car.vehicleCategory}
              </td>
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">Body Length</td>
              {car.lengthOfCar != 0 ? (
                <td className="!text-[9px] sm:!text-[12px] text-center">
                  {" "}
                  {car.lengthOfCar}
                </td>
              ) : (
                <td className="!text-[9px] sm:!text-[12px] text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">Dimension</td>
              {car.M3 != undefined ? (
                <td className="!text-[9px] sm:!text-[12px] text-center">
                  {" "}
                  {car.M3}
                </td>
              ) : (
                <td className="!text-[9px] sm:!text-[12px] text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">
                Steering Type
              </td>
              {car.steeringTypeId == 1 ? (
                <td className="!text-[9px] sm:!text-[12px] text-center">
                  {" "}
                  Right Hand
                </td>
              ) : (
                <td className="!text-[9px] sm:!text-[12px] text-center">
                  Left Hand
                </td>
              )}
            </tr>
          </tbody>
        </table>
        <table className="keyinfo shadow-md sm:rounded-lg">
          <tbody>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">
                Chasis Number
              </td>
              {car.chasisNumber !== "" ? (
                <td className="!text-[9px] sm:!text-[12px] text-center">
                  {" "}
                  {car.chasisNumber}
                </td>
              ) : (
                <td className="!text-[9px] sm:!text-[12px] text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">Axle Type</td>
              <td className="!text-[9px] sm:!text-[12px] text-center">
                {car.axle}
              </td>
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">Fuel</td>
              <td className="!text-[9px] sm:!text-[12px] text-center">
                {car.typeOfFuel}
              </td>
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">Mileage</td>
              <td className="!text-[9px] sm:!text-[12px] text-center">
                {NumberFormat(car.mileage)} Kms
              </td>
            </tr>
            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">
                Loading Capacity
              </td>
              {car.loadingCapacity != "" ? (
                <td className="!text-[9px] sm:!text-[12px] text-center">
                  {" "}
                  {car.loadingCapacity}
                </td>
              ) : (
                <td className="!text-[9px] sm:!text-[12px] text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>

            <tr>
              <td className="!text-[9px] sm:!text-[12px] first">Colour</td>
              <td className="!text-[9px] sm:!text-[12px] text-center">
                {car.colorName}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="features my-3 ">
        <h2 className="!text-[14px] sm:!text-[20px]">Features</h2>
        <div className=" flex flex-wrap gap-3">
          {stockOptions.data
            .filter((op: any) => op.stockId === car.stockId)
            .map((op: any) => (
              // <li className="active" key={op.id}>
              //   <h5>
              //     {
              //       <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium  ">
              //         <svg
              //           className="h-1.5 w-1.5 fill-green-400"
              //           viewBox="0 0 6 6"
              //           aria-hidden="true"
              //         >
              //           <circle cx={3} cy={3} r={3} />
              //         </svg>
              // {
              //   optionsMaster.data.find(
              //     (x) => x.optionId == op.carOptionsId
              //   )?.optionName
              // }
              //       </span>
              //     }
              //   </h5>
              // </li>
              <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-[#221C63] py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                <div className="mt-px !text-[9px] sm:!text-[12px]">
                  {
                    optionsMaster.data.find(
                      (x: any) => x.optionId == op.carOptionsId
                    )?.optionName
                  }
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
