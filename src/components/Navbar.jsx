import React from "react";
import logo from "../assets/pahal logo 1.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  return (
    // navbar
    <div className="flex flex-col items-center w-full relative font-small-head">
      {/* header  */}
      <div className="bg-slate-50 w-full flex flex-wrap relative">
        <div className="w-[220px] flex items-center px-4 py-2 pl-20">
          <img src={logo} alt="pahal-logo" />
        </div>
        {/* items right */}
        <div className="flex space-x-4 justify-between absolute right-0 top-5 px-20">
          <div className="px-20 flex items-center">
            <div>
              <div className="flex space-x-2 px-10 items-center">
                <FaPhoneAlt className="h-4 w-4  text-yellow1" />
                <span>We are available at</span>
              </div>
              <span className="px-16">+91 9893286644</span>
            </div>
            <div>
              <div className="flex space-x-2 px-10 items-center">
                <IoIosMail className="h-6 w-6 text-yellow1" />
                <span>Email address</span>
              </div>
              <span className="px-12">pahal@iiitn.ac.in</span>
            </div>
          </div>

          <button className="btn">DONATE NOW</button>
        </div>
      </div>

      {/* nav links */}
      <nav className="py-4 px-36 nav w-full font-bold text-lg justify-between text-default">
        <ul className="flex flex-wrap text-white space-x-40 w-full justify-between font-small-head ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
