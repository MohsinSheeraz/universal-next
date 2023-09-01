import Header from "@/components/layout/Header";
import FrontSlider from "@/components/layout/FrontSlider";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import agent from "@/api/agent";



export const metadata = {
  title: 'Universal Motors - Japanese Used Cars For Sale. Shipping Globally! ',
  description: 'Japanese Used Cars For Sale. Shipping Globally! ',
}

const GetBodyTypes = async () => {
    return await agent.LoadData.bodyTypeList();// db.tblBodyTypes.findMany({where: {isActive:true}});
}
const GetLocations = async () => {
    return await agent.LoadData.inventoryLocationList();//return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
}
const GetCarMakes = async () => {
    return await  agent.LoadData.carMakeList();//return await prisma.tblMakes.findMany({where: {isActive:true}} );
}
const GetStockCount = async () => {
    const data = await agent.StockCount;
     return data;
    //return await agent.LoadData.stockCount();
    //db.tblMasterCountry.findMany({where: {IsActive:true}} );
}
const GetPortMapping = async () => {
    const data = await agent.LoadData.portmapping();
    return data.data;

}

const GetAllPorts = async () => {
    const data = await agent.LoadData.portsList();
    return data.data;

}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const bodyTypes = await GetBodyTypes();
    const locations = await GetLocations();
    const makes = await GetCarMakes();
    const portList = await GetAllPorts();
    const portMapping = await GetPortMapping();
    const stockCount = await GetStockCount();



    return (

    <>

        <Header ports={portList}  portMapping={portMapping} stockCount={stockCount} locations={locations.data}/>
        <FrontSlider />
        <section className="sidebar-menu">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar  locations={locations.data} makes={makes.data}/>
                    {children}
                </div>
            </div>
        </section>
        <Footer bodyTypes={bodyTypes.data} locations={locations.data} makes={makes.data}/>
    </>



  )
}
