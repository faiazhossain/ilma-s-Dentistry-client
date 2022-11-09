import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div data-theme="dracula" className="hero min-h-screen ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl">
          <form onSubmit={handleRegister} className="card-body bg-base-800">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="your full name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoURL"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </Link>
              </label>

              <div className="form-control mt-6">
                <button className="btn submit btn-primary" type="submit">
                  Register
                </button>
              </div>
            </div>
            {/* <p className="text-red-500">{error}</p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
