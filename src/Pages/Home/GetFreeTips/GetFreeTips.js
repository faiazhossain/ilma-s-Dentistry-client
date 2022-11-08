import React from "react";
import doctor from "../../../images/doctor.webp";

// This is section 1
const GetFreeTips = () => {
  return (
    <div data-theme="acid" className="my-12">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Get a free treatment!</h2>
          <h2>
            Mail us your problem. We will get in touch with you as soon as
            possible!
          </h2>
          <div className="md:flex">
            <input
              className="bg-slate-200 lg:p-4"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="md:ml-2 bg-slate-200 lg:p-4"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="bg-slate-200 lg:p-4"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="write your problem here!"
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
        <figure>
          <img src={doctor} alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default GetFreeTips;
