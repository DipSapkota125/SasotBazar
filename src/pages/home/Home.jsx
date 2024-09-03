import React from "react";
import BannerPage from "../banner/BannerPage";
import Products from "../product/Products";

const Home = () => {
  return (
    <>
      <div className="bannerPage">
        <BannerPage />
      </div>
      <div>
        <Products />
      </div>
    </>
  );
};

export default Home;
