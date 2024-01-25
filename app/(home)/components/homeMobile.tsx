import agent from "@/api/agent";
import Link from "next/link";
import React, { useState } from "react";
import TabButtons from "./buttons";
const GetLocations = async () => {
  return await agent.LoadData.countryList(); //return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
};
const GetCarMakes = async () => {
  return await agent.LoadData.carMakeList(); //return await prisma.tblMakes.findMany({where: {isActive:true}} );
};
export default async function HomeMobile() {
  const makes = await GetCarMakes();
  const locations = await GetLocations();
  // console.log("makes", makes.data);

  return (
    <div className="!block sm:!hidden">
      <TabButtons makes={makes.data} locations={locations.data} />
    </div>
  );
}
