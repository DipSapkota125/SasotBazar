import React, { useState } from "react";
import MoreImg from "../../assets/images/MoreAbout.png";
import DetailsInfo from "../detailsInfo/DetailsInfo";

const MoreAbout = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShow = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={MoreImg}
              alt="moreAbout Bazar"
              className="w-full h-full max-w-md object-contain animate-moveUpDown"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
              Learn&nbsp;
              <span className="text-orange-500">Our Story</span>
            </h2>
            <p className="mb-4 text-gray-500">
              Himalayan Bazar, your go-to destination for authentic Nepali
              products that exude the warmth of traditional craftsmanship. Our
              journey began recently when we set out to showcase the rich
              cultural heritage of Nepal to the world. We believe in the
              artistry of handcrafted products and their ability to connect
              people to the soul of this beautiful country
            </p>

            <>
              <p className="mb-4 text-gray-500">
                At Himalayan Bazar, we are committed to curating a collection of
                handpicked items that are lovingly made by skilled artisans from
                different regions of Nepal. Each product in our store carries a
                unique story and reflects the vibrant spirit of Nepali culture.
              </p>
            </>

            <button
              className="inline-block py-2 px-4 no-underline text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
              onClick={handleShow}
            >
              About Our Company
            </button>
          </div>
        </div>
        {showMore ? <DetailsInfo /> : ""}
      </div>
    </>
  );
};

export default MoreAbout;
