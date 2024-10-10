import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../images/veg/image 1.png";
import img2 from "../../images/veg/image 3.png";
import img3 from "../../images/veg/image 5.png";
import img4 from "../../images/veg/image 8.png";
import img5 from "../../images/veg/image 10.png";
import img6 from "../../images/veg/image 17.png";
import img7 from "../../images/veg/image 11.png";
import img8 from "../../images/veg/image 19.png";
import img9 from "../../images/veg/image 9.png";
import img10 from "../../images/veg/image 2.png";
import bger from "../../images/img.png";

const Produce = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      // Animate the text
      gsap.from("#produce-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#produce-container",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // Animate the images  
      const images = gsap.utils.toArray('#produce-container img');
      images.forEach((img, index) => {
        gsap.from(img, {
          y: 100,
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          rotation: Math.random() * 20 - 10,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#produce-container",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax effect for images
      gsap.to(images, {
        y: (i) => -50 - i * 20,
        ease: "none",
        scrollTrigger: {
          trigger: "#produce-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, { scope: containerRef });

  return (
    <div className="s" ref={containerRef}>
      <img src={bger} alt="" className="mx-auto mt-14 mb-2 lg:hidden block w-full object-contain" />

      <div
        id="produce-container"
        className="hidden lg:block min-h-[800px] relative mt-10 w-full overflow-hidden"
      >
        <div className="px-20 w-full md:block hidden">
          <div className="border-[1.6px] border-[#C5C5C5] mx-auto"></div>
        </div>
        <div className="top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <p
            id="produce-text"
            className="font-manrope font-semibold leading-[21.86px] md:leading-[46.44px] text-center text-[16px] md:text-xl xl:text-[34px] text-[#004802] w-full max-w-[992px] mx-auto"
          >
            Our farm also produces an abundance of crops such as maize, yams,
            beans, ginger, and other fresh vegetables.
          </p>
        </div>
        <img src={img1} alt="Maize" className="absolute right-0 mt-10 maize" />
        <img
          src={img2}
          alt="White vegetable"
          className="absolute right-32 mt-14 mr-20 white"
        />
        <img
          src={img3}
          alt="Vegetable"
          className="absolute right-[40rem] mt-32"
        />
        <img
          src={img4}
          alt="Vegetable"
          className="absolute left-[20rem] mt-32"
        />
        <img src={img5} alt="Vegetable" className="absolute left-0 mt-36" />
        <img
          src={img6}
          alt="Vegetable"
          className="absolute left-[2rem] mt-[30rem]"
        />
        <img
          src={img7}
          alt="Vegetable"
          className="absolute left-[20rem] mt-[32rem]"
        />
        <img
          src={img8}
          alt="Vegetable"
          className="absolute left-[38rem] mt-[35rem]"
        />
        <img
          src={img9}
          alt="Vegetable"
          className="absolute left-[61rem] mt-[34rem]"
        />
        <img
          src={img10}
          alt="Vegetable"
          className="absolute right-0 mt-[24rem]"
        />
      </div>
    </div>
  );
};

export default Produce;