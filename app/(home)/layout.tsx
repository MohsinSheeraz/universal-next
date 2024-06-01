import agent from "@/api/agent";
import Footer from "@/components/layout/Footer";
import FrontSlider from "@/components/layout/FrontSlider";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import whatsappimg from "@/public/assets/whatsapp.png";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

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
    // <CheckIsLogin>
    <Suspense fallback={<></>}>
      <Header
        ports={portList}
        portMapping={portMapping}
        stockCount={stockCount.data}
        locations={locations}
      />
      <FrontSlider />
      <section className="sidebar-menu pt-0 bg-[#F5FCFF]">
        <div className="container-fluid !pl-0 ">
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
          <div className="row ">
            <Sidebar locations={inventoryLocation} makes={makes.data} />
            {children}
          </div>
        </div>
      </section>
      <Footer
        bodyTypes={bodyTypes.data}
        locations={inventoryLocation}
        makes={makes.data}
      />
    </Suspense>
    // </CheckIsLogin>
  );
}
