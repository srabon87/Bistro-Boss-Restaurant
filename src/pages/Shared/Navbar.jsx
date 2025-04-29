import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "User Logout Successful.",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/order/salad">Order Food</Link></li>
      <li><Link to="/secret">Secret</Link></li>
    </>
  );

  return (
    <div className="fixed z-10 w-full bg-gray-800 opacity-75 text-white">
      <div className="navbar container mx-auto">
        
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile view - Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
            >
              {navOptions}
              {user ? (
                <li>
                  <div className="flex items-center gap-2 p-2">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="User Profile"
                        className="w-8 h-8 rounded-full border-2 border-yellow-400"
                      />
                    ) : (
                      <img
                        src="https://i.ibb.co/2kRrY1v/default-avatar.png"
                        alt="Default Avatar"
                        className="w-8 h-8 rounded-full border-2 border-yellow-400"
                      />
                    )}
                    <span className="text-sm">{user.displayName}</span>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm btn-error ml-2"
                    >
                      Logout
                    </button>
                  </div>
                </li>
              ) : (
                <li>
                  <Link className="btn btn-primary text-white" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* Logo */}
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-yellow-300"
          >
            Bistro Boss <br /> R e s t a u r a n t
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end hidden lg:flex gap-3 items-center">
          {user ? (
            <>
              {/* Profile Picture with Tooltip */}
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border-2 border-yellow-400"
                  />
                ) : (
                  <img
                    src="https://i.ibb.co/2kRrY1v/default-avatar.png"
                    alt="Default Avatar"
                    className="w-10 h-10 rounded-full border-2 border-yellow-400"
                  />
                )}
              </div>
              <button onClick={handleLogOut} className="btn btn-sm btn-error">
                Logout
              </button>
            </>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;

