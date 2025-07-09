import React from "react";
import {
  FaEnvelope,
  FaBuilding,
  FaComment,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import { MdPets, MdAttachEmail, MdPhone } from "react-icons/md";
import WelcomeSection from "./WelcomeSection";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <WelcomeSection />
      <SampleRequestForm />
      <PartnershipForm />
    </div>
  );
};



export default ContactPage;
