import { Machinery } from "@/models/Machinery";
import { Axle } from "@/models/Master/Axle";
import { BodyType } from "@/models/Master/BodyType";
import { CarCondition } from "@/models/Master/CarCondition";
import { CarModel } from "@/models/Master/CarModel";
import { CarOptions } from "@/models/Master/CarOptions";
import { CarOptionsMapping } from "@/models/Master/CarOptionsMapping";
import { Colors } from "@/models/Master/Colors";
import { Country } from "@/models/Master/Country";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FreightCost } from "@/models/Master/FreightCost";
import { FuelType } from "@/models/Master/FuelType";
import { InspectionCost } from "@/models/Master/InspectionCost";
import { Make } from "@/models/Master/Make";
import { PortMapping } from "@/models/Master/PortMapping";
import { Ports } from "@/models/Master/Ports";
import { SteeringType } from "@/models/Master/SteeringType";
import { StockPictures } from "@/models/Master/StockPictures";
import { Transmission } from "@/models/Master/Transmission";
import { VehicleCategory } from "@/models/Master/VehicleCategory";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
//import { Customer, UserFormValues } from "@/models/Customer";
import {
  ConsigneeCourier,
  CourierDispatch,
  Customer,
  CustomerSignUp,
  SalesOrderDetail,
  TransactionInfo,
} from "@/models/Customer";
import { GetFavorite, TFavorite } from "@/models/Master/AddFav";
import { PaginationHeader } from "@/models/Master/Pagination";
import { toast } from "react-toastify";

//const baseURL = 'https://localhost:5001/api/';
const baseURL = "https://api20230805195433.azurewebsites.net/api/";
const parseResponse = async <T>(
  response: Response
): Promise<{ data: T; paginationHeader: PaginationHeader }> => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: T = await response.json();
  const paginationHeaderRaw = response.headers.get("X-Pagination");
  const paginationHeader = paginationHeaderRaw
    ? JSON.parse(paginationHeaderRaw)
    : null;

  return {
    data,
    paginationHeader,
  };
};

const parseUserResponse = async <Customer>(
  response: Response
): Promise<Customer> => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data: Customer = await response.json();
  return data;
};

const requestNoCache = {
  get: async <T>(url: string) => {
    const response = await fetch(baseURL + url, { cache: "no-store" });
    return parseResponse<T>(response);
  },
};

