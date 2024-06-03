"use client"

import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { FormEvent, useState } from "react";

import agent from "@/api/agent";
import SearchInput from "@/components/dropdown";
import { BodyType } from "@/models/Master/BodyType";
import { CarModel } from "@/models/Master/CarModel";
import { Colors } from "@/models/Master/Colors";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import clsx from "clsx";

interface Props {
    bodyTypes: BodyType[]; //tblBodyTypes[],
    makes: Make[]; //tblMakes[],
    yearList: string[];
    // stockcars : StockCars[]
    color: Colors[];
    transmission: Transmission[];
    drivetrain: DrivetrainType[];
    fuel: FuelType[];
}

const GetModelWiseMakeList = async (modelID: string) => {
    return await agent.LoadData.carModelByMakeList(modelID); // db.tblBodyTypes.findMany({where: {isActive:true}});
};

export default function UploadVehicle() {
    // const router = useRouter();
    const [modelCode, setModelCode] = useState("0");
    const [isMore, setIsMore] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [makeId, setMakeId] = useState("0");
    const [mappedModels, setMappedModels] = useState<CarModel[]>([]);
    const [modelId, setModelId] = useState("0");
    const [colorId, setColorId] = useState("0");
    const [transmissionId, setTransmissionId] = useState("0");
    const [drivetrainId, setDrivetrainId] = useState("0");
    const [fuelId, setFuelId] = useState("0");
    const [bodyTypeId, setBodyTypeId] = useState("0");
    const [fromYear, setFromYear] = useState("0");
    const [toYear, setToYear] = useState("0");
    const [steeringTypeId, setSteeringTypeId] = useState("0");
    const [maxEngineSize, setMaxEngineSize] = useState("0");
    const [minEngineSize, setMinEngineSize] = useState("0");
    const [minMileage, setMinMileage] = useState("0");
    const [maxMileage, setMaxMileage] = useState("0");
    const handleValueChange = async (selectedValue: string) => {
        const selectedMakeID = selectedValue;
        setMakeId(selectedMakeID);
        const modelbymake = await GetModelWiseMakeList(selectedMakeID); // models.filter(x=>x.makeId == parseInt(selectedValue));
        setMappedModels(modelbymake.data);
    };
    // done
    // FuelId
    // DrivetrainId
    // TransmissionId
    // ColorId

    // remain
    // MaxEngineSize
    // MinEngineSize
    // MinMinMileage
    // MaxMinMileage
    const renderMappedModels = () => {
        if (mappedModels.length > 0) {
            return (
                <SearchSelect value={modelId} onValueChange={setModelId}>
                    {mappedModels.map((model) => (
                        <SearchSelectItem
                            key={model.modelId}
                            value={model.modelId.toString()}
                        >
                            {model.modelName}
                        </SearchSelectItem>
                    ))}
                </SearchSelect>
            );
        }

        return (
            <SearchSelect value={makeId} onValueChange={handleValueChange} disabled>
                <SearchSelectItem value="0">Select...</SearchSelectItem>
            </SearchSelect>
        );
    };

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        //console.log(makeId,"MakeID, ", modelId, "ModelID, ", bodyTypeId, "BodyTypeID")

        const params = new URLSearchParams();

        params.set("searchFromBox", "true");
        if (modelId !== "0") params.set("modelID", modelId);
        if (makeId !== "0") params.set("makeID", makeId);
        if (modelCode !== "0") params.set("modelCode", modelCode);
        if (drivetrainId !== "0") params.set("DrivetrainId", drivetrainId);
        if (fuelId !== "0") params.set("FuelId", fuelId);
        if (colorId !== "0") params.set("ColorId", colorId);
        if (maxMileage !== "0") params.set("MaxMileage", maxMileage);
        if (minMileage !== "0") params.set("MinMileage", minMileage);
        if (minEngineSize !== "0") params.set("MinEngineSize", minEngineSize);
        if (maxEngineSize !== "0") params.set("MaxEngineSize", maxEngineSize);
        if (transmissionId !== "0") params.set("TransmissionId", transmissionId);
        if (bodyTypeId != "0") params.set("bodyTypeID", bodyTypeId);
        if (steeringTypeId != "0") params.set("steeringID", steeringTypeId);
        if (fromYear != "0") params.set("fromYear", fromYear);
        if (toYear != "0") params.set("toYear", toYear);

        setLoading(true);
        // TODO DO THIS
        // router.push(`/global/results/search/cars?${params.toString()}`);
        setLoading(false);
    }

    return (
        <div className="lg:px-7 md:px-3 px-3 lg:h-auto lg:overflow-y-auto md:h-auto  py-3 xs:h-[35vh] xs:overflow-y-scroll">
            {/* <div className="bg-white drop-shadow-lg  border border-gray-200 p-5 px-4 rounded-lg xs:mt-5 sm:mt-5"> */}

            <form action="">
                <div className="grid lg:!grid-cols-4 md:!grid-cols-2 !grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">
                    <div className="col-span-1 md:col-span-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">
                        <div className=" w-auto">
                            <label htmlFor="" className="font-medium text-sm">
                                Vehicle Type:
                            </label>
                            <div className="w-full">
                                <SearchInput placeholder={"Select..."} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">
                        <div className=" w-auto">
                            <label htmlFor="" className="font-medium text-sm">
                                Listing Title:
                            </label>
                            <div className="w-full">
                                <SearchInput placeholder={"Select..."} />
                            </div>
                        </div>
                    </div>

                    <div className="Make w-full">
                        <label htmlFor="" className="font-medium text-sm">
                            Make:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Model:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Condition:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Inventory Location:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Transmission:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Fuel Type:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label className="font-medium text-sm" htmlFor="">
                            Drivetrain:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label className="font-medium text-sm" htmlFor="">
                            Hot Location:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Steering:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Select Color:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>

                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            BodyType:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                </div>
                <hr className="my-14" />

                <div className="w-full md:w-[70%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">

                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Engine Size:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Year:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Price:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            No of Doors:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            No of Seats:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Model Code:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Auction Grade:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Loading Capacity:
                        </label>
                        <div className="w-full">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Milage:
                        </label>
                        <div className="w-full flex items-center gap-3">
                            <SearchInput placeholder={"Select..."} />
                            <SearchInput placeholder={"Select..."} /> Miles
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Engine No:
                        </label>
                        <div className="w-full ">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Chasis No:
                        </label>
                        <div className="w-full ">
                            <SearchInput placeholder={"Select..."} />
                        </div>
                    </div>
                    <div className=" w-auto">
                        <label htmlFor="" className="font-medium text-sm">
                            Dimension:
                        </label>
                        <div className="w-full flex gap-3 ">
                            <SearchInput placeholder={"Length"} />
                            <SearchInput placeholder={"Width"} />
                            <SearchInput placeholder={"Height"} />
                        </div>
                    </div>
                </div>
                <div className="grid mt-6 w-full lg:!grid-cols-4 md:!grid-cols-2 !grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">
                    <div className="w-full col-span-3  flex flex-col gap-3">
                        <div className="w-auto">
                            <label htmlFor="" className="font-medium text-sm">
                                Car Options:
                            </label>
                            <div className="w-full">
                                <SearchInput placeholder={"Select..."} />
                            </div>
                        </div>
                        <div className="w-full flex gap-3">
                            <div className=" w-full">
                                <label htmlFor="" className="font-medium text-sm">
                                    Admin Notes:
                                </label>
                                <div className="w-full">
                                    <textarea className={clsx(
                                        "w-full rounded-lg border border-gray-400 bg-white py-1.5 pr-8 pl-3 font-normal text-sm text-zinc-600",
                                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                                    )} />
                                </div>
                            </div>
                            <div className=" w-full">
                                <label htmlFor="" className="font-medium text-sm">
                                    Description:
                                </label>
                                <div className="w-full">
                                    <textarea className={clsx(
                                        "w-full rounded-lg border border-gray-400 bg-white py-1.5 pr-8 pl-3 font-normal text-sm text-zinc-600",
                                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                                    )} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-auto flex flex-col gap-3">

                        <div className="w-full">
                            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg  tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select a Image</span>
                                <input type='file' className="hidden" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg  tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base text-center leading-normal">Select a Additional Image</span>
                                <input type='file' className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full flex mt-4 justify-center">
                    <button className="bg-[#221C63] px-7 py-3 font-semibold text-white rounded-lg">
                        Add
                    </button>
                </div>



            </form>
            {/* </div> */}
        </div>
    );
}
