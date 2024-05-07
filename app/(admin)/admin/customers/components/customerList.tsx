"use client";
import agent from "@/api/agent";
import { Customer } from "@/models/Customer";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { useEffect, useState } from "react";

export default function CustomerList() {
    const [consignee, setConsignee] = useState<Customer[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10
    const totalPages = Math.ceil(consignee.length / itemsPerPage);


    const CustomButtonComponent = (params: any) => {
        return <button onClick={() => window.location.href = "/admin/customers/" + params.data.customerId} className="border-3 border-[#221C63]  text-[#221C63] font-bold py-2 px-4 rounded">
            view{" "}
        </button>
    };

    const [colDefs, setColDefs] = useState<any>([
        { field: "name", width: 200, filter: true, floatingFilter: true },
        { field: "email", width: 400, filter: true, floatingFilter: true },
        { field: "address", width: 600 },
        { field: "Action", cellRenderer: CustomButtonComponent, flex: 1 }
    ]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await agent.LoadData.getAllCustomer(currentPage, itemsPerPage)
            setConsignee(data);
        };

        getData();
    }, []);

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
                                All Customers
                            </h1>
                        </div>

                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {consignee.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item: Customer) => {
                                return (
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td className="px-6 py-4">{item.name}</td>
                                        <td className="px-6 py-4">{item.email}</td>
                                        <td className="px-6 py-4">{item.address}</td>
                                        <td className="px-6 py-4 flex gap-1">
                                            <Link href={"/admin/customers/" + item.customerId}>
                                                <button className="border-3 border-[#221C63]  text-[#221C63] font-bold py-2 px-4 rounded">
                                                    view{" "}
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table> */}
                    <div
                        className="ag-theme-quartz" // applying the grid theme
                        style={{ height: "80vh" }} // the grid will fill the size of the parent container
                    >
                        {/* <AgGridReact
                            rowData={consignee.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                            columnDefs={colDefs}
                        /> */}
                        <AgGridReact
                            rowData={consignee}
                            columnDefs={colDefs}

                            // defaultColDef={defaultColDef}
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
