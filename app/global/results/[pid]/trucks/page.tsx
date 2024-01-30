import agent from "@/api/agent";
import TruckSearchResult from "@/components/trucks/TruckSearchResult";
import HomeUI from "@/components/ui/HomeUI";

interface Props {
  searchParams: {
    makeID: number;
    axleID: number;
    modelID: number;
    countryID: number;
    price: number;
    maxMileage: number;
    toYear: number;
    searchTerm: string;
    //searchFromBox:string
  };
}
const GetLocations = async () => {
  const result = await agent.LoadData.inventoryLocationList(); // db.tblBodyTypes.findMany({where: {isActive:true}});
  return result.data;
};

const GetBodyTypes = async () => {
  const result = await agent.LoadData.bodyTypeList(); // db.tblBodyTypes.findMany({where: {isActive:true}});
  return result.data;
};

const GetCarMakes = async () => {
  const result = await agent.LoadData.carMakeList(); //db.tblMakes.findMany({where: {isActive:true}} );
  return result.data;
};

export default async function ResultPage({ searchParams }: Props) {
  const params = new URLSearchParams();

  if (searchParams.makeID) params.set("MakeID", searchParams.makeID.toString());
  if (searchParams.modelID)
    params.set("ModelID", searchParams.modelID.toString());
  if (searchParams.toYear) params.set("ToYear", searchParams.toYear.toString());
  //if (searchParams.minMileage) params.set("MinMileage", searchParams.minMileage.toString())
  if (searchParams.maxMileage)
    params.set("MaxMileage", searchParams.maxMileage.toString());
  if (searchParams.searchTerm)
    params.set("SearchTerm", searchParams.searchTerm);
  params.set("OrderBy", "stockid%20desc");

  const locations = await GetLocations();
  const bodyTypes = await GetBodyTypes();
  const carMake = await GetCarMakes();

  return (
    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
      {/*<DetailedSearchBox />*/}
      <HomeUI makeList={carMake} bodyTlist={bodyTypes} />
      {/*<SearchingCriteria resultCount={cars.length} locations={locations} />*/}
      <TruckSearchResult params={params} locations={locations} />
    </div>
  );
}
