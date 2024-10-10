// Carousel.js
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "../images/cauro1.png";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 2000,
          pagination: true,
          arrows: true,
        }}
      >
        <SplideSlide>
          <img src={img1} alt="Slide 1" />
        </SplideSlide>
        <SplideSlide>
          <img
           src={img1}
            alt="Slide 2"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
