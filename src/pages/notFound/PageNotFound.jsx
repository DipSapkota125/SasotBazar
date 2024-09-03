import React from "react";
import NotFOundImg from "../../assets/images/NotFoundPage.png";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen font-poppins">
        <h1 className="text-center text-3xl text-gray-700 mb-4">
          OOP's Page not Found!
        </h1>
        <img src={NotFOundImg} alt="not foundImg" className="max-w-full" />
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-sm no-underline"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
