"use client";
import agent from "@/api/agent";
import { Customer, InquiryDetails } from "@/models/Customer";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import Link from "next/link";
import { useEffect, useState } from "react";

type Prop = {
  countries: any;
};
export default function CustomerList({ countries }: Prop) {
  const [consignee, setConsignee] = useState<Customer[]>([]);
  const [inquiries, setInquiries] = useState<InquiryDetails[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(consignee.length / itemsPerPage);
  useEffect(() => {
    const getData = async () => {
      const inquiries = await agent.LoadData.getCustomerInquiries()
      setInquiries(inquiries.data)
      const { data } = await agent.LoadData.getAllCustomer(
        currentPage,
        itemsPerPage
      );
      setConsignee(data);
    };
    getData();
  }, []);
  const CustomButtonComponent = (params: any) => {
    return (
      <button
        onClick={() =>
          (window.location.href = "/admin/customers/" + params.data.customerId)
        }
        className="border-3 border-[#221C63]  text-[#221C63] font-bold  py-2 px-4 rounded"
      >
        view{" "}
      </button>
    );
  };

  const getCurrentCountry = (id: number) => {
    const country = countries.find((itm: any) => itm.countryId == id);
    return country;
  };
  const getCodeCountry = (code: string) => {

    const country = countries.find((itm: any) => itm.slug == code);
    return country;
  };
  const CustomCountryComponent = (params: any) => {
    return (
      <p>
        {" "}
        <span className=" inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ">
          <img
            src={`/assets/images/flags/${getCurrentCountry(params.data.countryId).slug}.svg`}
            className="img-fluid mr-3 w-7"
            height="15px"
            alt="Guyana flag"
          />{" "}
          {getCurrentCountry(params.data.countryId).countryName}
        </span>{" "}
      </p>
    );
  };
  const CustomCountryQueryComponent = (params: any) => {
    return (
      <p>
        {" "}
        <span className=" inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ">
          <img
            src={`/assets/images/flags/${getCodeCountry(params.data.countryCode)?.slug}.svg`}
            className="img-fluid mr-3 w-7"
            height="15px"
            alt="Guyana flag"
          />{" "}
          {getCodeCountry(params.data.countryCode)?.countryName}
        </span>{" "}
      </p>
    );
  };
  const CustomIDComponent = (params: any) => {
    return (
      <Link href={params?.data?.stockUrl ?? ""} target="_blank" className="underline text-dark-tremor-brand-subtle">{params.data.stockId}</Link>

    );
  };
  const [colDefs, setColDefs] = useState<any>([
    { field: "customerCode", width: 200, filter: true, floatingFilter: true },
    { field: "name", width: 200, filter: true, floatingFilter: true },
    { field: "email", width: 300, filter: true, floatingFilter: true },
    { field: "country", width: 250, cellRenderer: CustomCountryComponent },
    { field: "address", width: 400 },
    { field: "Action", cellRenderer: CustomButtonComponent, flex: 1 },
  ]);
  const [colInquiry, setInquiry] = useState<any>([
    { field: "stockId", width: 100, filter: true, floatingFilter: true, cellRenderer: CustomIDComponent },
    { field: "name", width: 200, filter: true, floatingFilter: true },
    { field: "email", width: 300, filter: true, floatingFilter: true },
    { field: "country", width: 200, cellRenderer: CustomCountryQueryComponent },
    { field: "contactNo", width: 250 },
    { field: "message", width: 500 },
    // { field: "Action", cellRenderer: CustomButtonComponent, flex: 1 },
  ]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="w-[95%] mx-auto flex flex-col gap-5 my-5">
      <div>
        <div className="flex justify-between">
          <div></div>
          <div className="flex  justify-between w-[800px]">
            <div>
              <h1 className="text-xl font-bold text-center pb-8">
                All Inquiries
              </h1>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div
            className="ag-theme-quartz" // applying the grid theme
            style={{ height: "42vh" }} // the grid will fill the size of the parent container
          >
            <AgGridReact
              rowData={inquiries}
              columnDefs={colInquiry}
              rowHeight={60}
              rowSelection="multiple"
              suppressRowClickSelection={true}
              pagination={true}
              paginationPageSize={4}
              paginationPageSizeSelector={[4, 10, 20]}
            />
          </div>
        </div>
        {/* <div className="flex justify-between mt-4">
                    {currentPage > 1 ? <button onClick={handlePrevPage} disabled={currentPage === 1} className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
                        Previous
                    </button> : <div></div>}
                    {currentPage < totalPages ? <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
                        Next
                    </button> : <div></div>}
                </div> */}
      </div>
      <div>
        <div className="flex justify-between">
          <div></div>
          <div className="flex  justify-between w-[800px]">
            <div>
              <h1 className="text-xl font-bold text-center pb-8">
                All Customers
              </h1>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div
            className="ag-theme-quartz" // applying the grid theme
            style={{ height: "80vh" }} // the grid will fill the size of the parent container
          >
            <AgGridReact
              rowData={consignee}
              columnDefs={colDefs}
              rowHeight={60}
              rowSelection="multiple"
              suppressRowClickSelection={true}
              pagination={true}
              paginationPageSize={25}
              paginationPageSizeSelector={[25, 50]}
            />
          </div>
        </div>
        {/* <div className="flex justify-between mt-4">
                    {currentPage > 1 ? <button onClick={handlePrevPage} disabled={currentPage === 1} className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
                        Previous
                    </button> : <div></div>}
                    {currentPage < totalPages ? <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
                        Next
                    </button> : <div></div>}
                </div> */}
      </div>

    </div>
  );
}
