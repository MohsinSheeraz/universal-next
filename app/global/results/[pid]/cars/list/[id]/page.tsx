"use client";
import agent from "@/api/agent";
import CarSearchResult from "@/components/cars/CarSearchResult";
import HomeUI from "@/components/ui/HomeUI";
import { BodyType } from "@/models/Master/BodyType";
import { Country } from "@/models/Master/Country";
import { Make } from "@/models/Master/Make";
import content from "@/utils/categoryContent.json";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GetBodyTypes, GetCarMakes, GetLocations } from "./components/loadData";
interface Props {
  searchParams: {
    makeID: number;
    modelID: number;
    countryID: number;
    steeringID: number;
    bodyTypeID: number;
    minPrice: number;
    maxPrice: number;
    minMileage: number;
    maxMileage: number;
    fromYear: number;
    toYear: number;
    searchTerm: string;
    //searchFromBox:string
  };
}

const GetFilteredCars = async (filter: string) => {
  return await agent.LoadData.stockList(filter, 1);
  //db.tblMasterCountry.findMany({where: {IsActive:true}} );
};

// const GetLocations = async () => {
//     const result = await agent.LoadData.inventoryLocationList(); // db.tblBodyTypes.findMany({where: {isActive:true}});
//     return result.data;
// };

// const GetBodyTypes = async () => {
//     const result = await agent.LoadData.bodyTypeList(); // db.tblBodyTypes.findMany({where: {isActive:true}});
//     return result.data;
// };

// const GetCarMakes = async () => {
//     const result = await agent.LoadData.carMakeList(); //db.tblMakes.findMany({where: {isActive:true}} );
//     return result.data;
// };

export default function ResultPage({ searchParams }: Props) {
  // const router = useRouter()
  const [bodyTypes, setbodytypes] = useState<BodyType[]>([]);
  const [makes, setmakes] = useState<Make[]>([]);
  const [locations, setlocations] = useState<Country[]>([]);
  const { id, pid } = useParams();
  const params = new URLSearchParams();
  // console.log("search", searchParams)
  // if (!searchParams) {
  //     console.log("not")
  //     params.set("MakeID", id.toString());
  // }
  // console.log(id)
  if (searchParams.bodyTypeID)
    params.set("BodyTypeID", searchParams.bodyTypeID.toString());
  if (searchParams.makeID) params.set("MakeID", searchParams.makeID.toString());
  if (searchParams.countryID)
    params.set("countryID", searchParams.countryID.toString());
  if (searchParams.modelID)
    params.set("ModelID", searchParams.modelID.toString());
  if (searchParams.steeringID)
    params.set("SteeringID", searchParams.steeringID.toString());
  if (searchParams.minPrice)
    params.set("MinPrice", searchParams.minPrice.toString());
  if (searchParams.maxPrice)
    params.set("MaxPrice", searchParams.maxPrice.toString());
  if (searchParams.fromYear)
    params.set("FromYear", searchParams.fromYear.toString());
  if (searchParams.toYear) params.set("ToYear", searchParams.toYear.toString());
  if (searchParams.minMileage)
    params.set("MinMileage", searchParams.minMileage.toString());
  if (searchParams.maxMileage)
    params.set("MaxMileage", searchParams.maxMileage.toString());
  if (searchParams.searchTerm)
    params.set("SearchTerm", searchParams.searchTerm);
  if (id) params.set("MakeID", id.toString());
  params.set("OrderBy", "stockid%20desc");

  useEffect(() => {
    const getData = async () => {
      const bodyTypes = await GetBodyTypes();
      const makes = await GetCarMakes();
      const locations = await GetLocations();
      setbodytypes(bodyTypes);
      setmakes(makes);
      setlocations(locations);
    };
    getData();
  }, []);

  const categoryContent = content.find((itm) => itm.tag === pid);
  // console.log(filter)
  return (
    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
      {/*<DetailedSearchBox />*/}
      <HomeUI makeList={makes} bodyTlist={bodyTypes} />
      {/*<SearchingCriteria resultCount={cars.length} locations={locations} />*/}
      <CarSearchResult params={params} locations={locations} />
      {categoryContent && categoryContent?.tag && (
        <div className="py-3 px-6">
          <h1 className="mb-2">{categoryContent?.heading}</h1>
          <p>{categoryContent?.paragraph}</p>
        </div>
      )}
    </div>
  );
}
