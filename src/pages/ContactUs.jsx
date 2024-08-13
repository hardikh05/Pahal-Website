import React from "react";
import contact from "../assets/contact.png";
import ConForm from "../components/ConForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <div>
      <img src={contact} alt="" className="w-full h-[570px]" />
      <div className="contact-us-section mt-10 mr-10 flex justify-between p-10 mb-10">
        <div className="pl-48">
          <ul className="list-disc">
            <li className="font-bold pt-4">All General Queries</li>
            <div className="flex space-x-2 space-y-1 px-3 items-center">
              <IoIosMail className=" h-6 w-6 text-yellow1" />
              <span>[Email1]</span>
            </div>
            <div className="flex space-x-2 space-y-1 px-4 items-center">
              <FaPhoneAlt className="h-4 w-4 text-yellow1" />
              <span className="px-1">[Number1]</span>
            </div>

            <li className="font-bold pt-4">Domain Related Queries</li>
            <div className="flex space-x-2 space-y-1 px-3 items-center">
              <IoIosMail className=" h-6 w-6 text-yellow1" />
              <span>[Email2]</span>
            </div>
            <div className="flex space-x-2 space-y-1 px-4 items-center">
              <FaPhoneAlt className="h-4 w-4 text-yellow1" />
              <span className="px-1">[Number2]</span>
            </div>

            <li className="font-bold pt-4">Volunteering Related Queries</li>
            <div className="flex space-x-2 space-y-1 px-3 items-center">
              <IoIosMail className=" h-6 w-6 text-yellow1" />
              <span>[Email3]</span>
            </div>
            <div className="flex space-x-2 space-y-1 px-4 items-center">
              <FaPhoneAlt className="h-4 w-4 text-yellow1" />
              <span className="px-1">[Number3]</span>
            </div>
          </ul>
        </div>
        <div className="flex flex-col pr-48">
          <ConForm></ConForm>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
