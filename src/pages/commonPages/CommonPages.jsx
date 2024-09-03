import React from "react";
import { Link } from "react-router-dom";

const CommonPages = (props) => {
  return (
    <>
      <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
              <span className="mr-2">{props.title}</span>
              <span className="text-orange-500">{props.subTitle}</span>
            </h2>

            <p className="mb-4 text-gray-700">{props.desc}</p>
            <>
              <p className="mb-4 text-gray-700">{props.desc1}</p>
            </>
            <Link
              to={props.visit}
              className="inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600
               rounded-lg no-underline"
            >
              {props.btnAbout}
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src={props.imageAbout}
              alt="SastoBazar Bazar"
              className="w-full h-full max-w-md object-contain animate-moveUpDown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonPages;
