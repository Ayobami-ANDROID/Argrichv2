import React, { useEffect } from "react";
import Hero from "../components/LandingComponent.jsx/Hero";
import LiveStock from "../components/LandingComponent.jsx/LiveStock";
import Address from "../components/LandingComponent.jsx/Address";
import Produce from "../components/LandingComponent.jsx/Produce";
import Shop from "../components/LandingComponent.jsx/Shop";
import Footer from "../components/Footer";
import Farming from "../components/LandingComponent.jsx/Farming";
import Services from "../components/LandingComponent.jsx/Services";

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <Address />
      <LiveStock />
      <Produce />
      <Services />
      <Farming />
      <Shop />
      <Footer />
    </div>
  );
};

export default Landing;
