import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProducts from "../components/FeatureProducts";
const Home = () => {
  const data = {
    name: "Harshit's Superstore",
    content:
      "Welcome to Harshit's Superstore, your one-stop destination for all your shopping needs! Explore a vast collection of products ranging from electronics to fashion, home decor to health essentials, and much more. With our user-friendly interface and secure payment gateway, shopping with us is convenient and enjoyable. Start browsing now to discover amazing deals and exclusive offers!",
    img: "/images/hero.png",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
