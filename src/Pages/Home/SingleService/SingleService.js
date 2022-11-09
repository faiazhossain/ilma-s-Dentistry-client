import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleService = () => {
  const { img, price, description, title } = useLoaderData();
  return (
    <div>
      <div className="card md:grid grid-cols-2 flex flex-col">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="flex items-center">
            <p className="text-3xl text-primary font-mono font-bold">
              $ {price}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
