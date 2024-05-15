import SidebarSlider from "@/components/SidebarSlider";
import HomePageCarListings from "@/components/cars/HomePageCarListings";
import HomeUI from "@/components/ui/HomeUI";
import { BodyType } from "@/models/Master/BodyType";
import { Colors } from "@/models/Master/Colors";
import { Country } from "@/models/Master/Country";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import Link from "next/link";


type Props = {
  bodyTypes: BodyType[];
  makes: Make[];
  color: Colors[];
  transmission: Transmission[];
  drivetrain: DrivetrainType[];
  fuel: FuelType[];
  stockcars: StockCars[];
  trucks: Trucks[];
  locations: Country[];
}
export default function HomeDesktop({ drivetrain, color, makes, locations, transmission, fuel, bodyTypes, stockcars, trucks }: Props) {

  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 !hidden sm:!inline-block ">
        <HomeUI
          drivetrain={drivetrain}
          color={color}
          transmission={transmission}
          fuel={fuel}
          bodyTlist={bodyTypes}
          makeList={makes}
        />
        <div className="carboxes mt-3 ">
          <HomePageCarListings locations={locations} stockcars={stockcars} trucks={trucks} />
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 !hidden sm:!inline-block">
        <div>
          <p className=" text-xl  md:text-2xl font-semibold leading-none tracking-tight text-gray-600 dark:text-white text-center mt-5 mb-3 ">
            Testimonial
          </p>
          <SidebarSlider />
          <div className="w-full flex justify-center mb-5">
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/testimonial"
            >
              <span className="cursor-pointer text-sm rounded-lg text-center font-semibold leading-none tracking-tight text-gray-600 dark:text-white mt-2 mb-3 border-2 border-gray-600 px-2 py-1">
                View All
              </span>
            </Link>
          </div>
        </div>
        <div className="bg-[#F1F5F9] p-4 rounded-[10px]">
          <h1 className="font-bold text-[14px] text-gray-900 pt-3 text-center justify-items-center">
            Find your Dream Used Cars in One Search Now!
          </h1>
          <br />
          <p className="text-[12px]">
            Universal Motors is the ultimate destination for quality,
            affordable, used Japanese cars, trucks, and heavy machinery. Explore
            our vast inventory sourced directly from auctions, ensuring you get
            the best selection. We offer customers a full warranty on the
            features and condition of our used cars for sale price to ensure the
            best car-buying experience. With our focus on LHD and RHD cars, we
            prioritize safety and ease for our clients. Trust our expert team to
            provide comprehensive details, making your purchasing journey
            seamless and informed. At Universal Motors, we are not just selling
            vehicles but delivering trust, reliability, and unmatched value in
            every transaction. Our services are available in multiple countries
            like Japan, Canada, the USA, the UK, UAE, Thailand etc.
          </p>
        </div>
        <div className="showcase-Make rightsidebar">
          <h5 className="pt-3 text-center justify-items-center">
            <b>UM in Your Country</b>
          </h5>
          <ul className="countdrop">
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=bahamas"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/BS.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Bahamas flag"
                />
                Bahamas
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=chile"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/CL.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Chile flag"
                />
                Chile
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110 nav-link"
              href="/global/information/import-protocols?page=congo"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/CD.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Congo flag"
                />
                Dr Congo
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=guyana"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/GY.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Guyana flag"
                />{" "}
                Guyana
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=jamaica"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/JM.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Jamaica flag"
                />{" "}
                Jamaica
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=kenya"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/KE.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Kenya flag"
                />{" "}
                Kenya
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=malawi"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/MW.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Malawi flag"
                />{" "}
                Malawi
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=pakistan"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/PK.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Pakistan flag"
                />{" "}
                Pakistan
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=paraguay"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/PY.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Paraguay flag"
                />{" "}
                Paraguay
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=russia"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/RU.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Russia flag"
                />{" "}
                Russia
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=sudan"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/SS.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Sudan flag"
                />{" "}
                South Sudan
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=tanzania"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/TZ.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Tanzania flag"
                />{" "}
                Tanzania
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=uganda"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/UG.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Uganda flag"
                />{" "}
                Uganda
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=zambia"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/ZM.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Zambia flag"
                />{" "}
                Zambia
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=zimbabwe"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/ZW.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Zimbabwe flag"
                />{" "}
                Zimbabwe
              </span>
            </Link>
            <Link
              className="transition duration-300 ease-in-out hover:scale-110"
              href="/global/information/import-protocols?page=ghana"
            >
              <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                <img
                  src="/assets/images/flags/GH.svg"
                  className="img-fluid mr-3"
                  height="15px"
                  alt="Ghana flag"
                />{" "}
                Ghana
              </span>
            </Link>
          </ul>
        </div>
        {/* <figure className="h-auto max-w-lg transition-all duration-300 rounded-lg ">
          <a href="https://wa.link/5g81p6">
            <img
              className="rounded-lg"
              src="/assets/images/what-share.jpg"
              alt="Whatsapp Description"
            />
          </a>
        </figure>
        <figure className="h-auto max-w-lg transition-all duration-300 rounded-lg ">
          <Link href="https://www.facebook.com/people/Universal-Motors-LTD/100064181618215/?wtsid=rdr_0KEZcfREX6pES4I4W">
            <img
              className="rounded-lg"
              src="/assets/images/faceboook-share.jpg"
              alt="Facebook Description"
            />
          </Link>
        </figure> */}
        <div className="followme py-3">
          <h5>Follow Us:</h5>
          <div className="icons">
            <a href="https://www.facebook.com/Universal-Motors-LTD-101574801831062">
              <i className="fa fa-facebook" style={{ color: "blue" }} />
            </a>
            <a
              className="p-0 m-0"
              href="https://wa.link/5g81p6"
              style={{ color: "blue", fontSize: "12px" }}
            >
              <i className="fa fa-whatsapp" style={{ color: "green" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
