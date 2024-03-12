"use client";
import { useUserStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const vehicleTypes = [
  { id: "1", title: "Cars" },
  { id: "2", title: "Trucks" },
  { id: "3", title: "Machinery" },
];

export default function SearchBar() {
  const router = useRouter();
  const [searchCategory, setSearchCategory] = useState("1");
  const [searchKey, setSearchKey] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const { isUpdate, user } = useUserStore();
  const onHandleSubmit = (event: FormEvent) => {
    if (user?.email && !isUpdate) {
      return toast.info("Create Profile First");
    }
    event.preventDefault();
    if (searchKey === "") return;

    switch (searchCategory) {
      case "1":
        router.push(`/global/results/search/cars/?searchTerm=${searchKey}`);
        break;

      case "2":
        router.push(`/global/results/search/trucks/?searchTerm=${searchKey}`);
        break;

      case "3":
        // Code to execute when searchCategory is 'case2'
        break;
      // Add more cases as needed
      default:
      // Code to execute when searchCategory doesn't match any case
    }

    setSearchKey("");
  };
  const getName = (val: string) => {
    switch (val) {
      case "1":
        return "Cars";

      case "2":
        return "Trucks";

      case "3":
        return "Machinery";

      default:
        break;
    }
  };

  // const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const result = event.target.id;
  //   setSearchCategory(result);
  // };

  return (
    <div>
      <div className="flex mt-2">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <div className="relative">
          <button
            onClick={() => {
              setDropdown(!dropdown);
            }}
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200   dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            {getName(searchCategory)}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className={` ${
              !dropdown && "hidden"
            } absolute z-50  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            {vehicleTypes.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    setSearchCategory(item.id);
                  }}
                  className="inline-flex  text-gray-700 text-sm w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="relative w-full">
          <form onSubmit={onHandleSubmit}>
            <input
              placeholder="Stock Code, Listing Title, Year of Listing, Model Code ..."
              value={searchKey}
              name="searchKey"
              onChange={(e) => setSearchKey(e.target.value)}
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
            <button
              onClick={onHandleSubmit}
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#FFB703] rounded-r-lg border border-blue-700 hover:bg-[#ffcf55]  dark:bg-[#ffb8038a] dark:hover:bg-[#ffb8038a] "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
