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
    <footer className="dark:bg-orange-500 bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-5 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="/api/placeholder/200/80"
              alt="Company logo"
            />
            <p className="text-white text-base">
              Making the world a better place through exceptional travel
              experiences.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-white/80">
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-white/80">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-white/80">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-white/80">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-white/80">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white/80 tracking-wider uppercase">
                  Destinations
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-white">
                      Europe
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white">
                      Asia
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white">
                      Africa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white">
                      South America
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white/80 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#about" className="text-base text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#cite" className="text-base text-white">
                      Cite
                    </a>
                  </li>
                  <li>
                    <a href="#tours" className="text-base text-white">
                      Tours
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white/80 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="#"
              className="text-white hover:scale-105 duration-500 transition-all inline-block"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white hover:scale-105 duration-500 transition-all inline-block"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white hover:scale-105 duration-500 transition-all inline-block"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base text-white md:mt-0 md:order-1">
            &copy; 2023 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
