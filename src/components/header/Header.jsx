import React from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import SastoBazarLogo from "../../assets/images/SastoBazarLogo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="font-poppins flex items-center justify-evenly p-4 bg-white-200">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={SastoBazarLogo}
              alt="SastoBazarLogo"
              className="h-12 w-full pr-2"
            />
          </NavLink>
        </div>
        <div className="flex items-center justify-center w-2/5 relative">
          <input
            type="text"
            placeholder="I'm searching for"
            className="appearance-none text-gray-800 border border-gray-300 w-full py-2 px-2 pr-8 focus:outline-none"
          />

          <button className="absolute top-0 right-0 flex items-center justify-center h-full w-20  bg-orange-500">
            <FiSearch className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className="flex items-center ml-2">
          <div className="flex items-center">
            <FiHeart className="h-6 w-6 text-gray-700" />
            <span className="ml-1 text-gray-500">Wishlist</span>
          </div>
          <div className="ml-4">
            <button className="relative">
              <FiShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
