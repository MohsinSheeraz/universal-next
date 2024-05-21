"use client";

import Tabs from "@/app/(dashboard-layout)/dashboard/components/Tabs";
import CarsSimpleSearch from "@/components/cars/CarsSimpleSearch";
import TruckSimpleSearch from "@/components/trucks/TruckSimpleSearch";
import { BodyType } from "@/models/Master/BodyType";
import { Colors } from "@/models/Master/Colors";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { VehicleCategory } from "@/models/Master/VehicleCategory";
import { Tab } from "@headlessui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MachinerySimpleSearch from "../machinery/MachinerySimpleSearch";

interface TabType {
  name: string;
  href: string;
  current: boolean;
}

interface Props {
  bodyTypes: BodyType[];
  makes: Make[];
  color: Colors[];
  transmission: Transmission[];
  drivetrain: DrivetrainType[];
  fuel: FuelType[];
  vehicleCategory: VehicleCategory[]
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs: TabType[] = [
  { name: "Cars", href: "#", current: true },
  { name: "Trucks", href: "#", current: false },
  { name: "Heavy Machinery", href: "#", current: false },
];

export default function HomeUITabGroup({
  bodyTypes,
  makes,
  color,
  transmission,
  drivetrain,
  fuel,
  vehicleCategory
}: Props) {
  const [currentForm, setCurrentForm] = useState("Cars");
  const type = useParams();
  const currentYear = new Date().getFullYear();
  const fromYear = 1970;
  const yearList = Array.from({ length: currentYear - fromYear }, (_, index) =>
    (fromYear + index).toString()
  );
  const list = ["Cars", "Truck", "Heavy Machinery"];
  useEffect(() => {
    switch (type?.type) {
      case "cars":
        setCurrentForm("Cars")
        return
      case "trucks":
        setCurrentForm("Truck")
        return
      case "machinery":
        setCurrentForm("Heavy Machinery")
        return

      default:
        break;
    }
  }, [])
  const getForm = () => {
    switch (currentForm) {
      case "Cars":
        return (
          <CarsSimpleSearch
            bodyTypes={bodyTypes}
            makes={makes}
            yearList={yearList}
            color={color}
            transmission={transmission}
            drivetrain={drivetrain}
            vehicleCategory={vehicleCategory}
            fuel={fuel}
          />
        );
      case "Truck":
        return (
          <TruckSimpleSearch
            bodyTypes={bodyTypes}
            makes={makes}
            yearList={yearList}
            color={color}
            transmission={transmission}
            drivetrain={drivetrain}
            vehicleCategory={vehicleCategory}
            fuel={fuel}
          />
        );
      case "Heavy Machinery":
        return (
          <MachinerySimpleSearch
            bodyTypes={bodyTypes}
            makes={makes}
            yearList={yearList}
            color={color}
            transmission={transmission}
            drivetrain={drivetrain}
            vehicleCategory={vehicleCategory}
            fuel={fuel}
          />
        );
      default:
        break;
    }
  };
  return (
    <>
      <Tabs
        list={list}
        setCurrentForm={setCurrentForm}
        currentForm={currentForm}
      />
      {getForm()}
      <Tab.Group>
        {/* <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List> */}
        <Tab.Panels>
          {/* <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <CarsSimpleSearch
              bodyTypes={bodyTypes}
              makes={makes}
              yearList={yearList}
            />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <TruckSimpleSearch
              bodyTypes={bodyTypes}
              makes={makes}
              yearList={yearList}
            />
          </Tab.Panel> */}

          <Tab.Panel>
            {/*<div className="showcase-Box truckform">*/}
            {/*    <form>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
            {/*                <div className="showcase-Boxselect">*/}
            {/*                    <label>Make:</label>*/}
            {/*                    <select className="custom-select">*/}
            {/*                        <option >Select Make</option>*/}
            {/*                        /!*@foreach (var make in Helpers.MasterData.Makes)*!/*/}
            {/*                        /!*{'{'}*!/*/}
            {/*                        /!*<option slug="@make.Slug" value="@make.MakeId">@make.MakeName</option>*!/*/}
            {/*                        /!*{'}'}*!/*/}
            {/*                    </select>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
            {/*                <div className="showcase-Boxselect">*/}
            {/*                    <label>Model:</label>*/}
            {/*                    <select className="custom-select">*/}
            {/*                        <option>Select Model</option>*/}
            {/*                        /!*@foreach (var model in Helpers.MasterData.CarModels.Where(x =&gt; x.MakeId == search.MakeID))*!/*/}
            {/*                        /!*{'{'}*!/*/}
            {/*                        /!*<option slug="@model.ModelName" value="@model.ModelId">@model.ModelName</option>*!/*/}
            {/*                        /!*{'}'}*!/*/}
            {/*                    </select>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
            {/*                <div className="showcase-Boxselect">*/}
            {/*                    <label>Reg. Date from</label>*/}
            {/*                    <select className="custom-select " name="bodytype" id="body-type-select">*/}
            {/*                        <option>Any</option>*/}
            {/*                        <option value="sedan">2022</option>*/}
            {/*                        <option value="coupe">2021</option>*/}
            {/*                        <option value="hatchback">2020</option>*/}
            {/*                    </select>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
            {/*                <div className="showcase-Boxselect">*/}
            {/*                    <label>Miles to</label>*/}
            {/*                    <select className="custom-select " name="bodytype" id="body-type-select">*/}
            {/*                        <option>Any</option>*/}
            {/*                        <option value="sedan">10,000</option>*/}
            {/*                        <option value="coupe">20,000</option>*/}
            {/*                        <option value="hatchback">30,0000</option>*/}
            {/*                    </select>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
            {/*                <div className="showcase-Boxselect">*/}
            {/*                    <label>Price Until:</label>*/}
            {/*                    <select className="custom-select " name="steering" id="steering-select">*/}
            {/*                        <option>Any</option>*/}
            {/*                        <option value="sedan">$10,000</option>*/}
            {/*                        <option value="coupe">$20,000</option>*/}
            {/*                        <option value="hatchback">430,000</option>*/}
            {/*                    </select>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
            {/*                <div className="showcase-Boxbtn">*/}
            {/*                    <button type="submit">Search</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
            {/*<div className="carboxes mt-3">*/}
            {/*    <HomePageTruckListings stockcars={stocks} />*/}
            {/*</div>*/}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
