import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BsCart3 } from "react-icons/bs";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
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
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order/salad">ORDER FOOD</Link>
      </li>
      {/* <li>
          <Link to="/secret">SECRET</Link>
        </li> */}
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">DASHBOARD</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">DASHBOARD</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <button className="flex items-center btn btn-outline btn-success">
            <BsCart3 className="mr-2"></BsCart3>{" "}
            <div className="badge badge-error font-bold badge-outline">
              +{cart.length}
            </div>
          </button>
        </Link>
      </li>
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
                    {/* <span className="text-sm">{user.displayName}</span> */}
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm btn-error ml-2"
                    >
                      LOGOUT
                    </button>
                  </div>
                </li>
              ) : (
                <li>
                  <Link className="btn btn-primary text-white" to="/login">
                    LOGIN
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
            BISTRO BOSS <br /> R E S T A U R A N T
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end hidden lg:flex gap-3 items-center">
          {user ? (
            <>
              {/* Profile Picture with Tooltip */}
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
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
                LOGOUT
              </button>
            </>
          ) : (
            <Link className="btn btn-primary" to="/login">
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
