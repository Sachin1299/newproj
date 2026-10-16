import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import FeaturesHighlight from "../Components/FeaturesHighlight";
import ServicesSection from "../Components/ServicesSection";


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturesHighlight />
      <ServicesSection />
    </>
  );
};

export default HomePage;
