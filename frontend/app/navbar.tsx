'use client';
import React, { ReactElement, useState } from 'react';
import { motion } from 'framer-motion';
import logo from './assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

// icons
import { BsHouseFill } from 'react-icons/bs';
import { RiLoginBoxFill } from 'react-icons/ri';
import { FaUserPlus } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { FaChargingStation } from 'react-icons/fa6';

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
      link: String('/'),
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-900 fixed w-full z-20 top-0 left-0 border-b dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-1">
        <Link href="/" className="flex items-center">
          <Image src={logo} className="h-8" alt="Flowbite Logo" width={50} />
          <span className="self-center text-2xl font-semibold italic whitespace-nowrap text-white">ElectriSearch</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="hidden lg:flex text-gray-100 bg-green-800 hover:bg-green-700 items-center gap-1 focus:ring-4 focus:outline-none hover:scale-105 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform duration-200"
          >
            <FaChargingStation /> Find Station
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`overflow-hidden w-full lg:flex items-center justify-between md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <motion.ul
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col py-2 mt-3 font-medium bg-neutral-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent transition-all duration-300"
          >
            {Object.entries(navLinks).map(([key, { link, icon }], index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="border-y-[1px] md:border-0"
              >
                <Link
                  href={link}
                  className="flex items-center py-2 px-3 gap-1 text-gray-100 hover:text-green-600 rounded md:hover:bg-transparent md:p-0 transition-colors duration-200"
                >
                  {icon}
                  {key}
                </Link>
              </motion.li>
            ))}
            {/* Mobile-only Find Station button */}
            <li className="block lg:hidden mt-4">
              <Link href="/find-station">
                <button
                  type="button"
                  className="w-full text-gray-100 bg-green-800 hover:bg-green-700 flex items-center justify-center gap-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform duration-200"
                >
                  <FaChargingStation /> Find Station
                </button>
              </Link>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
