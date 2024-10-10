import React, { useRef, useState } from "react";
import icondelete from "../../images/icons/icon3.svg";
import iconupload from "../../images/icons/icon4.svg";
import close from "../../images/icons/close.svg";
import dp from "../../images/dp.jpeg";
import { useDispatch, useSelector } from "react-redux";

import {
  setIsOpen,
  setIsOpen1,
} from "../../features/deleteaccountmodal/deleteaccountslice";
import defaultdp from "../../images/defaultdp.jpg";
import { editUserProfile } from "../../features/account/accountSlice";

const DeleteAccountModal = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.account);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        dispatch(setIsOpen(false));
        dispatch(editUserProfile({ profilePicture: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <div
        onClick={() => {
          dispatch(setIsOpen(false));
        }}
        className="fixed h-screen w-full bg-black/25 z-[100] cursor-pointer flex   justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg bg-[#FBFBFB] pb-8 shadow-[2px_4px_19.4px_-3px_rgba(0,_0,_0,_0.25)] max-w-[461px] w-full px-3 rounded-[20px] h-fit mt-24 py-2 pt-1 "
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
                dispatch(setIsOpen(false));
              }}
              className="h-[20px] w-[20px]"
            >
              <img src={close} alt="" />
            </button>
          </div>{" "}
          {selectedImage ? (
            <img
              src={selectedImage}
              alt=""
              className="rounded-full h-[170px] w-[170px] object-cover mx-auto mt-4"
            />
          ) : (
            <img
              src={user?.profilePicture ?? defaultdp}
              alt=""
              className="rounded-full h-[170px] w-[170px] object-cover mx-auto mt-4"
            />
          )}
          <div className="mt-20 max-w-[320px] w-full mx-auto flex justify-between">
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
            <button
              onClick={handleClick}
              className="bg-[#E7FFEA] gap-2  max-w-[140px] w-full flex flex-col items-center px-[16px] py-[12px] rounded-[5px]"
            >
              <img src={iconupload} alt="" />
              <p className="font-medium font-manrope text-[16px] text-[#005C2D]">
                Upload New
              </p>
            </button>
            <button
              onClick={() => {
                dispatch(setIsOpen(false));
                dispatch(setIsOpen1(true));
              }}
              className="bg-[#FFEAEA] gap-2 max-w-[140px] w-full flex flex-col items-center px-[16px] py-[12px] rounded-[5px]"
            >
              <img src={icondelete} alt="" />
              <p className="font-medium font-manrope text-[16px] text-[#950202]">
                Delete
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
