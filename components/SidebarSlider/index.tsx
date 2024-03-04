"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function SidebarSlider() {
  return (
    <Swiper
      style={{ width: "95%", margin: "auto", cursor: "grab" }}
      spaceBetween={50}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="w-full h-80 ">
          <iframe
            width="100%"
            height="85%"
            src="https://www.youtube.com/embed/_AiD96wV92w?si=GU8DiY05IeOcbRWR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; mute;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-80 ">
          <iframe
            width="100%"
            height="85%"
            src="https://www.youtube.com/embed/0PzLhiMo2wE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; mute;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-80 ">
          <iframe
            width="100%"
            height="85%"
            src="https://www.youtube.com/embed/1lpf7D35SBg?si=pQV66mBZJRwkctXg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-80 ">
          <iframe
            width="100%"
            height="85%"
            src="https://www.youtube.com/embed/vSNQE4iNI1Q?si=ukAOjJ3-thOuOcPm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; mute;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-80 ">
          <iframe
            width="100%"
            height="85%"
            src="https://www.youtube.com/embed/82K4XGQOO5I?si=wMaeaKxYHp4DGM1i"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; mute;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
