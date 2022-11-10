import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import SingleReview from "./SingleReview";

const Reviews = () => {
  const { _id } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const url = `http://localhost:5000/reviews?service=${_id}`;

  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      window.location.reload(false);
    }
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="overflow-x-auto w-full my-20">
      <h2 className="text-3xl text-center py-4 font-bold">All Reviews</h2>
      <table data-theme="retro" className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <h2>Total Reviews: {reviews.length}</h2>
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Reviews</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <SingleReview
              key={review._id}
              review={review}
              handleDelete={handleDelete}
            ></SingleReview>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
