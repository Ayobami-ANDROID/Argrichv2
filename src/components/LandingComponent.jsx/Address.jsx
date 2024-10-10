import React, { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Address = () => {
  const boxTextRef = useRef(null);
  const testRef = useRef(null);
  const directionButtonRef = useRef(null);

  useLayoutEffect(() => {
    // Ensure ScrollTrigger is registered here as well
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      const textLines = testRef.current.children;
      
      gsap.set(textLines, { y: 50, opacity: 0 });
      
      gsap.to(textLines, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxTextRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(directionButtonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxTextRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <div>
      <div
        className="flex flex-col mt-10 mb-10 gap-y-6 md:gap-y-7"
        id="box-text"
        ref={boxTextRef}
      >
        <p
          className="text-center text-[#0F4400] font-semibold font-manrope text-[20px] leading-[27.32px] md:leading-[46.44px] md:text-[34px]"
          id="test"
          ref={testRef}
        >
          <span className="line">Our farm is a thriving five-hectare oasis</span><br />
          <span className="line">located in Kuje, Abuja.</span>
        </p>
        <button
          id="direction-button"
          ref={directionButtonRef}
          className="mx-auto px-[20px] py-[12px] shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.25)] bg-[#0F4400] rounded-lg text-white font-manrope font-semibold text-base"
        >
          Direction
        </button>
      </div>
    </div>
  );
};

export default Address;