import React, { useEffect, useRef, useState } from "react";
import profileImg from "../../images/Ellipse 3.png";
import defaultdp from "../../images/defaultdp.jpg";

import { useDispatch, useSelector } from "react-redux";
import {
  setIsOpen,
  setIsOpen1,
} from "../../features/deleteaccountmodal/deleteaccountslice";
import { getUserProfile } from "../../features/account/accountSlice";
const RightSide = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.account);
  

  useEffect(() => {
    dispatch(getUserProfile()).unwrap();
  }, []);

  return (
    <div className="border-t  ">
      <h1 className="text-[#000] font-semibold font-manrope text-[25px] leading-[32.78px]  flex items-center  border-b px-4 min-h-[67px]">
        Account & settings
      </h1>

      <div className=" w-full max-w-[788px] md:mx-auto lg:mx-0 lg:pr-4 px-4 md:px-10 lg:pl-10 ">
        <div className="flex flex-col col-span-2 p-8 px-0 gap-4 lg:pr-4">
          <h1
            id="account"
            className="text-[#000000] leading-[27.32px] font-manrope font-semibold text-[20px]"
          >
            Profile Information
          </h1>
          <div className="flex  flex-col justify-center  gap-4 items-center lg:items-start lg:flex-row   lg:justify-between mt-8">
            <p className="text-[16px] font-[500] font-manrope">
              Profile Picture
            </p>

            <div
              onClick={() => {
                dispatch(setIsOpen(true));
                window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
              }}
              className="w-full max-w-[391px] cursor-pointer self-center mx-auto lg:mx-0   flex items-center justify-center lg:justify-start"
            >
              <div className=" relative rounded-full  h-[100px] w-[100px]">
                <img
                  src={user?.profilePicture ?? defaultdp}
                  className=" object-contain h-[100px] w-[100px] rounded-full "
                  alt="Profile Img"
                />
                <div className="rounded-full flex absolute bg-white p-1 top-[70%] right-0 shadow-[0_0_10px_-1px_rgba(0,0,0,0.25)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3248 4.90729C15.7151 4.51674 16.3482 4.51647 16.7388 4.9067L19.0922 7.25746C19.4831 7.64784 19.4833 8.28116 19.0928 8.67187L9.13501 18.6352C8.99573 18.7745 8.81838 18.8696 8.62524 18.9085L4.20001 19.8002L5.09326 15.3802C5.13221 15.1875 5.22713 15.0105 5.36614 14.8714L15.3248 4.90729Z"
                      stroke="black"
                      stroke-width="1.6"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  lg:flex-row lg:justify-between mt-8 lg:mt-8">
            <p className="text-[16px] font-[500] font-manrope mb-4 lg:mb-0">
              Name and Email
            </p>

            <div className="w-full lg:max-w-[400px]   flex flex-col gap-4">
              <div className="w-full flex flex-col md:gap-1">
                {" "}
                <label
                  htmlFor=""
                  className="font-manrope font-medium text-[14px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={user?.name}
                  placeholder="James  Etta"
                  className=" rounded-[5px]  placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none bg-[#F2F2F2] border border-[#D0D5DD]  placeholder:text-base font-manrope  lg:max-w-[409px]  w-full  h-[40px] bg-inherit   "
                />
              </div>
              <div className="w-full  flex flex-col  md:gap-1 ">
                {" "}
                <label
                  htmlFor=""
                  className="font-manrope font-medium text-[14px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  placeholder="jamesetta@example.com"
                  className=" rounded-[5px]  placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none bg-[#F2F2F2] border border-[#D0D5DD]  placeholder:text-base font-manrope  lg:max-w-[409px]  w-full  h-[40px] bg-inherit   "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  lg:flex-row lg:justify-between mt-4 lg:mt-8">
            <p className="text-[16px] font-[500] font-manrope mb-4 lg:mb-0">
              Password
            </p>

            <div className="w-full lg:max-w-[400px]  flex flex-col gap-4">
              <div className="flex flex-col w-full">
                <div className="w-full ">
                  {" "}
                  <label
                    htmlFor=""
                    className="font-manrope font-medium text-[14px]"
                  >
                    Password
                  </label>{" "}
                  <input
                    type="text"
                    placeholder="••••••••••••"
                    className=" rounded-[5px] placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none bg-[#F2F2F2] border border-[#D0D5DD]  placeholder:text-base font-manrope  lg:max-w-[409px]  w-full  h-[40px] bg-inherit   "
                  />
                </div>

                <button className="bg-[#005C2D] px-[16px] py-[12px] text-white rounded-[5px] self-end mt-4">
                  Change Password
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  lg:flex-row lg:justify-between mt-4 lg:mt-8">
            <p className="text-[16px] font-[500] font-manrope mb-4 lg:mb-0">
              Delivery Information
            </p>

            <div className="w-full lg:max-w-[400px]  flex flex-col gap-4">
              <div className="w-full ">
                {" "}
                <label
                  htmlFor=""
                  className="font-manrope font-medium text-[14px]"
                >
                  Address
                </label>{" "}
                <input
                  type="text"
                  value={user?.address}
                  className=" rounded-[5px]  placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none  border border-[#D0D5DD]  placeholder:text-base font-manrope  lg:max-w-[409px]  w-full  h-[40px] bg-inherit   "
                />
              </div>
              <div className="flex items-center gap-x-4">
                <div className="w-full">
                  {" "}
                  <label
                    htmlFor=""
                    className="font-manrope font-medium text-[14px]"
                  >
                    City/Town
                  </label>{" "}
                  <input
                    type="text"
                    className=" rounded-[5px]  placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none border border-[#D0D5DD]  placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
                  />
                </div>
                <div className="w-full">
                  {" "}
                  <label
                    htmlFor=""
                    className="font-manrope font-medium text-[14px] "
                  >
                    Zip Code
                  </label>{" "}
                  <input
                    type="text"
                    value={user?.zipcode}
                    className=" rounded-[5px]  placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none  border border-[#D0D5DD]  placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
                  />
                </div>
              </div>
              <button className="bg-[#005C2D] font-manrope px-[16px] py-[12px] text-white rounded-[5px] self-end mt-4">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* <div className=" h-px bg-[#C6C6C6] w-full mt-4"></div> */}

       

        <div className=" h-px bg-[#C6C6C6] w-full mt-10 mb-10"></div>

       

      </div>
    </div>
  );
};

export default RightSide;
