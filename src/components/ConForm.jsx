import React from "react";

const ConForm = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className=" p-6 bg-white border border-gray-300 rounded-lg shadow-lg ml-5">
                    <h2 className="text-2xl font-bold mb-2">
                        <span className="text-black">HELP </span>
                        <span className="text-red-600">DESK</span>
                    </h2>
                    <div className="w-[200px] h-[2px] bg-black mt-1 mb-2"></div>

                    <div className="w-[80%]">For any grievance, suggestions or queries kindly write to us...</div>
                    <div className="w-100 h-[1px] bg-black mt-2 mb-2"></div>
                    <form id="helpDeskForm">
                        <div className="mt-3 mb-4">
                            <label for="name" className="block text-sm font-medium text-gray-700">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label for="email" className="block text-sm font-medium text-gray-700">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label for="phone" className="block text-sm font-medium text-gray-700">
                                Phone:
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="tel"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label for="issue" className="block text-sm font-medium text-gray-700">
                                Issue:
                            </label>
                            <textarea
                                id="issue"
                                name="issue"
                                required
                                className="mt-1 block w-full h-[100px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="w-32 h-10 font-bold px-4 bg-brand-gradient bg-gradient-to-r from-[#F5E500] to-[#F2A800] text-white rounded-full hover:from-yellow-400 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 hover:scale-110"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConForm;
