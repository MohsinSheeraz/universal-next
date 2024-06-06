import SearchInput from "@/components/dropdown";
import FormInput from "./input";

export default function DescriptionForm() {
  return (
    <>
      <div className="w-full xl:w-3/4 mx-auto py-4 px-1 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
          <FormInput labelTXT="Engine Size:" />
          <FormInput labelTXT="Year:" />
          <FormInput labelTXT="Price:" />
          <FormInput labelTXT="No Of Doors:" />
          <FormInput labelTXT="No Of Seats:" />
          <FormInput labelTXT="Model Code:" />
          <FormInput labelTXT="Auction Grade:" />
          <FormInput labelTXT="Loading Capacity:" />
          <FormInput labelTXT="Mileage:" />
          <FormInput labelTXT="Engine No:" />
          <FormInput labelTXT="Chasis No:" />
          <FormInput labelTXT="Dimensions:" />
          <FormInput labelTXT="Car Options:" />
          <FormInput labelTXT="Admin Notes:" />
          <div>
            <label htmlFor="" className="font-medium text-sm">
              Text Area
            </label>
            <textarea
              spellCheck="true"
              lang="en"
              className="w-full rounded-lg border border-gray-400 bg-white py-1.5 pr-8 pl-3 font-normal text-sm text-zinc-600"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
