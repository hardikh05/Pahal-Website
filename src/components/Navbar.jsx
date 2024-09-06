import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/pahal logo 1.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(localStorage.getItem('current') || "home"); // Initialize from localStorage
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Update local storage whenever current state changes
  useEffect(() => {
    localStorage.setItem('current', current);
  }, [current]);

  return (
    <div className="flex flex-col w-full relative font-small-head">
      {/* header */}
      <div className="bg-slate-50 w-full flex items-center justify-between py-2 px-6">
        <div className="w-[120px] hover:scale-110 duration-300 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="pahal-logo" />
          </Link>
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
      <nav className="hidden md:flex py-4 px-[10vw] nav w-full font-[500] text-lg justify-between text-default bg-slate-50">
        <ul className="flex flex-wrap text-white w-full justify-between items-center font-small-head uppercase">
          <li className={`${current === "home" ? "bg-white text-yellow-500 px-4 py-2 rounded-md duration-500" : "rounded-md hover:scale-110 duration-500"}`}>
            <Link to="/" onClick={() => setCurrent("home")}>Home</Link>
          </li>
          <li className={`${current === "aboutus" ? "bg-white text-yellow-500 px-4 py-2 rounded-md duration-500" : "rounded-md hover:scale-110 duration-500"}`}>
            <Link to="/aboutus" onClick={() => setCurrent("aboutus")}>About Us</Link>
          </li>
          <li className={`${current === "events" ? "bg-white text-yellow-500 px-4 py-2 rounded-md duration-500" : "rounded-md hover:scale-110 duration-500"}`}>
            <Link to="/event" onClick={() => setCurrent("events")}>Events</Link>
          </li>
          <li className={`${current === "team" ? "bg-white text-yellow-500 px-4 py-2 rounded-md duration-500" : "rounded-md hover:scale-110 duration-500"}`}>
            <Link to="/team" onClick={() => setCurrent("team")}>Team</Link>
          </li>
          <li className={`${current === "contact" ? "bg-white text-yellow-500 px-4 py-2 rounded-md duration-500" : "rounded-md hover:scale-110 duration-500"}`}>
            <Link to="/contact" onClick={() => setCurrent("contact")}>Contact Us</Link>
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
              <Link to="/" onClick={() => { toggleMenu(); setCurrent("home"); }}>Home</Link>
            </li>
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/aboutus" onClick={() => { toggleMenu(); setCurrent("aboutus"); }}>About Us</Link>
            </li>
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/" onClick={() => { toggleMenu(); setCurrent("events"); }}>Events</Link>
            </li>
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/team" onClick={() => { toggleMenu(); setCurrent("team"); }}>Team</Link>
            </li>
            <li className="border-b border-yellow-200 pb-2 ml-4">
              <Link to="/contact" onClick={() => { toggleMenu(); setCurrent("contact"); }}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
