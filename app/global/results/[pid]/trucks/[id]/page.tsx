import agent from "@/api/agent";
import DescriptionUI from "@/components/ui/DescriptionUI";
import CarDetailedSlideshow from "../../cars/[id]/CarDetailedSlideshow";
import PriceCalculator from "../../cars/[id]/PriceCalculator";
import CountdownTimer from "../../cars/[id]/counter";
import TruckKeyInformation from "./TruckKeyInformation";
import TruckSpecification from "./TruckSpecification";

interface Props {
  params: {
    id: number;
  };
}

const GetTruck = async (stockID: number) => {
  // const result = await agent.LoadData.truck(stockID);
  // return result.data;
};

export async function generateMetadata({ params }: Props) {
  const data = await agent.LoadData.truck(params.id);
  const stockItem = data.data;

  return {
    title: stockItem.stockCode + " - " + stockItem.listingTitle,
    description:
      stockItem.stockCode +
      " - " +
      stockItem.listingTitle +
      " - " +
      stockItem.locationName +
      " Trucks on Universal Motors Ltd",

    openGraph: {
      images: [stockItem.imageUrl],
    },
  };
}

export default async function CarDetailed({ params }: Props) {
  const Stock = await agent.LoadData.truck(params.id);
  //const Truck  = await GetTruck(params.id);
  const Countries = await agent.LoadData.countryList(); //db.tblMasterCountry.findMany({where: {IsActive:true}});
  const PortMapping = await agent.LoadData.portmapping();
  const Ports = await agent.LoadData.portsList();
  const InventoryLocation = Countries.data.find(
    (x) => x.countryId == Stock.data?.locationId
  );
  const freightChargeMaster = await agent.LoadData.freightcost();
  const inspectionCost = await agent.LoadData.inspectioncost();

  if (Stock.data != null)
    return (
      <>
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
          <div className="row">
            <section className="product-slider-section">
              <div className="container-fluid">
                <div id="productslider" className="carousel slide">
                  <div className="row">
                    <h1 className="mobicar carname">
                      {Stock.data?.listingTitle}
                    </h1>
                    <div className="col-lg-6  detail-leftsection">
                      <div className="row">
                        <div
                          id="wrap"
                          className="!px-0 md:!px-[6%] container-fluid"
                        >
                          <div className="row">
                            <CarDetailedSlideshow
                              isReserved={Stock.data?.isReserved}
                              mainPic={Stock.data?.imageUrl}
                              stockID={Stock.data?.stockId}
                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="shipping-details">
                        <TruckSpecification
                          car={Stock.data}
                          location={InventoryLocation}
                        />
                        <TruckKeyInformation car={Stock.data} />
                        <DescriptionUI description={Stock.data.description} />
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <h1 className="pccar carname">
                        {Stock.data?.listingTitle}
                      </h1>
                      <div className="col-12">
                        <div className="stock w-56">
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
                        {Stock.data.isReserved ? (
                          <div className="stock w-full">
                            <span className="flex items-center gap-x-1 bg-[#f1f5f9] px-2 py-1 font-medium text-[#221C63] border-[1px] border-[#221C63] rounded-xl my-2">
                              <CountdownTimer date={Stock.data.reservedTill} />
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <hr />

                      <h4>
                        {/*<button type="button" className="pull-right" onClick={window.print}>*/}
                        {/*    <img src="images/svgs/print.svg" className="img-fluid" width="30px"/>*/}
                        {/*</button>*/}
                      </h4>
                      {/*<div className="carfavourite">*/}
                      {/*    <div className="row">*/}
                      {/*        <div className="col-md-6 col-sm-6 col-6">*/}
                      {/*            /!*<span className="fav-text">Add to Favorites</span>*!/*/}
                      {/*        /!*    <div className="stock">*!/*/}
                      {/*        /!*        <h5 >*!/*/}
                      {/*        /!*             <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">*!/*/}
                      {/*        /!*               <strong> Stock ID: <img className='h-6 m-2' src={`/assets/images/flags/${InventoryLocation.slug}.svg`}/>  {Stock.stockCode}</strong>*!/*/}
                      {/*        /!*              </span>*!/*/}
                      {/*        /!*        </h5>*!/*/}
                      {/*        /!*    </div>*!/*/}
                      {/*        </div>*/}
                      {/*        <div className="col-md-6 col-sm-6 col-6">*/}
                      {/*            <div className="addfav">*/}
                      {/*                <h5>*/}
                      {/*                    /!*<LikeComponent onClick={()=>console.log("Clicked")}/>*!/*/}
                      {/*                     <span className="fav-text">Add to Favorites<LikeComponent /></span>*/}

                      {/*                </h5>*/}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*        <div className="col-md-12 col-sm-12 col-12">*/}
                      {/*        /!*    <div className="auction">*!/*/}
                      {/*        /!*        <h5 >*!/*/}
                      {/*        /!*             <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">*!/*/}
                      {/*        /!*               <strong> Auction grade: {Stock.auctionGrade}</strong>*!/*/}
                      {/*        /!*              </span>*!/*/}
                      {/*        /!*        </h5>*!/*/}
                      {/*        /!*    </div>*!/*/}
                      {/*        /!*    <span className="fav-text">Add to Favorites</span>*!/*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</div>*/}
                      <PriceCalculator
                        car={Stock.data}
                        countries={Countries.data}
                        ports={Ports.data}
                        portMapping={PortMapping.data}
                        freightCharges={freightChargeMaster.data}
                        inspectionCost={inspectionCost.data}
                        stockCode={Stock.data.stockCode}
                        reservedBy={Stock.data.reservedBy}
                        isReserved={Stock.data.isReserved}
                      />
                      {/*<InquiryForm/>*/}
                      {/* <ContactUs stockcode={Stock.data.stockCode} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
}
