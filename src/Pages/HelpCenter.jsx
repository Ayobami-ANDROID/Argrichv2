import React from "react";
import icon1 from "../images/icons/icon1.svg";
import icon2 from "../images/icons/icon2.svg";
const HelpCenter = () => {
  return (
    <div>
      <div className="border-t  ">
        <h1 className="text-[#000] font-semibold font-manrope text-[25px] leading-[32.78px]  flex items-center  border-b px-4 min-h-[67px]">
         Help Center
        </h1>
        <div
          id="other"
          className="mt-4 font-manrope  mb-10 w-full max-w-[788px] md:mx-auto lg:mx-0 lg:pr-4 px-4 md:px-10 lg:pl-10 "
        >
          <div className=" lg:mt-20 flex flex-col justify-center items-start  lg:flex-row lg:justify-between  mt-10  ">
            <p className="lg:mb-0 mb-3">Contact Support</p>
            <div className="flex flex-col  max-w-[422px] gap-4 w-full">
              <p className="s">To contact customer service</p>
              <div className="flex gap-x-3 items-center">
                <img src={icon1} alt="" />
                <p className="s">+234 803 239 9857</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img src={icon2} alt="" />
                <p className="s">support@argrichfarms.com</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex lg:mt-20 flex-col justify-center items-start  lg:flex-row lg:justify-between  ">
            <p className="font-medium font-manrope text-[16px] leading-[21.86px] lg:mb-0 mb-3">
              Feedback or Suggestions
            </p>
            <div className="flex flex-col  max-w-[422px] gap-4 w-full">
              <textarea
                name=""
                id=""
                placeholder="Have anything to tell us?"
                className="max-w-[422px] placeholder:text-[#ACACAC] font-medium placeholder:font-medium font-manrope text-[16px] focus:outline-none p-4  w-full bg-[#F2F2F2] border border-[#D0D5DD] rounded-[5px] min-h-[177px]"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
