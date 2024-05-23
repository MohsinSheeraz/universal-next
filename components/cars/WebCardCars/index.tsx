import { StockCars } from "@/models/StockCars";
import Image from "next/image";
import { FaGasPump } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

import LikeComponent from "@/components/ui/LikeComponent";
import reserved from "@/public/assets/images/reserved.png";
import purchased from "@/public/assets/images/sold.webp";
import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";
import { PiEngineFill, PiGearFineBold } from "react-icons/pi";

interface Props {
  // locations: Country[];
  // params: URLSearchParams;
  searchdata: StockCars[];
  type: any;
  fav: any;
  locations: any;
  router: any;
}
export default function WebCardCars({
  searchdata,
  type,
  fav,
  locations,
  router,
}: Props) {
  return (
    <div className="w-full !hidden xl:!flex flex-wrap flex-row xl:flex-col gap-4">
      {Array.isArray(searchdata) &&
        searchdata.map((car, i) => (
          <div
            key={car.stockId}
            onClick={() => {
              router.push(
                `/global/results/${
                  car.makeName.replaceAll(" ", "-") +
                  "-" +
                  car.modelName.replaceAll(" ", "-") +
                  "-" +
                  car.year
                }/${type?.type}/${car.stockId}`
              );
            }}
            className={`w-[280px] relative xl:static ${i % 2 ? "bg-slate-100" : "bg-white"}  !pt-2 xl:!pt-0 xl:w-[95%] px-[10px]  items-center gap-3 shadow-md m-auto flex flex-col xl:flex-row h-[420px] xl:h-[200px] border border-gray-100 rounded-3xl `}
          >
            {/* <div className="relative !pb-0 xl:!pb-10"> */}
            <Image
              src={car.imageUrl}
              width={261}
              height={176}
              className="rounded-3xl"
              style={{
                objectFit: "cover",
                // position: "absolute",
                width: "261px",
                height: "176px",
              }}
              alt={car.listingTitle}
            />
            {/* </div> */}
            {car?.isReserved && car?.purchasedById !== 0 && (
              <div className="absolute">
                <Image className="w-[180px]" src={reserved} alt="" />
              </div>
            )}
            {car?.purchasedById !== 0 && (
              <div className="absolute">
                <Image className="w-[180px]" src={purchased} alt="" />
              </div>
            )}
            <div className="w-full h-full  xl:relative flex xl:items-center justify-center xl:justify-between ">
              <div className="absolute top-0 right-[40%]  bg-[#221C63] text-white px-3 hidden xl:flex py-1 font-semibold rounded-b-lg text-[14px]">
                {" "}
                Stock ID: <span>{car.stockCode}</span>
              </div>
              <div className="absolute bottom-2 mx-auto xl:right-[22%] flex  font-semibold text-[14px]">
                <Image
                  src={`/assets/images/flags/${
                    locations.find(
                      (x: { countryId: number }) =>
                        x.countryId == car.locationId
                    )?.slug
                  }.svg`}
                  className="img-fluid mr-2"
                  height={20}
                  width={20}
                  alt={`${car.locationName} flag`}
                />
                {car.locationName}
              </div>
              <div className="absolute top-4 xl:top-2 right-6 xl:right-[22%]">
                <LikeComponent fav={fav} car={car.stockId} />
              </div>
              <div className="w-[70%] hidden xl:flex flex-col gap-2 ">
                <p className="font-bold text-[#221C63] text-[20px] ">
                  {" "}
                  {car.listingTitle}
                </p>
                <div className="w-full  grid grid-cols-5  gap-x-4 gap-3">
                  {type.type !== "machinery" && (
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Milage
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <img
                          decoding="async"
                          src="/assets/images/kmsDriven.svg"
                          loading="eager"
                          className="h-4 mr-2"
                        />
                        {car.mileage}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center flex-col ">
                    <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                      YEAR
                    </p>
                    <p className=" p-1  flex items-center rounded-md ">
                      <img
                        decoding="async"
                        src="/assets/images/registrationYear.svg"
                        loading="eager"
                        className="h-4 mr-2"
                      />
                      {car.year}
                    </p>
                  </div>
                  {type.type !== "machinery" && (
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Engine
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <PiEngineFill style={{ marginRight: "8px" }} />
                        {car.engineSize}
                      </p>
                    </div>
                  )}
                  {type.type == "machinery" && (
                    <div>
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Opertional Hours
                      </p>
                      <p className=" p-1  flex items-center rounded-md justify-center">
                        {car.operationHours}
                      </p>
                    </div>
                  )}

                  {type.type !== "machinery" && (
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Transmission
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <img
                          decoding="async"
                          src="/assets/images/transmission.svg"
                          loading="eager"
                          className="h-4 mr-2"
                        />
                        {car.transmissionName}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center flex-col ">
                    <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                      Fuel
                    </p>
                    <p className=" p-1  flex items-center rounded-md ">
                      <FaGasPump style={{ marginRight: "8px" }} />
                      {car.typeOfFuel}
                    </p>
                  </div>
                  {type.type !== "machinery" && (
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Drivetrain
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <PiGearFineBold style={{ marginRight: "8px" }} />
                        {car.drivetrainType}
                      </p>
                    </div>
                  )}
                  {type.type !== "machinery" && (
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Doors
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <GiCarDoor style={{ marginRight: "8px" }} />
                        {car.noOfDoors}
                      </p>
                    </div>
                  )}

                  {type.type !== "machinery" && (
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Seats
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <MdAirlineSeatReclineExtra />
                        {car.noOfSeats}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center flex-col ">
                    <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                      Color
                    </p>
                    <div
                      style={{ backgroundColor: car.colorHex }}
                      className={`border-[2px] border-black w-[60px] rounded-lg h-[20px] bg-[${car.colorHex}] mt-1`}
                    ></div>
                    {/* <p className=" p-1  flex items-center rounded-md ">
                        <BiSolidColorFill />
                        {car.colorName}</p> */}
                  </div>
                  <div className="flex items-center flex-col ">
                    <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                      {" "}
                      Model Code
                    </p>
                    <p className=" p-1  flex items-center rounded-md ">
                      {car.modelCode}
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:border-l-[1px] border-gray-100 w-[95%] xl:w-[20%] flex gap-2 xl:gap-0 flex-col justify-start xl:justify-between items-center !h-auto xl:!h-full ">
                <div className="bg-[#221C63] mx-auto w-[70%] text-white px-3 flex xl:hidden py-1 font-semibold rounded-lg text-[14px]">
                  {" "}
                  Stock ID: <span>{car.stockCode}</span>
                </div>
                <p className="flex xl:hidden text-center  font-bold text-[#221C63] text-[16px]">
                  {" "}
                  {car.listingTitle}
                </p>
                <div className="flex xl:hidden w-full items-center">
                  <div className="text-[#221C63] flex flex-col xl:flex-row items-center  xl:!mt-0 text-center py-2 text-[14px] font-semibold border-b border-gray-100 w-[70%] xl:w-[90%] mx-auto">
                    FOB Price:{" "}
                    <span className="ml-2">
                      {" "}
                      <div className="bg-[#221C63] text-white  rounded-tl-3xl rounded-bl-3xl flex items-center gap-3 w-28 h-6">
                        <div className="text-[30px] pl-4 pb-3">.</div>
                        <PriceFormat carPrice={car.price} />
                      </div>
                    </span>
                  </div>
                  <p className="text-[#221C63] font-semibold text-center text-[12px] xl:text-[20px]">
                    Total Price: <br /> ASK{" "}
                  </p>
                </div>

                <div className="text-[#221C63] hidden xl:flex flex-col xl:flex-row items-center  xl:!mt-0 text-center py-2 text-[14px] font-semibold border-b border-gray-100 w-[70%] xl:w-[90%] mx-auto">
                  FOB Price:{" "}
                  <span className="ml-2">
                    {" "}
                    <div className="bg-[#221C63] text-white   rounded-tl-3xl rounded-bl-3xl flex items-center gap-3 w-28 h-6">
                      <div className="text-[30px] pl-4 pb-3">.</div>
                      <PriceFormat carPrice={car.price} />
                    </div>
                  </span>
                </div>
                <p className="text-[#221C63] hidden xl:flex font-semibold text-center text-[12px] xl:text-[20px]">
                  Total Price: <br /> ASK{" "}
                </p>
                <Link
                  href={`/global/results/${
                    car.makeName.replaceAll(" ", "-") +
                    "-" +
                    car.modelName.replaceAll(" ", "-") +
                    "-" +
                    car.year
                  }/${type?.type}/${car.stockId}`}
                >
                  <button className="text-[18px]  xl:mt-0 px-4 mb-2 py-1 rounded-full text-[#221C63] font-semibold border-[1px] border-[#221C63]  ">
                    Send Offer
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
