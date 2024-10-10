import React from "react";
import Carousel from "./Caurosel";
import Categories from "./Categories";
import TodayDeals from "./TodayDeals";


const HomePage = () => {
  return (
    <div className="min-h-screen">
      {" "}
      <Carousel />
      <div className="px-10">
        {/* <Categories/> */}
        {/* <TopSelling/> */}
        <TodayDeals/>
      </div>
    </div>
  );
};

export default HomePage;
