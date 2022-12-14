import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../images/company-logo.png";

const Header = () => {
  // Auth Context
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  // Logout function
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Dropdown part */}
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/faq" className="justify-between">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        {/* Site name */}
        <Link to="/courses" className="text-xl lg:flex ">
          <img src={logo} height={"50px"} width={"50px"} alt="" />
          <p className="text-2xl mt-3">
            <span className="text-green-800">71</span>
            {"  "}
            <span className="text-red-800">Tech</span>
            {"  "}
            <span className="text-green-800">Hub</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 font-medium">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <span className="mr-2">Light</span>
        <input type="checkbox" className="toggle mr-1" />
        <span className="mr-3">Dark</span>
        {user && user?.uid ? (
          <>
            <img
              src={user?.photoURL}
              alt=""
              style={{ height: "30px", marginRight: "10px" }}
              title={user?.displayName}
            />
            <Link className="btn mr-2" onClick={handleLogOut}>
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="btn mr-2">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
