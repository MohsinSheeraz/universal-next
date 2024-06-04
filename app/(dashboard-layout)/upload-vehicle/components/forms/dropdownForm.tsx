import SearchInput from "@/components/dropdown";

export default function DropdownForm() {
    return (
        <div className="grid lg:!grid-cols-4 md:!grid-cols-2 !grid-cols-1 gap-y-5 sm:gap-y-3 gap-x-4">

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
    )
}
