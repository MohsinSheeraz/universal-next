"use client";
import agent from "@/api/agent";
import Input from "@/components/Input";
import { PortMapping } from "@/models/Master/PortMapping";
import { useUserStore } from "@/store/store";
// import { useSession } from "next-auth/react";
import { checkEmail } from "@/services/profile";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import PhoneNumberInput from "../PhoneInput";

export default function ProfileForm() {
  const [countries, setCounties] = useState<any>([]);
  const [phoneError, setError] = useState<Boolean[]>([]);
  const { user, update: updateData, isUpdate, setIsUpdate } = useUserStore();
  const [countryID, setCountryID] = useState(0);
  const [mappedPorts, setMappedPorts] = useState<PortMapping[]>([]);
  const [portID, setPortID] = useState(0);
  const [Emails, setEmails] = useState<string[]>([""]);
  const [Phones, setPhones] = useState<string[]>([""]);
  const [portMapping, setPortMapping] = useState<any>([]);
  const [ports, setPorts] = useState<any>([]);
  // const [update, setUpdate] = useState(false);
  // let countries: any;
  // let portMapping: any;
  // let ports: any;
  const router = useRouter();
  const getData = async () => {
    const countries = await agent.LoadData.countryList();
    const portMapping = await agent.LoadData.portmapping();
    const ports = await agent.LoadData.portsList();
    // if (isUpdate) {
    setValue("name", String(user.name));
    setValue("companyName", String(user.companyName));
    setValue("lastname", String(user.lastName));
    setValue("preferredPortId", String(user.preferredPortId));
    setValue("countryID", user.countryId);
    setValue("address", user.address);
    setValue("phoneNumber", [user.phone]);
    setCountryID(user.countryId);
    setPortID(user.preferredPortId);
    setPhones([String(user.phone)]);
    countryChange(user.countryId);
    setEmails([String(user?.email)]);
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
  }, [isUpdate]);
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
  const { isSubmitting } = formState;

  useEffect(() => {
    setValue("email", Emails);
  }, [Emails]);
  useEffect(() => {
    setValue("phoneNumber", Phones);
  }, [Phones]);
  return (
    <div className="w-[90%] mx-auto mt-7">
      <form
        onSubmit={handleSubmit(async (data) => {
          if (phoneError.includes(false)) {
            return;
          }
          if (isUpdate) {
            return toast.info(
              "Sorry, the update feature is currently unavailable."
            );
          }
          try {
            const obj: any = {
              address: data.address,
              companyName: data.companyName,
              lastname: data.lastname,
              name: data.name,
              email: Emails[0],
              phone: Phones[0],
              preferredPortId: portID,
              countryID: countryID,
            };
            await agent.LoadData.register(obj);
            toast.success(
              `Account ${isUpdate ? "Updated" : "Created"} Successfully`
            );
            checkEmail(
              Emails[0],
              user?.img,
              obj.name,
              setIsUpdate,
              updateData,
              router
            );
            // let data = res.data;
            // return data;
          } catch (error: any) {
            if (
              error &&
              error.message === "Request failed with status code 404"
            ) {
              console.log(error.message);
            } // this is the main part. Use the response property from the error object

            // return error.response;
          }
        })}
      >
        {user && user?.customerCode ? (
          <div className="w-full flex ">
            <div
              onClick={() => {
                navigator.clipboard.writeText(String(user?.customerCode));
              }}
              className=" cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-medium  px-3 py-2 inline-block mb-3 "
            >
              Customer ID :- {user?.customerCode}
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
            register={{
              ...register("lastname", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Company Name"}
            type="text"
            placeholder="Company Name"
            register={{
              ...register("companyName"),
            }}
            htmlFor="companyName"
          />
          <Input
            label={"Address"}
            type="text"
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
              disabled={isUpdate ? true : false}
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
              disabled={isUpdate ? true : false}
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
            {isUpdate && Emails && Emails.length < 3 && (
              <div
                onClick={addEmail}
                className=" cursor-pointer text-white mt-2 bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Email
              </div>
            )}
          </div>

          <div className="w-full flex  flex-col justify-center items-center">
            {Phones.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex w-full items-end justify-center gap-2 mt-1"
                >
                  {/* <Input
                    value={Phones[i]}
                    label={i >= 1 ? "Phone " + (i + 1) : "Phone"}
                    onChange={(e: any) => {
                      updatePhone(i, e.target.value);
                    }}
                    type="text"
                    placeholder={i >= 1 ? "Phone " + (i + 1) : "Phone"}
                    htmlFor={"Phone" + i}
                  /> */}
                  <PhoneNumberInput
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
            {isUpdate && Phones && Phones.length < 3 && (
              <div
                onClick={addPhone}
                className=" cursor-pointer text-white mt-2 bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Phone
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center my-10">
          {isSubmitting ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading</span>
            </div>
          ) : (
            <button
              type="submit"
              className=" text-white bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isUpdate ? "Update" : "Add"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
