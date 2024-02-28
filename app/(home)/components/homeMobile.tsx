import agent from "@/api/agent";
import { GetBodyTypes } from "@/app/global/results/[pid]/[type]/list/[id]/components/loadData";
import TabButtons from "./buttons";
const GetLocations = async () => {
  const res = await agent.LoadData.countryList(); //return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
  return res.data;
};
const GetCarMakes = async () => {
  const res = await agent.LoadData.carMakeList(); //return await prisma.tblMakes.findMany({where: {isActive:true}} );
  return res.data;
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
export default async function HomeMobile() {
  const makes = await GetCarMakes();
  const locations = await GetLocations();
  const bodyTypes = await GetBodyTypes();
  // console.log("makes", makes.data);
  const drivetrain = await GetDrivetrain();
  const color = await GetColors();
  const transmission = await GetTransmission();
  const fuel = await GetFuel();
  return (
    <div className="!block sm:!hidden">
      <TabButtons
        locations={locations}
        drivetrain={drivetrain}
        color={color}
        transmission={transmission}
        fuel={fuel}
        bodyTlist={bodyTypes}
        makeList={makes}
      />
    </div>
  );
}
