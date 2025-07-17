import React from "react";
import Hero from "../homepage/hero/Hero";
import SolutionSection from "./solution/SolutionSection";
import TractionSection from "./traction/TractionSection";
import VideoSection from "./video/VideoSection";
import ProblemSection from "./problem/ProblemSection";
import MarketSection from "./market/MarketSection";
import InvestorCTASection from "./cta/InvestorCTASection";
import { Helmet } from "react-helmet";


const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home | EcoPlantProtein</title>
        <meta
          name="description"
          content="Access Quick Features."
        />
      </Helmet>
      <Hero />
      <VideoSection />
      <ProblemSection />
      <SolutionSection />
      <MarketSection />
      <TractionSection />
      <InvestorCTASection />
    </div>
  );
};

export default HomePage;
