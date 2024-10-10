import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen1 } from "../features/deleteaccountmodal/deleteaccountslice";
import { deleteUserProfile } from "../features/account/accountSlice";

const Other = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.account);
  console.log("user", user);

  return (
    <div className="border-t  ">
      <h1 className="text-[#000] font-semibold font-manrope text-[25px] leading-[32.78px]  flex items-center  border-b px-4 min-h-[67px]">
        Other
      </h1>
      <div
        id="other"
        className="mt-4 font-manrope  mb-10 w-full max-w-[788px] md:mx-auto lg:mx-0 lg:pr-4 px-4 md:px-10 lg:pl-10 "
      >
        <div className=" flex  lg:flex-row justify-start items-start flex-col lg:justify-between">
          <div className="s">
            <p className="text-[16px] font-medium ">Delete Account</p>
            <p className="text-[#6C6C6C] text-[14px] font-medium mt-6">
              Remove all data(includes addresses, billing information, cookies,
              email, history), and delete the account
            </p>
          </div>
          <div className="flex flex-col  max-w-[422px] gap-4 w-full lg:mt-0 mt-6">
            <button
              onClick={() => {
                dispatch(setIsOpen1(true));
                window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
              }}
              className="px-[16px] py-[12px] bg-[#DF2E07] text-white w-fit lg:self-end  rounded-[5px]  text-[16px]"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
