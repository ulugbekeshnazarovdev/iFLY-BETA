import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import { HiBars3 } from 'react-icons/hi2';
import { IoClose, IoCloseSharp } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md';
import { RxLightningBolt } from 'react-icons/rx';
import LanguageDropdown from '../../dropdownLanguage';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  //contact modal
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage`,
        {
          chat_id: '<YOUR_CHAT_ID>',
          text: `Ism: ${data.name}\nEmail: ${data.email}\nMavzu: ${data.subject}\nXabar: ${data.message}`,
        }
      );
      if (response.data.ok) {
        toast.success('Xabaringiz yuborildi!', { autoClose: 3000 });
        toggleModal();
      } else {
        toast.error('Xabar yuborishda xato yuz berdi.');
      }
    } catch (error) {
      toast.error('Xabar yuborishda xato yuz berdi.');
      console.error(error);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  //contact modal
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
              <button
                onClick={toggleModal}
                className="hover:text-white/50 text-zinc-100 font-medium text-[22px]  duration-500 dark:text-white"
              >
                Contact
              </button>
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
              <button
                onClick={toggleModal}
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff] text-left  font-medium px-2 py-3  rounded-md inline-block "
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}

      {modalOpen && (
        <div className="container mx-auto px-5">
          <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[450px]">
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-semibold mb-4">Contact Me!</h2>
                <button
                  className="flex justify-center items-center text-white text-4xl p-2 bg-orange-500 rounded-md cursor-pointer"
                  onClick={toggleModal}
                >
                  <IoClose />
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    className={`border p-3 w-full h-12 text-lg ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('name', { required: 'Ismni kiriting' })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    className={`border p-3 w-full h-12 text-lg ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('email', { required: 'Emailni kiriting' })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Subject</label>
                  <input
                    type="text"
                    className={`border p-3 w-full h-12 text-lg ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('subject', { required: 'Mavzuni kiriting' })}
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Your Message</label>
                  <textarea
                    className={`border p-3 w-full h-24 text-lg ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('message', { required: 'Xabarni kiriting' })}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white  p-3 rounded hover:bg-gray-200 transition"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
