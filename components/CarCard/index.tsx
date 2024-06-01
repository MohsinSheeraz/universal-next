"use client";
import { addFavourite, removeFavourite } from "@/api/agent";
//import { countries } from "@/lib/utils";
import reserved from "@/public/assets/images/reserved.png";
import purchased from "@/public/assets/images/sold.webp";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGasPump, FaHeart } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngineFill, PiGearFineBold } from "react-icons/pi";
import { toast } from "react-toastify";
type Prop = {
  car: any;
  href: string;
  fav?: any;
  countries?: any;
  type: string;
};
export default function CarCard({ car, href, fav, countries, type }: Prop) {
  const [isfav, setFav] = useState(false);
  const router = useRouter();

  const InventoryLocation = countries?.find(
    (x: any) => x.countryId == car.locationId
  );
  const isfa = fav?.find((itm: any) => itm.stockID === car.stockId);
  useEffect(() => {
    if (isfa) {
      setFav(true);
    }
  }, [isfa]);
  const { user, setIsUpdate, update: updateData } = useUserStore();
  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse: any) => {
  //     await axios
  //       .get("https://www.googleapis.com/oauth2/v3/userinfo", {
  //         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //       })
  //       .then((res) => {
  //         checkEmail(
  //           res.data.email,
  //           res.data?.picture,
  //           res.data?.name,
  //           setIsUpdate,
  //           updateData,
  //           router
  //         );
  //       });
  //   },
  // });
  return (
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
          }/${type}/${car.stockId}`
        );
      }}
      className={`w-[90%] max-w-[400px] sm:w-[280px] relative   bg-white  !pt-2  px-[10px]  items-center gap-3 shadow-md m-auto flex flex-col  h-[420px] border border-gray-100 rounded-3xl `}
    >
      {/* <div className="relative !pb-0 xl:!pb-10"> */}
      <Link
        className="!max-w-full"
        href={`/global/results/${
          car.makeName.replaceAll(" ", "-") +
          "-" +
          car.modelName.replaceAll(" ", "-") +
          "-" +
          car.year
        }/${type}/${car.stockId}`}
      >
        <Image
          src={car.imageUrl}
          loading="lazy"
          width={261}
          height={176}
          className="rounded-3xl w-[100%] "
          style={{
            objectFit: "cover",
            height: "176px",
          }}
          alt={car.listingTitle}
        />
      </Link>
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
      <div className="w-full h-full   flex flex-col justify-center  ">
        {/* <div className="absolute bottom-2 mx-auto xl:right-[22%] flex  font-semibold text-[14px]">
      <Image
        src={`/assets/images/flags/${locations.find((x) => x.countryId == car.locationId)?.slug
          }.svg`}
        className="img-fluid mr-2"
        height={20}
        width={20}
        alt={`${car.locationName} flag`}
      />
      {car.locationName}
    </div> */}

        <div className="absolute top-4 right-6 ">
          <FaHeart
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              if (user && user.customerId) {
                if (isfav) {
                  removeFavourite({
                    customerId: user.customerId,
                    stockId: car.stockId,
                  });
                  setFav(!isfav);
                  return;
                }
                if (user.phone) {
                  addFavourite({
                    customerId: user.customerId,
                    stockId: car.stockId,
                  });
                  setFav(!isfav);
                  return;
                }
                toast.info("Make a profile to add to your favorites!");
                return;
              }
              // login();
              router.push("/sign-in");
            }}
            size={"24px"}
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              color: !isfav ? "white" : "#F44336",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="w-[95%] flex flex-col gap-2 ">
          <div className="flex">
            <p className="font-bold text-[#221C63] text-[10px] ">
              <Link
                className="!max-w-full"
                href={`/global/results/${
                  car.makeName.replaceAll(" ", "-") +
                  "-" +
                  car.modelName.replaceAll(" ", "-") +
                  "-" +
                  car.year
                }/${type}/${car.stockId}`}
              >
                {" "}
                {car.listingTitle}
              </Link>
            </p>
            <div className="bg-[#221C63] mx-auto w-[40%] h-[20px] text-white px-1 flex items-center justify-center py-1 font-semibold rounded-lg text-[8px]">
              {" "}
              Stock ID: <span>{car.stockCode}</span>
            </div>
          </div>

          <div className="w-full  grid grid-cols-5  gap-x-1 gap-3">
            {type !== "machinery" && (
              <div className="flex items-center flex-col ">
                <p className="text-[6px] text-[#221C63] font-semibold ">
                  Milage
                </p>
                <p className=" p-1  flex items-center rounded-md text-[8px]">
                  <Image
                    alt="kms"
                    decoding="async"
                    src="/assets/images/kmsDriven.svg"
                    loading="lazy"
                    width={10}
                    height={10}
                    className="h-3 mr-2 "
                  />
                  {car.mileage}
                </p>
              </div>
            )}

            <div className="flex items-center flex-col ">
              <p className="text-[6px] text-[#221C63] font-semibold ">YEAR</p>
              <p className=" p-1  flex items-center rounded-md text-[8px]">
                <Image
                  decoding="async"
                  alt="year"
                  src="/assets/images/registrationYear.svg"
                  loading="lazy"
                  width={10}
                  height={10}
                  className="h-3 mr-2"
                />
                {car.year}
              </p>
            </div>
            {type == "machinery" && (
              <div>
                <p className="text-[6px] text-[#221C63] font-semibold ">
                  Opertional Hours
                </p>
                <p className=" p-1  flex items-center rounded-md text-[8px]">
                  {car.operationHours}
                </p>
              </div>
            )}
            {type !== "machinery" && (
              <div className="flex items-center flex-col ">
                <p className="text-[6px] text-[#221C63] font-semibold ">
                  Engine
                </p>
                <p className=" p-1  flex items-center rounded-md text-[8px]">
                  <PiEngineFill style={{ marginRight: "8px" }} />
                  {car.engineSize}
                </p>
              </div>
            )}
            {type !== "machinery" && (
              <div className="flex items-center flex-col ">
                <p className="text-[6px] text-[#221C63] font-semibold ">
                  Transmission
                </p>
                <p className=" p-1  flex items-center rounded-md text-[8px]">
                  <Image
                    alt="transmission"
                    decoding="async"
                    src="/assets/images/transmission.svg"
                    loading="lazy"
                    width={10}
                    height={10}
                    className="h-3 mr-2"
                  />
                  {car.transmissionName}
                </p>
              </div>
            )}

            <div className="flex items-center flex-col ">
              <p className="text-[6px] text-[#221C63] font-semibold ">Fuel</p>
              <p className=" p-1  flex items-center rounded-md text-[8px] ml-3">
                <FaGasPump style={{ marginRight: "8px" }} />
                {car.typeOfFuel}
              </p>
            </div>
            {type !== "machinery" && (
              <div className="flex items-center flex-col ">
                <p className="text-[6px] text-[#221C63] font-semibold ">
                  Drivetrain
                </p>
                <p className=" p-1  flex items-center rounded-md text-[8px]">
                  <PiGearFineBold style={{ marginRight: "8px" }} />
                  {car.drivetrainType}
                </p>
              </div>
            )}
            {type !== "machinery" && (
              <div className="flex items-center flex-col ">
                <p className="text-[6px] text-[#221C63] font-semibold ">
                  Doors
                </p>
                <p className=" p-1  flex items-center rounded-md text-[8px]">
                  <GiCarDoor style={{ marginRight: "8px" }} />
                  {car.noOfDoors}
                </p>
              </div>
            )}
            {type !== "machinery" && (
              <div className="flex items-center flex-col ">
                <p className="text-[6px] text-[#221C63] font-semibold ">
                  Seats
                </p>
                <p className=" p-1  flex items-center rounded-md text-[8px]">
                  <MdAirlineSeatReclineExtra />
                  {car.noOfSeats}
                </p>
              </div>
            )}

            <div className="flex items-center flex-col ">
              <p className="text-[6px] text-[#221C63] font-semibold ">Color</p>
              <div
                style={{ backgroundColor: car.colorHex }}
                className={`border-[2px] border-black w-[30px] rounded-lg h-[10px] bg-[${car.colorHex}] mt-1`}
              ></div>
              {/* <p className=" p-1  flex items-center rounded-md ">
            <BiSolidColorFill />
            {car.colorName}</p> */}
            </div>
            <div className="flex items-center flex-col ">
              <p className="text-[6px] text-[#221C63] font-semibold ">
                {" "}
                Model Code
              </p>
              <p className=" p-1  flex items-center rounded-md text-[8px]">
                {car.modelCode}
              </p>
            </div>
          </div>
        </div>
        <div className=" border-gray-100 w-[95%] flex gap-2 flex-col justify-start items-center !h-auto ">
          {/* <div className="bg-[#221C63] mx-auto w-[70%] text-white px-3 flex xl:hidden py-1 font-semibold rounded-lg text-[8px]">
        {" "}
        Stock ID: <span>{car.stockCode}</span>
      </div> */}
          {/* <p className="flex xl:hidden text-center  font-bold text-[#221C63] text-[16px]">
        {" "}
        {car.listingTitle}
      </p> */}
          <div className="flex  w-full items-center">
            <div className="text-[#221C63] flex flex-row items-center   text-center py-2 text-[10px] font-semibold border-b border-gray-100 w-[100%] mx-auto">
              FOB Price:{" "}
              <span className="ml-2">
                {" "}
                <div className="  rounded-tl-3xl rounded-bl-3xl flex items-center  w-14 h-6">
                  {/* <div className="text-[30px] pl-4 pb-3">.</div> */}
                  <PriceFormat carPrice={car.price} />
                </div>
              </span>
            </div>
            <p className="text-[#221C63] font-semibold text-center text-[10px]">
              Total price: ASK
            </p>
          </div>

          {/* <div className="text-[#221C63] flex flex-row items-center  xl:!mt-0 text-center py-2 text-[10px] font-semibold border-b border-gray-100 w-[90%] mx-auto">
        FOB Price:{" "}
        <span className="ml-2">
          {" "}
          <div className="bg-[#221C63] text-white   rounded-tl-3xl rounded-bl-3xl flex items-center gap-3 w-28 h-6">
            <div className="text-[30px] pl-4 pb-3">.</div>
            <PriceFormat carPrice={car.price} />
          </div>
        </span>
      </div> */}
          {/* <p className="text-[#221C63] flex font-semibold text-center text-[10px] ">
        Total Price: <br /> ASK{" "}
      </p> */}
          <div className="flex items-center justify-between">
            <div className=" flex items-center  font-semibold text-[14px]">
              <Image
                src={`/assets/images/flags/${
                  countries.find(
                    (x: { countryId: any }) => x.countryId == car.locationId
                  )?.slug
                }.svg`}
                className="img-fluid mr-2"
                height={20}
                width={20}
                alt={`${car.locationName} flag`}
              />
              {car.locationName}
            </div>
            <Link className="!max-w-full" href={href}>
              <button className="text-[12px]   px-4 mb-2 py-1 rounded-full text-[#221C63] font-semibold border-[1px] border-[#221C63] ml-4 ">
                Send Offer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="transition duration-300 ease-in-out hover:scale-105 my-10 flex min-w-[220px] w-[230px] flex-col overflow-hidden border border-gray-100 bg-[#f1f5f9] shadow-md p-0 rounded-md">
    //   <div className="relative w-full h-48">
    //     <Image
    //       alt={car?.listingTitle}
    //       style={{
    //         objectFit: "cover",
    //         width: "100%",
    //         height: "100%",
    //         position: "absolute",
    //         top: "0px",
    //       }}
    //       width={285}
    //       height={400}
    //       src={car.imageUrl}
    //     />
    //     {car?.isReserved && car.purchasedById === 0 && (
    //       <div className="absolute top-0 w-full h-full">
    //         <div className="bg-[#221C63] mt-3 relative opacity-75 top-10 right-14 w-full h-7 -rotate-[50deg]">
    //           <p className="text-white text-center">Reserved</p>
    //         </div>
    //       </div>
    //     )}
    //     {car?.purchasedById !== 0 && (
    //       <div className="absolute top-0 w-full h-full">
    //         <div className="bg-red-700 mt-3 relative opacity-75 top-10 right-14 w-full h-7 -rotate-[50deg]">
    //           <p className="text-white text-center">Purchased</p>
    //         </div>
    //       </div>
    //     )}

    // <FaHeart
    //   onClick={() => {
    //     if (user && user.customerId) {
    //       if (isfav) {
    //         removeFavourite({
    //           customerId: user.customerId,
    //           stockId: car.stockId,
    //         });
    //         setFav(!isfav);
    //         return;
    //       }
    //       if (user.phone) {
    //         addFavourite({
    //           customerId: user.customerId,
    //           stockId: car.stockId,
    //         });
    //         setFav(!isfav);
    //         return;
    //       }
    //       toast.info("Make a profile to add to your favorites!");
    //       return;
    //     }
    //     // login();
    //     router.push("/sign-in");
    //   }}
    //   size={"24px"}
    //   style={{
    //     position: "absolute",
    //     top: "4px",
    //     right: "4px",
    //     color: !isfav ? "white" : "#F44336",
    //     cursor: "pointer",
    //   }}
    // />
    //   </div>
    //   <div
    //     onClick={() => {
    //       router.push(href);
    //     }}
    //     className="w-full flex flex-col px-2 cursor-pointer relative h-44"
    //   >
    //     <p className=" font-semibold text-slate-600 mt-2 ">
    //       {car.listingTitle}
    //     </p>

    //     <div
    //       className="mt-2"
    //     >
    //       <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-indigo-700/10">
    //         <img
    //           src={`/assets/images/flags/${InventoryLocation?.slug}.svg`}
    //           className="img-fluid h-[15px] mr-3"
    //           height="15px"
    //           alt={InventoryLocation?.slug}

    //         />
    //         {car.stockCode}
    //       </span>
    //     </div>

    //     <p className=" absolute bottom-3 text-white bg-[#221C63] border-[1px] border-slate-400 rounded-lg py-1 px-4">
    //       <span className="font-semibold">Price:</span>{" "}
    //       <span>
    //         <PriceFormat carPrice={car.price} />
    //       </span>
    //     </p>
    //   </div>
    // </div>
  );
}
