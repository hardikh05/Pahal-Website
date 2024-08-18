import React from "react";
import contact from "../assets/contact.png";
import ConForm from "../components/ConForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactUs = () => {
  document.title = "Pahal | Contact Us";
  return (
    <div className="w-full">
      <div className="relative text-default">
        <img
          src={contact}
          alt="college image"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[570px]"
        />
        {/* <div className="absolute inset-0 bg-yellow3 opacity-10"></div> */}
        <div className="absolute top-3 right-6 text-right text-white">
          <div className="flex flex-col items-end">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl py-4 font-main-head font-bold">
              CONTACT US
            </h1>
            {/* <div className="h-1 bg-default w-[100%] lg:w-[110%] ml-auto"></div> */}
          </div>
        </div>
      </div>
      <div className="contact-us-section w-full md:gap-40 justify-center items-center overflow-hidden flex-col-reverse md:flex-row mt-10 flex mb-10">
        <div className="items-left p-10 md:p-0 h-full w-full md:w-auto flex md:justify-center items-center">
          <ul className="h-full">
            <li className="font-bold pt-4">All General Queries</li>
            <div className="flex space-x-2 space-y-1 items-center px-3">
              <IoIosMail className="h-6 w-6 text-yellow1" />
              <span>[Email1]</span>
            </div>
            <div className="flex space-x-2 space-y-1 px-4 items-center">
              <FaPhoneAlt className="h-4 w-4 text-yellow1" />
              <span className="px-1">[Number1]</span>
            </div>

            <li className="font-bold pt-4">Domain Related Queries</li>
            <div className="flex space-x-2 space-y-1 px-3 items-center">
              <IoIosMail className="h-6 w-6 text-yellow1" />
              <span>[Email2]</span>
            </div>
            <div className="flex space-x-2 space-y-1 px-4 items-center">
              <FaPhoneAlt className="h-4 w-4 text-yellow1" />
              <span className="px-1">[Number2]</span>
            </div>

            <li className="font-bold pt-4">Volunteering Related Queries</li>
            <div className="flex space-x-2 space-y-1 px-3 items-center">
              <IoIosMail className="h-6 w-6 text-yellow1" />
              <span>[Email3]</span>
            </div>
            <div className="flex space-x-2 space-y-1 px-4 items-center">
              <FaPhoneAlt className="h-4 w-4 text-yellow1" />
              <span className="px-1">[Number3]</span>
            </div>
          </ul>
        </div>
        <div className="flex flex-col">
          <ConForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
