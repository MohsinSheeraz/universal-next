import agent from "@/api/agent";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import SidebarItems from "@/components/sidebarItems";
import whatsappimg from "@/public/assets/whatsapp.png";
import Image from "next/image";
import Link from "next/link";

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
    (x: any) => x.isInventoryLocation && x.isActive
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
      <Link href="https://wa.link/5g81p6">
        <div className="fixed right-4 sm:right-6 cursor-pointer bottom-20 sm:bottom-24 z-[9999]">
          <Image
            src={whatsappimg}
            className="w-[54px] sm:w-[60px] h-[54px] sm:h-[60px] "
            width={60}
            height={60}
            alt="whatsapp image"
          />
        </div>
      </Link>
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
