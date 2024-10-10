import React, { useRef, useState } from "react";
import Header from "../../components/LandingComponent.jsx/Header";
import herobg from "../../images/bgheros.png";
import bag from "../../images/bag.svg";
import texture from "../../images/texture.png";
import heroimg from "../../images/heroimg.png";
import onion from "../../images/onion.png";
import corn from "../../images/corn.png";
import corn2 from "../../images/corn2.png";
import pepper from "../../images/pepper.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmallHeader from "./SmallHeader";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;

    gsap.to("#text", {
      opacity: 1,
      duration: 2,
      stagger: 1,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.fromTo(
      "#onion",
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      "#pepper",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.from("#corn2", {
      y: "100%",
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from("#corn", {
      x: "100%",
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from("#heroimg", {
      y: "100%",
      opacity: 0,
      duration: 3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: container,
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="overflow-hidden" ref={containerRef}>
      <SmallHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="px-4">
        <div className="relative">
          <div className="  bg-[#FFE6AE]   w-full   mt-2 rounded-[15px] ">
            <img
              src={texture}
              alt=""
              className=" rounded-[15px] w-full min-h-[487px] md:min-h-[714px]   mix-blend-plus-lighter  object-cover "
            />
          </div>
          <img
            src={corn}
            alt=""
            className="absolute hidden md:block   right-0 top-[1rem] md:-right-[1rem] md:top-[21rem] "
            id="corn"
          />
          <img
            src={corn2}
            alt=""
            className="absolute md:hidden   right-0 top-0 "
            id="corn2"
          />
          <img
            src={pepper}
            alt=""
            className="absolute md:hidden  left-0 top-0 "
            id="pepper"
          />
          <img
            src={onion}
            alt=""
            className=" hidden md:block absolute top-[23.7rem] md:left-[0.5rem] lg:left-[4rem] "
            id="onion"
          />

          <div className="absolute top-2 w-full">
            <div className="hidden md:flex items-center justify-center  w-full  ">
              <Header />
            </div>
            <div className="text-center mt-32  max-w-[596px] mx-auto flex flex-col gap-y-4 md:gap-y-4 md:mt-6">
              <p
                className="text-[#0F4400] leading-[37.92px] md:leading-[75.84px] font-semibold text-[32px] md:text-[64px] font-rubik  opacity-0  "
                id="text"
              >
                Farm to Table <br /> Freshness.
              </p>
              <p
                className="text-[#4F584C] leading-[16.39px]  font-manrope font-medium text-[12px] px-4 md:px-0 md:text-[18px] opacity-0 md:leading-[24.59px]"
                id="text"
              >
                From farm-fresh eggs to tender meats and wholesome vegetables,
                we're committed to delivering the highest quality products to
                your table.
              </p>
              <Link
                to="/homepage/"
                className="bg-[#0F4400]  px-[20px] gap-x-4  py-[12px]  mx-auto  text-white rounded-lg shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.25)] font-manrope text-[14px] md:text-[18px] font-semibold flex item items-center"
              >
                <img src={bag} alt="" /> Visit our Store
              </Link>
            </div>
          </div>
          <div className=" px-4  bg-transparent sticky -mt-32 -bottom-10  md:h-auto  md:sticky md:-mt-[13rem]   mx-auto md:px-[4rem] lg:px-[8rem] w-full rounded-[5px] ">
            {" "}
            <img
              src={heroimg}
              alt=""
              className=" object-cover h-[319px]  rounded-[5px] md:h-[500px] lg:h-auto lg:object-contain mx-auto w-full"
              id="heroimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
