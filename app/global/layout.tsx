import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import agent from "@/api/agent";
import Sidebar from "@/components/layout/Sidebar";
import SidebarItems from "@/components/sidebarItems";

export const metadata = {
  title: {
    template: "%s - Universal Motors",
    default: "Universal Motors", // a default is required when creating a template
  },
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
  //db.tblMasterCountry.findMany({where: {IsActive:true}} );
};

const GetPorts = async () => {
  const result = await agent.LoadData.portsList();
  return result.data;
};

const GetMappingPort = async () => {
  const result = await agent.LoadData.portmapping();
  return result.data;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyTypes = await GetBodyTypes();
  const locations = await GetLocations();
  const inventoryLocation = locations.filter(
    (x) => x.isInventoryLocation && x.isActive
  );
  const makes = await GetCarMakes();
  const stockCount = await GetStockCount();
  const portList = await GetPorts();
  const portMap = await GetMappingPort();
  const isLogin = false;
  // const { userStore } = useStore();
  // console.log(userStore.isLoggedIn)
  return (
    <>
      <Header
        ports={portList}
        portMapping={portMap}
        stockCount={stockCount.data}
        locations={locations}
      />
      <section className={isLogin ? "" : "sidebar-menu"}>
        <div className={isLogin ? "w-[99%]" : "container-fluid"}>
          <div className="row">
            {isLogin ? (
              <SidebarItems />
            ) : (
              <Sidebar locations={inventoryLocation} makes={makes.data} />
            )}
            {children}
          </div>
        </div>
      </section>
      <Footer
        bodyTypes={bodyTypes.data}
        locations={inventoryLocation}
        makes={makes.data}
      />
    </>
  );
}
