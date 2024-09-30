import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import { HiBars3 } from 'react-icons/hi2';
import { IoCloseSharp } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md';
import { RxLightningBolt } from 'react-icons/rx';
import LanguageDropdown from '../../dropdownLanguage';

const Navbar = () => {
  // Retrieve initial dark mode state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'enabled'; // Default to 'false' if not found
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleBars = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the navbar
  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Effect to handle local storage and body class
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('dark-mode', 'enabled');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-orange-500 dark:bg-gray-900 shadow fixed w-full left-0 z-50 h-16">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          <a href="/">
            <span className="text-4xl font-mono hover:scale-110  duration-500 transition-all inline-block hover:text-white/50 text-white font-bold text-black dark:text-white">
              iFLY
            </span>
          </a>

          <ul className="hidden lg:flex xl:flex 2xl:flex items-center xl:w-[700px] justify-end gap-8">
            <li>
              <a
                href="#hero"
                onClick={closeNavbar}
                className="hover:text-white/50 text-zinc-100 font-medium text-[22px]  duration-500 dark:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#cite"
                onClick={closeNavbar}
                className="hover:text-white/50 text-zinc-100 font-medium text-[22px]  duration-500 dark:text-white"
              >
                Cite
              </a>
            </li>
            <li>
              <a
                href="#tours"
                onClick={closeNavbar}
                className="hover:text-white/50 text-zinc-100 font-medium text-[22px]  duration-500 dark:text-white"
              >
                Tours
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeNavbar}
                className="hover:text-white/50 text-zinc-100 font-medium text-[22px]  duration-500 dark:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeNavbar}
                className="hover:text-white/50 text-zinc-100 font-medium text-[22px]  duration-500 dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex justify-between items-center gap-5">
            <ol className="hidden item-center gap-5 justify-between sm:hidden md:flex ">
              <li>
                <a
                  href="#"
                  className="text-2xl text-white dark:text-white hover:scale-110 duration-500 dark:hover:text-[#007bff] transition-all flex items-center"
                >
                  <FaTelegram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-2xl text-white dark:text-white hover:scale-110 duration-500 dark:hover:text-[#007bff] transition-all flex items-center"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-2xl text-white dark:text-white hover:scale-110 duration-500 dark:hover:text-[#007bff] transition-all flex items-center"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-2xl text-white dark:text-white hover:scale-110 duration-500 dark:hover:text-[#007bff] transition-all flex items-center"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-2xl text-white dark:text-white hover:scale-110 duration-500 dark:hover:text-[#007bff] transition-all flex items-center"
                >
                  <FaThreads />
                </a>
              </li>
            </ol>
            <LanguageDropdown />
            <button
              onClick={toggleDarkMode}
              className="text-2xl p-2 rounded-md bg-white duration-500 text-white dark:bg-white dark:text-black"
            >
              {isDarkMode ? (
                <MdOutlineLightMode className="text-orange-500 dark:text-orange-500" />
              ) : (
                <RxLightningBolt className="text-orange-500" />
              )}
            </button>

            <button
              onClick={handleBars}
              className="xl:hidden  md:block  sm:block lg:hidden p-2 rounded-md  bg-white text-gray-900 "
            >
              {isOpen ? (
                <IoCloseSharp className="text-2xl text-orange-500 dark:text-black" />
              ) : (
                <HiBars3 className="text-2xl text-orange-500 dark:text-black " />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed border-orange-500  bg-orange-500 left-0 z-40 top-[60px] duration-1000 transition-opacity dark:bg-gray-900 dark:text-white dark:border-t-gray-900 dark:border-gray-900 text-black shadow w-96 border h-screen">
          <ul className="flex flex-col items-start w-full p-4 gap-2 justify-start">
            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#hero"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                Home
              </a>
            </li>
            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#cite"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                Cite
              </a>
            </li>

            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#tours"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                Tours
              </a>
            </li>
            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#about"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                About
              </a>
            </li>
            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#contact"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
