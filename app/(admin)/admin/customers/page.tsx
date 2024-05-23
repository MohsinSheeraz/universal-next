import agent from "@/api/agent";
import CustomerList from "./components/customerList";

export default async function page() {
  const countries = await agent.LoadData.countryList();
  return (
    <div className="w-full">
      <CustomerList countries={countries.data} />
    </div>
  );
}
