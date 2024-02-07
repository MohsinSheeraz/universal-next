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
  );
}
