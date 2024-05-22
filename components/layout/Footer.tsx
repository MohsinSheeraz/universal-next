//import {tblBodyTypes, tblMakes, tblMasterCountry} from ".prisma/client";
import { BodyType } from "@/models/Master/BodyType";
import { Country } from "@/models/Master/Country";
import { Make } from "@/models/Master/Make";
import Image from "next/image";
import Link from "next/link";

interface Props {
  locations: Country[];
  bodyTypes: BodyType[];
  makes: Make[];
  // stock: StockCars[]
}

function Footer({ locations, bodyTypes, makes }: Props) {
  const flagLocation = "/assets/images/flags/";

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 f1 ">
              <h5 style={{ marginBottom: "10px" }}>Headquarters</h5>
              <div className="text-cyan-50">
                <div
                  className="flex-auto inline-flex mt-2"
                  style={{ flexDirection: "column" }}
                >
                  <Image
                    src="/assets/images/flags/AE.svg"
                    className="img-fluid mr-3"
                    alt="AE"
                    height={30}
                    width={30}
                    style={{ marginBottom: "8px" }}
                  />

                  <p>
                    {" "}
                    Premises 8253, Dubai Digital Park <br />
                    Building A2, Dubai Silicon Oasis
                    <b> DUBAI, UAE</b>
                  </p>
                </div>
                <div
                  className="flex-auto inline-flex mt-2"
                  style={{ flexDirection: "column" }}
                >
                  <Image
                    src="/assets/images/flags/JP.svg"
                    className="img-fluid mr-3"
                    alt="JP"
                    height={30}
                    width={30}
                    style={{ marginBottom: "8px" }}
                  />

                  <p>
                    7103 Kaburagi Mansion, Nishi Nakanobu, 3-2-17, Shinagawa Ku,
                    142-0054
                    <br />
                    <b>Tokyo, Japan</b>
                  </p>
                </div>
              </div>
              <br />
              <div
                className="flex-auto inline-flex mt-2"
                style={{ flexDirection: "column" }}
              >
                <Image
                  src="https://universalmotorstorage.blob.core.windows.net/umimages/pngwing.com.png"
                  className="img-fluid mr-3"
                  alt="Contact Us"
                  height={30}
                  width={30}
                />
                <br />
                <ul className="slashed-zero lining-nums">
                  <a href="tel:+49 471 9731 9003">+49 471 9731 9003</a>

                  <br />

                  <a href="tel:+971 52 796 7035">+971 52 796 7035</a>

                  <br />

                  <a href="tel:+81 50 5050 8550">+81 50 5050 8550</a>
                </ul>
              </div>
              <br />
              <div
                className="flex-auto inline-flex mt-2"
                style={{ flexDirection: "column" }}
              >
                <ul className="mt-3">
                  <li>
                    <h6>Corporate Site:</h6>
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://www.universalmotorsltd.com/"
                      target=""
                    >
                      https://www.universalmotorsltd.com/
                    </a>
                  </li>
                  <br />
                  <li>
                    <h6>E-mail: </h6>
                    <a
                      style={{ textDecoration: "none" }}
                      href="mailto:csd@universalmotorsltd.com"
                    >
                      csd@universalmotorsltd.com
                    </a>
                  </li>
                  <li className="flex mt-2" style={{ display: "block" }}>
                    <h6 className="mr-2">Follow Us:</h6>

                    <div className="flex">
                      <a href="https://www.facebook.com/Universal-Motors-LTD-101574801831062">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-facebook mr-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/universalmotorsltdofficial/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-instagram mr-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/@Universal-Motors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          width={16}
                          height={16}
                          viewBox="0 0 256 256"
                          xmlSpace="preserve"
                        >
                          <defs></defs>
                          <g
                            className="youtube-svg"
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                          >
                            <path
                              d="M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z M 36 58.5 v -27 L 59.382 45 L 36 58.5 z"
                              className="youtube-path-svg"
                              transform=" matrix(1 0 0 1 0 0) "
                              stroke-linecap="round"
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-12 f1">
              <h4>By Make</h4>
              <ul className="countdrop">
                {makes
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
                            src={make.imageURL ?? ""}
                            className="flagimg-fluid ml-5"
                            alt={make.slug}
                            width={32}
                            height={32}
                          />
                          {make.makeName}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-md-2 d-md-block d-none f1">
              <h4>By Type</h4>
              <ul className="countdrop">
                {bodyTypes.map((bodytype) => (
                  <li key={bodytype.bodyTypeId}>
                    <span className=" inline-flex items-center rounded-md ml-5">
                      <Link
                        href={{
                          pathname: `/global/results/${bodytype.slug}/cars`,
                          query: {
                            bodyTypeID: bodytype.bodyTypeId,
                          },
                        }}
                      >
                        {bodytype.typeOfBody}
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-2 d-md-block d-none f1">
              <h4>By Price</h4>
              <ul className="countdrop mkl-5">
                <Link
                  href={{
                    pathname: `/global/results/under-5000/cars`,
                    query: {
                      price: 5000,
                    },
                  }}
                >
                  <span>Under $5000</span>
                </Link>
                <Link
                  href={{
                    pathname: "/global/results/under-10000/cars",
                    query: {
                      price: 10000,
                    },
                  }}
                >
                  <span>$5000 - $10,000</span>
                </Link>
                <Link
                  href={{
                    pathname: "/global/results/between-10000-to-15000/cars",
                    query: {
                      price: 15000,
                    },
                  }}
                >
                  <span>$10,000 - $15,000</span>
                </Link>
                <Link
                  href={{
                    pathname: "/global/results/between-20000-to-25000/cars",
                    query: {
                      price: 25000,
                    },
                  }}
                >
                  <span>$20,000 - $25,000</span>
                </Link>
                <Link
                  href={{
                    pathname: "/global/results/40000/cars",
                    query: {
                      price: 40000,
                    },
                  }}
                >
                  <span>$25,000 - $40,000</span>
                </Link>

                <Link
                  href={{
                    pathname: "/global/results/cars",
                    query: {
                      price: 40001,
                    },
                  }}
                >
                  <span>$40,000 Over</span>
                </Link>
              </ul>
            </div>
            <div className="col-md-2 d-md-block d-none">
              <h4>By Location</h4>
              <ul className="countdrop">
                {locations
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
                            src={flagLocation + location.slug + ".svg"}
                            className="flagimg-fluid ml-5"
                            alt={location.slug ?? ""}
                            width={16}
                            height={16}
                          />
                          {location.countryName}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="copyright row">
            <div className="col-md-3 col-sm-12">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                className="header-logo"
                width={60}
                height={60}
              />
            </div>
            <div className="col-md-6 col-sm-12 text-center mt-2">
              <p>
                Copyright © {new Date().getFullYear()} - All Rights Reserved By
                Universal Motors.
              </p>
            </div>
            <div className="col-md-3 col-sm-12 d-flex justify-content-end h-7 mt-2 custom-2">
              <Image
                src="/assets/images/visa.png"
                alt="logo"
                height={20}
                width={50}
                className="px-1"
              />
              <Image
                src="/assets/images/mastercard.png"
                alt="logo"
                height={20}
                width={50}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
