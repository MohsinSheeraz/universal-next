import agent from "@/api/agent";
// import CarouselStock from "@/app/global/results/cars/[id]/CarouselStock";
// import ShareDownloadComponent from "@/app/global/results/cars/[id]/ShareDownloadComponent";
import CarouselStock from "./CarouselStock";
import ShareDownloadComponent from "./ShareDownloadComponent";

interface Props {
  stockID: number;
  mainPic: string;
  isReserved: Boolean;
}

export default async function CarDetailedSlideshow({
  stockID,
  mainPic,
  isReserved,
}: Props) {
  const stockPicture = await agent.LoadData.stockSliderList(stockID);
  const images = stockPicture.data?.map((pic: any) => ({
    src: pic.imageURL,
  }));
  images.unshift({ src: mainPic });

  return (
    <>
      <CarouselStock isReserved={isReserved} imageURLs={images} />
      <ShareDownloadComponent imageList={stockPicture?.data} />
    </>
  );
}
