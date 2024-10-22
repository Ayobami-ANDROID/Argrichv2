import React, { useEffect,useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import icon1 from "../images/chevron-right.svg";
import { useDispatch, useSelector } from "react-redux";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import deleteimg from "../images/delete.svg";
import CartProduct from "../components/CartProduct";
import { getCart,cartReset } from "../features/cart/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page_size = 6; // Increased page_size for better pagination example

  const [currentPage, setCurrentPage] = useState(1);
  const { cart,count } = useSelector((state) => state.cart);
  const totalPages = Math.ceil(count / page_size);
  

  useEffect(() => {
    const cartProduct = async () => {
      try {
        // cartReset()
         await dispatch(getCart({ page_size:page_size, page: (currentPage)})).unwrap();

        
      } catch (error) { }
    };

    cartProduct();
  }, []);

  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };



  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    // const totalPages = Math.ceil(5 / page_size);
    const visiblePages = 3; // Number of visible page numbers at once
    const pages = [];
    const middlePage = Math.ceil(visiblePages / 2);
    let startPage = Math.max(1, currentPage - middlePage + 1);
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    // Adjust start and end page numbers if current page is near the beginning or end
    if (currentPage <= middlePage) {
      startPage = 1;
      endPage = Math.min(totalPages, visiblePages);
    } else if (currentPage >= totalPages - middlePage + 1) {
      startPage = Math.max(1, totalPages - visiblePages + 1);
      endPage = totalPages;
    }



    for (let i = startPage; i <= endPage; i++) {
     
      pages.push(
        <button
          key={i}
          className={`mx-1 h-[30px] w-[30px]  rounded-full  ${i === currentPage ? "bg-[rgba(42,79,26,1)] text-[rgba(255,255,255,1)]" : "bg-white border-[1px] border-[rgba(42,79,26,1)]"
            }`}
          onClick={() => paginate(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item?.product?.price || 0) * (item?.quantity || 0);
  }, 0);



  return (
    <div className="px-10 bg-[#F5F5F5]  pt-10 pb-20 flex-1">
      <div className="flex gap-x-4">
        <button
          onClick={() => navigate("/homepage/")}
          className="text-[#101928] font-medium text-xs "
        >
          Home
        </button>
        <img src={icon1} alt="" className="object-contain" />
        <p className="text-[#005C2D] font-semibold text-xs cursor-pointer">
          My Cart
        </p>
      </div>

      <div className="lg:grid grid-cols-3">
        <div className="col-span-2 flex-c0l">
          <div className="w-full mt-6">
            <div className=" px-4 lg:max-w-full  border-[#E4E7EC] bg-white  border-[0.8px] py-4 pb-8 md:max-w-[747px] rounded-xl">
              <div className="flex gap-x-4 items-center  mb-4">
                <p className=" text-[#101928] text-2xl font-semibold">My Cart</p>
                <div className=" h-6 w-6 flex items-start justify-center bg-[#005C2D] rounded-full text-white">
                  {cart.length}
                </div>
              </div>
              <div className="divide-y-[0.8px] divide-[#C6C6C6] gap-y-4 flex flex-col">
                {" "}
                {cart.map((product, index) => (
                  <CartProduct key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full mt-6">
            <div className=" px-4 lg:max-w-full  border-[#E4E7EC] bg-white  border-[0.8px] py-4 md:max-w-[747px] rounded-xl">
              <div className="flex items-center justify-between ">
                {" "}
                <p className="text-[24px] font-semibold">Subtotal:</p>
                <p className="text-[#2A4F1A] text-[24px] font-semibold"> ₦{totalPrice !== undefined ? totalPrice.toLocaleString() : '0'}</p>
              </div>
              <div className="bg-[#C6C6C6] w-full h-[0.8px] "></div>

            </div>
          </div>
          <div className="flex justify-between mt-8">
             <div></div>
             {cart.length !== 0 ? (   <Link to="/homepage/checkout" className="bg-[#005C2D] text-white py-2 px-8 mr-2  rounded-[20px]">
              Checkout
            </Link>) : 'Nothing in Cart yet'}
         
          </div>
        </div>
      </div>



      <div className="flex justify-center items-center mt-8">
        {/* <button
          onClick={() => handlePageChange(currentPage)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-[#318000] text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button> */}
        <button
          className={`mr-2 ${currentPage === 1
            ? 'opacity-50 cursor-not-allowed bg-[#919EAB] h-[30px] w-[30px] border-2 border-[#919EAB] rounded-full'
            : 'cursor-pointer border-[1px]  h-[30px] w-[30px] rounded-full border-[rgba(42,79,26,1)]'
            }`}
          // onClick={() => onPageChange(currentPage)}
          onClick={() => handlePageChange(currentPage)}
          disabled={currentPage === 1}
        >
          <svg
            className="w-6 h-6 inline-block align-middle"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>

        </button>

        {renderPageNumbers()}

        {/* <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-[#318000] text-white rounded disabled:bg-gray-300"
        >
          Next
        </button> */}
        <button
          className={`ml-2 ${currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed bg-[#919EAB] border-2 h-[3opx] w-[30px] border-[#919EAB] rounded-full'
            : 'cursor-pointer  border-[1px] h-[30px] w-[30px] rounded-full border-[rgba(42,79,26,1)]'
            }`}
          onClick={() => handlePageChange(currentPage + 1)}
          // disabled={currentPage === totalPages}
          disabled={currentPage === totalPages}
        >

          <svg
            className="w-6 h-6 inline-block align-middle"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Cart;
