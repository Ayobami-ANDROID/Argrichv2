import React from "react";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import img1 from "../../images/livestock/1.png";
import img2 from "../../images/livestock/2.png";
import img3 from "../../images/livestock/3.png";
import img4 from "../../images/livestock/4.png";
import img5 from "../../images/livestock/5.png";
import img6 from "../../images/livestock/6.png";
import img7 from "../../images/livestock/7.png";
import img8 from "../../images/livestock/8.png";

const images = [
  { src: img1, alt: "Chicks and Chickens", label: "Chicks & Chickens" },
  { src: img2, alt: "Turkeys", label: "Turkeys" },
  { src: img3, alt: "Guinea Fowls", label: "Guinea Fowls" },
  { src: img4, alt: "Ducks", label: "Ducks" },
  { src: img5, alt: "Cows", label: "Cows" },
  { src: img6, alt: "Goats", label: "Goats" },
  { src: img7, alt: "Geese", label: "Geese" },
  { src: img8, alt: "Sheep", label: "Sheep" },
];

const LiveStock = () => {

  const navigate = useNavigate()
  return (
    <div className=" mt-20 md:mt-10">
      <div className=" lg:pl-20 text-center lg:text-start font-manrope font-semibold text-[#004802] leading-[27.32px] md:leading-[46.44px] text-[20px] md:text-[34px] w-full">
        <span>We raise a variety of livestock</span>
      </div>

      <Splide
        className="mt-10 flex items-center"
        options={{
          type: "loop",
          drag: "free",
          // gap: "100px",
          pagination: false,
          arrows: false,
          perPage: 4,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: true,
            speed: -0.5,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Livestock Carousel"
      >
        {images.map(({ src, alt, label }, index) => (
          <SplideSlide key={index} className="flex flex-col w-full gap-4 mx-4 ">
            <img src={src} alt={alt} className="lg:object-contain  md:w-[15rem]  object-cover" />
            <div className="font-manrope w-full text-center  md:text-start text-[14px] md:text-[28px] font-semibold text-[#0F4400]">
              {label}
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div className="w-full mx-auto px-20 mt-20 lg:block hidden">
        <button onClick={() => navigate('/homepage/')} className="shadow-[9px_0px_12.8px_rgba(0,_0,_0,_0.25)] text-white rounded-lg bg-[#0F4400] px-[20px] py-[12px]">
          Argrich Store
        </button>
      </div>
    </div>
  );
};

export default LiveStock;
