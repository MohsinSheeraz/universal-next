import agent from "@/api/agent";
import CarSearchResult from "@/components/cars/CarSearchResult";
import HomeUI from "@/components/ui/HomeUI";

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
    modelCode: string;
    DrivetrainId: number;
    TransmissionId: number;
    FuelId: Number;
    ColorId: Number;
    MaxEngineSize: number;
    MinEngineSize: number;
    //searchFromBox:string
  };
}

const GetFilteredCars = async (filter: string) => {
  return await agent.LoadData.stockList(filter, 1);
  //db.tblMasterCountry.findMany({where: {IsActive:true}} );
};

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
const GetDrivetrain = async () => {
  const result = await agent.LoadData.drtivetrainList(); //db.tblMakes.findMany({where: {isActive:true}} );
  return result.data;
};
const GetColors = async () => {
  const result = await agent.LoadData.colorsList(); //db.tblMakes.findMany({where: {isActive:true}} );
  return result.data;
};
const GetTransmission = async () => {
  const result = await agent.LoadData.transmissionsList(); //db.tblMakes.findMany({where: {isActive:true}} );
  return result.data;
};
const GetFuel = async () => {
  const result = await agent.LoadData.fuelTypeList(); //db.tblMakes.findMany({where: {isActive:true}} );
  return result.data;
};
export default async function ResultPage({ searchParams }: Props) {
  const params = new URLSearchParams();
  if (searchParams.bodyTypeID)
    params.set("BodyTypeID", searchParams.bodyTypeID.toString());
  if (searchParams.makeID) params.set("MakeID", searchParams.makeID.toString());
  if (searchParams.countryID)
    params.set("countryID", searchParams.countryID.toString());
  if (searchParams.modelID)
    params.set("ModelID", searchParams.modelID.toString());
  if (searchParams.modelCode)
    params.set("modelCode", searchParams.modelCode.toString());
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
  if (searchParams.DrivetrainId)
    params.set("DrivetrainId", searchParams.DrivetrainId.toString());
  if (searchParams.FuelId) params.set("FuelId", searchParams.FuelId.toString());
  if (searchParams.TransmissionId)
    params.set("TransmissionId", searchParams.TransmissionId.toString());
  if (searchParams.ColorId)
    params.set("ColorId", searchParams.ColorId.toString());
  if (searchParams.MinEngineSize)
    params.set("MinEngineSize", searchParams.MinEngineSize.toString());
  if (searchParams.MaxEngineSize)
    params.set("MaxEngineSize", searchParams.MaxEngineSize.toString());
  if (searchParams.searchTerm)
    params.set("SearchTerm", searchParams.searchTerm);
  params.set("OrderBy", "stockid%20desc");

  const bodyTypes = await GetBodyTypes();
  const makes = await GetCarMakes();
  const locations = await GetLocations();
  const drivetrain = await GetDrivetrain();
  const color = await GetColors();
  const transmission = await GetTransmission();
  const fuel = await GetFuel();
  //console.log(filter)
  return (
    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
      {/*<DetailedSearchBox />*/}
      <HomeUI
        drivetrain={drivetrain}
        color={color}
        transmission={transmission}
        fuel={fuel}
        bodyTlist={bodyTypes}
        makeList={makes}
      />
      {/*<SearchingCriteria resultCount={cars.length} locations={locations} />*/}
      <CarSearchResult params={params} locations={locations} />
    </div>
  );
}
