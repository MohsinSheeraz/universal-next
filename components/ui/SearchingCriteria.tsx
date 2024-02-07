"use client";
import { Country } from "@/models/Master/Country";
import Link from "next/link";
import { FormSelect } from "react-bootstrap";

interface Props {
  resultCount: number;
  locations: Country[]; // tblMasterCountry[]
  //onFilterChange:(event:React.ChangeEvent<HTMLSelectElement>)=>void
}

export default async function SearchingCriteria({
  locations,
  resultCount,
}: Props) {
  return (
    <>
      <h4 className="ml-4">
        Search Page Result - <span>{resultCount}</span> Matches Found
      </h4>
      <div className="columns-3">
        <h5 className="ml-4">
          View vehicles <strong>shipping from</strong>:
        </h5>
        <ul className="inline-flex items-center">
          <li className="inline-flex items-center rounded-2xl px-2 py-1 font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
            <Link data-toggle="tab" href="#tabs-all" role="tab">
              ALL
            </Link>
          </li>
          {locations
            .filter((country) => country.isInventoryLocation)
            .map((country) => (
              <Link
                key={country.countryId}
                href={`/global/results/${country.slug}/cars?countryID=${country.countryId}`}
                role="tab"
              >
                <li
                  className="w-10 ml-2 items-center text-center rounded-md px-2 py-1 font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
                  key={country.countryId}
                >
                  <img
                    src={`/assets/images/flags/${country.slug}.svg`}
                    className="img-fluid mr-2 "
                    alt={country.slug ?? ""}
                  />
                  {/*{country.countryName}*/}
                </li>
              </Link>
            ))}
        </ul>
      </div>

      <div className="ml-4 columns-auto">
        <p>Sort By: &nbsp;</p>
        <FormSelect name="sort-by" className="w-1/2">
          {/*onChange={onFilterChange}*/}
          <option value="">Select</option>
          <option value="priceLowToHigh">Price Low to high</option>
          <option value="priceHighToLow">Price high to low</option>
          <option value="yearOldToNew">Year old to new</option>
          <option value="yearNewToOld">Year new to old</option>
          <option value="discountHighToLow">Discount high to low</option>
          <option value="discountLowToHigh">Discount low to high</option>
          <option value="engineHighToLow">Engine high to low</option>
          <option value="engineLowToHigh">Engine low to high</option>
          <option value="mileageHighToLow">Mileage high to low</option>
          <option value="mileageLowToHigh">Mileage low to high</option>
        </FormSelect>
      </div>
    </>
  );
}
