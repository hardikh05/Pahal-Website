import React from "react";
import contact from "../assets/contact.png";
import ConForm from "../components/ConForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactUs = () => {
    return (
        <div className="w-screen min-h-screen">
            <img src={contact} alt="" className="w-full md:h-[570px] h-auto" />
            <div className="contact-us-section w-full bg-red-500 overflow-hidden gap-8 flex-col-reverse md:flex-row mt-10 mr-10 flex justify-center items-center p-10 mb-10">
                <div className=" bg-emerald-700 h-full w-full md:w-auto flex justify-center items-center">
                    <ul className=" list-decimal h-full">
                        <li className="font-bold pt-4">
                            All General Queries
                            <div className="flex space-x-2 space-y-1 px-3 items-center">
                                <IoIosMail className=" h-6 w-6 text-yellow1" />
                                <span>[Email1]</span>
                            </div>
                            <div className="flex space-x-2 space-y-1 px-4 items-center">
                                <FaPhoneAlt className="h-4 w-4 text-yellow1" />
                                <span className="px-1">[Number1]</span>
                            </div>
                        </li>
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
                <div className="flex flex-col">
                    <ConForm></ConForm>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
