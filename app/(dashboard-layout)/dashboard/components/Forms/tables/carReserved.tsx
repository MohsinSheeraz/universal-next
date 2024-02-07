import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import CarTableItem from "./carTableItem";

type Prop = {
  data: StockCars[] | Trucks[] | Machinery[];
};
export default function CarReservedTable({ data }: Prop) {
  return (
    <div className="w-[90%] m-auto overflow-x-auto shadow-md sm:rounded-lg">
      {data?.map((item: StockCars | Trucks | Machinery) => {
        return <CarTableItem item={item} />;
      })}
    </div>
  );
}
