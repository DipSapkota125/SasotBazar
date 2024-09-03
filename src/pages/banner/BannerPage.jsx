import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FirstBanner from "../../assets/images/Banner.png";
import SecondBanner from "../../assets/images/BabyBanner.png";
import ThirdBanner from "../../assets/images/WheatBanner.png";
import FourthBanner from "../../assets/images/FirstBanner.png";
import { items } from "./BannerData";

const BannerPage = () => {
  return (
    <>
      <Carousel indicators={false}>
        {items.map((value, index) => (
          <Carousel.Item key={value.id}>
            <img src={value.image} alt={value.title} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default BannerPage;
