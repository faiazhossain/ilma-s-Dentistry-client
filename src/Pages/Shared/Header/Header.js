import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../images/logo.png";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allServices">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user?.uid ? (
        <div
          className="tooltip tooltip-left tooltip-secondary flex flex-col sm:flex-row gap-4"
          data-tip={user?.displayName}
        >
          <ul className="lg:flex justify-center items-center ">
            <li>
              <Link to="/">My Reviews</Link>
            </li>
            <li>
              <Link to="/blog">Add Service</Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="navbar bg-pink-700 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-pink-400 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>

        {/* logo */}

        <Link to="/">
          <img className="w-20 " src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <div>
          <p className="mr-4 p-2 rounded-xl ">
            {user?.uid ? (
              <div
                className="tooltip tooltip-left tooltip-secondary flex flex-col sm:flex-row gap-4"
                data-tip={user?.displayName}
              >
                {/* <ul className="flex justify-center items-center ">
                  <li>
                    <Link to="/">My Reviews</Link>
                  </li>
                  <li className="ml-4">
                    <Link to="/blog">Add Service</Link>
                  </li>
                </ul> */}
                <span className="inline">
                  {user?.photoURL ? (
                    <img
                      className="w-10 rounded-full"
                      alt=""
                      src={user.photoURL}
                    ></img>
                  ) : (
                    <FaUser></FaUser>
                  )}
                </span>
                <Link
                  to=""
                  onClick={handleLogOut}
                  className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md"
                >
                  Log out
                </Link>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-md"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-md ml-4"
                >
                  Register
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
