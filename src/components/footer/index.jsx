import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
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
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="mt-2 w-full py-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
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
