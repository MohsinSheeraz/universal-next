import agent from "@/api/agent";
import MachinerySearchResult from "@/components/machinery/MachinerySearchResult";
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
    DrivetrainId: number;
    TransmissionId: number;
    FuelId: Number;
    ColorId: Number;
    steeringID: number;
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

  if (searchParams.makeID) params.set("MakeID", searchParams.makeID.toString());
  if (searchParams.modelID)
    params.set("ModelID", searchParams.modelID.toString());
  if (searchParams.toYear) params.set("ToYear", searchParams.toYear.toString());
  //if (searchParams.minMileage) params.set("MinMileage", searchParams.minMileage.toString())
  if (searchParams.maxMileage)
    params.set("MaxMileage", searchParams.maxMileage.toString());
  if (searchParams.searchTerm)
    params.set("SearchTerm", searchParams.searchTerm);
  if (searchParams.countryID)
    params.set("countryID", searchParams.countryID.toString());
  if (searchParams.DrivetrainId)
    params.set("DrivetrainId", searchParams.DrivetrainId.toString());
  if (searchParams.FuelId) params.set("FuelId", searchParams.FuelId.toString());
  if (searchParams.TransmissionId)
    params.set("TransmissionId", searchParams.TransmissionId.toString());
  if (searchParams.ColorId)
    params.set("ColorId", searchParams.ColorId.toString());
  if (searchParams.steeringID)
    params.set("SteeringID", searchParams.steeringID.toString());
  params.set("OrderBy", "stockid%20desc");

  const locations = await GetLocations();
  const bodyTypes = await GetBodyTypes();
  const carMake = await GetCarMakes();
  const drivetrain = await GetDrivetrain();
  const color = await GetColors();
  const transmission = await GetTransmission();
  const fuel = await GetFuel();

  return (
    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
      {/*<DetailedSearchBox />*/}
      <HomeUI
        drivetrain={drivetrain}
        color={color}
        transmission={transmission}
        fuel={fuel}
        makeList={carMake}
        bodyTlist={bodyTypes}
      />
      {/*<SearchingCriteria resultCount={cars.length} locations={locations} />*/}
      <MachinerySearchResult params={params} locations={locations} />
    </div>
  );
}
