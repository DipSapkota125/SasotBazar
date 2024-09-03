import React from "react";
import CommonPages from "../commonPages/CommonPages";
import LearnImg from "../../assets/images/MoreAbout.png";
const LearnMore = () => {
  return (
    <>
      <CommonPages
        title="Information"
        subTitle="MoreOver"
        desc="We bring to you an online cake delivery service where you can
              purchase and order your favorite cakes - creating a unique bakery
              shopping experience without having to hop from one shop or website
              to another looking for your desired cake. We ambitiously claim to
              deliver 100% fresh cakes at your doorstep with complete ease and
              care on the same day or as planned."
        desc1=" Our online cake delivery in Kathmandu, Bhaktapur, and Lalitpur
                allows for cross-country purchases enabling you to send
                delicious cakes to your parents, relatives, or friends on
                various occasions from any part of the world. We are here to
                create some unforgettable memories and some undying emotions by
                helping you to send cake to your beloved ones online. We invite
                you to celebrate your special occasions with your favorite cakes
                from oho! cake."
        btnAbout="Explore Our services"
        imageAbout={LearnImg}
        visit=""
      />
    </>
  );
};

export default LearnMore;
