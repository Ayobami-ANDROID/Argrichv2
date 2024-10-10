import React, { useState, useEffect, useRef } from "react";
import Logo from "../images/Argrich Logo Full 00.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Profile from "../images/Ellipse 1.png";
import { TfiAlignJustify } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCategory } from "../features/category/categorySlice";
import { authReset } from "../features/auth/authSlice";
import { getSearchProduct } from "../features/product/productSlice";
import Skeleton from "react-loading-skeleton";
import searchicon from "../images/search2.svg";
import carticon from "../images/carticon.svg";
import { Navigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { getCart } from "../features/cart/cartSlice";
import { toast, Bounce } from "react-toastify";
import { getUserProfile } from "../features/account/accountSlice";
import secureLocalStorage from "react-secure-storage";

const Header = () => {
  // const [clicked, setClicked] = useState(false);
  // const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.account);
  const [value, setValue] = useState("");
  console.log("user", user);

  const page_size = 6; // Increased page_size for better pagination example
  const [currentPage, setCurrentPage] = useState(1);
  const { token } = useSelector((state) => state.auth);
  const { category } = useSelector((state) => state.category);
  const { cart, count } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  console.log(user, "user");

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await dispatch(getCategory()).unwrap();
        await dispatch(getCart({ page_size:page_size, page: (currentPage)})).unwrap()
        await dispatch(getUserProfile()).unwrap();
      } catch (error) {
      
      console.log("error");}
    };

    fetchProduct();

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = async () => {
    dispatch(authReset());
    navigate("/login");
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(path);
  };

  const search = () => {
    if (!value.trim()) {
      navigate("/homepage/");
    } else {
      navigate(`/homepage/product/${value}`);
    }
  };

  const CartSearch = async (cart) => {};
  return (
    <div className="bg-[rgb(255,255,255)] lg:px-12 px-2 py-4 w-full">
      <div className="flex items-center   w-full">
        <div className="flex w-full">
          <Link to="/" className="flex items-center mr-4">
            <img
              src={Logo}
              className="lg:w-32 w-32 lg:mr-8  object-contain"
            ></img>
          </Link>

          <div
            className="relative flex flex-col items-center"
            ref={dropdownRef}
          >
            <button
              className="group flex flex-col items-center"
              onClick={toggleDropdown}
            >
              <div className="flex items-center">
                <div className="mr-2"> Categories </div>
                <div className="flex items-center " size={"3em"}>
                  <IoIosArrowDown />
                </div>
              </div>
            </button>

            {isOpen && (
              <div className="absolute top-[100%] left-[10%] z-[100] group-focus:block">
                <ul className="  rounded-box z-[1] lg:w-[30rem] rounded-[5px] w-[16rem] p-2 grid lg:grid-cols-3 grid-cols-1 gap-4 bg-[#fff]">
                  {category.map((item, index) => (
                    <Link
                      to={`/homepage/category/${item.category}`}
                      key={index}
                      className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000] cursor-pointer"
                      onClick={() => CartSearch(item.category)}
                    >
                      <div>
                        {" "}
                        <a>{item.category}</a>
                      </div>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-4 justify-end border-none w-full ">
          <div className="flex px-2 pr-4 bg-[#F0F0F0] rounded-[300px] border-[#E4E4E4] ">
            <div>
              <input
                placeholder="Search Product"
                type="text "
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className=" outline-none font-manrope px-4 max-w-[409px]  w-full  h-[40px] bg-inherit   "
              />
            </div>

            <div
              className="flex items-center    cursor-pointer"
              onClick={() => search()}
            >
              <img src={searchicon} alt="search" />
            </div>
          </div>

          <Link
            to={"/homepage/cart"}
            className="lg:flex hidden items-center text-[#000]  mx-2 cursor-pointer relative "
          >
            <div className="mr-2">
              <img src={carticon} alt="cart" />
            </div>
            <div className="sm:block xs:hidden">Cart</div>
            {cart.length <= 0 ? (
              ""
            ) : (
              <div className="w-6 h-6 bg-[#008A2F] rounded-full absolute top-[-55%] right-[-15%] text-center  text-white">
                {cart.length}
              </div>
            )}
          </Link>

          {token ? (
            <div className=" flex items-center ml-2  relative ">
              <button className="rounded-full bg-[#EEEEEE] lg:h-12 lg:w-12 w-8 h-8  group">
                <div className="">
                  {user?.profilePicture ? (
                    <img
                      src={user?.profilePicture}
                      className=" rounded-full  w-8 h-8  lg:h-12 lg:w-12 object-cover"
                    ></img>
                  ) : (
                    <div className="w-full rounded-full h-full flex items-center justify-center">
                      <div>
                        <IoPersonOutline className="text-center" />
                      </div>
                    </div>
                  )}

                  <div className="z-10 bg-[#fff] shadow-[8px_8px_12px_8px_rgba(0,_0,_0,_0.25)]  hidden absolute rounded-lg  w-40 group-focus:block top-full right-0 p-4">
                    <div className="text-[#000] flex flex-col  gap-4">
                      <h4 className="font-[500] mb-2 text-[15px] whitespace-nowrap ">
                        Welcome!
                      </h4>
                      <a
                        onClick={(e) => handleLinkClick(e, "/account")}
                        className="hover:text-[#008A2F] transition whitespace-nowrap flex items-center justify-between"
                      >
                        <IoPersonSharp size={"2.5em"} className="mr-4" />
                        my Accounts
                      </a>
                      <a
                        onClick={(e) => handleLinkClick(e, "/cart")}
                        className=" lg:hidden sm:flex items-center text-[#000]  hover:text-[#008A2F] transition cursor-pointer relative "
                      >
                        <CiShoppingCart size={"1.5em"} className="mr-4" />

                        <div className="sm:block xs:hidden">Cart</div>
                        {cart.length <= 0 ? (
                          ""
                        ) : (
                          <div className="w-6 h-6 bg-[#008A2F] rounded-full absolute top-[-45%] right-[30%] text-center  text-white">
                            {" "}
                            {cart.length}
                          </div>
                        )}
                      </a>

                      <li
                        className="hover:text-[#008A2F] flex items-center transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          secureLocalStorage.clear()
                          logout();
                        }}
                      >
                        <IoIosLogOut className="mr-4" size={"1.5em"} />
                        Logout
                      </li>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                to="/login"
                className="lg:p-3 p-2 bg-[#008A2F] lg:text-[15px] text-[11px] text-white mr-2 rounded-[5px] "
              >
                Login
              </Link>
            </div>
          )}

          {/* <div className="flex items-center ml-2 lg:hidden">
            <TfiAlignJustify size={'1.2em'} className="cursor-pointer" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
