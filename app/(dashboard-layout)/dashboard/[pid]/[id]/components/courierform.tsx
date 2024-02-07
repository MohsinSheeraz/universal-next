import agent from "@/api/agent";
import Input from "@/components/Input";
import { CourierDispatch } from "@/models/Customer";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
type Prop = {
  id: number;
};
export default function Courierform({ id }: Prop) {
  const form = useForm<CourierDispatch>();
  const [countries, setCounties] = useState<any>([]);
  const [consigneeCountryID, setConsigneeCountryID] = useState(0);
  const { register, control, formState, setValue, handleSubmit } = form;

  useEffect(() => {
    const getData = async () => {
      const countries = await agent.LoadData.countryList();
      setCounties(countries.data);

      const { data } = await agent.LoadData.courierDispatchByID(
        id
        // 13
      );
      if (data) {
        setValue("personName", String(data?.personName));
        setValue("courierPersonCity", String(data?.courierPersonCity));
        setValue("courierPersonAddress", String(data?.courierPersonAddress));
        setValue("courierPersonPhone", String(data?.courierPersonPhone));
        setValue("courierPersonEmail", String(data?.courierPersonEmail));
        setValue("shippingNote", String(data?.shippingNote));
        setConsigneeCountryID(data?.courierPersonCountryId);
      }
    };
    if (id != 0) getData();
  }, []);
  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const destinationID = parseInt(event.target.value);
    setConsigneeCountryID(destinationID);
  };

  return (
    <div className="w-[90%] mx-auto mt-7">
      <h1 className="text-center mb-6 font-bold text-lg">
        Courier Person Information
      </h1>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <Input
            label={" Name"}
            type="text"
            placeholder=" Name"
            htmlFor="personName"
            register={{
              ...register("personName", {
                required: " required",
              }),
            }}
          />
          <div className="w-full">
            <label
              htmlFor={"consignee_country"}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <select
              // disabled={isUpdate ? true : false}
              value={consigneeCountryID}
              onChange={handleCountryChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <option value={0}>Select Country</option>
              {countries.map((country: any) => (
                // <SelectItem key={country.countryId} value={country.countryId.toString()}>{country.countryName}</SelectItem>
                <option key={country.countryId} value={country.countryId}>
                  {country.countryName}
                </option>
              ))}
            </select>
          </div>
          <Input
            type="text"
            placeholder={" City"}
            htmlFor={"courierPersonCity"}
            label=" City"
            register={{
              ...register("courierPersonCity", {
                required: " required",
              }),
            }}
          />
          <Input
            type="text"
            placeholder={" Shipping Note"}
            htmlFor={"shippingNote"}
            label=" Shipping Note"
            register={{
              ...register("shippingNote", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Consignee Address"}
            type="text"
            placeholder="Consignee Address"
            htmlFor="courierPersonAddress"
            register={{
              ...register("courierPersonAddress", {
                required: " required",
              }),
            }}
          />
          <Input
            label={" Phone"}
            type="text"
            placeholder=" Phone"
            htmlFor="courierPersonPhone"
            register={{
              ...register("courierPersonPhone", {
                required: " required",
              }),
            }}
          />
          <Input
            label={" Email"}
            type="text"
            placeholder=" Email"
            htmlFor="courierPersonEmail"
            register={{
              ...register("courierPersonEmail", {
                required: " required",
              }),
            }}
          />
        </div>
        <div className="w-full flex justify-center my-6">
          <button
            type="submit"
            className=" text-white bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {id == 0 ? " Add" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
