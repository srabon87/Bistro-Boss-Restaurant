import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import React from "react";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/Shared/ErrorPage";
import Secret from "../pages/Shared/Secret";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/Allusers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ContactUs from "../pages/Shared/ContactUs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },      
        {
          path: 'menu',
          element: <PrivateRoutes><Menu></Menu></PrivateRoutes>,
        },
        {
          path: '/order/:category',
          element: <Order></Order>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>,
        },
        {
          path: 'secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>,
        },
        {
          path: 'contact', 
          element: <ContactUs></ContactUs>,
        },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      // normal user routes
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
      {
        path: 'userHome',
        element: <UserHome></UserHome>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>,
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin only routes
      {
        path:'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>,
      },
      {
        path:'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`https://bistro-boss-server-xi-orpin.vercel.app/menu/${params.id}`),
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  },
]);
