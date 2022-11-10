import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const { _id } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const url = `https://ilmas-dentistry-server.vercel.app/reviews?service=${_id}`;

  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this?");
    if (proceed) {
      fetch(`https://ilmas-dentistry-server.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      notify();
      var delayInMilliseconds = 1500; //1 second

      setTimeout(function () {
        window.location.reload(false);
      }, delayInMilliseconds);
    }
  };
  const handleEdit = (_id) => {};

  // toast
  const notify = () =>
    toast.success("Deleted successfully! 🎉", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {reviews.length === 0 ? (
        <h2 className="text-center text-5xl my-4 bg-secondary p-20">
          No Review were added!
        </h2>
      ) : (
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
                  handleEdit={handleEdit}
                ></SingleReview>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Reviews;
