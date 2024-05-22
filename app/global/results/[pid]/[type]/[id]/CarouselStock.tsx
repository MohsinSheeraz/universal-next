"use client";
// import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Props {
  imageURLs: { src: string }[];
  isReserved: Boolean;
  isPurchased?: Boolean;
}
export default function CarouselStock({
  imageURLs,
  isReserved,
  isPurchased,
}: Props) {
  // useEffect(() => {
  //   const handleResize = () => {
  //     setHasSizeButton(window?.innerWidth >= 768);
  //   };
  //   handleResize();
  //   window?.addEventListener("resize", handleResize);
  //   return () => {
  //     window?.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div className="relative">
      {/* <div className="w-full"> */}
      {/* <div className="px-28 bg-black"> */}
      {/* <Carousel

        images={imageURLs}
        className="!h-auto md:!h-[500px]"
        widgetsHasShadow={true}
        shouldMaximizeOnClick={hasSizeButton}
        playIcon={false}
      /> */}
      {/* <div className="!h-auto md:!h-[500px]"> */}

      <ImageGallery
        autoPlay={false}
        showPlayButton={false}
        items={imageURLs.map((itm: any) => {
          return {
            original: itm?.src,
            thumbnail: itm?.src,
          };
        })}
      />
      {/* </div> */}

      {/* </div> */}

      {/* <Carousel.Components.Thumbnail className="object-none" /> */}
      {/* </Carousel> */}
      {/* </div> */}

      {isReserved && (
        <div className="absolute !top-[20%] sm:!top-[25%] !right-[70px] sm:!right-[163px] -rotate-45 flex items-center m-auto  w-full ">
          <div className="bg-[#221C63]  opacity-75   flex items-center justify-center w-full h-7 ">
            <p className="text-white text-center">Reserved</p>
          </div>
        </div>
      )}

      {isPurchased && (
        <div className="absolute !top-[20%] sm:!top-[25%] !right-[70px] sm:!right-[163px] -rotate-45 flex items-center m-auto  w-full ">
          <div className="bg-red-600  opacity-75   flex items-center justify-center w-full h-7 ">
            <p className="text-white text-center">Purchased</p>
          </div>
        </div>
      )}
    </div>
  );
}
