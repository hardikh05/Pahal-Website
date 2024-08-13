import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import logo from "../assets/pahal logo 1.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" text-gray-800">
        <div className="bg-[#F2C918] h-[350px] w-full flex overflow-hidden">
          <div className="p-12 ml-6">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <div className="w-[135px] h-[2px] bg-black mt-1 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#link1" className="text-lg hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#link2" className="text-lg hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#link3" className="text-lg hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#link4" className="text-lg hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#link5" className="text-lg hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                  Team
                </a>
              </li>
              <li>
                <a href="#link5" className="text-lg hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-5 p-12">
            <h2 className="text-lg font-bold">Connect With Us: </h2>
            <div className="w-[185px] h-[2px] bg-black mt-1 mb-4"></div>
            <ul className="space-y-4  text-lg">
              <div className="flex">
                <li>
                  <Link className="flex justify-center items-center gap-3">
                    <FaInstagramSquare className="hover:animate-bounce text-2xl rounded-lg" />
                    <p className="hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                      Instagram
                    </p>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link className="flex justify-center items-center gap-3">
                    <FaLinkedin className="hover:animate-bounce text-2xl rounded-lg" />
                    <p className="hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                      LinkedIn
                    </p>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link className="flex justify-center items-center gap-3">
                    <FaTwitterSquare className="hover:animate-bounce text-2xl rounded-lg" />
                    <p className="hover:scale-125 hover:text-[#F83130] transition-all duration-300">
                      Twitter
                    </p>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="h-full w-[30%] flex items-center flex-col justify-end ">
            <div>
              <img
                className="hover:scale-150 transition-all duration-700 w-40"
                src={logo}
                alt="LOGO"
              />
            </div>
            <span className="mb-4 text-white">
              Copyright © 2024 Pahal IIITN All Rights Reserved.
            </span>
          </div>
          <div class="w-[32%] flex-col gap-3 flex items-center justify-center">
            <iframe
              className="hover:scale-125 transition-all hover:shadow-xl duration-700 border-slate-400 border-3 rounded-lg h-[60%] w-[60%]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14904.257577735123!2d79.026375!3d20.949929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur%20(IIITN)!5e0!3m2!1sen!2sin!4v1723369902147!5m2!1sen!2sin"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="font-bold text-gray-800 text-lg">
              <a
                href="https://maps.app.goo.gl/5T4LbAgmEgdzem4NA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Us Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
