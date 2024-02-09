import agent from "@/api/agent";
import { StockCars } from "@/models/StockCars";

interface Props {
  car: StockCars;
}
export default async function StockKeyInformation({ car }: Props) {
  const stockOptions = await agent.LoadData.caroptionMappingList(car.stockId);
  const optionsMaster = await agent.LoadData.caroptionsList(); //db.tblCarOptions.findMany({where: {isActive:true}});

  return (
    <>
      <div className="border-b border-gray-200 bg-white px-2 py-1 sm:py-5 sm:px-6">
        <h2 className="!text-[14px] sm:!text-[20px] font-semibold leading-6 text-gray-900">
          Key Information
        </h2>
        <div className="row features-table ">
          <table className="keyinfo">
            <tbody>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Model Code
                </td>
                {car.modelCode !== "" ? (
                  <td className="!text-[9px] sm:!text-[12px]">
                    {" "}
                    {car.modelCode}
                  </td>
                ) : (
                  <td className="!text-[9px] sm:!text-[12px]">Not Available</td>
                )}
              </tr>
              {/*<tr>*/}
              {/*    <td className="first">Auction Grade</td>*/}
              {/*    {*/}
              {/*        car.auctionGrade !== '' ? ( <td> {car.auctionGrade}</td>) : (<td>Not Available</td>)*/}
              {/*    }*/}
              {/*</tr>*/}
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Engine Size
                </td>
                <td className="!text-[9px] sm:!text-[12px]">
                  {car.engineSize}
                </td>
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Engine Number
                </td>
                {car.engineNumber !== "" ? (
                  <td className="!text-[9px] sm:!text-[12px]">
                    {" "}
                    {car.engineNumber}
                  </td>
                ) : (
                  <td className="!text-[9px] sm:!text-[12px]">Not Available</td>
                )}
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">Body Type</td>
                <td className="!text-[9px] sm:!text-[12px]">
                  {car.typeOfBody}
                </td>
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Body Length
                </td>
                <td className="!text-[9px] sm:!text-[12px]">
                  {car.lengthOfCar}
                </td>
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">Dimension</td>
                <td className="!text-[9px] sm:!text-[12px]">{car.m3}</td>
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Drivetrain
                </td>
                <td className="!text-[9px] sm:!text-[12px]">
                  {car.drivetrainType}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="keyinfo">
            <tbody>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Chasis Number
                </td>
                {car.chasisNumber !== "" ? (
                  <td className="!text-[9px] sm:!text-[12px]">
                    {" "}
                    {car.chasisNumber}
                  </td>
                ) : (
                  <td className="!text-[9px] sm:!text-[12px]">Not Available</td>
                )}
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Steering Type
                </td>
                <td className="!text-[9px] sm:!text-[12px]">
                  {car.typeOfSteering}
                </td>
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">Fuel</td>
                <td className="!text-[9px] sm:!text-[12px]">
                  {car.typeOfFuel}
                </td>
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Number of Doors
                </td>
                <td className="!text-[9px] sm:!text-[12px]">{car.noOfDoors}</td>
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">
                  Number of Seats
                </td>
                <td className="!text-[9px] sm:!text-[12px]">{car.noOfSeats}</td>
              </tr>
              <tr>
                <td className="first !text-[9px] sm:!text-[12px]">Colour</td>
                <td className="!text-[9px] sm:!text-[12px]">{car.colorName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white px-4  py-1 sm:py-5 sm:px-6">
        <h2 className="!text-[14px] sm:!text-[20px] font-semibold leading-6 text-gray-900">
          Features
        </h2>
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
