import agent from "@/api/agent";
import Input from "@/components/Input";
import { ConsigneeCourier } from "@/models/Customer";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Prop = {
  id: number;
};
export default function Consigneeform({ id }: Prop) {
  const form = useForm<ConsigneeCourier>();
  const [countries, setCounties] = useState<any>([]);
  const [consigneeCountryID, setConsigneeCountryID] = useState(0);
  const [notifyCountryID, setNotifyCountryID] = useState(0);
  const { register, control, formState, setValue, handleSubmit } = form;
  useEffect(() => {
    const getData = async () => {
      const { data } = await agent.LoadData.consigneeCourierByID(id);
      const countries = await agent.LoadData.countryList();
      setCounties(countries.data);

      if (data) {
        setValue("consigneeName", String(data?.consigneeName));
        setValue("notifyPartyName", String(data?.notifyPartyName));
        setValue("consigneeCity", String(data?.consigneeCity));
        setValue("notifyPartyCity", String(data?.notifyPartyCity));
        setValue("consigneeAddress", String(data?.consigneeAddress));
        setValue("notifyPartyAddress", String(data?.notifyPartyAddress));
        setValue("consigneeEmail", String(data?.consigneeEmail));
        setValue("notifyPartyEmail", String(data?.notifyPartyEmail));
        setValue("consigneePhone", String(data?.consigneePhone));
        setValue("notifyPartyPhone", String(data?.notifyPartyPhone));
        setConsigneeCountryID(data?.consigneeCountryId);
        setNotifyCountryID(data?.notifyPartyCountryId);
      }
    };
    if (id != 0) getData();
  }, []);
  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const destinationID = parseInt(event.target.value);
    setConsigneeCountryID(destinationID);
  };
  const handleNotifyCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const destinationID = parseInt(event.target.value);
    setNotifyCountryID(destinationID);
  };
  return (
    <div className="w-[90%] mx-auto mt-7">
      <h1 className="text-center mb-6 font-bold text-lg">
        Consignee / Notify Information
      </h1>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <Input
            label={"Consignee Name"}
            type="text"
            placeholder="Consignee Name"
            htmlFor="ConsigneeName"
            register={{
              ...register("consigneeName", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Notify Name"}
            type="text"
            placeholder="Notify Name"
            htmlFor="NotifyPartyName"
            register={{
              ...register("notifyPartyName", {
                required: " required",
              }),
            }}
          />
          <div className="w-full">
            <label
              htmlFor={"consignee_country"}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Consignee Country
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
          <div className="w-full">
            <label
              htmlFor={"consignee_country"}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Notify Country
            </label>
            <select
              // disabled={isUpdate ? true : false}
              value={notifyCountryID}
              onChange={handleNotifyCountryChange}
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
            placeholder={"Consignee City"}
            htmlFor={"consigneeCity"}
            label="Consignee City"
            register={{
              ...register("consigneeCity", {
                required: " required",
              }),
            }}
          />
          <Input
            type="text"
            placeholder={"Notify City"}
            htmlFor={"notifyPartyCity"}
            label="Notify City"
            register={{
              ...register("notifyPartyCity", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Consignee Address"}
            type="text"
            placeholder="Consignee Address"
            htmlFor="consigneeAddress"
            register={{
              ...register("consigneeAddress", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Notify Address"}
            type="text"
            placeholder="Notify Address"
            htmlFor="notifyPartyAddress"
            register={{
              ...register("notifyPartyAddress", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Consignee Phone"}
            type="text"
            placeholder="Consignee Phone"
            htmlFor="consigneePhone"
            register={{
              ...register("consigneePhone", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Notify Phone"}
            type="text"
            placeholder="Notify Phone"
            htmlFor="notifyPartyPhone"
            register={{
              ...register("notifyPartyPhone", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Consignee Email"}
            type="text"
            placeholder="Consignee Email"
            htmlFor="consigneeEmail"
            register={{
              ...register("consigneeEmail", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Notify Email"}
            type="text"
            placeholder="Notify Email"
            htmlFor="notifyPartyEmail"
            register={{
              ...register("notifyPartyEmail", {
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
