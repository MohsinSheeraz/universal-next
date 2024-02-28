"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <div className="inquiry-section">
        <div className="row">
          <div className="col-lg-12 col-md-12 inquire">
            <h4>Inquiry Form</h4>
          </div>
        </div>
        <div className="row inquiry-bottom">
          <div className="col-lg-12 col-md-12">
            <h6>Want To Talk To Us</h6>
            <ul>
              <li>
                <div className="checkbox">
                  <input
                    id="negogiate"
                    type="checkbox"
                    defaultValue="I want to negotiate the best price."
                  />
                  <label htmlFor="negogiate">
                    I want to negotiate the best price.
                  </label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input
                    id="knowShipping"
                    type="checkbox"
                    defaultValue="I want to know the shipping schedule."
                  />
                  <label htmlFor="knowShipping">
                    I want to know the shipping schedule.
                  </label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input
                    id="carCondition"
                    type="checkbox"
                    defaultValue="I want to know about the condition of the car."
                  />
                  <label htmlFor="carCondition">
                    I want to know about the condition of the car.
                  </label>
                </div>
              </li>
            </ul>
            <hr />
            <input
              type="textarea"
              placeholder="Type Your Message here.."
              style={{ width: "100%", height: "50px", fontSize: "12px" }}
            />
            <p className="inquire-text">
              Please note that It is the buyer&apos;s responsibility to confirm
              that the vehicle satisfies all import regulations at your
              destination.
            </p>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6 pr-2">
                <div className="carneg-forminput">
                  <input
                    type="hidden"
                    name="customerId"
                    defaultValue={0}
                    id="customerId"
                  />
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    required
                    maxLength={50}
                  />
                  <small
                    className="text-danger error error_first_name"
                    id="error_first_name"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 pl-2">
                <div className="carneg-forminput">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    required
                    maxLength={50}
                  />
                  <small
                    className="text-danger error error_last_name"
                    id="error_last_name"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 pr-2">
                <div className="carneg-forminput">
                  <input
                    type="hidden"
                    name="country_dialCode"
                    id="country_dialCode"
                  />
                  <input type="hidden" name="country_code" id="country_code" />
                  <input
                    type="text"
                    name="product_phone_no"
                    id="product_phone_no"
                    className="phone1"
                    placeholder="Cell Number"
                  />
                  <small
                    className="text-danger error error_phone"
                    id="error_phone"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 pl-2">
                <div className="carneg-forminput">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    required
                  />
                  <small
                    className="text-danger error error_email"
                    id="error_email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 get-quote">
                <button disabled>SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
