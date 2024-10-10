import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../images/potted_plant.svg";

gsap.registerPlugin(ScrollTrigger);

const Farming = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#farming-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        toggleActions: "play none none reverse",
        // markers: true, // Uncomment for debugging
      },
    });

    tl.from("#icon-container", {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    })
      .from("#title", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .from("#description", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

    // Subtle parallax effect
    gsap.to("#icon-container", {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: "#farming-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div>
      <div
        className="max-w-[847px] mx-auto flex flex-col items-center justify-center gap-4 mt-20 px-4"
        id="farming-container"
      >
        <div
          id="icon-container"
          className="bg-[#E9FFD5] rounded-full h-16 w-16 flex items-center justify-center"
        >
          <img src={img} alt="Potted plant" />
        </div>
        <p
          id="title"
          className="font-manrope leading-[32.78px] lg:leading-[43.71px] font-bold text-[24px] lg:text-[32px] text-[#1A420E] mt-2 text-center"
        >
          We're committed to sustainable farming.
        </p>
        <p
          id="description"
          className="text-[#6C6C6C] text-center font-medium text-[14px] lg:text-[20px] leading-[19.12px] lg:leading-[27.32px]"
        >
          Our operations adhere to the strictest international standards to
          ensure that our products are not only of the highest quality but also
          produced in harmony with nature. We believe in nurturing the land
          while providing exceptional products.
        </p>
      </div>
    </div>
  );
};

export default Farming;