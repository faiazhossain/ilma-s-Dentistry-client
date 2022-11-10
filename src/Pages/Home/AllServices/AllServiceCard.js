import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
const AllServiceCard = ({ allService }) => {
  const { _id, title, img, price, description } = allService;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="w-full h-44">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 100
              ? description.substr(0, 100) + " ..."
              : description}
          </p>
          <div className="card-actions justify-between items-center">
            <h2 className="text-2xl text-pink-500">$ {price}</h2>
            <Link to={`/allServices/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
