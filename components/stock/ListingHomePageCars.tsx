'use client';
import {Accordion, Tab, Tabs} from "react-bootstrap";
import {tblCars} from ".prisma/client";
import Link from "next/link";
import {StockCars} from "@/models/StockCars";
import classNames from "classnames";
import {Menu, Transition} from "@headlessui/react";
import {EllipsisHorizontalIcon} from "@heroicons/react/20/solid";
import {Fragment} from "react";
import FaqComponent from "@/components/layout/FaqComponent";
import PriceFormat from "@/components/stock/PriceFormat";
// import db from "@/utils/db";
// const GetStock = async () => {
//     return await db.tblCars.findMany({where: {IsActive:true}});
// }
interface Props {
    stocks : StockCars[]
}


export default async function ListingHomePageCars ({stocks}:Props) {
  //  const stocks = await GetStock();
    return (
        <>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                    <div>
                        <h2 className="text-blue-800">Most Popular in <span>your Country</span></h2>
                        <div className="carsrow row py-5">
                            {

                                stocks
                                    .filter(car => (car.price  <= 15000 && car.price >=5000) && car.bodyTypeId==1)
                                    .sort((a, b) => b.stockId - a.stockId)
                                    .slice(0,10)
                                    .map(car=> (
                                        <Link key={car.stockId} href={`/global/results/${car.stockId}`}>
                                            <div className="col-sm transition duration-300 ease-in-out hover:scale-110"  >
                                                <div className="cardimage">
                                                    <img  src={car.imageUrl} alt={car.slug} title={car.slug} />
                                                </div>
                                                <div className="cardcontent">
                                                    <h4>{car.listingTitle}</h4>
                                                    <p className="modelno">{car.modelCode}</p>
                                                    <p className="car-price">Price:  <span><PriceFormat carPrice={car.price} /></span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                            }

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="showcase-Recheading">
                                <h2>New Arrival in <span>Japan</span></h2>
                                <div className="carsrow row py-5">
                                    {
                                        stocks
                                            .filter(car => car.locationId ==84)
                                            .sort((a, b) => b.stockId - a.stockId)
                                            .slice(0,10)
                                            .map(car=> (
                                                // <Link key={car.stockId} href={`/global/results/${encodeURIComponent(car.stockId)}`}>
                                                <Link key={car.stockId} href={`/global/results/${car.stockId}`}>
                                                    <div className="col-sm transition duration-300 ease-in-out hover:scale-110"  >
                                                        <div className="cardimage">
                                                            <img src={car.imageUrl} alt={car.slug} title={car.slug} />
                                                        </div>
                                                        <div className="cardcontent">
                                                            <h4>{car.listingTitle}</h4>
                                                            <p className="modelno">{car.modelCode}</p>
                                                            <p className="car-price">Price: <span><PriceFormat carPrice={car.price} /></span></p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                    }



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2>Most <span>Affordable Cars </span></h2>
                            <div className="showcase-Recheading">
                                <div className="carsrow row py-5">
                                    {
                                        stocks
                                            .filter(car => car.price  <= 5000)
                                            .sort((a, b) => b.stockId - a.stockId)
                                            .slice(0,10)
                                            .map(car=> (
                                                <Link key={car.stockId} href={`/global/results/${car.stockId}`}>
                                                {/*<Link key={car.stockId} href={`/global/results/${encodeURIComponent(car.stockId)}`}>*/}
                                                    <div className="col-sm transition duration-300 ease-in-out hover:scale-110"  >
                                                        <div className="cardimage">
                                                            <img src={car.imageUrl} alt={car.slug} title={car.slug} />
                                                        </div>
                                                        <div className="cardcontent">
                                                            <h4>{car.listingTitle}</h4>
                                                            <p className="modelno">{car.modelCode}</p>
                                                            <p className="car-price">Price:  <span><PriceFormat carPrice={car.price} /></span></p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <FaqComponent/>
                    <div className="bg-[url('/assets/images/cta-bg.png')] cta-homeSec">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="cta-heading">
                                    <h3>Universal Cars Export</h3>
                                    <p>
                                        For any queries, Call our support team at &nbsp; &nbsp; <Link href="tel:+49 471 9731 9003" className="text-white"> +49 471 9731 9003</Link>
                                    </p>
                                    <h6><Link href="/inquiry-form/ContactUS">Contact us</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}