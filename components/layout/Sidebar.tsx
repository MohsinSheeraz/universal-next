import { Country } from "@/models/Master/Country";
import { Make } from "@/models/Master/Make";
import Image from "next/image";
import Link from "next/link";

interface Props {
  locations: Country[];
  makes: Make[];
}

function Sidebar({ locations, makes }: Props) {
  return (
    <>
      <div className="col-xl-2 col-lg-2 col-md-2 d-md-block d-none   bg-white shadow-xl">
        <div className="showcase-Make ml-2 ">
          <h5 style={{ fontSize: 18, color: "black" }}>Search Cars By Make</h5>
          <ul className="countdrop mt-3 mb-3">
            {makes
              .filter((x) => x.vehicleTypeId == 1)
              .sort((a, b) => b.stockCount - a.stockCount)
              .slice(0, 10) // Get the first 10 records
              .map((make) => (
                <li key={make.makeId}>
                  <Link
                    href={{
                      pathname: `/global/results/${make.slug}/cars`,
                      query: {
                        makeID: make.makeId,
                      },
                    }}
                  >
                    <span className=" inline-flex items-center rounded-md">
                      <Image
                        loading="lazy"
                        width={15}
                        height={10}
                        src={make.imageURL ?? ""}
                        className="img-fluid mr-3"
                        alt={make.slug}
                      />

                      {make.makeName}

                      <span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                        <svg
                          className="h-1.5 w-1.5 fill-blue-500"
                          viewBox="0 0 6 6"
                          aria-hidden="true"
                        >
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                        {make.stockCount}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
          <h5 style={{ fontSize: 18, color: "black" }}>
            Search Trucks By Make
          </h5>
          <ul className="countdrop mt-3 mb-3">
            {makes
              .filter((x) => x.vehicleTypeId == 2 && x.stockCount > 0)
              .sort((a, b) => b.stockCount - a.stockCount)
              .slice(0, 10) // Get the first 10 records
              .map((make) => (
                <li key={make.makeId}>
                  <Link
                    href={{
                      pathname: `/global/results/${make.slug}/trucks`,
                      query: {
                        makeID: make.makeId,
                      },
                    }}
                  >
                    <span className=" inline-flex items-center rounded-md">
                      <Image
                        loading="lazy"
                        src={make.imageURL ?? ""}
                        className="img-fluid mr-3"
                        height={10}
                        width={10}
                        alt={make.slug}
                      />

                      {make.makeName}

                      <span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                        <svg
                          className="h-1.5 w-1.5 fill-blue-500"
                          viewBox="0 0 6 6"
                          aria-hidden="true"
                        >
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                        {make.stockCount}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
          <h5>Search By Steering</h5>
          <ul className="countdrop mt-3 mb-3">
            <Link
              className="nav-link"
              href={{
                pathname: "/global/results/right-hand/cars",
                query: {
                  steeringID: 1,
                },
              }}
            >
              <span className=" inline-flex items-center rounded-md">
                <Image
                  loading="lazy"
                  src="/assets/images/default/Right.png"
                  width={15}
                  height={10}
                  className="img-fluid mr-3"
                  alt="Right Hand"
                />
                Right Hand
              </span>
            </Link>
            <Link
              className="nav-link"
              href={{
                pathname: "/global/results/left-hand/cars",
                query: {
                  steeringID: 2,
                },
              }}
            >
              <span className=" inline-flex items-center rounded-md">
                <Image
                  src="/assets/images/default/Left.png"
                  loading="lazy"
                  className="img-fluid mr-3"
                  width={15}
                  height={10}
                  alt="Left Hand"
                />
                Left Hand
                {/*<span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">*/}
                {/*            <svg className="h-1.5 w-1.5 fill-yellow-400" viewBox="0 0 6 6" aria-hidden="true">*/}
                {/*              <circle cx={3} cy={3} r={3} />*/}
                {/*            </svg>*/}
                {/*    {stocks.filter(x=>x.steeringTypeId==2).length}*/}
                {/*          </span>*/}
              </span>
            </Link>
          </ul>
          <h5 style={{ fontSize: 18, color: "black" }}>Inventory Location</h5>
          <ul className="countdrop mt-3 mb-3">
            {locations
              .sort((a, b) => b.stockCount - a.stockCount)
              .filter((location) => location.isInventoryLocation)
              .map((location) => (
                <li key={location.countryId}>
                  <Link
                    href={{
                      pathname: `/global/results/${location.slug}/cars`,
                      query: {
                        countryID: location.countryId,
                      },
                    }}
                  >
                    <span className=" inline-flex items-center rounded-md">
                      <Image
                        loading="lazy"
                        src={"/assets/images/flags/" + location.slug + ".svg"}
                        className="flag img-fluid mr-3"
                        width={15}
                        height={10}
                        alt={location.slug ?? ""}
                      />
                      {location.countryName}
                      <span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                        <svg
                          className="h-1.5 w-1.5 fill-green-500"
                          viewBox="0 0 6 6"
                          aria-hidden="true"
                        >
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                        {location.stockCount}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
