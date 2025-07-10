import React from "react";
import HomePage from "./homepage/HomePage";
import ContactPage from "./contact/ContactPage";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import TeamPage from "./team/TeamPage";
import ImpactPage from "./impact/ImpactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MainPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/impact" element={<ImpactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainPage;
