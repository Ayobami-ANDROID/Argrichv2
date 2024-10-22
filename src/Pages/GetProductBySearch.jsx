import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSearchProduct } from '../features/product/productSlice';
import Skeleton from "react-loading-skeleton";
import { useParams, useNavigate, Link } from "react-router-dom";
import Item from '../components/Item';
import icon1 from "../images/chevron-right.svg";
import searchImage from "../images/search window.png"


const GetProductBySearch = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const page_size = 6; // Increased page_size for better pagination example

    const [currentPage, setCurrentPage] = useState(1);
    const { isLoading, products,count } = useSelector((state) => state.product);
    let { searchQuery } = useParams();
    const totalPages = Math.ceil(count / page_size);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                await dispatch(getSearchProduct({ name: searchQuery, search: '',page_size:page_size, page: (currentPage) })).unwrap();
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProduct();
    }, [dispatch, searchQuery,page_size,currentPage]);

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
        <div className='px-10 py-4 min-h-screen'>

            <div className="flex gap-x-4">
                <button
                    onClick={() => navigate("/homepage/")}
                    className="text-[#101928] font-medium text-xs "
                >
                    Home
                </button>
                <img src={icon1} alt="" className="object-contain" />
                <p className="text-[#005C2D] font-semibold text-xs cursor-pointer">
                    {searchQuery}
                </p>
            </div>
            <div className="my-8">
                <div className="flex items-center justify-between">
                    {" "}
                    <h1 className="my-4 font-[600] text-[28px]">{searchQuery}</h1>
                    {/* <h3 className="text-[#318000] text-[20px] font-medium cursor-pointer hover:underline  ">
          See All
        </h3> */}
                </div>

                <div >
                    {isLoading === true ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-2 gap-y-10"> {
                            Array(52)
                                .fill(0)
                                .map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white flex flex-col gap-2  p-2 max-w-[280px] rounded-xl shadow-[0px_1px_7.2px_-2px_rgba(0,_0,_0,_0.25)] "
                                        >
                                            <Skeleton className="h-40" />
                                            <Skeleton count={1} className="h-10" />
                                        </div>
                                    );
                                })}
                        </div>
                    ) : (
                        <>
                            {products.length === 0 ? (
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='flex flex-col items-center justify-center '>
                                        <img src={searchImage}></img>
                                        <h1 className='font-[600] mb-4'>There are no results for " {searchQuery} "</h1>
                                        <ul className='flex flex-col items-center'>
                                            <li>- Check your spelling for typing errors</li>
                                            <li>- Try searching with short and simple keywords</li>
                                            <li>- Try searching more general terms(related to Agriculture) - you can then filter the search results</li>
                                        </ul>
                                        <Link to="/" className='bg-[#005C2D] text-[#FFFFFF] font-manrope rounded-[5px] px-8 py-4 mt-4'>Go To HomePage</Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-2 gap-y-10" >
                                    {products.map((item, index) => {
                                        return (
                                            <Item
                                                key={index}
                                                name={item.name}
                                                price={item.price}
                                                image={item.image}
                                                id={item.id}
                                            />
                                        );
                                    })}
                                </div>
                            )}
                        </>
                    )



                    }




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

    )
}

export default GetProductBySearch