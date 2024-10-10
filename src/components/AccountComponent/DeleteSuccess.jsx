import React from "react";
import { useDispatch } from "react-redux";
import { setIsOpen3 } from "../../features/deleteaccountmodal/deleteaccountslice";
import close from "../../images/icons/close.svg";
import success from "../../images/icons/success.svg";
import bin from "../../images/icons/delete2.svg";
const DeleteSuccess = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={() => {
          dispatch(setIsOpen3(false));
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
                dispatch(setIsOpen3(false));
              }}
              className="h-[20px] w-[20px]"
            >
              <img src={close} alt="" />
            </button>
          </div>
          <div className="mt-8 px-4 w-full">
            <img src={success} alt="" className="mx-auto" />
            <p className="font-medium text-[16px] font-manrope text-center mt-2">
              Your account has been <br /> successfully deleted
            </p>
            <button
              onClick={() => {
                dispatch(setIsOpen3(false));
              }}
              className="flex mx-auto mt-16 font-manrope gap-3  w-fit justify-center rounded-lg items-center py-[8px] px-[16px]  bg-[#005C2D] text-white"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteSuccess;
