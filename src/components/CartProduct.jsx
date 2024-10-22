import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import deleteimg from "../images/delete.svg";
import { deleteCart, getCart, putCart } from "../features/cart/cartSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { cart,count } = useSelector((state) => state.cart);
  const [counts, setCounts] = useState(product?.quantity);
  const page_size = 6; 
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(count / page_size);

  const deleteItem = async (id) => {
    try {
      await dispatch(deleteCart(id)).unwrap();
      await dispatch(getCart({ page_size:page_size, page: (currentPage)})).unwrap();
    } catch (error) {
     
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
        toast.error(error?.response?.data?.detail)
        window.location.replace('/auth/login')
      }
      else {
        toast.error(error?.response?.data?.detail || 'An error Occured')
      }
    }
  };

  const updateCartItem = async (newQuantity) => {
    try {
      await dispatch(putCart({id: product.product.id, quantity: newQuantity })).unwrap();
      await dispatch(getCart({ page_size:page_size, page: (currentPage)})).unwrap();
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const handleIncrement = () => {
    const newCount = counts + 1;
    setCounts(newCount);
    updateCartItem(newCount);
  };

  const handleDecrement = () => {
    const newCount = Math.max(count - 1, 1);
    setCount(newCount);
    updateCartItem(newCount);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between gap-x-10 w-full mt-8 lg:mt-4 ">
        <div className="flex gap-x-3 w-full flex-col lg:flex-row">
          <div className="bg-[#D9D9D9] rounded-[5px] h-[136px] w-full lg:h-auto lg:w-[136px] overflow-hidden">
            <img className="w-full h-full object-cover" src={product?.product?.image} alt={product?.product?.name} />
          </div>
          <div className="flex flex-col gap-2 text-start w-full">
            <p className="font-semibold text-2xl">{product?.product?.name}</p>
            <p className="text-[#878787] font-normal text-base w-full">
              {product?.product?.description}
            </p>
            <div className="rounded-[40px] px-4 h-[48px] w-[136px] self-end lg:self-auto my-4 lg:my-0 flex items-center justify-between gap-x-2 border-[#F0F2F5] border bg-[#F9FAFB]">
              <button
                className={`${counts === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} text-[20px] text-[#006C0B]`}
                disabled={counts === 1}
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="text-[#006C0B] font-semibold text-[20px]">
                {counts}
              </span>
              <button
                className="text-[20px] text-[#006C0B]"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:w-fit justify-between lg:flex-col lg:items-end lg:h-[136px] flex-1">

          <p className="text-2xl font-semibold">₦{product?.product?.price === undefined ? '0' : product?.product?.price.toLocaleString()}</p>
          <button className="lg:self-end" onClick={() => deleteItem(product?.product?.id)}>
            <img src={deleteimg} alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;