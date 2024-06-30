import React from "react";
import HeroSection from "../components/HeroSection";
// import { useProductContext } from "../Context/ProductContext";

const About = () => {
  // const Bro = useProductContext();
  const data = {
    name: "Harshit's Superstore : Your trusted partner ",
    content:
      "At Harshit's Superstore, we are passionate about providing customers with a seamless shopping experience. Our mission is to offer a diverse selection of high-quality products at competitive prices. With a commitment to excellent customer service and satisfaction, we strive to build lasting relationships with our valued patrons. Discover the story behind our brand and join us on our journey to redefine online shopping.",
    img: "/public/images/about.png",
  };
  return (
    <>
      {/* {Bro} */}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
