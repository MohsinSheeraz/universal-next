"use client";
import { useEffect, useState } from "react";
// import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
interface Props {
  imageURLs: { src: string }[];
  isReserved: Boolean;
}
export default function CarouselStock({ imageURLs, isReserved }: Props) {
  const [hasSizeButton, setHasSizeButton] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setHasSizeButton(window?.innerWidth >= 768);
    };
    handleResize();
    window?.addEventListener("resize", handleResize);
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {/* <div className="w-full"> */}
      {/* <div className="px-28 bg-black"> */}
      {/* <Carousel

        images={imageURLs}
        className="!h-auto md:!h-[500px]"
        widgetsHasShadow={true}
        shouldMaximizeOnClick={hasSizeButton}
        playIcon={false}
      /> */}
      <ImageGallery autoPlay={false} showPlayButton={false} items={imageURLs.map((itm: any) => {
        return {
          original: itm?.src,
          thumbnail: itm?.src

        }
      })} />
      {/* </div> */}

      {/* <Carousel.Components.Thumbnail className="object-none" /> */}
      {/* </Carousel> */}
      {/* </div> */}

      {isReserved && (
        <div className="relative !bottom-[480px] sm:!bottom-[420px] md:!bottom-[460px] xl:!bottom-[420px] right-28 sm:right-40 md:right-32 xl:right-40  -rotate-45 m-auto  w-full ">
          <div className="bg-[#221C63] mt-3 relative opacity-75 md:top-10 w-full h-7 ">
            <p className="text-white text-center">Reserved</p>
          </div>
        </div>
      )}
    </>
  );
}
