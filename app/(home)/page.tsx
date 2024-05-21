import agent from "@/api/agent";
import HomeMobile from "./components/homeMobile";
import HomeDesktop from "./components/homedesktop";

const GetStock = async () => {
  const result = await agent.LoadData.homepageStockList(); //db.tblCars.findMany({where: {IsActive:true}});
  return result.data;
};

const GetTrucks = async () => {
  const result = await agent.LoadData.truckList(
    "pageNumber=1&orderby=stockid%20desc&PAGESIZE=10",
    1
  ); //db.tblCars.findMany({where: {IsActive:true}});
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
const GetLocations = async () => {
  const res = await agent.LoadData.countryList(); //return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
  return res.data;
};
const GetVehicleCategory = async () => {
  const res = await agent.LoadData.vehicleCategoryList(); //return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
  return res.data;
};
export default async function Home() {
  const stocks = await GetStock();
  const topTrucks = await GetTrucks();
  const bodyTypes = await GetBodyTypes();
  const makes = await GetCarMakes();
  const drivetrain = await GetDrivetrain();
  const color = await GetColors();
  const transmission = await GetTransmission();
  const fuel = await GetFuel();
  const locations = await GetLocations();
  const vehicleCategory = await GetVehicleCategory();

  return (
    <>
      <HomeDesktop vehicleCategory={vehicleCategory} locations={locations} bodyTypes={bodyTypes} makes={makes} color={color} transmission={transmission} drivetrain={drivetrain} fuel={fuel} stockcars={stocks} trucks={topTrucks} />
      <HomeMobile vehicleCategory={vehicleCategory} bodyTypes={bodyTypes} makes={makes} color={color} transmission={transmission} drivetrain={drivetrain} fuel={fuel} locations={locations} />
    </>
  );
}
