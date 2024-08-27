import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-screen-xl mx-auto px-10 ">
        <div className="text-center">
          <Link to="/" className="inline-block mx-auto py-5 ">
            <img src={logo} alt="logo" className="max-w-24" />
          </Link>
        </div>
        <div className="border-t border-t-slate-200 border-b border-b-slate-200">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
