import React, { useState } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { MdOutlineHistoryEdu } from "react-icons/md";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-cyan-600 p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-72 max-h-full bg-cyan-500 fixed z-40 top-0 left-0 transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:relative`}
      >
        <ul className="menu p-8 gap-y-1.5">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/adminHome"
                >
                  <FaHome /> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/addItems"
                >
                  <FaUtensils /> ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/manageItems"
                >
                  <FaList /> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/bookings"
                >
                  <FaBook /> MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/users"
                >
                  <FaUsers /> ALL USERS
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
                  <FaHome /> USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/history"
                >
                  <FaList /> NOT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/cart"
                >
                  <FaCartShopping /> MY CART ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/review"
                >
                  <FaAd /> ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-bold hover:bg-sky-600 w-full p-4"
                  to="/dashboard/paymentHistory"
                >
                  <MdOutlineHistoryEdu /> REAL PAYMENT HISTORY
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/">
              <FaHome /> HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/order/salad"
            >
              <FaSearch /> MENU
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold hover:bg-sky-600 w-full p-4"
              to="/contact"
            >
              <FaEnvelope /> CONTACT
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-14 overflow-x-auto">
        <Outlet />
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
