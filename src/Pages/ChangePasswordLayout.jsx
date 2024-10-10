import React from "react";
import { Outlet } from "react-router-dom";
import img1 from "../images/Argrich Logo Full 00.png";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";

const ChangePasswordLayout = () => {
  const {isLoading}= useSelector((state)=>state.auth)
  return (
    <div className="min-h-screen w-full bg-[#F5F5F5] flex flex-col justify-between ">
      {isLoading && (
        <div className="fixed bg-black/[0.6] h-screen w-screen z-50 left-0 top-0 items-center flex justify-center">
          {" "}
          <PulseLoader speedMultiplier={0.9} color="#fff" size={20} />
        </div>
      )}
      <div className="py-4 bg-white lg:px-20 min-h-[78px] flex items-center ">
        <img src={img1} alt="" className="mx-auto lg:mx-0" />
      </div>

      <Outlet />

      <div className=" w-full  flex items-center justify-center px-4  flex-wrap lg:justify-center gap-6  bottom-0 py-4 bg-[#006924] text-[#FCE5CD] font-manrope font-semibold text-[12px] md:text-[14px]">
        <p className="font-manrope">Terms of Use</p>
        <p className="lg:mr-8 font-manrope">Privacy Policy</p>
        <p className="font-manrope">All Rights Reserved by Argrich | 2024</p>
      </div>
    </div>
  );
};

export default ChangePasswordLayout;
