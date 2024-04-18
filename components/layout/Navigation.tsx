"use client";

import { useUserStore } from "@/store/store";
import { Menu, Transition } from "@headlessui/react";
import { Button } from "@tremor/react";
import classNames from "classnames";
import Link from "next/link";
import { Fragment } from "react";
import { AiOutlineRead } from "react-icons/ai";
import { CiBank } from "react-icons/ci";

import { PiCreditCardBold } from "react-icons/pi";
import { TbSquareRoundedChevronDownFilled } from "react-icons/tb";
import { toast } from "react-toastify";

export default function Navigation() {
  const { user, isUpdate } = useUserStore();
  const checkUser = () => {
    if (user?.email && !isUpdate) {
      return toast.info("Create Profile First");
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }} id="min-1">
        <nav className="bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                    <ul className="flex items-center">
                      <li className="p-4">
                        <Menu
                          as="div"
                          className="relative  inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="transition  duration-300 ease-in-out hover:scale-105 inline-flex w-full justify-center gap-x-1.5 rounded-md  px-1 xl:!px-3 py-1 xl:!py-2 !text-[10px] xl:!text-xs font-semibold !text-white border-2 !border-white hover:!border-[#9CA3AF] hover:!text-[#9CA3AF] shadow-sm ring-1 ring-inset ring-gray-300 ">
                              Need Help ?
                              <TbSquareRoundedChevronDownFilled
                                className="-mr-1 h-4 w-4 text-gray-400"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/information?page=why-choose-universal-motors"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Why Choose Universal Motor?</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/information?page=how-to-buy"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>How to Buy</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/information?page=export-information"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Export Information</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/information?page=vehicle-shipment-condition"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Condition of Shipment</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/information?page=export-import-services"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Export &amp; Import Services</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </li>
                      <li className="p-4">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="transition duration-300 ease-in-out hover:scale-105 inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 xl:!px-3 py-1 xl:!py-2 !text-[10px] xl:!text-xs font-semibold   !text-white border-2 !border-white hover:!border-[#9CA3AF] hover:!text-[#9CA3AF] shadow-sm ring-1 ring-inset ">
                              About Universal Motors
                              <TbSquareRoundedChevronDownFilled
                                className="-mr-1 h-4 w-4 text-gray-400"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors/"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>About Us?</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/testimonial"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Testimonials</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors?page=sustainability-fundamental-policy"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>
                                        Sustainability Fundamental Policy
                                      </span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors?page=company-profile"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Company Profile</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors?page=global-offices"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Global Offices</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors?page=terms-of-service"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Terms of Services</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors?page=privacy-policy"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Privacy Policy</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors?page=security-export-control"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Security Export Control</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors?page=policy-against-anti-social"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>
                                        Basic Policy Against Anti-Social Forces
                                      </span>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={checkUser}
                                      href={
                                        user?.email && !isUpdate
                                          ? ""
                                          : "/global/about-universal-motors?page=disclaimer-policy"
                                      }
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <span>Disclaimer Policy</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </li>
                      <li className="p-4">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="transition duration-300 ease-in-out hover:scale-105 inline-flex w-full justify-center gap-x-1.5 rounded-md  px-1 xl:!px-3 py-1 xl:!py-2 !text-[10px] xl:!text-xs font-semibold  !text-white border-2 !border-white hover:!border-[#9CA3AF] hover:!text-[#9CA3AF] shadow-sm ring-1 ring-inset ">
                              Import Protocols
                              <TbSquareRoundedChevronDownFilled
                                className="-mr-1 h-4 w-4 text-gray-400"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=chile"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/CL.svg"
                                        alt="Chile flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Chile
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=congo"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/CD.svg"
                                        alt="Congo flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      DR Congo
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=guyana"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/GY.svg"
                                        alt="Guyana flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Guyana
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=jamaica"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/JM.svg"
                                        alt="Jamaica flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Jamaica
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=kenya"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/KE.svg"
                                        alt="Kenya flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Kenya
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=malawi"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/MW.svg"
                                        alt="Malawi flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Malawi
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=pakistan"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/PK.svg"
                                        alt="Pakistan flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Pakistan
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=paraguay"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/PY.svg"
                                        alt="Paraguay flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Paraguay
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=russia"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/RU.svg"
                                        alt="Russia flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Russia
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=sudan"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/SS.svg"
                                        alt="Sudan flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Sudan
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=tanzania"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/TZ.svg"
                                        alt="Tanzania flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Tanzania
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=uganda"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/UG.svg"
                                        alt="Uganda flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Uganda
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=zambia"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/ZM.svg"
                                        alt="Zambia flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Zambia
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=zimbabwe"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/ZW.svg"
                                        alt="Zimbabwe flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Zimbabwe
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={checkUser}
                                    href={
                                      user?.email && !isUpdate
                                        ? ""
                                        : "/global/information/import-protocols?page=ghana"
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <span className="flex inline">
                                      <img
                                        src="/assets/images/flags/GH.svg"
                                        alt="Ghana flag"
                                        className="h-5 mr-3"
                                      />{" "}
                                      Ghana
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </li>
                      <li className="p-4">
                        <Button className="transition duration-300 ease-in-out hover:scale-105 inline-flex w-full  justify-center gap-x-1.5 rounded-md bg-transparent  px-1 xl:!px-3 py-1 xl:!py-2 !text-xs  font-semibold !text-white border-2 !border-white hover:!border-[#9CA3AF] hover:!text-[#9CA3AF] shadow-sm ring-1 ring-inset ">
                          <Link
                            onClick={checkUser}
                            href={
                              user?.email && !isUpdate
                                ? ""
                                : "/global/information?page=how-to-pay"
                            }
                            className=" "
                          >
                            <span className="flex inline !text-[10px] xl:!text-xs">
                              How to Pay{" "}
                              <PiCreditCardBold
                                className="ml-2 h-4 w-4 "
                                aria-hidden="true"
                              />
                            </span>
                          </Link>
                        </Button>
                      </li>
                      {/*<li className="p-4">*/}
                      {/*    <Button className="transition duration-300 ease-in-out hover:scale-110 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">*/}
                      {/*        <Link href="/global/information?page=faqs" className='bg-gray-100 text-gray-900' >*/}
                      {/*                                <span className="flex inline">*/}
                      {/*                                F.A.Q.s*/}
                      {/*                                </span></Link>*/}
                      {/*    </Button>*/}
                      {/*</li>*/}
                      <li className="p-4">
                        <Button className="transition duration-300 ease-in-out hover:scale-110 inline-flex w-full justify-center gap-x-1.5 bg-transparent rounded-md px-1 xl:!px-3 py-1 xl:!py-2 text-xs  font-semibold !text-white border-2 !border-white hover:!border-[#9CA3AF] hover:!text-[#9CA3AF] shadow-sm ring-1 ring-inset ">
                          <Link
                            onClick={checkUser}
                            href={
                              user?.email && !isUpdate
                                ? ""
                                : "/global/information?page=bank-information"
                            }
                            className=""
                          >
                            <span className="flex inline !text-[10px] xl:!text-xs">
                              Bank Information{" "}
                              <CiBank
                                className="ml-2 h-4 w-4"
                                aria-hidden="true"
                              />
                            </span>
                          </Link>
                        </Button>
                      </li>
                      <li className="p-4">
                        <Button className="transition duration-300 ease-in-out hover:scale-110 inline-flex w-full justify-center gap-x-1.5 bg-transparent rounded-md px-1 xl:!px-3 py-1 xl:!py-2 text-xs  font-semibold !text-white border-2 !border-white hover:!border-[#9CA3AF] hover:!text-[#9CA3AF] shadow-sm ring-1 ring-inset ">
                          <Link
                            onClick={checkUser}
                            href={
                              user?.email && !isUpdate
                                ? ""
                                : "/blog"
                            }
                            className=""
                          >
                            <span className="flex inline !text-[10px] xl:!text-xs">
                              Blogs
                              <AiOutlineRead
                                className="ml-2 h-4 w-4"
                                aria-hidden="true"
                              />
                            </span>
                          </Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/*<div className="flex flex-wrap ">*/}
      {/*     <div className="xl:w-1/5 pr-4 pl-4 lg:w-1/5 pr-4 pl-4 md:w-1/5 pr-4 pl-4" />*/}
      {/*     <div className="xl:w-2/3 pr-4 pl-4 lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4">*/}
      {/*         <div className="relative flex flex-wrap items-center content-between py-3 px-4  text-black">*/}
      {/*             <div className="hidden flex-grow items-center" id="navbarNavDropdown">*/}
      {/*                 <ul className="flex flex-wrap list-reset pl-0 mb-0">*/}

      {/*                     <li className=" relative">*/}
      {/*                         <div className="menudropdown currencydropdown">*/}
      {/*                             <button className=" currencydropbtn supportbtn  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1">*/}
      {/*                                 Need Help*/}
      {/*                             </button>*/}
      {/*                             <div className="currencydropdown-content menucontent ">*/}
      {/*                                 <div className="flex flex-wrap  bg-white needhelp">*/}
      {/*                                     <div className="lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4 w-full">*/}
      {/*                                         <ul className="countdrop needhelpmenu p-0">*/}
      {/*                                             <Link href="/why-choose-universal-motors" className="mt-0"><span>Why Choose Universal Motor?</span></Link>*/}
      {/*                                             <Link href="/how-to-buy"> <span>How to Buy</span></Link>*/}
      {/*                                             <Link href="/bank-information"><span>Bank Information</span></Link>*/}
      {/*                                             <Link href="/export-information"> <span>Export Information</span></Link>*/}
      {/*                                             <Link href="/vehicle-sshipment-condition"> <span>Condition of Shipment</span></Link>*/}
      {/*                                             <Link href="/export-import-services"> <span>Export &amp; Import Services</span></Link>*/}
      {/*                                         </ul>*/}
      {/*                                     </div>*/}
      {/*                                 </div>*/}
      {/*                             </div>*/}
      {/*                         </div>*/}
      {/*                     </li>*/}
      {/*                     <li className=" relative">*/}
      {/*                         <div className="menudropdown currencydropdown">*/}
      {/*                             <button className=" currencydropbtn supportbtn  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1">*/}
      {/*                                 About Universal Motors*/}
      {/*                             </button>*/}
      {/*                             <div className="currencydropdown-content menucontent ">*/}
      {/*                                 <div className="flex flex-wrap  bg-white needhelp">*/}
      {/*                                     <div className="lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4 w-full">*/}
      {/*                                         <ul className="countdrop needhelpmenu p-0">*/}
      {/*                                             <Link href="/about-us" className="mt-0"> <span>About Us</span></Link>*/}
      {/*                                             <Link href="/sustainability-fundamental-policy"> <span>Sustainability Fundamental Policy</span></Link>*/}
      {/*                                             <Link href="/company-profile"><span>Company Profile</span></Link>*/}
      {/*                                             <Link href="/global-offices"> <span>Global Offices</span></Link>*/}
      {/*                                             <Link href="/terms-of-service"> <span>Terms of Services</span></Link>*/}
      {/*                                             <Link href="/privacy-policy"> <span>Privacy Policy</span></Link>*/}
      {/*                                             <Link href="/security-export-control"> <span>Security Export Control</span></Link>*/}
      {/*                                             <Link href="/basic-policy-against"> <span>Basic Policy Against Anti-Social Forces</span></Link>*/}
      {/*                                             <Link href="/disclaimer-policy"> <span>Disclaimer Policy</span></Link>*/}
      {/*                                         </ul>*/}
      {/*                                     </div>*/}
      {/*                                 </div>*/}
      {/*                             </div>*/}
      {/*                         </div>*/}
      {/*                     </li>*/}
      {/*                     <li className=" relative">*/}
      {/*                         <div className="menudropdown currencydropdown">*/}
      {/*                             <button className=" currencydropbtn supportbtn  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1">*/}
      {/*                                 Import Protocols*/}
      {/*                             </button>*/}
      {/*                             <div className="currencydropdown-content menucontent ">*/}
      {/*                                 <div className="flex flex-wrap  bg-white needhelp">*/}
      {/*                                     <div className="lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4 w-full">*/}
      {/*                                         <Link className="inline-block py-2 px-4 no-underline mt-0" href="/import-protocols-in-bahamas">*/}
      {/*                                             <img src="/assets/images/flags/BS.svg" alt="Bahamas flag" height={15} />*/}
      {/*                                             <span>Bahamas</span>*/}
      {/*                                         </Link>*/}
      {/*                                         <Link href="/import-protocols-in-chile" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/CL.svg" alt="Chile flag" height={15} /> <span>Chile</span></Link>*/}
      {/*                                         <Link className="inline-block py-2 px-4 no-underline" href="/import-protocols-in-dr-congo"><img src="/assets/images/flags/CD.svg" alt="Congo flag" height={15} /> <span>Dr Congo</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-guyana" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/GY.svg" alt="Guyana flag" height={15} /> <span>Guyana</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-jamaica" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/JM.svg" alt="Jamaica flag" height={15} /> <span>Jamaica</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-kenya" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/KE.svg" alt="Kenya flag" height={15} /> <span>Kenya</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-malawi" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/MW.svg" alt="Malawi flag" height={15} /><span> Malawi</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-pakistan" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/PK.svg" alt="Pakistan flag" height={15} /> <span>Pakistan</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-paraguay" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/PY.svg" alt="Paraguay flag" height={15} /> <span>Paraguay</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-russia" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/RU.svg" alt="Russia flag" height={15} /> <span>Russia</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-south-sudan" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/SS.svg" alt="Sudan flag" height={15} /> <span>South Sudan</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-tanzania" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/TZ.svg" alt="Tanzania flag" height={15} /> <span>Tanzania</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-uganda" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/UG.svg" alt="Uganda flag" height={15} /><span> Uganda</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-zambia" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/ZM.svg" alt="Zambia flag" height={15} /> <span>Zambia</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-zimbabwe" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/ZW.svg" alt="Zimbabwe flag" height={15} /> <span>Zimbabwe</span></Link>*/}
      {/*                                         <Link href="/import-protocols-in-ghana" className="inline-block py-2 px-4 no-underline" ><img src="/assets/images/flags/gh.svg" alt="Ghana flag" height={15} /> <span>Ghana</span></Link>*/}
      {/*                                     </div>*/}
      {/*                                 </div>*/}
      {/*                             </div>*/}
      {/*                         </div>*/}
      {/*                     </li>*/}
      {/*                     <li className="">*/}
      {/*                         <Link className="inline-block py-2 px-4 no-underline" style={{padding: '5px 10px'}} href="/how-to-pay">*/}
      {/*                             How To Pay*/}
      {/*                         </Link>*/}
      {/*                     </li>*/}
      {/*                     <li className="">*/}
      {/*                         <Link className="inline-block py-2 px-4 no-underline" style={{padding: '5px 10px'}} href="/faqs">*/}
      {/*                             FAQs*/}
      {/*                         </Link>*/}
      {/*                     </li>*/}
      {/*                 </ul>*/}

      {/*             </div>*/}
      {/*         </div>*/}
      {/*     </div>*/}
      {/*     <div className="xl:w-1/5 pr-4 pl-4 lg:w-1/5 pr-4 pl-4 md:w-1/5 pr-4 pl-4" />*/}
      {/* </div>*/}
    </>
  );
}