const request = {
  get: async <T>(url: string) => {
    try {
      const response = await fetch(baseURL + url);
      return parseResponse<T>(response);
    } catch (error) {
      console.error("Error in GET request:", error);
      let data: any;
      return data;
    }
  },

  post: async <T>(url: string, body: object) => {
    const response = await fetch(baseURL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return parseResponse<T>(response);
  },
  put: async <T>(url: string, body: object) => {
    const response = await fetch(baseURL + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return parseResponse<T>(response);
  },
  delete: async <T>(url: string) => {
    const response = await fetch(baseURL + url, {
      method: "DELETE",
    });
    return parseResponse<T>(response);
  },
};

const LoadData = {
  //------ Main Units
  favouriteList: (customerID: number) =>
    //request.get<GetFavorite[]>(`customers/FavStock/${customerID}`),
    request.get<GetFavorite[]>(`carStock/favourite_cars/${customerID}`),

  stockList: (filter: string, currentPage: number) =>
    request.get<StockCars[]>(
      `carstock?PageSize=25&pageNumber=${currentPage}&${filter}`
    ),

  truckList: (filter: string, currentPage: number) =>
    request.get<Trucks[]>(
      `trucks?PageSize=25&pageNumber=${currentPage}&${filter}`
    ),
  machineryList: (filter: string, currentPage: number) =>
    request.get<Machinery[]>(
      `machinery?pageNumber=${currentPage}&pageSize=25&${filter}`
    ),
  homepageStockList: () =>
    requestNoCache.get<StockCars[]>("carstock/homepage_cars"),
  //test: () => await fetch(baseURL+"carstock/homepage_cars", {cache: 'no-store'});
  // stock: (stockID: number) => request.get<StockCars>(`carstock/${stockID}`),
  stock: (stockID: number) =>
    requestNoCache.get<StockCars>(`carstock/${stockID}`),
  truck: (stockID: number) => request.get<Trucks>(`trucks/${stockID}`),
  machinery: (stockID: number) => request.get<Trucks>(`machinery/${stockID}`),

  stockSliderList: (stockID: number) =>
    request.get<StockPictures[]>(`carstock/imagestock/${stockID}`),

  //------ Master Data
  countryList: () => request.get<Country[]>("masterdata/country"),
  inventoryLocationList: () => request.get<Country[]>("masterdata/inventory"),
  carMakeList: () => request.get<Make[]>("masterdata/make"),
  truckMakeList: () => request.get<Make[]>("masterdata/make/2"),
  machineryMakeList: () => request.get<Make[]>("masterdata/make/3"),
  bodyTypeList: () => request.get<BodyType[]>("masterdata/bodytype"),
  fuelTypeList: () => request.get<FuelType[]>("masterdata/fueltype"),
  carModelList: () => request.get<CarModel[]>("masterdata/carmodel"),
  carModelByMakeList: (makeID: string) =>
    request.get<CarModel[]>(`masterdata/carmodel/${makeID}`),
  drtivetrainList: () =>
    request.get<DrivetrainType[]>("masterdata/drivetraintype"),
  steeringList: () => request.get<SteeringType[]>("masterdata/steeringtype"),
  colorsList: () => request.get<Colors[]>("masterdata/colors"),
  transmissionsList: () =>
    request.get<Transmission[]>("masterdata/transmissions"),
  carCondiionList: () => request.get<CarCondition[]>("masterdata/carcondition"),
  axleList: () => request.get<Axle[]>("masterdata/axle"),
  portsList: () => request.get<Ports[]>("masterdata/ports"),

  vehicleCategoryList: () =>
    request.get<VehicleCategory[]>("masterdata/vehiclecategory"),
  caroptionsList: () => request.get<CarOptions[]>("masterdata/caroptions"),

  // Required Parameter
  caroptionMappingList: (stockID: number) =>
    request.get<CarOptionsMapping[]>(`carstock/caroptions/${stockID}`),

  //------ Computational
  inspectioncost: () =>
    request.get<InspectionCost[]>("compute/inspectioncost/"),
  freightcost: () => request.get<FreightCost[]>("compute/freightcost/"),
  portmapping: () => request.get<PortMapping[]>("compute/portmapping/"),
  getClientIP: () => request.get<string>("compute/getClientIP/"),
  stockCount: () => requestNoCache.get<number>("carstock/count"),
  carmodelCount: (modelID: number) =>
    request.get<number>(`compute/carmodel/count/${modelID}`),
  makeCount: (makeID: number) =>
    request.get<number>(`compute/make/count/${makeID}`),
  bodytypeCount: (bodytypeID: number) =>
    request.get<number>(`compute/bodytype/count/${bodytypeID}`),
  steeringTypeCount: (steeringID: number) =>
    request.get<number>(`compute/steeringType/count/${steeringID}`),

  //----- Customer Data
  // generateCustomerCode: (locationID: number) =>
  //   request.get<string>(`customers/GenerateCustomerCode/${locationID}`),
  customerCheck: (email: string) =>
    request.get<boolean>(`customers/Exists/${email}`),
  getAllCustomer: (currentPage: number, pageSize: number) =>
    request.get<boolean>(
      `customers?PageSize=${pageSize}&pageNumber=${currentPage}`
    ),
  register: (user: CustomerSignUp) => registerUser(user), //request.post<CustomerSignUp>('authentication', user),
  customerProfile: (email: string) =>
    request.get<Customer[]>(`customers/ByEmail/${email}/`),
  customerByID: (id: number) => request.get<Customer[]>(`customers/${id}/`),
  consigneeCourierByCustomer: (customerID: number) =>
    request.get<ConsigneeCourier[]>(`customers/Consignee/${customerID}`),
  consigneeCourierByID: (id: number) =>
    request.get<ConsigneeCourier>(`customers/Consignee/id/${id}`),
  courierDispatchByCustomer: (customerID: number) =>
    request.get<CourierDispatch[]>(`customers/CourierDispatch/${customerID}`),
  courierDispatchByID: (id: number) =>
    request.get<CourierDispatch>(`customers/CourierDispatch/id/${id}`),

  /*Added on 15th November -------------------------------Start ----------*/
  purchasedCarsByCustomerID: (customerId: number) =>
    request.get<StockCars[]>(`customers/purchase/cars/${customerId}`),
  purchasedMachineryByCustomerID: (customerId: number) =>
    request.get<Machinery[]>(`customers/purchase/machinery/${customerId}`),
  purchasedTrucksByCustomerID: (customerId: number) =>
    request.get<Trucks[]>(`customers/purchase/trucks/${customerId}`),
  reservedCarsByCustomerID: (customerId: number) =>
    request.get<StockCars[]>(`customers/reserved/cars/${customerId}`),
  reservedMachineryByCustomerID: (customerId: number) =>
    request.get<Machinery[]>(`customers/reserved/machinery/${customerId}`),
  reservedTrucksByCustomerID: (customerId: number) =>
    request.get<Trucks[]>(`customers/reserved/trucks/${customerId}`),
  //Added on 15th November --------------------------------------------End ---*/

  //Adding SalesOrder Endpoints and Money Allocation Endpoints
  //Sales Order *********
  salesOrderBySalesOrderID: (salesOrderId: number) =>
    request.get<Trucks[]>(`customers/salesorder/${salesOrderId}`),
  salesOrderByCustomerID: (salesOrderId: number) =>
    request.get<Trucks[]>(`customers/salesorder/customer/${salesOrderId}`),
  salesOrderByCustomerIDStockID: (customerId: number, stockId: number) =>
    request.get<Trucks[]>(`customers/salesorder/${customerId}/${stockId}`),

  //Money Allocation ********
  moneyAllocationByID: (id: number) =>
    request.get<Trucks[]>(`customers/money_allocation/${id}`),
  moneyAllocationByCustomerID: (customerId: number) =>
    request.get<Trucks[]>(`customers/money_allocation/customer/${customerId}`),
  moneyAllocationByCustomerIDStockID: (customerId: number, stockId: number) =>
    request.get<Trucks[]>(
      `customers/money_allocation/${customerId}/${stockId}`
    ),
  getTransactionsHistory: (customerId: number) =>
    request.get<TransactionInfo[]>(`customers/transactions/${customerId}`),
  getSalesOrderDepositInformation: (customerId: number) =>
    request.get<TransactionInfo[]>(
      `customers/depositinformation/${customerId}`
    ),
  getSalesOrderDetailPerStock: (customerId: number, stockId: number) =>
    request.get<SalesOrderDetail>(
      `customers/salesdetail/${stockId}/${customerId}`
    ),
};
//
// const Account = {
//   //   -------Accounts
//   currentUser: async (token: string): Promise<Customer> => await getUser(token),
//   //request.get<Customer>('authentication', user),
//   register: (user: UserFormValues) => registertUser(user), //request.post<Customer>('authentication', user),
//   login: (user: UserFormValues) =>
//     request.post<{ token: string }>("authentication/login", user),
// };

const StockCount = getData();

const agent = {
  LoadData,
  // Account,
  StockCount,
  basUrl: baseURL,
};

export default agent;

async function getData() {
  const res = await fetch(baseURL + "carstock/count", {
    next: { revalidate: 18000 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function registerUser(user: CustomerSignUp) {
  try {
    const response = await fetch(
      "https://api20230805195433.azurewebsites.net/api/customers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers as needed
        },
        body: JSON.stringify(user),
      }
    );
    if (!response.ok) {
      throw new Error(`Server responded with an error: ${response.statusText}`);
    }
    console.log("Account created successfully");

    // Continue processing for successful registration
  } catch (error: any) {
    if (error.name === "TypeError" && error.message === "Failed to fetch") {
      console.error(
        "Network error. Make sure you are connected to the internet."
      );
    } else {
      console.error("Error during registration:", error.message);
    }
    // Handle the error appropriately, e.g., show an error message to the user
  }
}

export async function addFavourite(fav: TFavorite) {
  try {
    const response = await fetch(
      "https://api20230805195433.azurewebsites.net/api/customers/FavStock/Add", //agent.basUrl+'authentication/',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fav),
      }
    );
    // if (!response.ok) {
    //   throw new Error(
    //     "Something went wrong, we cant register you at the moment"
    //   );
    // }

    // await signIn("credentials", {
    //   username: user.username,
    //   password: user.password,
    // });

    toast.success("Favorite Added Successfully");
  } catch (e) {
    console.log(e);
  }
}

export async function removeFavourite(fav: TFavorite) {
  try {
    const response = await fetch(
      "https://api20230805195433.azurewebsites.net/api/customers/FavStock/Remove", //agent.basUrl+'authentication/',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fav),
      }
    );

    // Check if the response status is in the success range (200-299)
    // if (!response.ok) {
    //   throw new Error(
    //     "Something went wrong, we cant register you at the moment"
    //   );
    // }

    // await signIn("credentials", {
    //   username: user.username,
    //   password: user.password,
    // });
  } catch (e) {
    console.log(e);
  }
}
//
// async function getUser(token: string): Promise<Customer> {
//   const currentUser = await fetch(
//     "https://api20230805195433.azurewebsites.net/api/authentication",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Adding the Bearer token to the headers
//       },
//     }
//   );
//   const response = await parseUserResponse(currentUser);
//   console.log(response);
//   return response as Customer;
// }
