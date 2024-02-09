import agent from "@/api/agent";
import CheckIsLogin from "@/components/CheckIsLogin";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SidebarItems from "@/components/sidebarItems";
import "react-phone-number-input/style.css";

export const metadata = {
  title: "Universal Motors - Japanese Used Cars For Sale. Shipping Globally! ",
  description: "Japanese Used Cars For Sale. Shipping Globally! ",
};

const GetBodyTypes = async () => {
  return await agent.LoadData.bodyTypeList(); // db.tblBodyTypes.findMany({where: {isActive:true}});
};
const GetLocations = async () => {
  const result = await agent.LoadData.countryList(); //return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
  return result.data;
};
const GetCarMakes = async () => {
  return await agent.LoadData.carMakeList(); //return await prisma.tblMakes.findMany({where: {isActive:true}} );
};
const GetStockCount = async () => {
  return await agent.LoadData.stockCount();
  //return data;
  //return await agent.LoadData.stockCount();
  //db.tblMasterCountry.findMany({where: {IsActive:true}} );
};
const GetPortMapping = async () => {
  const data = await agent.LoadData.portmapping();
  return data.data;
};

const GetAllPorts = async () => {
  const data = await agent.LoadData.portsList();
  return data.data;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyTypes = await GetBodyTypes();
  const locations = await GetLocations();
  const inventoryLocation = locations.filter(
    (x: any) => x.isInventoryLocation && x.isActive
  );
  const makes = await GetCarMakes();
  const portList = await GetAllPorts();
  const portMapping = await GetPortMapping();
  const stockCount = await GetStockCount();

  return (
    <>
      <CheckIsLogin>
        <>
          <Header
            ports={portList}
            portMapping={portMapping}
            stockCount={stockCount.data}
            locations={locations}
          />

          {/* <FrontSlider /> */}
          <section>
            <div className="w-[99%]">
              <div className="row">
                {/* <Sidebar locations={inventoryLocation} makes={makes.data} /> */}
                <div className="flex flex-row min-h-screen w-screen m-auto">
                  <SidebarItems />
                  {children}
                </div>
              </div>
            </div>
          </section>
          <Footer
            bodyTypes={bodyTypes.data}
            locations={inventoryLocation}
            makes={makes.data}
          />
        </>
      </CheckIsLogin>
    </>
  );
}
