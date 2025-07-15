"use client";

import { useRef } from "react";
import ContactInfo from "./ContactInfo";
import PartnershipForm from "./PartnershipForm";
import SampleRequestForm from "./SampleRequestForm";
import ContactHero from "./ContactHero";
import { Helmet } from "react-helmet";
import "./styles.css";

function ContactPage() {
  const partnershipRef = useRef(null);
  const sampleRef = useRef(null);

  const scrollToPartnership = () => {
    partnershipRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSample = () => {
    sampleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <Helmet>
        <title>Contact Us | EcoPlantProtein</title>
        <meta
          name="description"
          content="Get in touch with EcoPlantProtein for inquiries, partnerships, and sample requests."
        />
      </Helmet>

      <div className="page-section">
        <ContactHero />
      </div>

      {/* Pass handlers to ContactInfo */}
      <div className="page-section">
        <ContactInfo
          onSampleClick={scrollToSample}
          onPartnerClick={scrollToPartnership}
        />
      </div>

      <div className="page-section" ref={partnershipRef}>
        <PartnershipForm />
      </div>

      <div className="page-section" ref={sampleRef}>
        <SampleRequestForm />
      </div>
    </div>
  );
}

export default ContactPage;
