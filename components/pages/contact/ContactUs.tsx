"use client";
import { InquiryDetails } from "@/models/Customer";
import { Dialog, Switch, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useRef, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./phoneInput.css";

import agent from "@/api/agent";
import emailjs from "@emailjs/browser";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  stockcode: string;
  stockId: number;
}
export default function ContactUs({ stockcode, stockId }: Props) {
  const [agreed, setAgreed] = useState(false);
  const pathname = usePathname();
  const [loader, setLoader] = useState(false);
  const [phone, setPhone] = useState("");
  const form = useRef<HTMLFormElement>(null);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const isValid = phone
    ? phone && isValidPhoneNumber(phone) && phone.startsWith("+")
      ? true
      : false
    : false;

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!agreed || !isValid) {
      if (!phone) {
        toast.info("Please Enter Phone Number ");
      }
      return console.log("no message sent");
    }
    setLoader(true);
    // console.log(form.current)
    const formData = new FormData(form.current!);
    const formValues = Object.fromEntries(formData.entries());
    await emailjs
      .sendForm(
        "service_7e9top8",
        "template_nfu924e",
        form.current ?? "",
        "sFnMuHjMgPi29ux01"
      )
      .then(
        async (result) => {
          setIsOpen(true);
          const data: InquiryDetails = {
            stockId: stockId,
            name: String(
              formValues["first-name"] + " " + formValues["last-name"]
            ),
            email: String(formValues.email),
            contactNo: String(formValues["phone-number"]),
            message: String(formValues.message),
            countryCode: String(formValues["phone-numberCountry"]),
            stockUrl: pathname,
          };
          await agent.LoadData.customerInquiry(data);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setLoader(false);
    setAgreed(false);
  };

  return (
    <>
      <div className="inquiry-section">
        <div className="row">
          <div className="col-lg-12 col-md-12 inquire">
            <h4>Inquiry Form</h4>
          </div>
        </div>
        <div className="row inquiry-bottom">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-lg font-bold tracking-tight text-[#919dad] sm:text-4xl">
              Want To Talk To Us
            </h3>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number *
                </label>
                <div className="mt-2.5">
                  <PhoneInput
                    defaultCountry="US"
                    value={phone}
                    onChange={(e: any) => {
                      setPhone(e);
                    }}
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className={`block w-full !bg-white rounded-md border-0 px-3.5 py-[2px] ${isValid ? "text-gray-900" : "text-red-500"} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                  <p className="text-[11px] mt-1">
                    Note: Phone Number start with + <br /> eg: +(country code)
                    254 2554
                  </p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email *
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <input value={stockcode} id="stockcode" name="stockcode" hidden />

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message *
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-[#221C63]" : "bg-gray-200",
                      "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-[#221C63]">
                    privacy&nbsp;policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="mt-10">
              {loader ? (
                <div className="border-gray-300 mx-auto h-8 w-8 animate-spin rounded-full border-4 border-t-[#221C63]" />
              ) : (
                <button
                  type="submit"
                  className="block w-full rounded-md bg-[#221C63] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Lets talk
                </button>
              )}
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Thank you for your message
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              We have received your message and will get back to
                              you shortly.
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Close
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
