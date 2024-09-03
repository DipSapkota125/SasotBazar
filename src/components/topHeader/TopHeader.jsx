import React from "react";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import { FcCustomerSupport, FcIphone } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const TopHeader = (props) => {
  return (
    <>
      <div className="font-poppins headerTop text-secondary pt-1 border-b border-gray py-1">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="text-sm flex items-center space-x-2">
              <FcCustomerSupport className="text-red-500 text-lg lg:text-2xl" />
              <FaViber className="text-blue-500 text-lg lg:text-2xl" />
              <FaWhatsapp className="text-green-500 text-lg lg:text-2xl" />
              <span className="text-black-600">01-56789/9861315260</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="py-1 px-2 text-sm text-secondary">
                {props.title}
              </button>
              <button className="py-1 px-2 text-sm text-secondary">
                Sell your Product
              </button>
              <NavLink
                to="/sastobazar-login"
                className="py-1 px-2 text-sm text-secondary text-decoration-none hover:text-orange-600"
              >
                Login/Register
              </NavLink>

              <div className="flex items-center space-x-2">
                {/* Toggle Code */}
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                </label>

                <span className="ml-2">
                  <FcIphone size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
