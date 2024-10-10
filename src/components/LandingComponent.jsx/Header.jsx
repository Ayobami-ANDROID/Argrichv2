import React from "react";
import Logo from "../../images/Argrich Logo Full 00.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { token, user } = useSelector((state) => state.auth);
  return (
    <div className="rounded-[200px] max-w-[714px]  h-[62px] pl-4 w-full flex items-center overflow-hidden p-2 mt-4 bg-[#fff] shadow-[2px_2px_19.2px_0px_rgba(0,0,0,0.25)] justify-between">
      <div>
        <Link to="/landing"><img src={Logo} className="w-28 object-contain" /></Link>
      </div>
      <div className="gap-x-4 flex items-center font-manrope text-[#0F4400] font-medium ">
        <Link className=""> About</Link>
        <Link className="">Product Categories</Link>
        <Link to="/homepage/" className=""> Online Store</Link>
      </div>


      {token ? (
        <Link to="/homepage/" className="rounded-[40px]  flex items-center justify-center px-8 h-full bg-[#0F4400] text-[#FFF4DB] shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.25)]">
        online Store
        </Link>
      ) : (
        <Link to="/login" className="rounded-[40px] max-w-[121px] flex items-center justify-center px-8 h-full bg-[#0F4400] text-[#FFF4DB] shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.25)]">
          Login
        </Link>
      )
      }


    </div>
  );
};

export default Header;
