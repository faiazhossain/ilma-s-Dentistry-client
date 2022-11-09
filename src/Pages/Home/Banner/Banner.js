import React from "react";
import image from "../../../images/smiling.jpg";
const Banner = () => {
  return (
    <div>
      {/* <div className=" carousel w-full">
        <div className="carousel-img">
          <img src={image} alt="" className="w-full " />
        </div>
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-5 top-1/2 lg:top-1/3 font-serif">
            <p className="text-sm md:text-lg lg:text-3xl text-white">
              Time To <br />
              <span className="text-2xl md:text-5xl lg:text-8xl">Smile!</span>
            </p>
            <p className="w-full md:w-1/2 lg:w-1/3 text-white">
              Ilma is a well-established dentist in the heart of Bangladesh
              providing excellent dentistry for the whole family. Our priority
              is making you feel comfortable and at ease in a safe and welcoming
              environment.
              </p>
              
              <button className="btn btn-outline btn-accent w-full md:w-1/2 lg:w-1/3 lg:mt-10">
              Our services
              </button>
              </div>
              </div>
            </div> */}
      <div data-theme="acid" className="my-12">
        <div className="card lg:card-side shadow-xl md:flex flex-col-reverse">
          <figure>
            <img src={image} alt="Album" />
          </figure>
          <div className="font-serif flex flex-col gap-10 p-4 ">
            <p className="text-sm md:text-lg lg:text-3xl">
              Time To <br />
              <span className="text-2xl md:text-5xl lg:text-8xl">Smile!</span>
            </p>
            <p className="">
              Ilma is a well-established dentist in the heart of Bangladesh
              providing excellent dentistry for the whole family. Our priority
              is making you feel comfortable and at ease in a safe and welcoming
              environment.
            </p>
            <button className="btn btn-outline w-full md:w-1/2 lg:w-1/3 lg:mt-10 lg:place-self-end">
              Our services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
