"use client";

import agent from "@/api/agent";
import { BodyType } from "@/models/Master/BodyType";
import { Colors } from "@/models/Master/Colors";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { useState } from "react";
import DescriptionForm from "./forms/descriptionForm";
import DropdownForm from "./forms/dropdownForm";
import ImageForm from "./forms/imageForm";
import TitleForm from "./forms/titleForm";
import Stepper from "./stepper";
import Image from "next/image";
import nextIcon from "@/public/assets/images/icon_next.png";
import previousIcon from "@/public/assets/images/icon_previous.png";

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
  const [stepper, setStepper] = useState(1);
  const forms = [1, 2, 3, 4];
  const next = () => {
    if (stepper < forms.length) setStepper(stepper + 1);
  };
  const previous = () => {
    if (stepper > 1) setStepper(stepper - 1);
  };

  const getCurrentForm = () => {
    switch (stepper) {
      case 1:
        return <TitleForm />;
      case 2:
        return <DropdownForm />;
      case 3:
        return <DescriptionForm />;
      case 4:
        return <ImageForm />;
      default:
        <TitleForm />;
    }
  };
  return (
    <div className="w-full">
      <Stepper current={stepper} steps={forms} />
      <div className="mx-auto w-1/2  flex justify-between pt-3 px-5 ">
        <button onClick={previous}>
          <Image className="w-9" src={previousIcon} alt="previous" />
        </button>
        <button onClick={next}>
          <Image className="w-6" src={nextIcon} alt="next" />
        </button>
      </div>
      <div className="w-full p-2">{getCurrentForm()}</div>

      {/* <form action="">
                <div className="w-full flex mt-4 justify-center">
                    <button className="bg-[#221C63] px-7 py-3 font-semibold text-white rounded-lg">
                        Add
                    </button>
                </div>



            </form> */}
    </div>
  );
}
