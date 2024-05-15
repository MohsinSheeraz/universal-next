"use client";
import agent from "@/api/agent";
import FaqComponent from "@/components/layout/FaqComponent";
import { Country } from "@/models/Master/Country";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import { useUserStore } from "@/store/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import CarCard from "../CarCard";

interface Props {
  stockcars: StockCars[];
  trucks: Trucks[];
  locations: Country[];
}

export default function HomePageCarListings({ stockcars, trucks, locations }: Props) {
  const [fav, setFav] = useState<any>([]);
  const { user } = useUserStore();
  useEffect(() => {
    const getData = async () => {
      const favorite = await agent.LoadData.favouriteList(user.customerId);
      setFav(favorite.data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="row ">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-32">
          <div>
            {/*<h2 className="text-blue-800">Most Popular in <span>your Country</span></h2>*/}
            <div className="flex inline">
              <h2 className="text-[#221C63]">
                Most Popular <span> Cars from Japan </span>
              </h2>
            </div>

            <div className="w-[95%] lg:w-full m-auto overflow-x-auto ">
              <div className="grid !grid-cols-10 2xl:!grid-cols-5  gap-60  2xl:gap-3 w-full ">
                {stockcars
                  // .filter(car => (car.price  <= 15000 && car.price >=5000) && car.bodyTypeId==1)
                  .filter((car) => car.locationId == 84)
                  .sort((a, b) => b.stockId - a.stockId)
                  // .slice(0,10)
                  .map((car, i) => (
                    <CarCard
                      key={i}
                      fav={fav}
                      car={car}
                      countries={locations}
                      href={`/global/results/${car.makeName.replaceAll(" ", "-") +
                        "-" +
                        car.modelName.replaceAll(" ", "-") +
                        "-" +
                        car.year
                        }/cars/${car.stockId}`}
                    />
                  ))}
              </div>
            </div>
          </div>
          <br />
          <br />
          <div>
            {/*<h2 className="text-blue-800">Most Popular in <span>your Country</span></h2>*/}
            <div className="flex inline">
              <h2 className="text-[#221C63]">
                Most Recent <span> Listed Trucks </span>
              </h2>
              {/*<img src="/assets/images/flags/JP.svg" className="img-fluid ml-2 h-5" alt="Japan" />*/}
            </div>

            <div className="w-[95%] lg:w-full m-auto overflow-x-auto ">
              <div className="grid !grid-cols-10 2xl:!grid-cols-5  gap-60  2xl:gap-3 w-full ">
                {trucks.slice(0, 10).map((car, i) => (
                  <CarCard
                    key={i}
                    fav={fav}
                    car={car}
                    countries={locations}
                    href={`/global/results/${car.makeName.replaceAll(" ", "-") +
                      "-" +
                      car.modelName.replaceAll(" ", "-") +
                      "-" +
                      car.year
                      }/trucks/${car.stockId}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="showcase-Recheading">
                {/*<h2>New Arrival in <span>Japan</span></h2>*/}

                <div className="flex inline">
                  <h2 className="text-[#221C63]">
                    Most Popular <span> Cars from UAE</span>
                  </h2>
                  {/*<img src="/assets/images/flags/AE.svg" className="img-fluid ml-2  h-5" alt="UAE" />*/}
                </div>

                <div className="w-[95%] lg:w-full m-auto overflow-x-auto ">
                  <div className="grid !grid-cols-10 2xl:!grid-cols-5  gap-60  2xl:gap-3 w-full ">
                    {stockcars
                      .filter((car) => car.locationId == 185)
                      .sort((a, b) => b.stockId - a.stockId)
                      // .slice(0,10)
                      .map((car, i) => (
                        // <Link key={car.stockId} href={`/global/results/${encodeURIComponent(car.stockId)}`}>
                        <CarCard
                          countries={locations}
                          fav={fav}
                          car={car}
                          key={i}
                          href={`/global/results/${car.makeName.replace(" ", "-") +
                            "-" +
                            car.modelName.replaceAll(" ", "-") +
                            "-" +
                            car.year
                            }/cars/${car.stockId}`}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              {/*<h2>Most <span>Affordable Cars </span></h2>*/}

              <div className="flex inline">
                <h2 className="text-[#221C63]">
                  Most Popular Cars from Singapore and Thailand
                </h2>

                {/*<img src="/assets/images/flags/TH.svg" className="img-fluid ml-3 h-5" alt="Thailand" />*/}
                {/*<img src="/assets/images/flags/SG.svg" className="img-fluid ml-2 mr-2 h-5" alt="Singapore" />*/}
              </div>

              <div className="showcase-Recheading">
                <div className="w-[95%] lg:w-full m-auto overflow-x-auto ">
                  <div className="grid !grid-cols-10 2xl:!grid-cols-5  gap-60  2xl:gap-3 w-full ">
                    {stockcars
                      // .filter(car => car.price  <= 5000)
                      .filter(
                        (car) => car.locationId == 157 || car.locationId == 174
                      )
                      .sort((a, b) => b.stockId - a.stockId)
                      // .slice(0,10)
                      .map((car, i) => (
                        <CarCard
                          countries={locations}
                          key={i}
                          fav={fav}
                          car={car}
                          href={`/global/results/${car.makeName.replace(" ", "-") +
                            "-" +
                            car.modelName.replaceAll(" ", "-") +
                            "-" +
                            car.year
                            }/cars/${car.stockId}`}
                        />
                      ))}
                  </div>
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
