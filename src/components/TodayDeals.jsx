import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { getProducts, productReset } from "../features/product/productSlice";

const TodayDeals = () => {
  const dispatch = useDispatch();
  const page_size = 16; // Increased page_size for better pagination example
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, products, totalProducts,count } = useSelector((state) => state.product);

  const totalPages = Math.ceil(count / page_size);

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(productReset());
      try {
        await dispatch(getProducts({ page_size: page_size, page: (currentPage) })).unwrap();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, [dispatch, currentPage, page_size]);

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

  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        <h1 className="my-4 font-[600] text-[28px]">OUR PRODUCTS</h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-10">
        {isLoading &&
          Array(12)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white flex flex-col gap-2 p-2 max-w-[280px] rounded-xl shadow-[0px_1px_7.2px_-2px_rgba(0,_0,_0,_0.25)]"
              >
                <Skeleton className="h-40" />
                <Skeleton count={1} className="h-10" />
              </div>
            ))}

        {products.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        ))}
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

export default TodayDeals;