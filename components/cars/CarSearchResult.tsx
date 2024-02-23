"use client";
import agent from "@/api/agent";
import PaginationComponent from "@/components/ui/PaginationComponent";
import { Country } from "@/models/Master/Country";
import { PaginationHeader } from "@/models/Master/Pagination";
import { StockCars } from "@/models/StockCars";
import { useUserStore } from "@/store/store";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";
import { PiEngineFill, PiGearFineBold } from "react-icons/pi";
import LikeComponent from "../ui/LikeComponent";
import Reserved from "@/app/(dashboard-layout)/dashboard/components/Forms/reserved";
import reserved from "@/public/assets/images/reserved.png";
interface Props {
  locations: Country[];
  params: URLSearchParams;
}

export default function CarSearchResult({ locations, params }: Props) {
  const searchParams: URLSearchParams = params;
  const type = useParams();
  const [searchData, setSearchData] = useState<StockCars[]>([]);
  const [sort, setSort] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationData, setPaginationData] = useState<PaginationHeader>({
    CurrentPage: 1,
    TotalPages: 0,
    PageSize: 25,
    TotalCount: 0,
    HasPreviousPage: false,
    HasNextPage: false,
  });

  function compareCars(car1: StockCars, car2: StockCars, sortCriteria: number) {
    switch (sortCriteria) {
      case 1:
        return car1.listingTitle.localeCompare(car2.listingTitle);
      case 2:
        return car2.listingTitle.localeCompare(car1.listingTitle);
      // case 3:
      //   return car1.modelName.localeCompare(car2.modelName);
      // case 4:
      //   return car2.modelName.localeCompare(car1.modelName);
      case 5:
        return car1.year - car2.year;
      case 6:
        return car2.year - car1.year;
      case 7:
        return car1.mileage - car2.mileage;
      case 8:
        return car2.mileage - car1.mileage;
      case 9:
        return car1.engineSize - car2.engineSize;
      case 10:
        return car2.engineSize - car1.engineSize;
      case 11:
        return car1.price - car2.price;
      case 12:
        return car2.price - car1.price;
      default:
        return 0; // Default sorting order (no sorting)
    }
  }

  useEffect(() => {
    if (sort >= 1) {
      const sortedData = [...searchData];
      sortedData.sort((car1, car2) => compareCars(car1, car2, sort));
      setSearchData(sortedData);
    }
  }, [sort, paginationData]);
  const [fav, setFav] = useState<any>([]);
  const { user } = useUserStore();
  useEffect(() => {
    const getData = async () => {
      const favorite = await agent.LoadData.favouriteList(user.customerId);
      setFav(favorite.data);
    };
    getData();
  }, []);

  const getData = async (paramURL: string) => {
    switch (type?.type) {
      case "trucks":
        return await agent.LoadData.truckList(paramURL, currentPage);
      case "machinery":
        return await agent.LoadData.machineryList(paramURL, currentPage);

      default:
        return await agent.LoadData.stockList(paramURL, currentPage);
    }
  };
  useEffect(() => {
    const GetStock = async (paramURL: string) => {
      try {
        const { data, paginationHeader } = await getData(paramURL);
        if (paginationHeader) {
          setPaginationData(paginationHeader);
        }
        setSearchData(data);
      } catch (error: any) {
        console.log(error);
      }
    };

    const paramsArray = searchParams.toString().split(",");

    const queryStringParts = [];
    for (let i = 0; i < paramsArray.length; i += 2) {
      queryStringParts.push(`${paramsArray[i]}=${paramsArray[i + 1]}`);
    }

    const filterString = queryStringParts.join("&");
    GetStock(filterString).then((r) => console.log(r));
  }, [searchParams, currentPage]);
  const router = useRouter();
  return (
    <>
      <PaginationComponent
        isTruck={false}
        setSort={setSort}
        currentPage={paginationData.CurrentPage}
        totalPost={paginationData.TotalCount}
        postPerPage={paginationData.PageSize}
        setCurrentPage={setCurrentPage}
      />
      <div className="w-full flex flex-wrap flex-row xl:flex-col gap-4">
        {Array.isArray(searchData) &&
          searchData.map((car, i) => (
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
              className={`w-[200px] relative xl:static ${i % 2 ? "bg-slate-100" : "bg-white"} !pt-2 xl:!pt-0 xl:w-[95%] px-[10px]  items-center gap-3 shadow-md m-auto flex flex-col xl:flex-row h-[460px] xl:h-[200px] border border-gray-100 rounded-3xl `}
            >
              {/* <div className="relative !pb-0 xl:!pb-10"> */}
              <Image
                src={car.imageUrl}
                width={181}
                height={176}
                className="rounded-3xl"
                style={{
                  objectFit: "cover",
                  // position: "absolute",
                  width: "181px",
                  height: "176px",
                }}
                alt={car.listingTitle}
              />
              {/* </div> */}
              {car?.isReserved && (
                <div className="absolute">
                  <Image className="w-[180px]" src={reserved} alt="" />
                </div>
              )}
              <div className="w-full  h-full xl:relative flex xl:items-center justify-center xl:justify-between">
                <div className="absolute top-0 right-[40%] bg-[#221C63] text-white px-3 hidden xl:flex py-1 font-semibold rounded-b-lg text-[14px]">
                  {" "}
                  Stock ID: <span>{car.stockCode}</span>
                </div>
                <div className="absolute bottom-2 right-[22%] flex  font-semibold text-[14px]">
                  <Image
                    src={`/assets/images/flags/${
                      locations.find((x) => x.countryId == car.locationId)?.slug
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
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Engine
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <PiEngineFill style={{ marginRight: "8px" }} />
                        {car.engineSize}
                      </p>
                    </div>
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
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Fuel
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <FaGasPump style={{ marginRight: "8px" }} />
                        {car.typeOfFuel}
                      </p>
                    </div>
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Drivetrain
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <PiGearFineBold style={{ marginRight: "8px" }} />
                        {car.drivetrainType}
                      </p>
                    </div>
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Doors
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <GiCarDoor style={{ marginRight: "8px" }} />
                        {car.noOfDoors}
                      </p>
                    </div>
                    <div className="flex items-center flex-col ">
                      <p className="!text-[10px] text-[#221C63] font-semibold xl:!text-[15px] 2xl:!text-base">
                        Seats
                      </p>
                      <p className=" p-1  flex items-center rounded-md ">
                        <MdAirlineSeatReclineExtra />
                        {car.noOfSeats}
                      </p>
                    </div>
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
                <div className="xl:border-l-[1px] border-gray-100 w-[90%] xl:w-[20%] flex gap-2 xl:gap-0 flex-col justify-start xl:justify-between xl:items-center !h-auto xl:!h-full ">
                  <div className="bg-[#221C63] text-white px-3 flex xl:hidden py-1 font-semibold rounded-lg text-[14px]">
                    {" "}
                    Stock ID: <span>{car.stockCode}</span>
                  </div>
                  <p className="flex xl:hidden  font-bold text-[#221C63] text-[16px]">
                    {" "}
                    {car.listingTitle}
                  </p>
                  <p className="text-[#221C63] flex !mt-4 xl:!mt-0 text-center py-2 text-[14px] font-semibold border-b border-gray-100 w-[90%] mx-auto">
                    FOB Price:{" "}
                    <span className="ml-2">
                      {" "}
                      <div className="bg-[#221C63] text-white  rounded-tl-3xl rounded-bl-3xl flex items-center gap-3 w-24 h-6">
                        <div className="text-[30px] pl-4 pb-3">.</div>
                        <PriceFormat carPrice={car.price} />
                      </div>
                    </span>
                  </p>
                  <p className="text-[#221C63] font-semibold text-center text-[18px] xl:text-[20px]">
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
                    <button className="text-[18px] mt-3 xl:mt-0 px-4 mb-2 py-1 rounded-full text-[#221C63] font-semibold border-[1px] border-[#221C63]  ">
                      Send Offer
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <PaginationComponent
        isTruck={false}
        setSort={setSort}
        currentPage={paginationData.CurrentPage}
        totalPost={paginationData.TotalCount}
        postPerPage={paginationData.PageSize}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
