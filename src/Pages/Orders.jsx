import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen1 } from "../features/deleteaccountmodal/deleteaccountslice";
import { getOrder } from "../features/product/productSlice";
import { MdMoreVert, MdVisibility, MdEdit, MdDelete } from "react-icons/md";
import OrderModal from "../components/AccountComponent/OrderModal";
import { formatDate } from "../../utils/data";

const Orders = () => {
  const dispatch = useDispatch();
  const [viewModal, setviewModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const { orders, isLoading } = useSelector((state) => state.product);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
 

  useEffect(() => {
    const fetchOrders = async () => {
      await dispatch(getOrder()).unwrap();
    };
    fetchOrders();
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function removeUnderscoresAndSpaces(textWithUnderscores) {
    return textWithUnderscores.replace(/_/g, " ");
  }

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleAction = (action, orderId) => {
  
    setOpenDropdown(null);
  };

  return (
    <div className="border-t">
      {viewModal && (
        <OrderModal modalData={modalData} setviewModal={setviewModal} />
      )}
      <h1 className="text-[#000] font-semibold font-manrope text-[25px] leading-[32.78px] flex items-center border-b px-4 min-h-[67px]">
        Orders
      </h1>
      <div className="w-full px-4 mt-10 mb-8">
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="bg-[#EFF1F7] font-manrope">
              <th className="px-4 py-2 font-manrope text-[14px] font-bold">
                Order No
              </th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold">
                Created Date
              </th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold">
                Payment Method
              </th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold">
                Total Price
              </th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold text-center">
                Status
              </th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-manrope">{product.id}</td>
                <td className="px-4 py-2 font-manrope">
                  {formatDate(product.created_at)}
                </td>
                <td className="px-4 py-2 font-manrope">
                  {removeUnderscoresAndSpaces(product.payment_method)}
                </td>
                <td className="px-4 py-2 font-manrope">
                  ₦{Number(product.total_price).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td>
                  <p
                    className={`px-4 text-[12px] font-medium rounded-md py-2 w-full mx-auto font-manrope flex items-center justify-center ${
                      product.status === "Cancelled"
                        ? "bg-[#FFB3B3] text-[#C50000]"
                        : product.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : product.status === "Completed"
                        ? "text-[#ffff] bg-[#5d9f65] "
                        : ""
                    }`}
                  >
                    {product.status}
                  </p>
                </td>
                <td className="py-2 font-manrope px-4 relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="mx-auto flex items-center justify-center"
                  >
                    <MdMoreVert size={20} />
                  </button>
                  {openDropdown === index && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-12  mt-2 w-full max-w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <button
                          onClick={() => {
                            handleAction("view", product.id);
                            setModalData(product);
                            setviewModal(true);
                          }}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                          role="menuitem"
                        >
                          <MdVisibility className="mr-3" size={18} /> View
                        </button>
                        {/* <button
                          onClick={() => handleAction("edit", product.id)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                          role="menuitem"
                        >
                          <MdEdit className="mr-3" size={18} /> Edit
                        </button>
                        <button
                          onClick={() => handleAction("delete", product.id)}
                          className="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-900 w-full text-left"
                          role="menuitem"
                        >
                          <MdDelete className="mr-3" size={18} /> Delete
                        </button> */}
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
