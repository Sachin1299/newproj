import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import FeaturesHighlight from "../Components/FeaturesHighlight";
import ServicesSection from "../Components/ServicesSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Bhagirath IT Solutions | Home - Web & Software Development</title>
        <meta
          name="description"
          content="Welcome to Bhagirath IT Solutions. We deliver cutting-edge web development, software solutions, and custom IT services for modern businesses."
        />
        <link rel="canonical" href="https://bhagirathitsolutions.co.in/" />
      </Helmet>

      <HeroSection />
      <FeaturesSection />
      <FeaturesHighlight />
      <ServicesSection />
    </>
  );
};

export default HomePage;