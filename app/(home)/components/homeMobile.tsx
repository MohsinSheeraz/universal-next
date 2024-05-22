import { BodyType } from "@/models/Master/BodyType";
import { Colors } from "@/models/Master/Colors";
import { Country } from "@/models/Master/Country";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { VehicleCategory } from "@/models/Master/VehicleCategory";
import TabButtons from "./buttons";

type Props = {
  bodyTypes: BodyType[];
  makes: Make[];
  color: Colors[];
  transmission: Transmission[];
  drivetrain: DrivetrainType[];
  fuel: FuelType[];
  locations: Country[];
  vehicleCategory: VehicleCategory[];
};
export default async function HomeMobile({
  drivetrain,
  color,
  makes,
  transmission,
  fuel,
  bodyTypes,
  locations,
  vehicleCategory,
}: Props) {
  return (
    <div className="!block sm:!hidden">
      <TabButtons
        vehicleCategory={vehicleCategory}
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
