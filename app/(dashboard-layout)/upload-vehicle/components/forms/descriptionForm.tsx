import SearchInput from "@/components/dropdown";
import clsx from "clsx";

export default function DescriptionForm() {
    return (
        <div>
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


            </div>
        </div>

    )
}
