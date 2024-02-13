"use client";
import MachinerySearchResult from "@/components/machinery/MachinerySearchResult";
import HomeUI from "@/components/ui/HomeUI";
import { BodyType } from "@/models/Master/BodyType";
import { Make } from "@/models/Master/Make";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  GetBodyTypes,
  GetCarMakes,
  GetColors,
  GetDrivetrain,
  GetFuel,
  GetLocations,
  GetTransmission,
} from "../../../cars/list/[id]/components/loadData";

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




export default async function ResultPage({ searchParams }: Props) {
  const { id } = useParams();
  const params = new URLSearchParams();
  const [bodyTypes, setbodytypes] = useState<BodyType[]>([]);
  const [carMake, setmakes] = useState<Make[]>([]);
  const [locations, setlocations] = useState<any>([]);
  const [fuel, setfuel] = useState<any[]>([]);
  const [transmission, settransmission] = useState<any[]>([]);
  const [color, setcolor] = useState<any>([]);
  const [drivetrain, setdrivetrain] = useState<any>([]);

  if (searchParams.makeID) params.set("MakeID", searchParams.makeID.toString());
  if (searchParams.modelID)
    params.set("ModelID", searchParams.modelID.toString());
  if (searchParams.toYear) params.set("ToYear", searchParams.toYear.toString());
  //if (searchParams.minMileage) params.set("MinMileage", searchParams.minMileage.toString())
  if (searchParams.maxMileage)
    params.set("MaxMileage", searchParams.maxMileage.toString());
  if (searchParams.searchTerm)
    params.set("SearchTerm", searchParams.searchTerm);
  if (id) params.set("MakeID", id.toString());
  params.set("DrivetrainId", searchParams.DrivetrainId.toString());
  if (searchParams.FuelId) params.set("FuelId", searchParams.FuelId.toString());
  if (searchParams.TransmissionId)
    params.set("TransmissionId", searchParams.TransmissionId.toString());
  if (searchParams.ColorId)
    params.set("ColorId", searchParams.ColorId.toString());
  if (searchParams.steeringID)
    params.set("SteeringID", searchParams.steeringID.toString());
  params.set("OrderBy", "stockid%20desc");

  useEffect(() => {
    const getData = async () => {
      const bodyTypes = await GetBodyTypes();
      const carMake = await GetCarMakes();
      const locations = await GetLocations();
      const drivetrain = await GetDrivetrain();
      const color = await GetColors();
      const transmission = await GetTransmission();
      const fuel = await GetFuel();
      setdrivetrain(drivetrain);
      setcolor(color);
      settransmission(transmission);
      setfuel(fuel);
      setbodytypes(bodyTypes);
      setmakes(carMake);
      setlocations(locations);
    };
    getData();
  }, []);
  return (
    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
      {/*<DetailedSearchBox />*/}
      <HomeUI
        bodyTlist={bodyTypes}
        drivetrain={drivetrain}
        color={color}
        transmission={transmission}
        fuel={fuel}
        makeList={carMake}
      />
      {/*<SearchingCriteria resultCount={cars.length} locations={locations} />*/}
      <MachinerySearchResult params={params} locations={locations} />
    </div>
  );
}
