import React, { useEffect, useState } from "react";
import img1 from "../images/egg.png";
import icon1 from "../images/chevron-right.svg";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import Skeleton from "react-loading-skeleton";
import {
  getSingleProduct,
  productReset,
  getSearchProduct
} from "../features/product/productSlice";
import { postCart } from "../features/cart/cartSlice";


const GetProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate() 
  const { isLoading, product,products } = useSelector((state) => state.product);
  const [cat,setCat]  = useState('')
  const { cart } = useSelector((state) => state.cart);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await dispatch(getSingleProduct(id)).unwrap();
        
        if (fetchedProduct?.category) {
          // Dispatch the getSearchProduct action to search by category
          await dispatch(getSearchProduct({ name: '', search: fetchedProduct.category, page_size:20, page:1 })).unwrap();
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchProduct();
  }, [dispatch,id]);

  


  const addToCart = async () => {

    const body = {
      product: id,
      quantity: count,
    }
    try {
      await dispatch(postCart(body)).unwrap()
    } catch (error) {

    }
  }


  const buyNow = async () => {
    const body={
      product:id,
      quantity:count
    }
    try {
      await dispatch(postCart(body)).unwrap()
      navigate("/homepage/checkout")
    } catch (error) {
      
    }
  }
  const [count, setCount] = useState(1);

  if (isLoading) {
    return (
      <div className="lg:flex px-20 py-10   gap-4 justify-center ">
        <div className="flex flex-col lg:w-[50%] w-full">
          <div className="w-full bg-[#D9D9D9] h-[50vh] rounded-[10px] overflow-hidden ">
            {/* <img src={img1} className='h-full w-full' /> */}
            <Skeleton className="h-full w-full" />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="rounded-[10px] overflow-hidden">
              {/* <img src={img1} className='h-full' /> */}
              <Skeleton className="h-full " />
            </div>
            <div className="rounded-[10px] overflow-hidden">
              <Skeleton className="h-full " />
            </div>
            <div className="rounded-[10px] overflow-hidden">
              <Skeleton className="h-full " />
            </div>
            <div className="rounded-[10px] overflow-hidden">
              <Skeleton className="h-full " />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full h-full">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    );
  }


  const relatedProducts = products?.filter((item) => item.id !== product?.id);
  return (
    <div className="px-20 py-10 bg-[#F5F5F5] ">

      <div className="flex gap-x-4 mb-5">
        <button
          onClick={() => navigate("/homepage/")}
          className="text-[#101928] font-medium text-xs "
        >
          Home
        </button>
        <img src={icon1} alt="" className="object-contain" />
        <p className="text-[#005C2D] font-semibold text-xs cursor-pointer">
          Product
        </p>
        <img src={icon1} alt="" className="object-contain" />
        <p className="text-[#005C2D] font-semibold text-xs cursor-pointer">
          {product?.name}
        </p>
      </div>
      <div className="lg:flex   gap-4 justify-center ">
        <div className="flex flex-col lg:w-[50%] w-full">
          <div className="w-full bg-[#D9D9D9] lg:h-full rounded-[10px] overflow-hidden ">
            <img src={product?.image} className="h-full w-full" />
          </div>
          {/* <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="rounded-[10px] overflow-hidden">
              <img src={product?.image} className="h-full" />
            </div>
            <div className="rounded-[10px] overflow-hidden">
              <img src={product?.image} className="h-full" />
            </div>
            <div className="rounded-[10px] overflow-hidden">
              <img src={product?.image} className="h-full" />
            </div>
            <div className="rounded-[10px] overflow-hidden">
              <img src={product?.image} className="h-full" />
            </div>
          </div> */}
        </div>
        <div className="flex flex-col flex-1 w-full">
          <div className="lg:mb-16 mb-8">
            <h1 className="text-[30px] mb-3 font-[500] mt-3 lg:mt-0">
              {product?.name}
            </h1>
            <p className="text-[15px] mb-4">
              {product?.description}
              {/* It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. */}
              {/* {product.des} */}
            </p>
            <h1 className="text-[25px] mb-4 foont-[500]"> ₦{product?.price}</h1>
          </div>

          <div>
            <p className="mb-4 font-[500]">Quantity</p>
            <div className="mb-4">
              <div className="flex justify-between w-[30%] p-2 bg-[#fff] rounded-[30px] text-[20px]">
                <button
                  className={`${count === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                    } text-[20px] text-[#006C0B]`}
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <p className="text-[20px] text-[#006C0B]">{count}</p>
                <button
                  className="text-[20px] text-[#006C0B]"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex">
              <button className="bg-[#005C2D] text-white py-2 px-8 mr-2  rounded-[20px]" onClick={() => buyNow()}>
                BUY NOW
              </button>
              <button className="border-2 border-[#2A4F1A] rounded-[20px] py-2 px-8 text-[#2A4F1A]" onClick={() => addToCart()}>
                {" "}
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      {relatedProducts.length === 0 ? '' :(
         <div className="mt-24">
         <h1 className="font-[600] font-manrope text-[28px] mb-5">Similar Items You Might Like</h1>
         <div className="">
           <div className="flex overflow-x-scroll  flex-col lg:flex-row gap-2 lg:gap-4 no-scrollbar justify-between py-4">
             {relatedProducts.map((relate,index) => (
               <Item
               key={index}
                 name={relate.name}
                 price={relate.price}
                 image={relate.image}
                 id={relate.id}
               />
             ))}
           </div>
         </div>
       </div>
      )}
   
    </div>
  );
};

export default GetProduct;
