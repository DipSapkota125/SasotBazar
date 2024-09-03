import React from "react";
import { FaPhone, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiFacebook, SiInstagram } from "react-icons/si";
import GooglePlay from "../../assets/images/GooglePay.png";
import AppStore from "../../assets/images/AppStore.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="font-poppins bg-gray-200 py-10 mt-10">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Inside Deals and Offers */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h2 className="text-gray-700 text-lg font-semibold mb-4">
              Inside Deals and Offers !!
            </h2>
            <div className="space-y-4">
              <img
                src={GooglePlay}
                alt="Google Pay"
                className="h-12 inline rounded-md shadow-md"
              />
              <img
                src={AppStore}
                alt="App Store"
                className="h-12 inline rounded-md shadow-md"
              />
            </div>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h2 className="text-gray-700 text-lg font-semibold mb-4">Links</h2>
            <ul className="text-gray-600 space-y-2">
              <Link
                to="/about-us-details"
                className="text-gray-600 hover:text-orange-500 no-underline"
              >
                <li>About Us</li>
              </Link>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQ'S</li>
              <li>Hiring</li>
            </ul>
          </div>

          {/* Policies */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h2 className="text-gray-700 text-lg font-semibold mb-4">
              Policies
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>Terms and Conditions</li>
              <li>Return Policy</li>
              <li>Data Policy</li>
              <li>Refund Policy</li>
              <li>G-Cash Policy</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h2 className="text-gray-700 text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>123-456-7890 / 9861315260</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <a href="https://www.facebook.com" target="__blank">
                  <SiFacebook size={24} className="text-blue-500" />
                </a>
                <FaTwitter size={24} className="text-blue-700" />
                <SiInstagram size={24} className="text-red-400" />
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-8 pt-4">
          <p className="text-center text-gray-600">
            © 2024 SastoBazar. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
