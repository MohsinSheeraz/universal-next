"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial() {
  return (
    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-full bg-white  px-5 py-16  text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className=" text-2xl  md:text-3xl lg:text-5xl font-semibold  mb-5 text-gray-600">
                What people <br />
                are saying about us
              </h1>
              <h3 className="text-base mb-5 font-light">
                Our Satisfied customers around the globe appreciates what we
                serve.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-[#221c63] ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-[#221c63] ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-[#221c63]"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-[#221c63] ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#221c63] ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        src="/assets/images/imageHampton Charles.png"
                        alt="hampton"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  text-gray-600">
                        Hampton Charles
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className=" leading-tight">
                      <span className=" leading-none italic font-bold text-base text-gray-500 lg:text-lg mr-1">
                        "
                      </span>
                      From compact cars to heavy-duty trucks and machinery, this
                      website is a treasure trove of Japanese vehicles. I found
                      my dream car here at the most economical price, and the
                      quality surpassed my expectations. I highly recommend
                      these car dealers to others to have the best car-buying
                      experience.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="/assets/images/imageJohn Matayo.png"
                        alt="john"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        John Matayo
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className=" leading-tight">
                      <span className="leading-none italic font-bold text-base text-gray-500 lg:text-lg mr-1">
                        "
                      </span>
                      I have bought multiple vehicles from Universal Motors, and
                      each time, I have been impressed by the condition and
                      performance of the cars. Their Japanese machinery
                      collection is extensive, making it easy to find precisely
                      what you need. Everyone willing to purchase their dream
                      car must contact them to enjoy the lifetime experience.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="/assets/images/imageMosha.png"
                        alt="Mosha"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Mr. Mosha
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className=" leading-tight">
                      <span className=" text-base text-gray-500 lg:text-lg leading-none italic font-bold  mr-1">
                        "
                      </span>
                      Finding the right Japanese car was a breeze with Universal
                      Motors. The range of automobiles, coupled with detailed
                      descriptions and transparent pricing on their website, is
                      100% authentic. Their professional team also give you keen
                      details and guides you through the process step-wise.
                      These dealers are highly recommended.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="/assets/images/imageRegan.png"
                        alt="Regan"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Mr. Reagan
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className=" text-base text-gray-500 lg:text-lg leading-none italic font-bold  mr-1">
                        "
                      </span>
                      The customer service here is exceptional. They guided me
                      through the entire process, answered all my queries and
                      ensured that I got the perfect Japanese truck. I had a
                      fantastic truck-buying experience with them and will
                      highly suggest it to others!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        src="/assets/images/imageAlfred.png"
                        alt="alfred"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Alfred Nyanda
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className=" leading-tight">
                      <span className="  text-base text-gray-500 lg:text-lg   leading-none italic font-bold  mr-1">
                        "
                      </span>
                      Among the competitive market of car sellers, I still
                      prefer Universal Motors, as the machinery they offer is
                      guaranteed. From classic models to the latest release, I
                      found the excellent value of my money. Definitely, this is
                      my go-to for future purchases.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="/assets/images/imageDanny.png"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Mr. Danny
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className=" text-base text-gray-500 lg:text-lg  leading-none italic font-bold mr-1">
                        "
                      </span>
                      I stumbled upon this website while searching for a
                      specific Japanese model. Not only did I find it, but the
                      condition and price were better than I hoped. It was a
                      genuinely satisfying purchase experience. I will for sure
                      recommend it to others.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto flex gap-3 mt-5 ">
        <FaQuoteLeft color="#221c63" size={"30px"} />
        <div>
          <p className=" text-2xl  md:text-3xl lg:text-5xl font-semibold leading-none tracking-tight text-gray-600 dark:text-white">
            Testimonial
          </p>
          <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            What our customers are saying about us
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        height={500}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-16"
      >
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “ The foremost thing that struck me was the transparency in
                dealings. I received a detailed history of the vehicle I chose,
                which helped me make an informed decision. I am really satisfied
                and happy to be their customer now. ”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Mr. Reagan
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%] items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/1lpf7D35SBg?si=pQV66mBZJRwkctXg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “ I recently made my first purchase from Universal Motors, and
                I'm thoroughly impressed. The customer service was impeccable;
                they patiently walked me through the process, addressing all my
                concerns and helping me find the perfect Japanese car. My
                experience was beyond satisfactory, and I'd gladly refer
                Universal Motors to friends and family ”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Mr. Malinga
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%] items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/0PzLhiMo2wE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “Me and my friend were searching for a used car in good
                condition but were unable to find one. Through our search, we
                went through this website and contacted the dealers. This
                decision turned out to be the best, and we purchased a used
                Toyota at an amazing cost. Happy to be their customers! ”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Mr. Danny
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%] items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/vSNQE4iNI1Q?si=ukAOjJ3-thOuOcPm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “I recently purchased a heavy-duty truck from them, and the
                variety they offer is mind-boggling. The truck I bought was
                exactly as advertised: robust, well-maintained and the same as
                told to me. I am extremely satisfied with what I have bought. ”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Mr. Mosha
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%]  items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/82K4XGQOO5I?si=wMaeaKxYHp4DGM1i"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “We were hesitant about purchasing a used vehicle online, but
                Universal Motor’s commitment to quality reassured us. We browsed
                through their extensive collection, and guess what!? We found
                our dream car- a sleek, efficient Japanese sedan that was in
                pristine condition. ”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Hampton Charles
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%] items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/_AiD96wV92w?si=GU8DiY05IeOcbRWR"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
