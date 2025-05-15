// import React from "react";
// import { Helmet } from "react-helmet-async";
// import {
//   FaAd,
//   FaEnvelope,
//   FaHome,
//   FaList,
//   FaSearch,
//   FaUtensils,
//   FaUsers,
//   FaBook,
// } from "react-icons/fa";
// import { FaCalendar, FaCartShopping } from "react-icons/fa6";
// import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

// const Dashboard = () => {
//   const [cart] = useCart();

//   //TODO: get isAdmin value from the database
//   const [isAdmin] = useAdmin();

//   return (
//     <div className="flex">
//       <Helmet>
//         <title>Dashboard / Cart</title>
//       </Helmet>
//       {/* Dashboard side bar */}
//       <div className="w-64 min-h-screen bg-cyan-500">
//         <ul className="menu p-8 gap-y-1.5">
//           {isAdmin ? (
//             <>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/adminHome"
//                 >
//                   {" "}
//                   <FaHome></FaHome> ADMIN HOME
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/addItems"
//                 >
//                   {" "}
//                   <FaUtensils></FaUtensils> ADD ITEMS
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/manageItems"
//                 >
//                   {" "}
//                   <FaList></FaList> MANAGE ITEMS
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/bookings"
//                 >
//                   {" "}
//                   <FaBook></FaBook> MANAGE BOOKINGS
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/users"
//                 >
//                   {" "}
//                   <FaUsers></FaUsers> ALL USERS
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/userHome"
//                 >
//                   {" "}
//                   <FaHome></FaHome> USER HOME
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/reservation"
//                 >
//                   {" "}
//                   <FaCalendar></FaCalendar>
//                   RESERVATION
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/cart"
//                 >
//                   {" "}
//                   <FaCartShopping></FaCartShopping> MY CART ({cart.length})
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/review"
//                 >
//                   {" "}
//                   <FaAd></FaAd>ADD REVIEW
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className="font-bold hover:bg-sky-600 w-full p-4"
//                   to="/dashboard/bookings"
//                 >
//                   {" "}
//                   <FaList></FaList> MY BOOKINGS
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {/* Shared navlinks */}
//           <div className="divider"></div>
//           <li>
//             <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/">
//               {" "}
//               <FaHome></FaHome> HOME
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="font-bold hover:bg-sky-600 w-full p-4"
//               to="/order/salad"
//             >
//               {" "}
//               <FaSearch></FaSearch> MENU
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="font-bold hover:bg-sky-600 w-full p-4"
//               to="/contact"
//             >
//               {" "}
//               <FaEnvelope></FaEnvelope> CONTACT
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       {/* dashboard content */}
//       <div className="flex-1 p-14">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import {
//   FaAd,
//   FaEnvelope,
//   FaHome,
//   FaList,
//   FaSearch,
//   FaUtensils,
//   FaUsers,
//   FaBook,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { FaCalendar, FaCartShopping } from "react-icons/fa6";
// import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

// const Dashboard = () => {
//   const [cart] = useCart();
//   const [isAdmin] = useAdmin();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen">
//       <Helmet>
//         <title>Dashboard</title>
//       </Helmet>

//       {/* Mobile Sidebar Toggle Button */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 text-white bg-cyan-600 p-2 rounded"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed z-40 top-0 left-0 h-full w-64 bg-cyan-500 transition-transform duration-300 ease-in-out 
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}
//       >
//         <ul className="menu p-8 gap-y-1.5">
//           {isAdmin ? (
//             <>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/adminHome">
//                   <FaHome /> ADMIN HOME
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/addItems">
//                   <FaUtensils /> ADD ITEMS
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/manageItems">
//                   <FaList /> MANAGE ITEMS
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/bookings">
//                   <FaBook /> MANAGE BOOKINGS
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/users">
//                   <FaUsers /> ALL USERS
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/userHome">
//                   <FaHome /> USER HOME
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/reservation">
//                   <FaCalendar /> RESERVATION
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/cart">
//                   <FaCartShopping /> MY CART ({cart.length})
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/review">
//                   <FaAd /> ADD REVIEW
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/bookings">
//                   <FaList /> MY BOOKINGS
//                 </NavLink>
//               </li>
//             </>
//           )}
//           <div className="divider"></div>
//           <li>
//             <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/">
//               <FaHome /> HOME
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/order/salad">
//               <FaSearch /> MENU
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/contact">
//               <FaEnvelope /> CONTACT
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-4 md:p-14 overflow-x-auto">
//         <Outlet />
//       </div>

//       {/* Optional overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;




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
import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

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
        className={`w-64 h-screen bg-cyan-500 fixed z-40 top-0 left-0 transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:relative`}
      >
        <ul className="menu p-8 gap-y-1.5">
          {isAdmin ? (
            <>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/adminHome">
                  <FaHome /> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/addItems">
                  <FaUtensils /> ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/manageItems">
                  <FaList /> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/bookings">
                  <FaBook /> MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/users">
                  <FaUsers /> ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/userHome">
                  <FaHome /> USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/reservation">
                  <FaCalendar /> RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/cart">
                  <FaCartShopping /> MY CART ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/review">
                  <FaAd /> ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/dashboard/bookings">
                  <FaList /> MY BOOKINGS
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
            <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/order/salad">
              <FaSearch /> MENU
            </NavLink>
          </li>
          <li>
            <NavLink className="font-bold hover:bg-sky-600 w-full p-4" to="/contact">
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
