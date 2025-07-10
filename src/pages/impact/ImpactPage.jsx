import React from "react";
import ImpactHero from "./ImpactHeroSection";
import ImpactContent from "./ImpactContent";
import StickyImageGallery from "./StickyImageGallery";
import SolutionSection from "./SolutionSection";
import InterestedSection from "./InterestedSection";
import GetInTouchButton from "../../components/common/getInTouch/GetInTouchSection";
import { Helmet } from "react-helmet";

const ImpactPage = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Helmet>
        <title>Our Impact | EcoPlantProtein</title>
        <meta
          name="description"
          content="Learn about our impact on the environment and society."
        />
      </Helmet>
      <ImpactHero />
      <ImpactContent />
      <StickyImageGallery />
      <SolutionSection />
      <InterestedSection />
      <GetInTouchButton />
      {/* Add more impact sections here */}
    </div>
  );
};

export default ImpactPage;
