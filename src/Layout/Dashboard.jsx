import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaAd,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUtensils,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <Helmet>
        <title>Dashboard / Cart</title>
      </Helmet>
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-cyan-500">
        <ul className="menu p-8 gap-y-1.5">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/adminHome"
                >
                  {" "}
                  <FaHome></FaHome> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/addItems"
                >
                  {" "}
                  <FaUtensils></FaUtensils> ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/manageItems"
                >
                  {" "}
                  <FaList></FaList> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/bookings"
                >
                  {" "}
                  <FaBook></FaBook> MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/users"
                >
                  {" "}
                  <FaUsers></FaUsers> ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          {/* Shared navlinks */}
          <div className="divider"></div>
          <li>
            <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/">
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
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/contact"
            >
              {" "}
              <FaEnvelope></FaEnvelope> CONTACT
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
