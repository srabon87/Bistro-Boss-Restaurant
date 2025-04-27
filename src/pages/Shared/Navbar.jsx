import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
      Swal.fire({
        title: "User Logout Successful.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate('/')
  };
  const navOptions = (
    <>
      <li>
        <Link className="btn btn-outline btn-primary text-white font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="btn btn-outline btn-primary text-white font-bold" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="btn btn-outline btn-primary text-white font-bold" to="/order/salad">
          Order Food
        </Link>
      </li>
      <li>
        <Link className="btn btn-outline btn-primary text-white font-bold" to="/secret">
          Secret
        </Link>
      </li>

      {user ? (
        <>
        <span>{user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-outline btn-error text-white font-bold">
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link className="btn btn-outline btn-primary text-black font-extrabold" to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar font-extrabold opacity-35 fixed z-10 bg-gray-500 text-white">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu text-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to='/'>
            <p className="text-yellow-300 btn-ghost font-serif font-bold text-xl">
              Bistro Boss <br /> R e s t a u r e n t
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
