"use client";

import ContactInfo from "./ContactInfo";
import PartnershipForm from "./PartnershipForm";
import SampleRequestForm from "./SampleRequestForm";
import "./styles.css";

function ContactPage() {
  return (
    <div className="container">
      <div className="page-section">
        <ContactInfo />
      </div>

      <div className="page-section">
        <PartnershipForm />
      </div>

      <div className="page-section">
        <SampleRequestForm />
      </div>
    </div>
  );
}

export default ContactPage;
