import React from "react";
import { BiSearch } from "react-icons/bi";
import searchicon from "../../images/search.svg";
import { Link } from "react-router-dom";
import order from "../../images/icons/orders.svg";
import { useState } from "react";

const Sidebar = () => {
  const [index, setIndex] = useState(1)
  return (
    <div className="md:w-64 xs:w-32 border-t border-r hidden lg:block   pt-2 h-auto min-h-screen">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="mb-4 font-manrope font-semibold text-[20px] leading-[27.32px] text-center">
          Account Management
        </h1>

        {/* <div className="flex pl-4  w-full max-w-[240px] gap-x-4 bg-[#E6E6E6] rounded-[10px]   ">
          <div className="flex items-center    cursor-pointer ">
            <img src={searchicon} alt="" />
          </div>
          <div>
            <input
              placeholder="Search"
              type="text "
              className=" outline-none placeholder:text-[#888888] placeholder:font-medium placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
            />
          </div>
        </div> */}

        <div className="flex flex-col gap-5 mt-16">
          <Link
            to={"/account"}
            onClick={()=>setIndex(1)}
            className={`${index == 1 && "bg-gray-200"} py-3 px-4 rounded-xl flex items-center`}
          >
            <svg
              className="mr-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.40002 20.5123C2.40002 16.7368 5.55431 13.6761 12 13.6761C18.4457 13.6761 21.6 16.7368 21.6 20.5123C21.6 21.113 21.1618 21.5999 20.6212 21.5999H3.37885C2.83826 21.5999 2.40002 21.113 2.40002 20.5123Z"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M15.6 5.9999C15.6 7.98813 13.9882 9.5999 12 9.5999C10.0118 9.5999 8.40002 7.98813 8.40002 5.9999C8.40002 4.01168 10.0118 2.3999 12 2.3999C13.9882 2.3999 15.6 4.01168 15.6 5.9999Z"
                stroke="black"
                stroke-width="2"
              />
            </svg>

            <p className="font-semibold font-manrope text-[16px] leading-[21.86px]">
              Account Information
            </p>
          </Link>
          <Link
            to={"/account/help-center"}
            onClick={()=>setIndex(2)}
            className={`${index == 2 && "bg-gray-200"} py-3 px-4 rounded-xl flex items-center`}
          >
            <svg
              className="mr-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.999 16.7999V16.8421M9.60002 9.04523C9.60002 7.69471 10.6745 6.5999 12 6.5999C13.3255 6.5999 14.4 7.69471 14.4 9.04523C14.4 10.3957 13.3255 11.4906 12 11.4906C12 11.4906 11.999 12.2204 11.999 13.1208M21.6 11.9999C21.6 17.3018 17.302 21.5999 12 21.5999C6.69809 21.5999 2.40002 17.3018 2.40002 11.9999C2.40002 6.69797 6.69809 2.3999 12 2.3999C17.302 2.3999 21.6 6.69797 21.6 11.9999Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="font-semibold font-manrope text-[16px] leading-[21.86px]">
              Help Center
            </p>
          </Link>
          <Link
               onClick={()=>setIndex(3)}
            to={"/account/other"}
            className={`${index == 3 && "bg-gray-200"} py-3 px-4 rounded-xl flex items-center`}
          >
            <svg
              className="mr-4 other"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5088 3.83008L8.45828 9.1427L12 20.1699M12 20.1699L15.635 9.0495L13.6777 3.83008M12 20.1699L2.40002 9.2359M12 20.1699L21.6 9.2359M2.40002 9.2359L6.50099 3.83008H17.5923L21.6 9.2359M2.40002 9.2359H21.6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="font-semibold font-manrope text-[16px] leading-[21.86px]">
              Other
            </p>
          </Link>
          <Link
               onClick={()=>setIndex(4)}
          to={"/account/orders"} className={`${index == 4 && "bg-gray-200"} py-3 px-4 rounded-xl flex items-center gap-4`}>
            <img src={order} alt="" />
            <p className="font-semibold font-manrope text-[16px] leading-[21.86px]">
              Orders
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
