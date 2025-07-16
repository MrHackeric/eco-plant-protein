import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import HeroProduct from "./hero/HeroProduct";
import InnovationSection from "./innovation/InnovationSection";
import HowItWorksSection from "./works/HowItWorksSection";
import WhyItMatters from "./why/WhyItMatters";
import ContactCTA from "./contact/ContactCTA";

function ProductPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroProduct />
      <InnovationSection />
      <HowItWorksSection />
      <WhyItMatters />
      <ContactCTA />
    </div>
  );
}

export default ProductPage;