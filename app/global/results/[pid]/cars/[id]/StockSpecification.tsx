import NumberFormat from "@/lib/utils";
import { Country } from "@/models/Master/Country";
import { StockCars } from "@/models/StockCars";

interface Props {
  car: StockCars;
  location: Country | undefined;
}
export default function StockSpecification({ car, location }: Props) {
  return (
    <>
      <div className="row specsrow">
        <div className="col-sm specs">
          {/* <p className="text-2xl font-bold" >Mileage</p> */}
          <h4 className="!text-[9px] sm:!text-base font-bold">Mileage</h4>
          <span className="label-text !text-[9px] sm:!text-base  items-center rounded-md ml-5">
            <img
              decoding="async"
              src="/assets/images/kmsDriven.svg"
              loading="eager"
              className="mx-auto mr-2"
            />
            <br />
            {NumberFormat(car.mileage)} Kms
          </span>
        </div>
        <div className="col-sm specs">
          <h4 className="!text-[9px] sm:!text-base">YEAR</h4>
          <span className="label-text  !text-[9px] sm:!text-base items-center rounded-md ml-5">
            <img
              decoding="async"
              src="/assets/images/registrationYear.svg"
              loading="eager"
              className="mx-auto mr-2"
            />
            <br />
            {car.year}{" "}
          </span>
        </div>
        {car.engineSize && (
          <div className="col-sm specs">
            <h4 className="!text-[9px] sm:!text-base">Engine</h4>
            <span className="label-text !text-[9px] sm:!text-base items-center rounded-md ml-5">
              <img
                decoding="async"
                src="/assets/images/engineDisplacement.svg"
                loading="eager"
                className="mx-auto mr-2"
              />
              <br />
              {car.engineSize}
            </span>
          </div>
        )}

        <div className="col-sm specs">
          <h4 className="!text-[9px] sm:!text-base">Transmission</h4>
          <span className="label-text !text-[9px] sm:!text-base items-center rounded-md ml-5">
            <img
              decoding="async"
              src="/assets/images/transmission.svg"
              loading="eager"
              className="mx-auto"
            />
            <br />
            {car.transmissionName}{" "}
          </span>
        </div>
        <div className="col-sm specs">
          <h4 className="!text-[9px] sm:!text-base">Country</h4>
          <span className="label-text !text-[9px] sm:!text-base text-center items-center rounded-md ml-5">
            <img
              decoding="async"
              src={`/assets/images/flags/${location?.slug}.svg`}
              loading="eager"
              className="h-8 mx-auto"
            />
            <br />
            {car.locationName}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
