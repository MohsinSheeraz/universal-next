import Link from "next/link";
import { CiBank } from "react-icons/ci";

export default function BankInformation() {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
        <div className="gceCountry-landing">
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/global/information?page=why-choose-universal-motors">
                  {" "}
                  Why Universal Motors{" "}
                </Link>
              </li>
              <li>
                <Link href="#">Payment Method</Link>
              </li>
            </ul>
          </div>
          <div className="gceCountry-Local exp-Information bankinfo">
            <div className="flex items-center justify-center  px-4 sm:px-0 ">
              <h1 className="text-[40px]">
                <CiBank className=" mr-2 text-gray-800 " aria-hidden="true" />
              </h1>
              <h3 className="font-semibold leading-7 !text-4xl text-blue-950">
                Bank Details{" "}
              </h3>
            </div>
            <div className="mt-6">
              <dl className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    UNIVERSAL GLOBAL CONSORTIUM AED ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b>WIO BANK PJSC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b>UNIVERSAL GLOBAL CONSORTIUM-FZCO</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>AE69 0860 0000 0971 0541 370</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>WIOBAEADXXX</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE</b>
                    </span>
                  </p>
                </div>
                <div className="border rounded-2xl bg-[#F9FAFB]  border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl underline underline-offset-4 leading-normal font-semibold mt-0 mb-2 text-blue-950">
                    {" "}
                    UNIVERSAL GLOBAL CONSORTIUM USD ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b>WIO BANK PJSC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b>UNIVERSAL GLOBAL CONSORTIUM-FZCO</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>AE100 8600 0000 9121 8365 31</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>WIOBAEADXXX</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE</b>
                    </span>
                  </p>
                </div>
                <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    UNIVERSAL GLOBAL CONSORTIUM EURO ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b> WIO BANK PJSC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b> UNIVERSAL GLOBAL CONSORTIUM FZCO</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>AE020 8600 0000 9594 8882 15</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>WIOBAEADXXX </b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b> Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE</b>
                    </span>
                  </p>
                </div>
                {/* <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    BLUE RHINE OVER SEASEAS USD ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b> National Bank of Ras Al Khaima</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b>Blue Rhine Overseas FZE LLC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>AE20 0400 0005 7289 8876 003</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>NRAKAEAKXXX </b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>Rolla, Sharjah Branch</b>
                    </span>
                  </p>
                </div> */}

                <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    UNIVERSAL GLOBAL CONSORTIUM GBP ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b>WIO BANK PJSC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b> UNIVERSAL GLOBAL CONSORTIUM-FZCO</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>AE160 8600 0000 9158 6555 86</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>WIOBAEADXXX </b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE</b>
                    </span>
                  </p>
                </div>
                <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    UNIVERSAL GLOBAL CONSORTIUM AED ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b>Abu Dhabi Islamic Bank</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b> UNIVERSAL GLOBAL CONSORTIUM FZCO</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>AE 1905 0000 0000 0191 90597</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>ABDIAEAD </b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>BLGD of Ahmed Khalifa Salem Al Darm</b>
                    </span>
                  </p>
                </div>
                <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    RIZUBI TRADING JAPAN ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b> Sumitomo Mitsui Banking Corporation</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b>Rizubi Trading</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>7212099</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>SMBCJPJT</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>Shinagawa KU, Hatanodai 1-4-15, Tokyo</b>
                    </span>
                  </p>
                </div>
                <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    UNIVERSAL AUTO TRADING AED ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b> WIO BANK PJSC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b>Universal Auto Trading FZ-LLC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>AE360860000009948535053</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>WIOBAEADXXX</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE</b>
                    </span>
                  </p>
                </div>
                <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    UNIVERSAL AUTO TRADING USD ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b> WIO BANK PJSC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b>Universal Auto Trading FZ-LLC</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>AE060860000009573377714</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b>WIOBAEADXXX</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE</b>
                    </span>
                  </p>
                </div>
                <div className="border rounded-2xl bg-[#F9FAFB] border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <h5 className="text-2xl font-semibold underline underline-offset-4 leading-normal mt-0 mb-2 text-blue-950">
                    {" "}
                    RIZUBI TRADING JAPAN ACCOUNT
                  </h5>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Bank Name :</span>
                    <span className="color-span">
                      <b>Mitsubishi UFJ Bank</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Account Name :</span>
                    <span className="color-span">
                      <b>Rizubi Trading</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3"> Account Number :</span>
                    <span className="color-span">
                      <b>318-1024791</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">SWIFT Code :</span>
                    <span className="color-span">
                      <b> BOTKJPJT</b>
                    </span>
                  </p>
                  <p style={{ marginBottom: "0rem !important" }}>
                    <span className="mr-3">Branch Name :</span>
                    <span className="color-span">
                      <b>Ebara Branch</b>
                    </span>
                  </p>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
