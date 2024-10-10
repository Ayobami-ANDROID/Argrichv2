import {useRef,useLayoutEffect} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../images/services/img1.png";
import img2 from "../../images/services/img2.png";
import img3 from "../../images/services/img3.png";
import img4 from "../../images/services/img4.png";
import img5 from "../../images/services/img5.png";



const Services = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  useGSAP(() => {
    if (typeof window !== "undefined") {
      const sections = gsap.utils.toArray('.service-section');

      sections.forEach((section, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          }
        });

        tl.from(section, {
          x: `${100 * direction}%`,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });

        // Animate the text separately
        tl.from(section.querySelectorAll('.animate-text'), {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");

        // Animate the images
        tl.from(section.querySelectorAll('img'), {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.2
        }, "-=0.5");
      });
    }
  }, { scope: containerRef });

  return (
    <div
      className="w-full flex flex-col justify-center items-center mt-20 overflow-hidden  px-4 "
      id="content"
      ref={containerRef}

    >
      <div className="flex lg:flex-row flex-col lg:px-0 gap-4 items-center w-full justify-center">
        <div className="service-section bg-[#FF951F] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full lg:max-w-[679px]">
          <div className="max-w-[581px] w-full lg:text-start text-center">
            <p className="animate-text text-white font-bold font-manrope text-[24px] lg:text-[28px]">
              Farm-to-Fork Freshness
            </p>
            <p className="animate-text text-[12px] font-medium text-white leading-[16.39px] font-manrope md:text-[16px] md:leading-[21.86px] text-center lg:text-start lg:mt-1">
              Savor the pure taste of nature with our handpicked, seasonal
              produce. Cultivated with care on our farm, our vegetables are
              bursting with flavor and essential nutrients.
            </p>
          </div>
          <img
            src={img1}
            alt=""
            className="absolute md:-bottom-[2.1rem]  md:translate-x-1/2 md:right-1/2 mt-6 left-[0.2px] lg:w-[125px]"
          />
          <img
            src={img2}
            alt=""
            className="absolute object-contain w-[16rem] -bottom-[4.2rem] -right-[2.8rem]"
          />
        </div>
        <div className="service-section bg-[#4E070B] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full lg:max-w-[300px]">
          <p className="animate-text text-white font-manrope font-bold text-[28px] max-w-[255px]">
            Excellent Eggs to start your day
          </p>
          <img src={img3} alt="" className="absolute right-1 md:-right-10" />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  gap-4 items-center w-full justify-center mt-6">
        <div className=" bg-[#6CDE40] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full lg:max-w-[300px]">
          <p className="animate-text font-manrope font-bold text-[28px] text-white">
            Fast Delivery, Fresh Flavor
          </p>
          <img src={img4} alt="" className="absolute -right-8 -bottom-7" />
        </div>
        <div className="service-section bg-[#005C2D] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full lg:max-w-[679px]">
          <p className="animate-text text-white font-bold  text-[28px] leading-[38.25px] font-manrope">
            Prime Cuts, Perfect Taste
          </p>
          <p className="animate-text text-[#F2F2F2] text-[12px] md:text-[16px]  font-medium font-manrope">
            Raised in open pastures and nourished with natural feed, our
            livestock produces tender and juicy cuts.
          </p>

          <img
            src={img5}
            alt=""
            className="absolute   mx-auto md:w-auto  -right-14 md:-right-4"
          />
        </div>
        <div className="service-section  min-h-[10px]  relative w-full lg:hidden mt-12"></div>
      </div>
    </div>
  );
};

export default Services;
