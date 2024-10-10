import React,{useEffect} from "react";
import Logo from "../images/Mask group.png";
import { getCategory } from "../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {

  const { category } = useSelector((state) => state.category);

  return (
    <div className="bg-[#005C2D] p-8 text-[#FFEEDC] ">
      <div className="grid lg:grid-cols-2 gap-16 p-8">
        <div className="flex flex-col">
          <img src={Logo} className="w-32 mb-4"></img>
          <p>
          From farm-fresh eggs to tender meats and wholesome vegetables, we're committed to delivering the highest quality products to your table.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h1  className="text-[#7CD032] font-bold mb-2">Categories</h1>

            <ul>
            {category.map((item,index) => (
                <li key={index}>{item.category}</li>
              ))}
             
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#7CD032] font-bold mb-2">About Us</h1>

            <ul>
             
              <li>About Argrich</li>
              <li>New & Blogs</li>
              <li>Delivery Coverages</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#7CD032] font-bold mb-2">Help</h1>

            <ul>
              <li>Feedback</li>
              <li>Return Policy</li>
              <li>Track Orders</li>
              <li>Delivery Coverage</li>
              <li>Contact Us</li>
              <li>Security and Fraud</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-white gap-y-2  border-solid flex flex-col md:flex-row justify-between p-8 lg:px-20 py-2">
        <div>Terms of use</div>
        <div>Privacy Policy</div>
        <div >All Rights Reserved by Argrich | 2024</div>
      </div>
    </div>
  );
};

export default Footer;
