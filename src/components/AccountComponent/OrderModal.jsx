import React from "react";
import { formatDate } from "../../../utils/data";
import { IoCloseOutline } from "react-icons/io5";

const OrderModal = ({ modalData, setviewModal }) => {
  return (
    <div>
      <div
        onClick={() => {
          setviewModal((prev) => !prev);
        }}
        className="fixed  bg-black/[0.6] h-screen w-screen z-50 left-0 top-0 items-center flex justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white  relative w-full max-w-[400px] px-6 py-4 rounded-lg pt-8"
        >
          <div
            onClick={() => {
              setviewModal((prev) => !prev);
            }}
            className="bg-slate-200 top-3 cursor-pointer right-3 p-1 flex items-center justify-center absolute  rounded-full"
          >
            <IoCloseOutline className="  text-2xl" />
          </div>
          <p className="text-[18px] mt- font-semibold border-b pb-1 font-manrope">
            {" "}
            Order Details
          </p>
          <div className="  gap-x-10 gap-y-8   font-manrope  grid-cols-2  grid mt-6 ">
            <div className="flex flex-col ">
              <p className="font-manrope font-semibold text-[16px]">Order Id</p>
              <p className="text-[16px] font-manrope">
                {modalData.id}
              </p>
            </div>
            <div className="flex flex-col ">
              <p className="font-manrope font-semibold text-[16px]">
                Payment Method
              </p>
              <p className="text-[16px] font-manrope">
                {modalData.payment_method}
              </p>
            </div>{" "}
            <div className="flex flex-col ">
              <p className="font-manrope font-semibold text-[16px]">Status</p>
              <p
                className={` ${
                  modalData.status === "Cancelled"
                    ? " text-[#C50000]"
                    : modalData.status === "Pending"
                    ? " text-[#ffca1e]"
                    : modalData.status === "Completed"
                    ? " bg-[#5d9f65] "
                    : ""
                }`}
              >
                {modalData.status}
              </p>
            </div>
            <div className="flex flex-col ">
              <p className="font-manrope font-semibold text-[16px]">Price</p>
              <p className="text-[16px] font-manrope">
                ₦{" "}
                {Number(modalData?.total_price).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>{" "}
            <div className="flex flex-col ">
              <p className="font-manrope font-semibold text-[16px]">
                Number of Products
              </p>
              <p className="text-[16px] font-manrope">
                {modalData?.items?.length}
              </p>
            </div>{" "}
            <div className="flex flex-col ">
              <p className="font-manrope font-semibold text-[16px]">Date</p>
              <p className="text-[16px] font-manrope">
                {formatDate(modalData.created_at)}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setviewModal((prev) => !prev);
            }}
            className="w-full py-2 font-medium text-white mt-6 rounded-lg font-manrope bg-[#008A2F] "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
