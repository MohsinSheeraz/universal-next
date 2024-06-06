import SearchInput from "@/components/dropdown";
import FormInput from "./input";

export default function DropdownForm() {
  return (
    <div className="w-full xl:w-3/4 mx-auto py-4 px-1 xl:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        <FormInput labelTXT="Make:" />
        <FormInput labelTXT="Model:" />
        <FormInput labelTXT="Condition:" />
        <FormInput labelTXT="Inventory Location:" />
        <FormInput labelTXT="Transmission:" />
        <FormInput labelTXT="Fuel Type:" />
        <FormInput labelTXT="Drivetrain:" />
        <FormInput labelTXT="Hot Location:" />
        <FormInput labelTXT="Steering:" />
        <div>
          <label className="font-medium text-sm" htmlFor="">
            Select Color:
          </label>
          <SearchInput />
        </div>
        <FormInput labelTXT="BodyType:" />
      </div>
    </div>
  );
}
