import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import React from "react";
const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login');
  return (
    <div>
      { noHeaderFooter || <Navbar></Navbar>}
      <div className="w-9/12 mx-auto">
        <Outlet></Outlet>
      </div>
      { noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
