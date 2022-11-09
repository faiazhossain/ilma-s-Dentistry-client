import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, description } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="w-full h-44">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 200
              ? description.substr(0, 200) + " ..."
              : description}
          </p>
          <div className="card-actions justify-between items-center">
            <h2 className="text-2xl text-pink-500">$ {price}</h2>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
