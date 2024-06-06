import UploadVehicle from "./components/uploadsForm";

export default function Page() {
  return (
    <div className="w-full p-5">
      <h2 className="font-bold text-4xl text-center capitalize pb-5">
        Upload Vehicle:
      </h2>
      <div>
        <UploadVehicle />
      </div>
    </div>
  );
}
