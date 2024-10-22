import React from "react";
import { useSelector } from "react-redux";
import Advert from "../components/Advert";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/AccountComponent/Sidebar";
import RightSide from "../components/AccountComponent/RightSide";
import DeleteAccountModal from "../components/AccountComponent/DeleteAccountModal";
import Proceed from "../components/AccountComponent/Proceed";
import ActualDelete from "../components/AccountComponent/ActualDelete";
import DeleteSuccess from "../components/AccountComponent/DeleteSuccess";
import { Navigate, Outlet } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const AccountLayout = () => {
  const product = useSelector((state) => state.product);
  const { isOpen, isOpen1, isOpen2, isOpen3 } = useSelector(
    (state) => state.deleteAccount
  );
  
  
  const { token } = useSelector((state) => state.auth);
  const { user, isLoading } = useSelector((state) => state.account);


  if (!token?.access) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
         {(isLoading ||product.isLoading) && (
        <div className="fixed bg-black/[0.6] h-screen w-screen z-50 left-0 top-0 items-center flex justify-center">
          {" "}
          <PulseLoader speedMultiplier={0.9} color="#fff" size={20} />
        </div>
      )}
      {isOpen && <DeleteAccountModal />}
      {isOpen1 && <Proceed />}
      {isOpen2 && <ActualDelete />}
      {isOpen3 && <DeleteSuccess />}

      <Advert />
      <Header />

      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountLayout;
