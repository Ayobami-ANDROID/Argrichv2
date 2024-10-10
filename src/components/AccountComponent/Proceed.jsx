import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsOpen1,
  setIsOpen2,
} from "../../features/deleteaccountmodal/deleteaccountslice";
import close from "../../images/icons/close.svg";
import bullet from "../../images/icons/bullet.svg";
import proceed from "../../images/icons/proceed.svg";
import defaultdp from "../../images/defaultdp.jpg";

const Proceed = () => {
  const dispatch = useDispatch();
 
  return (
    <div>
      <div
        onClick={() => {
          dispatch(setIsOpen1(false));
        }}
        className="fixed h-screen w-full bg-black/25 z-[100] cursor-pointer flex   justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg bg-[#FBFBFB] font-manrope  shadow-[2px_4px_19.4px_-3px_rgba(0,_0,_0,_0.25)] max-w-[461px] w-full px-3 rounded-[20px] h-fit mt-24 py-2 pb-6 pt-1 "
        >
          <div
            className="flex items-center justify-between py-2 h-[52px]
          "
          >
            <p className="text-[16px] font-semibold font-manrope">
              {" "}
              Edit Profile Photo
            </p>
            <button
              onClick={() => {
                dispatch(setIsOpen1(false));
              }}
              className="h-[20px] w-[20px]"
            >
              <img src={close} alt="" />
            </button>
          </div>
          <div className="mt-8 px-4 w-full">
            <p className="font-bold text-[16px] font-manrope">
              Deleting your account will do the following:
            </p>
            <div className="flex items-center mt-4 gap-x-2 font-medium text-[#950202] text-[16px]">
              <img src={bullet} alt="" />
              <p className=" font-manrope">Log you out on all devices</p>
            </div>
            <div className="flex items-center mt-2 gap-x-2 font-medium text-[#950202] text-[16px]">
              <img src={bullet} alt="" />
              <p className=" font-manrope">
                Delete all of your account Information
              </p>
            </div>
            <div className="flex flex-col text-center mt-20 items-center">
              <p className="font-medium text-[16px] font-manrope">
                Are you sure you want to proceed?
              </p>
              <button
                onClick={() => {
                  dispatch(setIsOpen1(false));
                  dispatch(setIsOpen2(true));
                }}
                className="flex  font-manrope gap-3 mt-4 max-w-[181px] w-full justify-center rounded-lg items-center py-[8px] px-[16px]  bg-[#950202] text-white"
              >
                Proceed <img src={proceed} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proceed;
