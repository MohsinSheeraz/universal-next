"use client";

import FaqComponent from "@/components/layout/FaqComponent";
import { Trucks } from "@/models/Trucks";
import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";

interface Props {
  trucks: Trucks[];
}

export default function HomePageTruckListings({ trucks }: Props) {
  return (
    <>
      <div className="row ">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-32">
          <div>
            {/*<h2 className="text-blue-800">Most Popular in <span>your Country</span></h2>*/}
            <div className="flex inline">
              <h2 className="text-blue-800">
                Most Popular <span> Tipper Trucks </span>
              </h2>
              {/*<img src="/assets/images/flags/JP.svg" className="img-fluid ml-2 h-5" alt="Japan" />*/}
            </div>

            <div className="carsrow row py-5">
              {trucks
                // .filter(car => (car.price  <= 15000 && car.price >=5000) && car.bodyTypeId==1)
                .filter((car) => car.categoryID == 2)
                .sort((a, b) => b.stockId - a.stockId)
                .slice(0, 10)
                .map((car) => (
                  <Link
                    key={car.stockId}
                    href={`/global/results/${car.makeName.replaceAll(" ", "-") +
                      "-" +
                      car.modelName.replaceAll(" ", "-") +
                      "-" +
                      car.year
                      }/${car.stockId}`}
                  >
                    <div className="col-sm transition duration-300 ease-in-out hover:scale-110">
                      <div className="cardimage">
                        <img
                          src={car.imageUrl}
                          alt={car.slug}
                          title={car.slug}
                        />
                      </div>
                      <div className="cardcontent">
                        <h4>{car.listingTitle}</h4>
                        <p className="modelno">{car.modelCode}</p>
                        <p className="car-price">
                          Price:{" "}
                          <span>
                            <PriceFormat carPrice={car.price} />
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="showcase-Recheading">
                {/*<h2>New Arrival in <span>Japan</span></h2>*/}

                <div className="flex inline">
                  <h2 className="text-blue-800">
                    Most Popular <span> 3 Axle Trucks</span>
                  </h2>
                  {/*<img src="/assets/images/flags/AE.svg" className="img-fluid ml-2  h-5" alt="UAE" />*/}
                </div>

                <div className="carsrow row py-5">
                  {trucks
                    .filter((car) => car.axleTypeId == 1)
                    .sort((a, b) => b.stockId - a.stockId)
                    .slice(0, 10)
                    .map((car) => (
                      // <Link key={car.stockId} href={`/global/results/${encodeURIComponent(car.stockId)}`}>
                      <Link
                        key={car.stockId}
                        href={`/global/results/${car.makeName.replaceAll(" ", "-") +
                          "-" +
                          car.modelName.replaceAll(" ", "-") +
                          "-" +
                          car.year
                          }/${car.stockId}`}
                      >
                        <div className="col-sm transition duration-300 ease-in-out hover:scale-110">
                          <div className="cardimage">
                            <img
                              src={car.imageUrl}
                              alt={car.slug}
                              title={car.slug}
                            />
                          </div>
                          <div className="cardcontent">
                            <h4>{car.listingTitle}</h4>
                            <p className="modelno">{car.modelCode}</p>
                            <p className="car-price">
                              Price:{" "}
                              <span>
                                <PriceFormat carPrice={car.price} />
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <FaqComponent />
          <div className="bg-[url('/assets/images/cta-bg.png')] cta-homeSec">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="cta-heading">
                  <h3>Universal Cars Export</h3>
                  <p>
                    For any queries, Call our support team at &nbsp; &nbsp;{" "}
                    <Link href="tel:+49 471 9731 9003" className="text-white">
                      {" "}
                      +49 471 9731 9003
                    </Link>
                  </p>
                  <h6>
                    <Link href="/contact">Contact us</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
