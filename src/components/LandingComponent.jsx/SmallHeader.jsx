import React from "react";
import Logo from "../../images/Argrich Logo Full 00.png";
import { Link } from "react-router-dom";
import link from "../../images/icons/accordion.svg";
import { useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";

const SmallHeader = ({ setIsOpen, isOpen }) => {
  const { token, user } = useSelector((state) => state.auth);
  return (
    <div className="px-4 mt-8 mb-5 md:hidden">
      <div className="flex w-full justify-between items-center ">
        <Link to="/" className="">
          <img src={Logo} className="w-32 object-contain" />
        </Link>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex gap-4 items-center"
        >
          <img src={link} alt="" className="object-contain w-8" />
          <p className="text-[#0F4400] font-manrope font-semibold text-sm ">
            Menu
          </p>
        </div>
      </div>

      <div
        className={`fixed h-screen w-[65%] duration-200 lg:hidden ${
          isOpen ? "left-0" : "left-[-100%] px-4"
        } top-0 bg-white z-[500]  `}
      >
        <IoCloseOutline
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute top-1 right-1 text-4xl"
        />
        <div className="gap-10  mt-14 flex flex-col items-start mx-auto text-start w-fit font-manrope text-[#0F4400] font-medium ">
          <Link to="/" onClick={() => setIsOpen((prev) => !prev)} className="">
            <img src={Logo} className="w-32 object-contain" />
          </Link>
          <Link onClick={() => setIsOpen((prev) => !prev)} className="mt-10">
            {" "}
            About
          </Link>
          <Link onClick={() => setIsOpen((prev) => !prev)} className="">
            Product Categories
          </Link>

          {token ? (
            <Link
              to="/homepage/"
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-[10px]  py-2  flex items-center justify-center px-8 h-full bg-[#0F4400] text-[#FFF4DB] "
            >
              online Store
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-[10px] max-w-[121px] py-2 flex items-center justify-center px-8 h-full bg-[#0F4400] text-[#FFF4DB] "
            >
              Login
            </Link>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed h-screen bg-black/85 z-[300] top-0 w-full"
        ></div>
      )}
    </div>
  );
};

export default SmallHeader;
