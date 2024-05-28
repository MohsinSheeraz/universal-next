"use client";
import agent from "@/api/agent";
import Input from "@/components/Input";
import { PortMapping } from "@/models/Master/PortMapping";
// import { useSession } from "next-auth/react";
import PhoneNumberInput from "@/app/(dashboard-layout)/dashboard/components/PhoneInput";
import { Customer } from "@/models/Customer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";

type Props = {
  id: number;
};
export default function AdminProfile({ id }: Props) {
  const [countries, setCounties] = useState<any>([]);
  const [phoneError, setError] = useState<Boolean[]>([]);
  const [countryID, setCountryID] = useState(0);
  const [mappedPorts, setMappedPorts] = useState<PortMapping[]>([]);
  const [portID, setPortID] = useState(0);
  const [Emails, setEmails] = useState<string[]>([""]);
  const [Phones, setPhones] = useState<string[]>([""]);
  const [portMapping, setPortMapping] = useState<any>([]);
  const [ports, setPorts] = useState<any>([]);
  const [customer, setCustomer] = useState<Customer>();

  const router = useRouter();
  const getData = async () => {
    const countries = await agent.LoadData.countryList();
    const portMapping = await agent.LoadData.portmapping();
    const ports = await agent.LoadData.portsList();
    const { data } = await agent.LoadData.customerByID(id);
    // if (isUpdate) {
    setCustomer(data);
    setValue("name", String(data.name));
    setValue("companyName", String(data.companyName));
    setValue("lastname", String(data.lastName));
    setValue("preferredPortId", String(data.preferredPortId));
    setValue("countryID", data.countryId);
    setValue("address", data.address);
    setValue("phoneNumber", [data.phone]);
    setCountryID(data.countryId);
    setPortID(data.preferredPortId);
    setPhones([String(data.phone)]);
    countryChange(data.countryId);
    setEmails([String(data?.email)]);
    // } else {
    //   setValue("name", String(user?.name));
    //   setEmails([String(user?.email)]);
    // }

    setCounties(countries.data);
    setPortMapping(portMapping.data);
    setPorts(ports.data);
  };
  useEffect(() => {
    getData();
  }, []);
  // const { status, data: session } = useSession();

  const addEmail = () => {
    setEmails([...Emails, ""]);
  };
  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const destinationID = parseInt(event.target.value);
    setCountryID(destinationID);
    setPortID(0);
    const ports = portMapping.filter(
      (port: { countryID: number }) => port.countryID == destinationID
    );
    setMappedPorts(ports);
  };
  const countryChange = (event: number | string) => {
    const destinationID = Number(event);
    const ports = portMapping.filter(
      (port: { countryID: number }) => port.countryID == destinationID
    );
    setMappedPorts(ports);
  };
  useEffect(() => {
    countryChange(countryID);
  }, [ports]);
  const handlePortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const changedPortID = parseInt(event.target.value);
    setPortID(changedPortID);
  };
  const updateEmail = (index: number, newValue: string) => {
    const updatedEmails = [...Emails];
    updatedEmails[index] = newValue;
    setEmails(updatedEmails);
  };

  const removeEmail = (index: number) => {
    const updatedEmails = [...Emails];
    updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
  };
  const addPhone = () => {
    setPhones([...Phones, ""]);
  };

  const updatePhone = (index: number, newValue: string) => {
    const updatedPhones = [...Phones];
    updatedPhones[index] = newValue;
    setPhones(updatedPhones);
  };

  const removePhone = (index: number) => {
    const updatedPhones = [...Phones];
    updatedPhones.splice(index, 1);
    const updatedErrors = [...phoneError];
    updatedErrors.splice(index, 1);
    setError(updatedErrors);
    setPhones(updatedPhones);
  };
  type TProfile = {
    customerCode: string;
    name: string;
    lastname: string;
    email: string[];
    phoneNumber: string[];
    companyName: string;
    address: string;
    countryID: number;
    preferredPortId: string;
  };
  const form = useForm<TProfile>();
  const { register, control, formState, setValue, handleSubmit } = form;
  useEffect(() => {
    setValue("email", Emails);
  }, [Emails]);
  useEffect(() => {
    setValue("phoneNumber", Phones);
  }, [Phones]);
  return (
    <>
      <div className="w-[90%] mx-auto flex justify-between my-7">
        <div>
          <Link href={"/admin/customers"}>
            <div className="flex items-center gap-2">
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.79976 1.78311L3.12524 6.27681L7.60873 10.9611L6.1697 12.3415L0.295851 6.21792L6.41941 0.344072L7.79976 1.78311Z"
                  fill="#A3AED0"
                />
              </svg>

              <p className="text-[#A3AED0]"> Back</p>
            </div>
          </Link>
        </div>
        <div className="flex  justify-between">
          <div>
            <h1 className="text-xl font-bold text-center pb-8">
              Customer Details
            </h1>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[90%] mx-auto mt-2">
        <form onSubmit={handleSubmit(async (data) => { })}>
          {customer && customer?.customerCode ? (
            <div className="w-full flex ">
              <div
                onClick={() => {
                  navigator.clipboard.writeText(String(customer?.customerCode));
                }}
                className=" cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-medium  px-3 py-2 inline-block mb-3 "
              >
                Customer ID :- {customer?.customerCode}
                <svg
                  className="inline ml-2 js-clipboard-default w-4 h-4 group-hover:rotate-6 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </svg>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <Input
              label={"First name *"}
              type="text"
              placeholder="John"
              disabled={true}
              htmlFor="name"
              register={{
                ...register("name", {
                  required: " required",
                }),
              }}
            />
            <Input
              label={"Last name *"}
              type="text"
              placeholder="Doe"
              htmlFor="lastname"
              disabled={true}
              register={{
                ...register("lastname", {
                  required: " required",
                }),
              }}
            />
            <Input
              label={"Company Name"}
              type="text"
              disabled={true}
              placeholder="Company Name"
              register={{
                ...register("companyName"),
              }}
              htmlFor="companyName"
            />
            <Input
              label={"Address"}
              type="text"
              disabled={true}
              placeholder="Address"
              register={{
                ...register("address"),
              }}
              htmlFor="address"
            />
            {/* <Autocomplete
            list={countries.map((item) => item.name)}
            placeholder={"Country"}
            setValue={setValue}
            htmlFor={"countryID"}
            label="Country"
          /> */}
            <div className="w-full">
              <label
                htmlFor={"Country"}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country *
              </label>
              <select
                disabled={true}
                value={countryID}
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
                htmlFor={"Port"}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Port *
              </label>
              <select
                disabled={true}
                value={portID}
                onChange={handlePortChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <option value={0}>Select Port</option>
                {mappedPorts.map((port) => (
                  <option key={port.portId} value={port.portId}>
                    {
                      ports.find(
                        (x: { portId: number }) => x.portId == port.portId
                      )?.portName
                    }
                  </option>
                ))}
              </select>
            </div>
            {/* <Autocomplete
            list={["Left Hand", "Right Hand"]}
            placeholder={"port"}
            setValue={setValue}
            htmlFor={"port"}
            label="Port"
          /> */}
            <div className="w-full flex  flex-col justify-center items-center">
              {Emails.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex w-full items-end justify-center gap-2 mt-1"
                  >
                    <Input
                      value={Emails[i]}
                      disabled={true}
                      label={i >= 1 ? "Email " + (i + 1) : "Email *"}
                      onChange={(e: any) => {
                        updateEmail(i, e.target.value);
                      }}
                      type="text"
                      placeholder={i >= 1 ? "Email " + (i + 1) : "Email"}
                      htmlFor={"email" + i}
                    />
                    {i >= 1 && (
                      <AiFillDelete
                        color="red"
                        size={"24px"}
                        style={{ marginBottom: "10px", cursor: "pointer" }}
                        onClick={() => {
                          removeEmail(i);
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="w-full flex  flex-col justify-center items-center">
              {Phones.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex w-full items-end justify-center gap-2 mt-1"
                  >
                    <PhoneNumberInput
                      disabled={true}
                      setError={(error: boolean) => {
                        const errors = phoneError;
                        errors[i] = error;
                        setError(errors);
                      }}
                      label={i >= 1 ? "Phone " + (i + 1) : "Phone *"}
                      value={Phones[i]}
                      setValue={(e: any) => {
                        updatePhone(i, e);
                      }}
                    //  setValue={(e: any) => {
                    //   updatePhone(i, e.target.value);
                    // }}
                    />
                    {i >= 1 && (
                      <AiFillDelete
                        color="red"
                        size={"24px"}
                        style={{ marginBottom: "10px", cursor: "pointer" }}
                        onClick={() => {
                          removePhone(i);
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
