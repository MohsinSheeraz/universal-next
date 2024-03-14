"use client";
import agent from "@/api/agent";
import PaginationComponent from "@/components/ui/PaginationComponent";
import { Country } from "@/models/Master/Country";
import { PaginationHeader } from "@/models/Master/Pagination";
import { StockCars } from "@/models/StockCars";
import { useUserStore } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import MobileCardCars from "./MobileCardCars";
import WebCardCars from "./WebCardCars";
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
    GetStock(filterString).then((r) => { });
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

      <MobileCardCars
        searchdata={searchData}
        type={type}
        fav={fav}
        locations={locations}
      />
      <WebCardCars
        searchdata={searchData}
        type={type}
        fav={fav}
        locations={locations}
        router={router}
      />

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
