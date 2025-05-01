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
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  }
]);
