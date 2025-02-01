import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import GetProduct from "../components/GetProduct";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./NotFound";
import Cart from "./Cart";
import Checkout from "./Checkout";
import GetProductBySearch from "./GetProductBySearch";
import GetProductByCategory from "./GetProductByCategory"
import FeedbackPolicy from "./Feedback";

const MainPage = () => {
  const { token } = useSelector((state) => state.auth);

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <Advert />
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/:searchQuery" element={<GetProductBySearch/>}></Route>
          <Route path="/category/:Category" element={<GetProductByCategory/>} ></Route>
          <Route path="/view/:id" element={<GetProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout/>}/>
        
          <Route path="*" element={<NotFound pathname={"/"} />}></Route>
        </Routes>
      <Footer />
    </div>
  );
};

export default MainPage;
