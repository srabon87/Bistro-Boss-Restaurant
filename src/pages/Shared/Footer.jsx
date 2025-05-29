import React from "react";
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className=" bg-slate-800">
      <footer className="w-10/12 mx-auto footer text-white p-10 flex justify-around">
        <aside>
          <img className="w-[100px]" src={logo} alt="" />
          <p>
            Bistro Boss Resturant Ltd.
            <br />
            Providing reliable tech since 1992
            <br />
            Gmail: bistroboss@gmail.com
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-slate-800 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bistro Boss Resturant Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
