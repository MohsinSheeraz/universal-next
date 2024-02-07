import agent from "@/api/agent";
import Tabs from "@/app/(dashboard-layout)/dashboard/components/Tabs";
import CarDetailedSlideshow from "@/app/global/results/[pid]/cars/[id]/CarDetailedSlideshow";
import StockKeyInformation from "@/app/global/results/[pid]/cars/[id]/StockKeyInformation";
import StockSpecification from "@/app/global/results/[pid]/cars/[id]/StockSpecification";
import DescriptionUI from "@/components/ui/DescriptionUI";
import BackButton from "./backButton";
import Detailed from "./detailed";

interface Props {
  params: {
    id: number;
  };
}

export default async function ReservedDetail({ params }: Props) {
  const Stock = await agent.LoadData.stock(Number(params?.id));
  const Countries = await agent.LoadData.countryList();
  const InventoryLocation = Countries.data.find(
    (x) => x.countryId == Stock.data.locationId
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
          <Tabs list={list} />
          <div className="ml-7 mt-2">
            <BackButton />
          </div>
          <Detailed stockID={Stock.data?.stockId} />

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
        </div>
      </>
    );
}
