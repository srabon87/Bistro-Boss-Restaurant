import React from "react";
import { Helmet } from "react-helmet-async";
import { FaAd, FaHome, FaList, FaSearch } from "react-icons/fa";
import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <Helmet>
        <title>Dashboard / Cart</title>
      </Helmet>
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-cyan-500">
        <ul className="menu p-8 gap-y-1.5">
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/dashboard/userHome"
            >
              {" "}
              <FaHome></FaHome> USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/dashboard/reservation"
            >
              {" "}
              <FaCalendar></FaCalendar>
              RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/dashboard/cart"
            >
              {" "}
              <FaCartShopping></FaCartShopping> MY CART ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/dashboard/review"
            >
              {" "}
              <FaAd></FaAd>ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/dashboard/bookings"
            >
              {" "}
              <FaList></FaList> MY BOOKINGS
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/"
            >
              {" "}
              <FaHome></FaHome> HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/order/salad"
            >
              {" "}
              <FaSearch></FaSearch> MENU
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-14">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
