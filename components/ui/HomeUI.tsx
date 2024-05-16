"use client";
import HomeUITabGroup from "@/components/ui/HomeUITabGroup";
import { BodyType } from "@/models/Master/BodyType";
import { Colors } from "@/models/Master/Colors";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { VehicleCategory } from "@/models/Master/VehicleCategory";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
interface Props {
  bodyTlist: BodyType[];
  makeList: Make[];
  color: Colors[];
  transmission: Transmission[];
  drivetrain: DrivetrainType[];
  fuel: FuelType[];
  vehicleCategory: VehicleCategory[]
}

const initialState = {
  modelId: 0,
  makeId: 0,
  bodyTypeId: 0,
  steeringTypeId: 0,
  fromYear: 0,
  toYear: 0,
};

export default function HomeUI({
  makeList,
  bodyTlist,
  color,
  transmission,
  drivetrain,
  fuel,
  vehicleCategory
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function closeMobileSearchModal() {
    setIsOpen(false);
  }

  function openMobileSearchModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div>
        <div className="hidden sm:block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
          <HomeUITabGroup
            drivetrain={drivetrain}
            color={color}
            transmission={transmission}
            fuel={fuel}
            makes={makeList}
            bodyTypes={bodyTlist}
            vehicleCategory={vehicleCategory}
          />
        </div>
        <div className="block sm:hidden w-full ">
          <button
            onClick={openMobileSearchModal}
            className="w-[60%] font-semibold bg-slate-500 p-2 rounded-xl text-white hover:border-2 hover:border-slate-500 hover:bg-transparent hover:!text-slate-500 "
          >
            <span>Search Filter</span>
          </button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={closeMobileSearchModal}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full  items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <HomeUITabGroup
                        drivetrain={drivetrain}
                        color={color}
                        transmission={transmission}
                        fuel={fuel}
                        makes={makeList}
                        bodyTypes={bodyTlist}
                        vehicleCategory={vehicleCategory}
                      />
                      {/* <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-white"
                      >
                        Search ...
                      </Dialog.Title>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeMobileSearchModal}
                        >
                          Cancel
                        </button>
                      </div> */}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
}
