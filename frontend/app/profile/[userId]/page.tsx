import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone, MdEdit, MdMessage } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Profile() {
    return (
            <div className="min-h-screen bg-neutral-900 bg-cover">
            {/* Top Background */}
            <div className="w-full h-1/2 relative bg-cover bg-center">
                <img
                    src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
                    alt="Top Banner"
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Main Profile Card */}
            <div className="w-full sm:w-2/3 text-center relative z-10 m-auto mt-[-90px] bg-green-800 rounded-lg shadow-lg">
                <div className="py-8 px-4 sm:px-8">
                    {/* Card Head */}
                    <div className="flex flex-col sm:flex-row items-end justify-center sm:justify-between mt-[-155px] pb-5">
                        <div className="w-24 sm:w-1/3"></div>
                        <div className="w-48 sm:w-1/3">
                            <img
                                src="https://avatars.githubusercontent.com/u/84240367?v=4"
                                className="w-[190px] m-auto rounded-full border-4 border-black"
                                alt="Profile"
                            />
                        </div>
                        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end space-x-2">
                            <button className="flex items-center bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800 transition duration-300" aria-label="Edit Profile">
                                <MdEdit className="mr-2" />
                                Edit Profile
                            </button>
                            <button className="flex items-center bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition duration-300" aria-label="Message">
                                <MdMessage className="mr-2" />
                                Message
                            </button>
                        </div>
                    </div>
                    
                    {/* User Info */}
                    <div className="w-full text-center">
                        <h1 className="text-2xl font-semibold text-white">Mathias Mendoza</h1>
                        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 pt-4 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <IoLocationSharp className="text-xl" />
                                <p>Vancouver, Canada</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdEmail className="text-xl" />
                                <p>mathias@example.com</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdPhone className="text-xl" />
                                <p>+1 234 567 890</p>
                            </div>
                        </div>
                        
                        {/* Additional User Info */}
                        <div className="mt-4">
                            <p className="text-gray-300">Software Engineer at Tech Company</p>
                            <p className="text-gray-300">Passionate about creating impactful software solutions.</p>
                        </div>

                        {/* Social Media Links */}
                        <div className="mt-4 flex justify-center space-x-4 text-gray-300">
                            <a href="https://linkedin.com/in/mathias" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="https://twitter.com/mathias" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="https://github.com/mathias" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
