import Header from "../../components/header/Header";
import WelcomeSection from "./WelcomeSection";
import SampleRequestForm from "./SampleRequisitionForm";
import PartnershipForm from "./ParternshipForm";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <WelcomeSection />
      <SampleRequestForm />
      <PartnershipForm />
    </div>
  );
};

export default ContactPage;
