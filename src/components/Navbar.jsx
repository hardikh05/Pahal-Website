import React, { useState } from "react";
import logo from "../assets/pahal logo 1.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full relative font-small-head">
      {/* header */}
      <div className="bg-slate-50 w-full flex items-center justify-between py-2 px-6">
        <div className="w-[120px]">
          <img src={logo} alt="pahal-logo" />
        </div>

        {/* Phone and Email Section */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="h-4 w-4 text-yellow1" />
              <span>We are available at</span>
            </div>
            <span>+91 9893286644</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <IoIosMail className="h-6 w-6 text-yellow1" />
              <span>Email address</span>
            </div>
            <span>pahal@iiitn.ac.in</span>
          </div>
        </div>

        {/* Burger Menu for small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl text-yellow1" />
            ) : (
              <FaBars className="text-2xl text-yellow1" />
            )}
          </button>
        </div>
      </div>

      {/* Navbar Links for large screens */}
      <nav className="hidden md:flex py-4 px-[10vw] nav w-full font-bold text-lg justify-between text-default bg-slate-50">
        <ul className="flex flex-wrap text-white w-full justify-between font-small-head">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/">Events</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-yellow1 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <FaTimes className="text-2xl text-white cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="flex flex-col p-4">
          <ul className="text-white font-bold text-lg space-y-6">
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/aboutus" onClick={toggleMenu}>About Us</Link>
            </li>
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/" onClick={toggleMenu}>Events</Link>
            </li>
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/team" onClick={toggleMenu}>Team</Link>
            </li>
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
