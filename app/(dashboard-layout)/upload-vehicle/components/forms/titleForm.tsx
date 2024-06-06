import SearchInput from "@/components/dropdown";
import clsx from "clsx";

export default function TitleForm() {
  return (
    <>
      <div className="   w-full lg:w-3/4 mx-auto py-4 px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
          <div className="w-full">
            <label htmlFor="" className="font-medium text-sm">
              Vehicle Type:
            </label>
            <div className="w-full">
              {/* <SearchInput placeholder={"Select..."} /> */}
              <select
                className={clsx(
                  "w-full rounded-lg border border-gray-400 bg-white py-2"
                )}
                name=""
                id=""
              >
                <option value="">Car</option>
                <option value="">Truck</option>
                <option value="">Machinery</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="" className="font-medium text-sm">
              Listing Title:
            </label>
            <div className="w-full">
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
