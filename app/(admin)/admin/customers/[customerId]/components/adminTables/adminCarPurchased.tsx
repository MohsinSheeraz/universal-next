import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import AdminCarTableItem from "./adminCarTableItem";

type Prop = {
  data: StockCars[] | Trucks[] | Machinery[];
  id: number
};
export default function AdminCarPurchasedTable({ data, id }: Prop) {
  return (
    <div className="w-[90%] m-auto overflow-x-auto shadow-md sm:rounded-lg">
      {data?.map((item: StockCars | Trucks | Machinery) => {
        return <AdminCarTableItem page="purchase" item={item} id={id} />;
      })}
    </div>
  );
}
