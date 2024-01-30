"use client";
import agent from "@/api/agent";
import LikeComponent from "@/components/ui/LikeComponent";
import PaginationComponent from "@/components/ui/PaginationComponent";
import { Country } from "@/models/Master/Country";
import { PaginationHeader } from "@/models/Master/Pagination";
import { StockCars } from "@/models/StockCars";
import reservedimg from "@/public/assets/images/reserved.png";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidColorFill } from "react-icons/bi";
import { FaGasPump } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngineFill, PiGearFineBold } from "react-icons/pi";
interface Props {
  locations: Country[];
  params: URLSearchParams;
}

export default function CarSearchResult({ locations, params }: Props) {
  const searchParams: URLSearchParams = params;
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
  useEffect(() => {
    // Assuming you have an API function called fetchResults
    const GetStock = async (paramURL: string) => {
      try {
        const { data, paginationHeader } = await agent.LoadData.stockList(
          paramURL,
          currentPage
        );

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
      {Array.isArray(searchData) &&
        searchData.map((car) => (
          <div
            key={car.stockId}
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
          >
            <div className="row my-5 ">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                <div className="searched-carimage  ">
                  <Link
                    href={`/global/results/${
                      car.makeName.replaceAll(" ", "-") +
                      "-" +
                      car.modelName.replaceAll(" ", "-") +
                      "-" +
                      car.year
                    }/cars/${car.stockId}`}
                  >
                    <div className="relative min-w-[150px] min-h-[150px]  md:h-[250px] overflow-hidden ">
                      <Image
                        src={car.imageUrl ?? ""}
                        className="mb-4"
                        width={150}
                        height={150}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          top: "0px",
                        }}
                        alt=""
                      />
                      {
                        car?.isReserved && (
                          <Image
                            src={reservedimg}
                            className="mb-4 opacity-60"
                            width={150}
                            height={150}
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              top: "0px",
                            }}
                            alt=""
                          />
                        )
                        // <div className="absolute top-0 w-full h-full">
                        //   <div className="bg-[#221C63]  relative  opacity-75 top-10 right-14 w-full h-7 -rotate-[50deg]">
                        //     <h1 className="text-white text-[12px] md:text-[16px] text-center">
                        //       Reserved
                        //     </h1>

                        //   </div>
                        // </div>
                      }
                    </div>
                  </Link>

                  <h4 className="ml-5 !text-[10px] sm:!text-[12px] md:!text-[12px] lg:text-[14px] xl:!text-[16px] mt-2">
                    STOCK ID :{" "}
                    <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-400 px-2 py-1 text-l font-medium text-blue-950">
                      {car.stockCode}
                    </span>
                  </h4>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 d-lg-block d-none text-[10px] xl:text-[15px] 2xl:text-base">
                <div className="car-details">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <Link
                        href={`/global/results/${
                          car.makeName.replaceAll(" ", "-") +
                          "-" +
                          car.modelName.replaceAll(" ", "-") +
                          "-" +
                          car.year
                        }/cars/${car.stockId}`}
                      >
                        <h6 className="listname font-bold uppercase">
                          {car.listingTitle}
                        </h6>
                      </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="car-country">
                        <h6 className="text-right">
                          <span className="font-bold inline-flex">
                            <Image
                              src={`/assets/images/flags/${
                                locations.find(
                                  (x) => x.countryId == car.locationId
                                )?.slug
                              }.svg`}
                              className="img-fluid mr-2"
                              height={20}
                              width={20}
                              alt={`${car.locationName} flag`}
                            />
                            {car.locationName}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="tabrow  row pt-2  ">
                    <div className="row specsrow ">
                      <div className="col-sm specs">
                        <h4 className="!text-[10px]  xl:!text-[15px] 2xl:!text-base">
                          Mileage
                        </h4>
                        <span className="label-text  p-1  flex items-center rounded-md mr-2 lg:mr-0 ml-0 xl:ml-0 2xl:ml-0">
                          <img
                            decoding="async"
                            src="/assets/images/kmsDriven.svg"
                            loading="eager"
                            className="h-6 mr-2"
                          />
                          {car.mileage}
                        </span>
                      </div>
                      <div className="col-sm specs">
                        <h4 className="!text-[10px]  xl:!text-[15px] 2xl:!text-base">
                          YEAR
                        </h4>
                        <span className="label-text  p-1  flex items-center rounded-md mr-2 lg:mr-0 lg:ml-2">
                          <img
                            decoding="async"
                            src="/assets/images/registrationYear.svg"
                            loading="eager"
                            className="h-6 mr-2"
                          />
                          {car.year}{" "}
                        </span>
                      </div>
                      <div className="col-sm specs">
                        <h4 className="!text-[10px]  xl:!text-[15px] 2xl:!text-base">
                          Engine
                        </h4>
                        <span className="label-text  p-1 flex items-center rounded-md ml-4">
                          {/*<img decoding="async" src="/assets/images/engineDisplacement.svg" loading="eager"className="h-6 mr-2"/>*/}
                          <span className="h-auto mr-2">
                            <PiEngineFill />
                          </span>
                          {car.engineSize}
                        </span>
                      </div>
                      <div className="col-sm specs">
                        <h4 className="!text-[10px]  xl:!text-[15px] 2xl:!text-base">
                          Transmission
                        </h4>
                        <span className="label-text  p-1 flex gap-1 items-center rounded-md ml-0">
                          <img
                            decoding="async"
                            src="/assets/images/transmission.svg"
                            loading="eager"
                            className="h-6"
                          />
                          {car.transmissionName}{" "}
                        </span>
                      </div>
                      {/*<div className="col-sm specs">*/}
                      {/*    <h4>Country</h4>*/}
                      {/*    <span className="label-text p-1 flex items-center rounded-md ml-5">*/}
                      {/*    /!*<img decoding="async" src={`/assets/images/flags/${location.slug}.svg`} loading="eager"className="h-4 mr-2"/>*!/*/}
                      {/*        {car.locationName} </span>*/}
                      {/*</div>*/}
                      <div className="col-sm specs">
                        <h4 className=" flex items-center rounded-md  !text-[8px] xl:!text-[15px] 2xl:!text-base ">
                          Fuel
                        </h4>
                        <span className="label-text  p-1 flex items-center rounded-md">
                          <span className="h-auto mr-2">
                            <FaGasPump />
                          </span>
                          {car.typeOfFuel}
                        </span>
                      </div>
                    </div>
                    <div className="row specsrow ">
                      <div className="col-sm specs">
                        <h4 className="!text-[10px]  xl:!text-[15px] 2xl:!text-base">
                          Drivetrain
                        </h4>
                        <span className="label-text  p-1 flex items-center rounded-md ml-5">
                          <span className="h-auto mr-2">
                            <PiGearFineBold />
                          </span>
                          {car.drivetrainType}
                        </span>
                      </div>
                      <div className="col-sm specs">
                        <h4 className="!text-[10px] xl:!text-[15px] 2xl:!text-base">
                          Doors
                        </h4>
                        <span className="label-text  p-1 flex items-center rounded-md ml-5">
                          <span className="h-auto mr-2">
                            <GiCarDoor />
                          </span>
                          {car.noOfDoors}
                        </span>
                      </div>
                      <div className="col-sm specs">
                        <h4 className="!text-[10px]  xl:!text-[15px] 2xl:!text-base">
                          Seats
                        </h4>
                        <span className="label-text  p-1 flex items-center rounded-md ml-5">
                          <span className="h-auto mr-2">
                            <MdAirlineSeatReclineExtra />
                          </span>
                          {car.noOfSeats}{" "}
                        </span>
                      </div>
                      <div className="col-sm specs">
                        <h4 className="!text-[10px]  xl:!text-[15px] 2xl:!text-base">
                          Color
                        </h4>
                        <span className="label-text  p-1 flex items-center rounded-md ml-5">
                          <span className="h-auto mr-2">
                            <BiSolidColorFill />
                          </span>
                          {car.colorName}
                        </span>
                      </div>
                      <div className="col-sm specs">
                        <h4 className="!text-[10px]  xl:!text-[15px] 2xl:!text-base">
                          Model Code
                        </h4>
                        <span className="label-text p-1 flex items-center rounded-md ml-5">
                          {/*<span className="h-6 mr-2"><AiOutlineBarcode /></span>*/}
                          {car.modelCode}
                        </span>
                      </div>
                      {/*<div className="col-sm specs">*/}
                      {/*    <h4>Engine Number</h4>*/}
                      {/*    <span className="label-text  p-1 flex items-center rounded-md ml-5">*/}
                      {/*      /!*<span className="h-6 mr-2"><PiEngineFill /></span>*!/*/}
                      {/*        {car.engineNumber}</span>*/}

                      {/*</div>*/}
                    </div>
                  </div>
                  <div className="carlistfeatures row pt-2">
                    <div className="col-md-8 flist">
                      {/*<CarOptionList optionsMaster={optionsMaster} stockID={car.stockId}  />*/}
                      {/*<ul>*/}
                      {/*    {*/}

                      {/*    }*/}
                      {/*    <li>Navigation System</li>*/}
                      {/*    <li>Rear Camera</li>*/}
                      {/*    <li>Power Steering</li>*/}
                      {/*    <li>Air Bags</li>*/}
                      {/*    <li>Power Windows</li>*/}
                      {/*    <li>*/}
                      {/*        <Link href="#">more...</Link>*/}
                      {/*    </li>*/}
                      {/*</ul>*/}
                    </div>
                    <div className="col-md-4 atf">
                      <div className="addfav">
                        <h5>
                          {/*<Link href="#" scroll={false}>*/}

                          <LikeComponent fav={fav} car={car.stockId} />
                          {/*</Link>*/}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-8 col-sm-8 col-7 grid content-start 2xl:content-center ">
                <div className="car-inquiry items-center ">
                  {/*<Link href={`/global/results/${car.stockId}`}><h6 className="listname">{car.ListingTitle}</h6></Link>*/}
                  <div className="fprice">
                    <h6 className="listname font-bold text-[12px] sm:text-[20px] lg:text-[12px] xl:text-[20px]  uppercase pl-2">
                      {car.listingTitle}
                    </h6>
                    <h6 className="font-bold text-[12px] sm:text-[20px]  lg:text-[12px] xl:text-[16px]  mt-0 mb-1 2xl:!mt-2 2xl:!mb-2 pl-2 mt-2">
                      FOB Price:
                      <span className="mb-5 text-[12px] sm:text-[20px] lg:text-[12px] xl:text-[20px] ">
                        <PriceFormat carPrice={car.price} />
                      </span>
                    </h6>
                  </div>
                  <hr />
                  {/*<div className="notice">*/}
                  {/*    <h6>*/}
                  {/*        <span className="inline-flex items-center">*/}
                  {/*           <div*/}
                  {/*               className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"*/}
                  {/*               role="alert">*/}
                  {/*            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3"*/}
                  {/*                 fill="currentColor" viewBox="0 0 20 20"*/}
                  {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                  {/*                <path fill-rule="evenodd"*/}
                  {/*                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"*/}
                  {/*                      clip-rule="evenodd"></path>*/}
                  {/*            </svg>*/}
                  {/*            <span className="sr-only">Info</span>*/}
                  {/*            <div className="font-bold">*/}
                  {/*                Select your Destination Country and Port*/}
                  {/*            </div>*/}
                  {/*        </div>*/}
                  {/*        </span>*/}

                  {/*        </h6>*/}
                  {/*</div>*/}
                  <div className="askprice ">
                    <h6 className="text-[12px] sm:text-[20px] lg:text-[12px] xl:text-[16px] mt-0 2xl:!mt-2 pl-1 mt-2">
                      TOTAL Price:
                      <span>ASK</span>
                    </h6>
                  </div>
                  <h4 />

                  <Link
                    href={`/global/results/${
                      car.makeName.replaceAll(" ", "-") +
                      "-" +
                      car.modelName.replaceAll(" ", "-") +
                      "-" +
                      car.year
                    }/cars/${car.stockId}`}
                  >
                    <button className="offerbtn ml-2">
                      <span className="font-bold"> Send Offer</span>
                    </button>
                  </Link>
                </div>
              </div>
              <hr className="mt-2" />
            </div>
            {/* <hr /> */}
          </div>
        ))}
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
