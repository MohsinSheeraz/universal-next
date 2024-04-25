"use client";
import agent from "@/api/agent";
import { BodyType } from "@/models/Master/BodyType";
import { CarModel } from "@/models/Master/CarModel";
import { Colors } from "@/models/Master/Colors";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { VehicleCategory } from "@/models/Master/VehicleCategory";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
  bodyTypes: BodyType[]; //tblBodyTypes[],
  makes: Make[]; //tblMakes[],
  yearList: string[];
  color: Colors[];
  transmission: Transmission[];
  drivetrain: DrivetrainType[];
  fuel: FuelType[];
  // stockcars : StockCars[]
}

const GetModelWiseMakeList = async (modelID: string) => {
  return await agent.LoadData.carModelByMakeList(modelID); // db.tblBodyTypes.findMany({where: {isActive:true}});
};
const getCategory = async () => {
  const result = await agent.LoadData.vehicleCategoryList(); //db.tblMakes.findMany({where: {isActive:true}} );
  return result.data;
};
export default function TruckSimpleSearch({
  bodyTypes,
  makes,
  yearList,
  color,
  transmission,
  drivetrain,
  fuel,
}: Props) {
  const [categories, setCategories] = useState<VehicleCategory[]>([])
  useEffect(() => {

    getData()
  }, [])
  const getData = async () => {
    const category = await getCategory()
    setCategories(category)
  }
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [makeId, setMakeId] = useState("0");
  const [steeringTypeId, setSteeringTypeId] = useState("0");
  const [colorId, setColorId] = useState("0");
  const [transmissionId, setTransmissionId] = useState("0");
  const [drivetrainId, setDrivetrainId] = useState("0");
  const [fuelId, setFuelId] = useState("0");
  const [mappedModels, setMappedModels] = useState<CarModel[]>([]);
  const [modelId, setModelId] = useState("0");
  const [mileage, setMileage] = useState("0");
  const [toPrice, setToPrice] = useState("0");
  const [toYear, setToYear] = useState("0");
  const [category, setCategory] = useState<any>("0");
  const handleValueChange = async (selectedValue: string) => {
    const selectedMakeID = selectedValue;
    setMakeId(selectedMakeID);
    const modelbymake = await GetModelWiseMakeList(selectedMakeID); // models.filter(x=>x.makeId == parseInt(selectedValue));
    setMappedModels(modelbymake.data);
  };

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
    if (makeId !== "0") params.set("makeID", makeId);
    if (modelId !== "0") params.set("modelID", modelId);
    if (mileage != "0") params.set("mileage", mileage);
    if (toPrice != "0") params.set("toPrice", toPrice);
    if (toYear != "0") params.set("toYear", toYear);
    if (steeringTypeId != "0") params.set("steeringID", steeringTypeId);
    if (transmissionId !== "0") params.set("TransmissionId", transmissionId);
    if (drivetrainId !== "0") params.set("DrivetrainId", drivetrainId);
    if (fuelId !== "0") params.set("FuelId", fuelId);
    if (colorId !== "0") params.set("ColorId", colorId);
    if (category !== "0") params.set("categoryID", category);
    setLoading(true);
    router.push(`/global/results/list/trucks?${params.toString()}`);
    setLoading(false);
  }

  return (
    // <div className="showcase-Box carform mb-5">
    <Form onSubmit={handleSubmit} autoComplete="off">
      <div className=" row mt-4 gap-y-2  border border-gray-200 mx-2 bg-slate-100 rounded-2xl py-3 shadow-md">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Category:{" "}
          </label>
          {/*<SearchSelect value={makeId} onValueChange={setMakeId}>*/}
          <SearchSelect value={category} onValueChange={setCategory}>
            {categories.map((item, i) => (
              <SearchSelectItem key={i} value={item.categoryId.toString()}>
                {item.categoryName}
              </SearchSelectItem>
            ))}
          </SearchSelect>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Make:{" "}
          </label>
          {/*<SearchSelect value={makeId} onValueChange={setMakeId}>*/}
          <SearchSelect value={makeId} onValueChange={handleValueChange}>
            {makes
              .filter((make) => make.vehicleTypeId == 2)
              .map((make) => (
                <SearchSelectItem
                  key={make.makeId}
                  value={make.makeId.toString()}
                >
                  {make.makeName} { }
                </SearchSelectItem>
              ))}
          </SearchSelect>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Model:
          </label>
          {renderMappedModels()}
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Mileage
          </label>
          <div className="showcase-Boxselect">
            <SearchSelect value={mileage} onValueChange={setMileage}>
              <SearchSelectItem value="50000">50,000</SearchSelectItem>
              <SearchSelectItem value="100000">100,000</SearchSelectItem>
              <SearchSelectItem value="150000">150,000</SearchSelectItem>
              <SearchSelectItem value="200000">200,000</SearchSelectItem>
              <SearchSelectItem value="300000">300,000</SearchSelectItem>
            </SearchSelect>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Model:Reg. Date from
          </label>
          <SearchSelect value={toYear} onValueChange={setToYear}>
            {yearList.map((year) => (
              <SearchSelectItem key={year} value={year.toString()}>
                {year}
              </SearchSelectItem>
            ))}
          </SearchSelect>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Steering:
          </label>
          <SearchSelect
            value={steeringTypeId}
            onValueChange={setSteeringTypeId}
          >
            <SearchSelectItem value="1">Right Hand</SearchSelectItem>
            <SearchSelectItem value="2">Left Hand</SearchSelectItem>
          </SearchSelect>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Price Until:
          </label>
          <SearchSelect value={toPrice} onValueChange={setToPrice}>
            <SearchSelectItem value="10000">$10,000</SearchSelectItem>
            <SearchSelectItem value="20000">$20,000</SearchSelectItem>
            <SearchSelectItem value="30000">$30,000</SearchSelectItem>
            <SearchSelectItem value="40000">$40,000</SearchSelectItem>
            <SearchSelectItem value="50000">$50,000</SearchSelectItem>
          </SearchSelect>
        </div>
        {isMore && (
          <>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Transmission:
              </label>
              <SearchSelect
                value={transmissionId}
                onValueChange={setTransmissionId}
              >
                {transmission.map((trans) => (
                  <SearchSelectItem
                    key={trans.transmissionId}
                    value={trans.transmissionId.toString()}
                  >
                    {trans.transmissionName}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Fuel:
              </label>
              <SearchSelect value={fuelId} onValueChange={setFuelId}>
                {fuel.map((fueltype) => (
                  <SearchSelectItem
                    key={fueltype.fuelTypeId}
                    value={fueltype.fuelTypeId.toString()}
                  >
                    {fueltype.typeOfFuel}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Drivetrain:
              </label>
              <SearchSelect
                value={drivetrainId}
                onValueChange={setDrivetrainId}
              >
                {drivetrain.map((train) => (
                  <SearchSelectItem
                    key={train.drivetrainId}
                    value={train.drivetrainId.toString()}
                  >
                    {train.drivetrainType}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Exterior Color:
              </label>
              <SearchSelect value={colorId} onValueChange={setColorId}>
                {color.map((color) => (
                  <SearchSelectItem
                    key={color.colorId}
                    value={color.colorId.toString()}
                  >
                    {color.colorName}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
          </>
        )}
        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-6 col-6 flex items-center">
          <span
            className="text-blue-700 cursor-pointer  text-sm underline "
            onClick={() => {
              setIsMore(!isMore);
            }}
          >
            {isMore ? "Show less" : "Show More"}
          </span>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-6 col-6">
          {/* <div className="showcase-Boxbtn"> */}
          {/* <Button>
              {isLoading ? (
                // This is where you'd add your loading spinner.
                // You can use an SVG, an image, or anything else you'd like.
                // For this example, I'll just use text.
                <span>Loading...</span>
              ) : (
                <span>Search</span>
              )}
            </Button> */}
          <button className="w-full font-semibold bg-slate-500 p-2 rounded-xl text-white hover:border-2 hover:border-slate-500 hover:bg-transparent hover:!text-slate-500 ">
            {isLoading ? (
              // This is where you'd add your loading spinner.
              // You can use an SVG, an image, or anything else you'd like.
              // For this example, I'll just use text.
              <span>Loading...</span>
            ) : (
              <span>Search</span>
            )}
          </button>
          {/* </div> */}
        </div>
      </div>
    </Form>
    // </div>
  );
}
