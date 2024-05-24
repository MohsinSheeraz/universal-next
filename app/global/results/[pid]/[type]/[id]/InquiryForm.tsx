// "use client";

// import { useState } from "react";

// export default function InquiryForm() {
//   const [agreed, setAgreed] = useState(false);

//   return (
//     <>
//       <div className="inquiry-section">
//         <div className="row">
//           <div className="col-lg-12 col-md-12 inquire">
//             <h4>Inquiry Form</h4>
//           </div>
//         </div>
//         <div className="row inquiry-bottom">
//           <div className="col-lg-12 col-md-12">
//             <h6>Want To Talk To Us</h6>
//             <ul>
//               <li>
//                 <div className="checkbox">
//                   <input
//                     id="negogiate"
//                     type="checkbox"
//                     defaultValue="I want to negotiate the best price."
//                   />
//                   <label htmlFor="negogiate">
//                     I want to negotiate the best price.
//                   </label>
//                 </div>
//               </li>
//               <li>
//                 <div className="checkbox">
//                   <input
//                     id="knowShipping"
//                     type="checkbox"
//                     defaultValue="I want to know the shipping schedule."
//                   />
//                   <label htmlFor="knowShipping">
//                     I want to know the shipping schedule.
//                   </label>
//                 </div>
//               </li>
//               <li>
//                 <div className="checkbox">
//                   <input
//                     id="carCondition"
//                     type="checkbox"
//                     defaultValue="I want to know about the condition of the car."
//                   />
//                   <label htmlFor="carCondition">
//                     I want to know about the condition of the car.
//                   </label>
//                 </div>
//               </li>
//             </ul>
//             <hr />
//             <input
//               type="textarea"
//               placeholder="Type Your Message here.."
//               style={{ width: "100%", height: "50px", fontSize: "12px" }}
//             />
//             <p className="inquire-text">
//               Please note that It is the buyer&apos;s responsibility to confirm
//               that the vehicle satisfies all import regulations at your
//               destination.
//             </p>
//             <div className="row">
//               <div className="col-md-6 col-sm-6 col-6 pr-2">
//                 <div className="carneg-forminput">
//                   <input
//                     type="hidden"
//                     name="customerId"
//                     defaultValue={0}
//                     id="customerId"
//                   />
//                   <input
//                     type="text"
//                     name="first_name"
//                     id="first_name"
//                     placeholder="First Name"
//                     required
//                     maxLength={50}
//                   />
//                   <small
//                     className="text-danger error error_first_name"
//                     id="error_first_name"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 col-sm-6 col-6 pl-2">
//                 <div className="carneg-forminput">
//                   <input
//                     type="text"
//                     name="last_name"
//                     id="last_name"
//                     placeholder="Last Name"
//                     required
//                     maxLength={50}
//                   />
//                   <small
//                     className="text-danger error error_last_name"
//                     id="error_last_name"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 col-sm-6 col-6 pr-2">
//                 <div className="carneg-forminput">
//                   <input
//                     type="hidden"
//                     name="country_dialCode"
//                     id="country_dialCode"
//                   />
//                   <input type="hidden" name="country_code" id="country_code" />
//                   <input
//                     type="text"
//                     name="product_phone_no"
//                     id="product_phone_no"
//                     className="phone1"
//                     placeholder="Cell Number"
//                   />
//                   <small
//                     className="text-danger error error_phone"
//                     id="error_phone"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 col-sm-6 col-6 pl-2">
//                 <div className="carneg-forminput">
//                   <input
//                     type="text"
//                     name="email"
//                     id="email"
//                     placeholder="Email Address"
//                     required
//                   />
//                   <small
//                     className="text-danger error error_email"
//                     id="error_email"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12 col-md-12 get-quote">
//                 <button disabled>SEND</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

'use client'
import emailjs from '@emailjs/browser';
import { Dialog, Switch, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useRef, useState } from "react";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function ContactUs() {
  const [agreed, setAgreed] = useState(false)
  const form = useRef<HTMLFormElement>(null);
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }


  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      console.log('no message sent')
    } else {
      emailjs.sendForm('service_7e9top8', 'template_nfu924e', form.current ?? "", 'sFnMuHjMgPi29ux01')
        .then((result) => {
          console.log(result.text);
          setIsOpen(true)
        }, (error) => {
          console.log(error.text);
        });

      setAgreed(false)
    }


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
            <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-4xl">Want To Talk To Us</h3>

          </div>
          <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="first-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="last-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="phone-number"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
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

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="mt-10">
              <button

                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Lets talk
              </button>
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
                            Message Delivered successfully
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              We have recieved your message. Someone will get
                              back to you. And answer your queries in the email you have provided.
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Got it, thanks!
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
  )
}


