import CarsSimpleSearch from "@/components/cars/CarsSimpleSearch";
import { BodyType } from "@/models/Master/BodyType";
import { Colors } from "@/models/Master/Colors";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { VehicleCategory } from "@/models/Master/VehicleCategory";
// import { SearchSelect, SearchSelectItem } from '@tremor/react'
// import { Form } from 'react-hook-form'
interface Props {
  bodyTlist: BodyType[];
  makeList: Make[];
  color: Colors[];
  transmission: Transmission[];
  drivetrain: DrivetrainType[];
  fuel: FuelType[];
  yearList: string[];
  vehicleCategory: VehicleCategory[];
}
export default function BySearch({
  bodyTlist,
  makeList,
  color,
  transmission,
  fuel,
  drivetrain,
  yearList,
  vehicleCategory,
}: Props) {
  return (
    <div className="mb-3">
      <CarsSimpleSearch
        vehicleCategory={vehicleCategory}
        yearList={yearList}
        drivetrain={drivetrain}
        color={color}
        transmission={transmission}
        fuel={fuel}
        makes={makeList}
        bodyTypes={bodyTlist}
      />
    </div>
  );
}
