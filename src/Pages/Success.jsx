import React from "react";
import backicon from "../images/icons/back.svg";
import checked from "../images/icons/checked.svg";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();
  return (
    <div className="max-w-[448px] px-4 lg:px-0 mx-auto w-full ">
      <div className="bg-white  rounded-[12px] w-full p-5 mt-2 shadow-[4px_4px_13.4px_0px_rgba(152,_152,_152,_0.25)]">
        <img src={checked} alt="" className="mx-auto" />
        <p className="font-semibold text-[20px] font-manrope mt-8 text-center" >Success</p>
        <p className="font-manrope  text-[#8C8C8C] font-medium text-[16px] mt-1  text-center">Your Password has been Updated.</p>
        <button
            onClick={() => navigate("/login")}
            className="min-h-[46px] bg-[#008A2F] w-full rounded-lg mt-8 font-manrope font-semibold text-[16px] text-white"
          >
       Log into your account
          </button>
      </div>
    </div>
  );
};

export default Success;
