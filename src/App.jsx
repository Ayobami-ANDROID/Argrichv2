import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Advert from "./components/Advert";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@splidejs/splide/dist/css/splide.min.css";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./Pages/MainPage";
import "react-loading-skeleton/dist/skeleton.css";
import Account from "./Pages/Account";
import NotFound from "./Pages/NotFound";
import ResetPassword from "./Pages/ResetPassword";
import ChangePasswordLayout from "./Pages/ChangePasswordLayout";
import ConfirmOtp from "./Pages/ConfirmOtp";
import NewPassword from "./Pages/NewPassword";
import VerifyAccountLayout from "./Pages/VerifyAccountLayout";
import Success from "./Pages/Success";
import HelpCenter from "./Pages/HelpCenter";
import AccountLayout from "./Pages/AccountLayout";
import Other from "./Pages/Other";
import Orders from "./Pages/Orders";
import Checkout from "./Pages/Checkout";
import FeedbackPolicy from "./Pages/Feedback";
import ReturnPolicy from "./Pages/ReturnPolicy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feedback" element={<FeedbackPolicy/>}/>
        <Route path="/return-policy" element={<ReturnPolicy/>}/>
        {/* <Route path="/account" element={<AccountLayout />} /> */}
        <Route path="/account" element={<AccountLayout />}>
          <Route path="" element={<Account />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="orders" element={<Orders />} />
          <Route path="other" element={<Other />} />
          <Route path="orders-details/:id" element={<Orders />} />
        </Route>
        <Route path="/changepassword" element={<ChangePasswordLayout />}>
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="confirm-otp" element={<ConfirmOtp />} />
          <Route path="create-newpassword" element={<NewPassword />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="/homepage/*" element={<MainPage />} />
        <Route path="*" element={<NotFound pathname={"/"} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/signupverify" element={<VerifyAccountLayout/>}/>
        <Route path="/changepassword" element={<ChangePasswordLayout />}>          
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="confirm-otp" element={<ConfirmOtp/>} />
          <Route path="create-newpassword" element={<NewPassword/>} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
