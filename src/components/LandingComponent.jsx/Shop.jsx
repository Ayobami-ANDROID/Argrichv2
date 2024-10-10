import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, productReset } from "../../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import LandingPageItem from "./LandingPageItem";

const Shop = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProduct = async () => {
      // dispatch(productReset());
      try {
        await dispatch(getProducts({ page_size: 10, page: 1 })).unwrap();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  // Slice the products array to get only the first 4 items
  const displayedProducts = products.slice(0, 4);

  return (
    <div className="my-32 ">
      <div className="mx-auto px-4 lg:px-20">
        <div className="text-start flex flex-col items-start gap-6 lg:gap-10">
          <p className="font-manrope font-semibold text-[24px] lg:text-[38px] text-[#1A420E]">
            Shop our Online Store
          </p>
          <p className="font-manrope font-medium text-[14px] leading-[19.12px] md:text-[20px] max-w-[574px] md:leading-[27.32px]">
            From farm-fresh eggs to tender meats and wholesome vegetables, we're
            committed to delivering the highest quality products to your table.
          </p>
          <Link
            to="/homepage/"
            className="text-white font-manrope font-semibold text-base rounded-lg bg-[#0F4400] px-[20px] py-[12px]"
          >
            Visit Store
          </Link>
        </div>
        <div className="mt-10 w-full">
          <div className="lg:flex gap-4 p-4 grid  md:grid-cols-3 justify-items-center overflow-hidden no-scrollbar">
            {isLoading ? (
              <p>Loading products...</p>
            ) : displayedProducts.length > 0 ? (
              displayedProducts.map((product, index) => (
                <LandingPageItem
                  key={product.id || index}
                  image={
                    product.image ||
                    "https://res.cloudinary.com/dpoxdw78e/image/upload/v1/media/products/Egg_jfbp3t"
                  }
                  name={product.name || "Product Name"}
                  price={product.price || "0"}
                />
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
