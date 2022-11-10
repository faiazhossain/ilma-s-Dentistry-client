import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reviews from "../../Reviews/Reviews";

const SingleService = () => {
  useTitle("Review");
  // toast
  const notify = () =>
    toast.success("Review Added! 🎉", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const { user } = useContext(AuthContext);
  console.log(user);
  const { _id, img, price, description, title } = useLoaderData();

  // review adding function
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviews = form.review.value;
    const review = {
      service: _id,
      serviceName: title,
      reviews,
      userImg: user.photoURL,
      userName: user.displayName,
      userEmail: user.email,
      userId: user.uid,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          notify();
          form.reset();
        }
      })
      .catch((er) => console.error(er));
    fetch("http://localhost:5000/myreviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

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
      <div className="card md:grid grid-cols-2 flex flex-col">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="Album" />
            </PhotoView>
          </PhotoProvider>
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
      <Reviews></Reviews>
      <div className="w-full my-8 bg-pink-300 p-8">
        {user?.uid ? (
          <form
            onSubmit={handleReview}
            className=" flex flex-col items-center justify-center"
          >
            <h2 className="text-center text-2xl font-mono font-semibold mb-2">
              Add A Review
            </h2>
            <input
              type="text"
              name="review"
              placeholder="Type here"
              className="input input-bordered input-success w-full max-w-xs"
            />
            <button type="submit" className="btn btn-secondary mt-2">
              Submit
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-center text-2xl font-mono font-semibold mb-2">
              Sign in to Review this service!
            </h2>
            <Link to="/login">
              <h2 className="btn btn-secondary">Sign in</h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleService;
