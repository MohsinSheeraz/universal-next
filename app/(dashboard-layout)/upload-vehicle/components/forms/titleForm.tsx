import SearchInput from "@/components/dropdown";
import clsx from "clsx";

export default function TitleForm() {
    return (
        <div className="grid lg:!grid-cols-4 md:!grid-cols-2 !grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">
            <div className="col-span-1 md:col-span-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">
                <div className=" w-auto">
                    <label htmlFor="" className="font-medium text-sm">
                        Vehicle Type:
                    </label>
                    <div className="w-full">
                        {/* <SearchInput placeholder={"Select..."} /> */}
                        <select
                            className={clsx(
                                "w-full rounded-lg border border-gray-400 bg-white py-1.5 pr-8 pl-3 font-normal text-sm text-zinc-600",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                            )}
                            name="" id="">
                            <option value="">Car</option>
                            <option value="">Truck</option>
                            <option value="">Machinery</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">
                <div className=" w-auto">
                    <label htmlFor="" className="font-medium text-sm">
                        Listing Title:
                    </label>
                    <div className="w-full">
                        <SearchInput placeholder={"Listing Title"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
