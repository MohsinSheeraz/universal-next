"use client";
import ContactUs from "@/components/pages/contact/ContactUs";
import { Country } from "@/models/Master/Country";
import { FreightCost } from "@/models/Master/FreightCost";
import { InspectionCost } from "@/models/Master/InspectionCost";
import { PortMapping } from "@/models/Master/PortMapping";
import { Ports } from "@/models/Master/Ports";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  car: any;
  countries: Country[];
  ports: Ports[];
  portMapping: PortMapping[];
  freightCharges: FreightCost[];
  inspectionCost: InspectionCost[];
  stockCode: string;
  reservedBy: Number;
  isReserved: Boolean;
  isSold: Boolean;
}

export default function PriceCalculator({
  car,
  countries,
  ports,
  portMapping,
  freightCharges,
  inspectionCost,
  reservedBy,
  stockCode,
  isReserved,
  isSold
}: Props) {
  const [countryID, setCountryID] = useState(0);
  const [portID, setPortID] = useState(0);
  const { user } = useUserStore();
  const [mappedPorts, setMappedPorts] = useState<PortMapping[]>([]);
  const [onInsuranceCost, setEnableInsurance] = useState(false);
  const [onInspectionCost, setEnablInspection] = useState(false);
  const [freightCharge, setFreightCharge] = useState(0);
  const [insurance, setinsurance] = useState(0);
  const [inspection, setinspection] = useState(0);
  const [totalPrice, setTotalPrice] = useState(car.price);

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const destinationID = parseInt(event.target.value);
    setCountryID(destinationID);
    setPortID(0);
    setEnablInspection(false);
    setEnableInsurance(false);
    setFreightCharge(0);
    setinspection(0);
    const ports = portMapping.filter((port) => port.countryID == destinationID);
    setMappedPorts(ports);
  };

  const handlePortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const changedPortID = parseInt(event.target.value);
    setPortID(changedPortID);
    setEnableInsurance(false);
    setinsurance(0);
    const freight =
      freightCharges.find(
        (x) =>
          x.portId == changedPortID &&
          x.destinationCountryId == countryID &&
          x.sourceCountryId == car.locationId
      )?.freigthAmount ?? (0 as number);
    setFreightCharge(freight * car.m3);
  };

  const handleInsuranceChange = () => {
    if (!onInsuranceCost) {
      setEnableInsurance(true);
      const x = ports.find((p) => p.portId == portID)?.insuranceCost ?? 0;
      setinsurance(x);
    } else {
      setEnableInsurance(false);
      setinsurance(0);
    }
  };
  useEffect(() => {
    getTotalPrice();
  }, [inspection, insurance, freightCharge]);
  const handleInspectionChange = () => {
    if (!onInspectionCost) {
      setEnablInspection(true);
      const x = (inspectionCost.find(
        (p) =>
          p.sourceCountryId == car.locationId &&
          p.destinationCountryId == countryID
      )?.costOfInspection ?? 0) as number;
      setinspection(x);
    } else {
      setEnablInspection(false);
      setinspection(0);
    }
  };

  const getTotalPrice = () => {
    //setTotalPrice(car.price+inspection+insurance+freightCharge)
    setTotalPrice(
      car.price +
      parseFloat(String(inspection)) +
      parseFloat(String(insurance)) +
      parseFloat(String(freightCharge))
    );
  };
  if (isReserved) {
    if (reservedBy === user?.customerId) {
      return (
        <>
          <div className="detail">
            <div className="detaildark">
              <div className="row">
                {/*<Example car={car} countries={countries}/>*/}
                <div className="col-md-5 col-sm-5 col-5 fob-price flex items-center">
                  <span className="mr-2 !text-[9px] sm:!text-[16px]">
                    FOB Price:
                  </span>
                  <select
                    className="w-auto rounded-md bg-white px-3 py-2 !text-[9px] sm:!text-sm font-semibold text-blue-900 hover:bg-blue-100"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <option value={0}>$ USD</option>
                    <option value={1}>¥ JPY</option>
                    <option value={2}>€ EUR</option>
                    <option value={3}>£ GBP</option>
                  </select>
                </div>

                <div className="col-md-7 col-sm-7 col-7 carprice">
                  <dd className="mt-1  mr-10 !text-[16px] sm:!text-3xl font-semibold leading-6 text-indigo-900">
                    <PriceFormat carPrice={car.price} />
                  </dd>
                  {/*@if (selectedCurrencyID == 0)*/}
                  {/*{'{'}*/}
                  {/*<span>${car.price} </span>*/}
                  {/*{'}'}*/}
                  {/*else if (selectedCurrencyID == 1)*/}
                  {/*{'{'}*/}
                  {/*@*<span>¥ @_currencyConverter.ConvertCurrencyAsync("USD","JPY",@_cars.Price)</span>*@*/}
                  {/*<span>¥ @convertedAmount.ToString("0.##")</span>*/}
                  {/*{'}'}*/}
                  {/*else if (selectedCurrencyID == 2)*/}
                  {/*{'{'}*/}
                  {/*<span>€ @convertedAmount.ToString("0.##")</span>*/}
                  {/*{'}'}*/}
                  {/*else if (selectedCurrencyID == 3)*/}
                  {/*{'{'}*/}
                  {/*<span>£ @convertedAmount.ToString("0.##")</span>*/}
                  {/*{'}'}*/}
                </div>
              </div>
              <hr />
              <div className="flex flex-row w-full">
                <div className="flex !flex-col sm:!flex-row  basis-1/2 m-2">
                  <span className="m-2 text-sm !text-[9px] sm:!text-[15px]">
                    Freight To :{" "}
                  </span>

                  <select
                    value={countryID}
                    onChange={handleCountryChange}
                    className="w-2/3  gap-x-1.5 rounded-md bg-white px-3 py-2 !text-[9px] sm:!text-sm font-semibold text-blue-900 hover:bg-blue-100"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <option value={0}>Select Destination</option>
                    {countries.map((country) => (
                      // <SelectItem key={country.countryId} value={country.countryId.toString()}>{country.countryName}</SelectItem>
                      <option key={country.countryId} value={country.countryId}>
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex !flex-col sm:!flex-row  basis-1/2 m-2">
                  <span className="m-2 text-sm !text-[9px] sm:!text-[15px]">
                    Port/City :
                  </span>
                  <select
                    value={portID}
                    onChange={handlePortChange}
                    className="w-2/3  gap-x-1.5 rounded-md  !text-[9px] sm:!text-sm bg-white px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-100"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <option value={0}>Select Port</option>
                    {mappedPorts.map((port) => (
                      <option key={port.portId} value={port.portId}>
                        {ports.find((x) => x.portId == port.portId)?.portName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <hr />

              <div className="flex flex-row">
                <div className="text-center basis-1/3 m-2">
                  <span className="m-2 !text-[9px] sm:!text-sm">
                    Freight Charges{" "}
                  </span>
                  <dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">
                    <PriceFormat carPrice={freightCharge} />
                  </dd>
                </div>
                <div className="text-center basis-1/3">
                  <Switch.Group
                    as="div"
                    className="flex !flex-col sm:!flex-row items-center mt-2"
                  >
                    <Switch
                      checked={onInsuranceCost}
                      // disabled={portID==0}
                      onChange={handleInsuranceChange}
                      className={classNames(
                        onInsuranceCost ? "bg-[#221C63]" : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#221C63] focus:ring-offset-2"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          onInsuranceCost ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                    <Switch.Label as="span" className="ml-3 text-sm ">
                      <span className="!text-[9px] sm:!text-sm font-medium text-gray-900">
                        Insurance Cost
                      </span>{" "}
                    </Switch.Label>
                  </Switch.Group>
                  {onInsuranceCost && (
                    <dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">
                      <PriceFormat carPrice={insurance} />
                    </dd>
                  )}
                </div>
                <div className="text-center basis-1/3">
                  <Switch.Group
                    as="div"
                    className="flex items-center  !flex-col sm:!flex-row  mt-2"
                  >
                    <Switch
                      checked={onInspectionCost}
                      // disabled={countryID==0}
                      onChange={handleInspectionChange}
                      className={classNames(
                        onInspectionCost ? "bg-[#221C63]" : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#221C63] focus:ring-offset-2"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          onInspectionCost ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                    <Switch.Label as="span" className="ml-3 text-sm">
                      <span className=" !text-[9px] sm:!text-sm font-medium text-gray-900">
                        Inspection Cost
                      </span>{" "}
                    </Switch.Label>
                  </Switch.Group>
                  {onInspectionCost && (
                    <dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">
                      <PriceFormat carPrice={inspection} />
                    </dd>
                  )}
                </div>
              </div>
            </div>
            <div className="detaillight">
              <div className="text-center row">
                <div className="col-lg-6 col-md-6">
                  <div>
                    {/*@if (selectedCurrencyID == 0)*/}
                    {/*{'{'}*/}
                    {/*<h5 className="tprice">TOTAL PRICE ($)</h5>*/}
                    {/*{'}'}*/}
                    {/*else if (selectedCurrencyID == 1)*/}
                    {/*{'{'}*/}
                    {/*<h5 className="tprice">TOTAL PRICE (¥)</h5>*/}
                    {/*{'}'}*/}
                    {/*else if (selectedCurrencyID == 2)*/}
                    {/*{'{'}*/}
                    {/*<h5 className="tprice">TOTAL PRICE (€)</h5>*/}
                    {/*{'}'}*/}
                    {/*else if (selectedCurrencyID == 3)*/}
                    {/*{'{'}*/}
                    {/*<h5 className="tprice">TOTAL PRICE (£)</h5>*/}
                    {/*{'}'}*/}

                    {/* <button
                    type="button"
                    onClick={getTotalPrice}
                    className="inline-block rounded bg-[#221C63] px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#221C63] transition duration-150 ease-in-out  focus:bg-[#221C63]  focus:outline-none focus:ring-0 active:bg-success-700  dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
                  >
                    Get TOTAL PRICE
                  </button> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="p-2  bg-transparent border-2 border-[#221C63]  shadow-lg rounded-2xl">
                    {/* {totalPrice != 0 && (
                    <dd className="mt-1 shadow-2xl !text-[16px] sm:!text-2xl font-semibold leading-6 text-[#221C63]">
                      <PriceFormat carPrice={totalPrice} />
                    </dd>
                  )} */}
                    {portID == 0 ? (
                      <p className="text-[#221C63] text-[12px !important] lg:text-[14px !important] font-semibold">
                        Ask total CNF
                      </p>
                    ) : (
                      totalPrice != 0 && (
                        <dd className="mt-1 shadow-2xl !text-[16px] sm:!text-2xl font-semibold leading-6 text-[#221C63]">
                          <PriceFormat carPrice={totalPrice} />
                        </dd>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactUs stockcode={stockCode} />
        </>
      );
    }
  } else {
    return (
      <>
        <div className="detail">
          <div className="detaildark">
            <div className="row">
              {/*<Example car={car} countries={countries}/>*/}
              <div className="col-md-5 col-sm-5 col-5 fob-price flex items-center">
                <span className="mr-2 !text-[9px] sm:!text-[16px]">
                  FOB Price:
                </span>
                <select
                  className="w-auto rounded-md bg-white px-3 py-2 !text-[9px] sm:!text-sm font-semibold text-blue-900 hover:bg-blue-100"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <option value={0}>$ USD</option>
                  <option value={1}>¥ JPY</option>
                  <option value={2}>€ EUR</option>
                  <option value={3}>£ GBP</option>
                </select>
              </div>

              <div className="col-md-7 col-sm-7 col-7 carprice">
                <dd className="mt-1  mr-10 !text-[16px] sm:!text-3xl font-semibold leading-6 text-indigo-900">
                  <PriceFormat carPrice={car.price} />
                </dd>
                {/*@if (selectedCurrencyID == 0)*/}
                {/*{'{'}*/}
                {/*<span>${car.price} </span>*/}
                {/*{'}'}*/}
                {/*else if (selectedCurrencyID == 1)*/}
                {/*{'{'}*/}
                {/*@*<span>¥ @_currencyConverter.ConvertCurrencyAsync("USD","JPY",@_cars.Price)</span>*@*/}
                {/*<span>¥ @convertedAmount.ToString("0.##")</span>*/}
                {/*{'}'}*/}
                {/*else if (selectedCurrencyID == 2)*/}
                {/*{'{'}*/}
                {/*<span>€ @convertedAmount.ToString("0.##")</span>*/}
                {/*{'}'}*/}
                {/*else if (selectedCurrencyID == 3)*/}
                {/*{'{'}*/}
                {/*<span>£ @convertedAmount.ToString("0.##")</span>*/}
                {/*{'}'}*/}
              </div>
            </div>
            <hr />
            <div className="flex flex-row w-full">
              <div className="flex !flex-col sm:!flex-row  basis-1/2 m-2">
                <span className="m-2 text-sm !text-[9px] sm:!text-[15px]">
                  Freight To :{" "}
                </span>

                <select
                  value={countryID}
                  onChange={handleCountryChange}
                  className="w-2/3  gap-x-1.5 rounded-md bg-white px-3 py-2 !text-[9px] sm:!text-sm font-semibold text-blue-900 hover:bg-blue-100"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <option value={0}>Select Destination</option>
                  {countries.map((country) => (
                    // <SelectItem key={country.countryId} value={country.countryId.toString()}>{country.countryName}</SelectItem>
                    <option key={country.countryId} value={country.countryId}>
                      {country.countryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex !flex-col sm:!flex-row  basis-1/2 m-2">
                <span className="m-2 text-sm !text-[9px] sm:!text-[15px]">
                  Port/City :
                </span>
                <select
                  value={portID}
                  onChange={handlePortChange}
                  className="w-2/3  gap-x-1.5 rounded-md  !text-[9px] sm:!text-sm bg-white px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-100"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <option value={0}>Select Port</option>
                  {mappedPorts.map((port) => (
                    <option key={port.portId} value={port.portId}>
                      {ports.find((x) => x.portId == port.portId)?.portName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <hr />

            <div className="flex flex-row">
              <div className="text-center basis-1/3 m-2">
                <span className="m-2 !text-[9px] sm:!text-sm">
                  Freight Charges{" "}
                </span>
                <dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">
                  <PriceFormat carPrice={freightCharge} />
                </dd>
              </div>
              <div className="text-center basis-1/3">
                <Switch.Group
                  as="div"
                  className="flex !flex-col sm:!flex-row items-center mt-2"
                >
                  <Switch
                    checked={onInsuranceCost}
                    // disabled={portID==0}
                    onChange={handleInsuranceChange}
                    className={classNames(
                      onInsuranceCost ? "bg-[#221C63]" : "bg-gray-200",
                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#221C63] focus:ring-offset-2"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        onInsuranceCost ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                  <Switch.Label as="span" className="ml-3 text-sm ">
                    <span className="!text-[9px] sm:!text-sm font-medium text-gray-900">
                      Insurance Cost
                    </span>{" "}
                  </Switch.Label>
                </Switch.Group>
                {onInsuranceCost && (
                  <dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">
                    <PriceFormat carPrice={insurance} />
                  </dd>
                )}
              </div>
              <div className="text-center basis-1/3">
                <Switch.Group
                  as="div"
                  className="flex items-center  !flex-col sm:!flex-row  mt-2"
                >
                  <Switch
                    checked={onInspectionCost}
                    // disabled={countryID==0}
                    onChange={handleInspectionChange}
                    className={classNames(
                      onInspectionCost ? "bg-[#221C63]" : "bg-gray-200",
                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#221C63] focus:ring-offset-2"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        onInspectionCost ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                  <Switch.Label as="span" className="ml-3 text-sm">
                    <span className=" !text-[9px] sm:!text-sm font-medium text-gray-900">
                      Inspection Cost
                    </span>{" "}
                  </Switch.Label>
                </Switch.Group>
                {onInspectionCost && (
                  <dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">
                    <PriceFormat carPrice={inspection} />
                  </dd>
                )}
              </div>
            </div>
          </div>
          <div className="detaillight">
            <div className="text-center row">
              <div className="col-lg-6 col-md-6">
                <div>
                  {/*@if (selectedCurrencyID == 0)*/}
                  {/*{'{'}*/}
                  {/*<h5 className="tprice">TOTAL PRICE ($)</h5>*/}
                  {/*{'}'}*/}
                  {/*else if (selectedCurrencyID == 1)*/}
                  {/*{'{'}*/}
                  {/*<h5 className="tprice">TOTAL PRICE (¥)</h5>*/}
                  {/*{'}'}*/}
                  {/*else if (selectedCurrencyID == 2)*/}
                  {/*{'{'}*/}
                  {/*<h5 className="tprice">TOTAL PRICE (€)</h5>*/}
                  {/*{'}'}*/}
                  {/*else if (selectedCurrencyID == 3)*/}
                  {/*{'{'}*/}
                  {/*<h5 className="tprice">TOTAL PRICE (£)</h5>*/}
                  {/*{'}'}*/}

                  {/* <button
                  type="button"
                  onClick={getTotalPrice}
                  className="inline-block rounded bg-[#221C63] px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#221C63] transition duration-150 ease-in-out  focus:bg-[#221C63]  focus:outline-none focus:ring-0 active:bg-success-700  dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
                >
                  Get TOTAL PRICE
                </button> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="p-2  bg-transparent border-2 border-[#221C63]  shadow-lg rounded-2xl">
                  {/* {totalPrice != 0 && (
                  <dd className="mt-1 shadow-2xl !text-[16px] sm:!text-2xl font-semibold leading-6 text-[#221C63]">
                    <PriceFormat carPrice={totalPrice} />
                  </dd>
                )} */}
                  {portID == 0 ? (
                    <p className="text-[#221C63] text-[12px !important] lg:text-[14px !important] font-semibold">
                      Ask total CNF
                    </p>
                  ) : (
                    totalPrice != 0 && (
                      <dd className="mt-1 shadow-2xl !text-[16px] sm:!text-2xl font-semibold leading-6 text-[#221C63]">
                        <PriceFormat carPrice={totalPrice} />
                      </dd>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactUs stockcode={stockCode} />
      </>
    );
  }
}
