import agent from "@/api/agent";
import CarDetailedSlideshow from "@/app/global/results/[pid]/[type]/[id]/CarDetailedSlideshow";
import StockKeyInformation from "@/app/global/results/[pid]/[type]/[id]/StockKeyInformation";
import StockSpecification from "@/app/global/results/[pid]/[type]/[id]/StockSpecification";
import DescriptionUI from "@/components/ui/DescriptionUI";
import Link from "next/link";
import Detailed from "./detailed";

interface Props {
  params: {
    id: number;
    customerId: number
  };
}

export default async function AdminReservedDetail({ params }: Props) {
  const Stock = await agent.LoadData.stock(Number(params?.id));
  const Countries = await agent.LoadData.countryList();
  const InventoryLocation = Countries.data.find(
    (x: any) => x.countryId == Stock.data.locationId
  );
  const list = [
    "My Profile",
    // "My Account Info",
    "My Cosignee Details",
    // "My Favorites",
    // "Inquiry & Bid List",
    "Reserved Vehicles",
    "Purchased Vehicles",
  ];
  if (Stock != null)
    return (
      <>
        <div className="mt-24 w-full"></div>
        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 detailedsection pt-[65px!important] lg:!pt-0 ">
          <div className="ml-7 mt-2">
            <Link href={'/admin/customers/' + params?.customerId}>
              < div className="flex items-center gap-2">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.79976 1.78311L3.12524 6.27681L7.60873 10.9611L6.1697 12.3415L0.295851 6.21792L6.41941 0.344072L7.79976 1.78311Z"
                    fill="#A3AED0"
                  />
                </svg>

                <p className="text-[#A3AED0]"> Back</p>
              </div>
            </Link>
          </div >
          <Detailed stockID={Stock.data?.stockId} customerId={params?.customerId} />

          <div className="px-2 py-2  w-[95%] m-auto bg-[#221C63] mt-5">
            <p className="text-white font-semibold"> PRODUCT</p>
          </div>
          <section className="product-slider-section">
            <div className="container-fluid w-full">
              <div id="productslider" className="carousel slide">
                <div className="row">
                  <div className="col-md-6  detail-leftsection">
                    <h1 className="text-center font-bold">
                      {Stock.data.listingTitle}
                    </h1>
                    <div className="col-12">
                      <div className="stock w-56 m-auto">
                        <span className="flex items-center gap-x-1 bg-[#f1f5f9] px-2 py-1 font-medium text-[#221C63] border-[1px] border-[#221C63] rounded-xl my-2">
                          Stock ID :
                          <img
                            className="h-6 m-2"
                            src={`/assets/images/flags/${InventoryLocation?.slug}.svg`}
                            alt={InventoryLocation?.slug}
                          />
                          {Stock.data.stockCode}
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div id="wrap" className="container-fluid">
                        <div className="row">
                          <CarDetailedSlideshow
                            mainPic={Stock.data.imageUrl}
                            stockID={Stock.data.stockId}
                            isReserved={false}
                            isPurchased={false}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="shipping-details">
                      <StockSpecification
                        car={Stock.data}
                        location={InventoryLocation}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <StockKeyInformation car={Stock.data} />
                    <DescriptionUI description={Stock.data.description} />
                    {/* <Cards stockID={Stock.data.stockId} /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div >
      </>
    );
}
