import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsOpen1,
  setIsOpen2,
  setIsOpen3,
} from "../../features/deleteaccountmodal/deleteaccountslice";
import close from "../../images/icons/close.svg";
import bullet from "../../images/icons/bullet.svg";
import bin from "../../images/icons/delete2.svg";
import { PulseLoader } from "react-spinners";
import { deleteUserProfile } from "../../features/account/accountSlice";
import { toast } from "react-toastify";

const ActualDelete = () => {
  const dispatch = useDispatch();
  const [accountName, setAccountName] = useState("");
  const { user, isLoading } = useSelector((state) => state.account);
  const handleDelete = async () => {
    if (accountName == user.name) {
      await dispatch(deleteUserProfile()).unwrap();
      dispatch(setIsOpen2(false));
      dispatch(setIsOpen3(true));
    } else {
      toast.error("Enter your name correctly!");
    }
  };
  return (
    <div>
      <div
        onClick={() => {
          dispatch(setIsOpen2(false));
        }}
        className="fixed h-screen w-full bg-black/25 z-[100] cursor-pointer flex   justify-center"
      >
        {isLoading ? (
          <div className="fixed bg-black/[0.6] h-screen w-screen z-50 left-0 top-0 items-center flex justify-center">
            {" "}
            <PulseLoader speedMultiplier={0.9} color="#fff" size={20} />
          </div>
        ) : (
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
              Delete Account
              </p>
              <button
                onClick={() => {
                  dispatch(setIsOpen2(false));
                }}
                className="h-[20px] w-[20px]"
              >
                <img src={close} alt="" />
              </button>
            </div>
            <div className="mt-8 px-4 w-full">
              <p className="font-bold text-[16px] font-manrope">
                Write the full name associated with <br /> this account to
                Proceed
                <p className="text-[#000a25dd]">{user.name}</p>
              </p>
              <input
                type="text"
                value={accountName}
                onChange={(e) => {
                  setAccountName(e.target.value);
                }}
                placeholder="Full Name"
                className="h-[46px] font-manrope focus:outline-none placeholder:text-[#6C6C6C] px-4 w-full rounded-[5px] mt-2 bg-[#F2F2F2] border border-[#D0D5DD]"
              />

              <button
                onClick={handleDelete}
                className="flex mx-auto mt-16 font-manrope gap-3  w-fit justify-center rounded-lg items-center py-[8px] px-[16px]  bg-[#950202] text-white"
              >
                <img src={bin} alt="" /> Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ActualDelete;
