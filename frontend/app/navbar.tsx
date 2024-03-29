import React, { ReactElement } from 'react';
import logo from './assets/logo.png';
import Image from 'next/image';
import Link from "next/link"

// icons
import { BsHouseFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa6";


function Navbar() {

  interface NavLink {
    link: string;
    icon: ReactElement;
  }
  
  interface NavLinks {
    [key: string]: NavLink;
  }

  const navLinks: NavLinks = {
    Home: {
      link: String('/home'),
      icon: <BsHouseFill />,
    },
    Login: {
      link: String('/login'),
      icon: <RiLoginBoxFill />,
    },
    Register: {
      link: String('/register'),
      icon: <FaUserPlus />,
    },
    About: {
      link: String('/about'),
      icon: <BsFillInfoCircleFill />,
    },
    Profile: {
      link: String('/profile/123'),
      icon: <FaUserCircle />,
    },
  };

  return (
    <nav className="bg-neutral-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-1">
        <a className="flex items-center">
          <Image src={logo} className="h-8" alt="Flowbite Logo" width={50}/>
          <span className="self-center text-2xl font-semibold italic whitespace-nowrap text-white">ElectriSearch</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-black bg-amber-500 hover:bg-indigo-800 flex items-center gap-1 focus:ring-4 focus:outline-none hover:scale-105 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"><FaChargingStation /> Find Station</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {Object.entries(navLinks).map(([key, { link, icon }], index) => (
              <li className='mr-6' key={index}>
                <Link
                  href={link}
                  className="flex items-center py-2 px-3 gap-1 text-gray-100 hover:text-amber-500 rounded md:hover:bg-transparent md:p-0  "
                >
                  {icon}
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    
  );
  
}

export default Navbar;

