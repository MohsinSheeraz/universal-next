import agent, { removeFavourite } from "@/api/agent";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Favorite() {
  const [fav, setFav] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Define your desired
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fav.slice(indexOfFirstItem, indexOfLastItem);

  const { user } = useUserStore();
  const [fetch, setFetch] = useState<Boolean>(false);
  useEffect(() => {
    const getData = async () => {
      const favorite = await agent.LoadData.favouriteList(user.customerId);
      setFav(favorite.data);
    };
    getData();
  }, [fetch]);
  const totalPages = Math.ceil(fav.length / itemsPerPage);
  return (
    <>
      <div className="flex flex-col gap-5 my-5">
        {/* {fav.map((item: any) => {
        return <FavoriteCard fetch={fetch} setFetch={setFetch} item={item} />;
      })} */}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Year
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item: any) => {
                return (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="!w-20 !h-16">
                        <img
                          src={item?.imageurl}
                          className="!w-20 !h-16"
                          alt=""
                        />
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.listingTitle}</td>
                    <td className="px-6 py-4">{item.year}</td>
                    <td className="px-6 py-4">
                      <PriceFormat carPrice={item.price} />
                    </td>
                    <td className="px-6 py-4 flex gap-1">
                      <Link
                        href={
                          item?.vehicleTypeId == 2
                            ? `/global/results/${
                                item.makeName.replace(" ", "-") +
                                "-" +
                                item.modelName.replaceAll(" ", "-") +
                                "-" +
                                item.year
                              }/trucks/${item.stockID}`
                            : `/global/results/${
                                item.makeName.replace(" ", "-") +
                                "-" +
                                item.modelName.replaceAll(" ", "-") +
                                "-" +
                                item.year
                              }/cars/${item.stockID}`
                        }
                      >
                        <button className="bg-[#221C63] hover:bg-[#857de0] text-white font-bold py-2 px-4 rounded">
                          view{" "}
                        </button>
                      </Link>

                      <button
                        onClick={async () => {
                          await removeFavourite({
                            customerId: user.customerId,
                            stockId: item.stockID,
                          });
                          setFetch(!fetch);
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex w-full justify-center">
          {currentPage > 1 && (
            <p
              onClick={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
              className="cursor-pointer flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </p>
          )}

          {currentPage < totalPages && (
            <p
              onClick={() => {
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }}
              className="cursor-pointer  flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </p>
          )}
        </div>
      </div>

      <div className="bg-[#221C63] flex justify-between text-white py-3">
        <div>
          <h1 className="text-[30px]">Universal Motors Ltd</h1>
          <h1>Powered By Universal Global</h1>
          <h1>Consortium - FZCO</h1>
        </div>
        <div className="w-[400px]">
          <p>
            Address: Dubai Digital Park DSO-IFZA, Dubai Silicon Oasis, United
            Arab Emirates
          </p>
          <p>Phone: +971 52 796 7035</p>
          <p>Website: www.universalmotorsltd.com</p>
          <p>Email: csd@universalmotorsltd.com</p>
        </div>
      </div>
      <div className="bg-[#FFB703] font-bold px-5 mt-8 border-[2px] border-black ">
        <h1 className="text-[24px]">PROFORMA INVOICE</h1>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="w-[650px] mt-8 border-[2px] border-black">
            <div>
              <h1 className="text-[18px] bg-[#221C63] text-white px-5">
                BILL TO
              </h1>
            </div>
            <div className=" bg-slate-300 text-red-800 px-5">
              <p>
                Customer Name: <span className="text-black">Joe Chafwa</span>
              </p>
              <p>
                Customer Address :{" "}
                <span className="text-black">
                  R68 Lubengele Rd, Chililabombwe, Coppebelt
                </span>
              </p>
              <p>Company Name :</p>
              <p>
                City, Country, ZIP : <span className="text-black">Zambia</span>
              </p>
              <p>
                Customer Phone :{" "}
                <span className="text-black">+260 97 930 5630</span>
              </p>
              <p>
                Customer Email :{" "}
                <span className="text-black">joechafwa22@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="w-[650px] mt-8 border-[2px] border-black">
            <div>
              <h1 className="text-[18px] bg-[#221C63] text-white px-5">
                BANKING INFORMATION
              </h1>
            </div>
            <div className=" bg-slate-300 text-red-800 px-5">
              <p>
                Bank Name : <span className="text-black">: WIO BANK PJSC</span>
              </p>
              <p>
                Account Name :{" "}
                <span className="text-black">
                  UNIVERSAL GLOBAL CONSORTIUM-FZCO
                </span>
              </p>
              <p>
                Account Number :{" "}
                <span className="text-black">AE100860000009121836531</span>
              </p>
              <p>
                SWIFT Code :<span className="text-black">WIOBAEADXXX</span>
              </p>
              <p>
                Branch Name :{" "}
                <span className="text-black">
                  Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE
                </span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="text-red-800 flex items-center mt-8">
            <div className="">
              <h1>DATE</h1>
              <h1 className="mt-1">INVOICE #</h1>
              <h1 className="mt-1">CM ID</h1>
              <h1 className="mt-1">DUE DATE</h1>
            </div>
            <div>
              <div className="text-black border-[2px] border-black   bg-slate-300 text-center">
                12-14-2023
              </div>
              <div className="text-black border-[2px] border-black w-[150px] text-center  bg-slate-300">
                SG14DEC23-U117
              </div>
              <div className="text-black border-[2px] border-black   bg-slate-300 text-center">
                ZM-156
              </div>
              <div className="text-black border-[2px] border-black    bg-slate-300 text-center">
                12-18-2023
              </div>
            </div>
          </div>

          <div className="text-red-800 mt-24">
            <h1>
              Ship Via : <span className="text-black">RoRo/LoLo</span>
            </h1>
            <h1>
              Port of Loading :{" "}
              <span className="text-black">Singapore Port</span>
            </h1>
            <h1>
              Port Of Discharge :{" "}
              <span className="text-black">Dar Es Salam</span>
            </h1>
            <h1>
              UM Agent : <span className="text-black">Baqir</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="border-black border-[2px] mt-12">
        <div className="flex justify-between bg-[#221C63] text-white py-2 px-2 border-[2px] border-black ">
          <div>
            <h1>DESCRIPTION</h1>
          </div>
          <div className="flex gap-4">
            <h1 className="">Quantity</h1>
            <h1>CFR AMOUNT</h1>
          </div>
        </div>

        <div className="flex justify-between  bg-slate-300">
          <div>
            <h1 className="pt-1 pb-2 pl-2"></h1>
          </div>
          <div className="flex gap-24 border-black border-l-[2px] border-r-[2px] w-[213px] h-[31px]">
            <h1></h1>
            <h1>
              <span></span>
            </h1>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="pt-1 pb-2 pl-2">
            <h1>2014 Mercedes Benz E-250</h1>
          </div>
          <div className="flex gap-24  border-black border-l-[2px] border-r-[2px]  px-6 pt-1 pb-2">
            <h1 className="  ">1</h1>
            <h1>
              $ <span>8,000</span>
            </h1>
          </div>
        </div>

        <div className="flex justify-between  bg-slate-300">
          <div>
            <h1></h1>
          </div>
          <div className="flex gap-24 border-black border-l-[2px] border-r-[2px] w-[213px] h-[31px]">
            <h1></h1>
            <h1>
              <span></span>
            </h1>
          </div>
        </div>

        <div className="flex justify-between ">
          <div>
            <h1 className="pt-1 pb-2 pl-2">Mileage : 63,724 Km</h1>
          </div>
          <div className="flex gap-24 border-black border-l-[2px] border-r-[2px] w-[213px] h-[31px]">
            <h1></h1>
            <h1>
              <span></span>
            </h1>
          </div>
        </div>

        <div className="flex justify-between   bg-slate-300">
          <div>
            <h1 className="pt-1 pb-2 pl-2">Fuel : Petrol</h1>
          </div>
          <div className="flex gap-24 border-black border-l-[2px] border-r-[2px] w-[213px] h-[31px]">
            <h1></h1>
            <h1>
              <span></span>
            </h1>
          </div>
        </div>

        <div className="flex justify-between ">
          <div>
            <h1 className="pt-1 pb-2 pl-2">Transmission : Automatic</h1>
          </div>
          <div className="flex gap-24 border-black border-l-[2px] border-r-[2px] w-[213px] h-[32px]">
            <h1></h1>
            <h1>
              <span></span>
            </h1>
          </div>
        </div>
        <div className="flex justify-between   bg-slate-300">
          <div>
            <h1 className="pt-1 pb-2 pl-2">Engine : 1,990cc</h1>
          </div>
          <div className="flex gap-24 border-black border-l-[2px] border-r-[2px] w-[213px] h-[32px]">
            <h1></h1>
            <h1>
              <span></span>
            </h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="pt-1 pb-2 pl-2">Color : Black</h1>
          </div>
          <div className="flex gap-24 border-black border-l-[2px] border-r-[2px] w-[213px] h-[32px]">
            <h1></h1>
            <h1>
              <span></span>
            </h1>
          </div>
        </div>

        <div className="flex justify-between   bg-slate-300">
          <div>
            <h1 className="pt-1 pb-2 pl-2"></h1>
          </div>
          <div className="flex gap-24 border-black border-l-[2px] border-r-[2px] w-[213px] h-[31px]">
            <h1></h1>
            <h1>
              <span></span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex  gap-24 bg-slate-300  border-black border-l-[2px] border-r-[2px] w-[213px]  px-6 pt-1 pb-2">
          <h1 className="  ">1</h1>
          <h1>
            <span> $8,000</span>
          </h1>
        </div>
      </div>
    </>
  );
}
