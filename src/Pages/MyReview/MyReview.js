import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MySingleReview from "./MySingleReview";

const MyReview = () => {
  const [myReview, setMyReview] = useState([]);

  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const url = `http://localhost:5000/reviews?userEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyReview(data));
  }, [loading]);
  return (
    <div>
      <div className="overflow-x-auto w-full my-20">
        <h2 className="text-3xl text-center py-4 font-bold">All Reviews</h2>
        <table data-theme="retro" className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <h2>Total Reviews: {myReview.length}</h2>
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Reviews</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myReview.map((review) => (
              <MySingleReview key={review._id} review={review}></MySingleReview>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
