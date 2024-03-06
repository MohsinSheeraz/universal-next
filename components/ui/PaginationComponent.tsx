"use client";
import { Dispatch, SetStateAction } from "react";

interface Props {
  totalPost: number;
  currentPage: number;
  postPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setSort: Dispatch<SetStateAction<number>>;
  isTruck: boolean;
}

export default function PaginationComponent({
  totalPost,
  currentPage,
  postPerPage,
  isTruck,
  setCurrentPage,
  setSort,
}: Props) {
  const totalPages = Math.ceil(totalPost / postPerPage);
  let pageNumbers: any = [];
  //console.log(totalPages, currentPage, postPerPage)
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumbers.push(i);
  }

  if (totalPost == undefined) {
    return (
      <>
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">Loading ...</p>
          </div>
        </nav>
      </>
    );
  } else if (totalPost == 0) {
    return (
      <>
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          {/* <div className="hidden sm:block">
            <p className="text-sm text-gray-700">No Result found</p>
          </div> */}
        </nav>
      </>
    );
  } else {
    return (
      <>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">Page {currentPage}</span>{" "}
                of <span className="font-medium"></span> {totalPages}
                <span className="font-medium"> for {totalPost}</span> results
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-4 items-center">
                <p>Sort by: </p>
                <select
                  className="w-auto rounded-md bg-white px-6 py-2 !text-[9px] sm:!text-sm font-semibold text-blue-900 hover:bg-blue-100"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onChange={(e) => {
                    setSort(Number(e.target.value));
                  }}
                >
                  <option value={1}>
                    {isTruck ? "Truck" : "Car "} Name - A to Z
                  </option>
                  <option value={2}>
                    {isTruck ? "Truck" : "Car "} Name - Z to A
                  </option>
                  {/* <option value={3}>Model - A to Z</option>
                  <option value={4}>Model - Z to A</option> */}
                  <option value={5}> Year - Old to New</option>
                  <option value={6}>Year - New to Old</option>
                  <option value={7}>Mileage - Low to High</option>
                  <option value={8}>Mileage - High to Low</option>
                  <option value={9}>Engine(cc) - Low to High</option>
                  <option value={10}>Engine(cc) - High to Low</option>
                  <option value={11}>Price - Low to High</option>
                  <option value={12}>Price - High to Low</option>
                </select>
              </div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                {currentPage - 1 >= 1 && (
                  <>
                    <a
                      href="#"
                      className={`relative inline-flex items-center rounded-l-md px-2 py-2  text-white ${pageNumbers === currentPage ? "bg-indigo-600 " : ""
                        } bg-indigo-600 ring-1 ring-inset ring-gray-300 hover:bg-indigo-400 focus:z-20 focus:outline-offset-0`}
                      onClick={(event) => {
                        event.preventDefault();
                        setCurrentPage(currentPage - 1);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth", // Optional: smooth scroll
                        });
                      }}
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </>
                )}

                {pageNumbers.map((page: number) => (
                  <a
                    href="#"
                    key={page}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${page === currentPage
                      ? "bg-indigo-600 text-white "
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 "
                      }    hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                    onClick={(event) => {
                      event.preventDefault();
                      setCurrentPage(page);
                      // Scroll to the top of the page
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth", // Optional: smooth scroll
                      });
                    }}
                  >
                    {page}
                  </a>
                ))}

                {/*<a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>*/}

                {currentPage + 1 <= totalPages && (
                  <>
                    <a
                      href="#"
                      className="relative inline-flex items-center  bg-indigo-600 rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-gray-300 hover:bg-indigo-400 focus:z-20 focus:outline-offset-0"
                      onClick={(event) => {
                        event.preventDefault();
                        setCurrentPage(currentPage + 1);
                        // Scroll to the top of the page
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth", // Optional: smooth scroll
                        });
                      }}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}
