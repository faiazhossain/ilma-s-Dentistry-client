import React from "react";
import image from "../../../images/smiling.jpg";
const Home = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image} alt="" className="w-full " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-1/3">
          <p className="text-sm md:text-lg lg:text-3xl text-white">
            Time To <br />
            <span className="text-2xl md:text-5xl lg:text-8xl">Smile!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
