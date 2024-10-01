import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;

    // Emailni tekshirish
    if (validateEmail(email)) {
      try {
        // Telegram bot API'siga email yuborish
        const botToken = '7423157003:AAGQ37oxM38D0bdXbv6K5XzBl1m30H30fPQ';
        const chatId = '5932603646';

        const message = `New subscription: ${email}`;
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        // console.log(`API Key: ${TELEGRAM__TOKEN}`);
        // console.log(`API URL: ${TELEGRAM__ID}`);
        await axios.post(telegramUrl, {
          chat_id: chatId,
          text: message,
        });

        toast(
          'Thank you for subscribing! Your email has been sent to Telegram.'
        );
      } catch (error) {
        console.error('Error sending message to Telegram:', error);
        toast('There was an error sending your email to Telegram.');
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  // Emailni validatsiya qilish funksiyasi
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              className="h-12 mb-4"
              src="/api/placeholder/200/80" // Replace with your logo
              alt="Company logo"
            />
            <p className="text-sm">
              We strive to provide exceptional experiences through our
              innovative travel solutions.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Europe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Asia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Africa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Australia
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}

              <button
                type="submit"
                className="mt-2 w-full py-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; 2023 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
