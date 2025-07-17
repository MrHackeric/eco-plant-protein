import React from "react";
import { Helmet } from "react-helmet";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Helmet>
        <title>Privacy Policy - EcoPlantProtein</title>
      </Helmet>

      <div className="privacy-policy-container">
        <header className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="effective-date">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </header>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            EcoPlantProtein ("we," "us," or "our") respects your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website{" "}
            <a href="https://ecoplantprotein.com">ecoplantprotein.com</a> or
            engage with our services.
          </p>
          <p>
            By using our website, you consent to the data practices described in
            this policy. If you do not agree, please do not use our site.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Data We Collect</h2>
          <h3>Personal Data</h3>
          <ul>
            <li><strong>Contact Information:</strong> Name, email, phone, company</li>
            <li><strong>Business Information:</strong> Title, industry, project</li>
            <li><strong>Payment Data:</strong> Billing address (securely processed)</li>
          </ul>

          <h3>Automatically Collected Data</h3>
          <ul>
            <li><strong>Usage Data:</strong> IP, browser, device info</li>
            <li><strong>Cookies:</strong> Session & analytics cookies (see Section 6)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Legal Basis for Processing (GDPR)</h2>
          <ul>
            <li><strong>Contractual Necessity:</strong> For samples/partnerships</li>
            <li><strong>Legitimate Interest:</strong> Analytics & improvement</li>
            <li><strong>Consent:</strong> Marketing communications</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. How We Use Your Data</h2>
          <ul>
            <li>To process inquiries and send product samples</li>
            <li>To improve website functionality and user experience</li>
            <li>To monitor security and detect suspicious activity</li>
            <li>To communicate with you regarding your requests</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Data Sharing & Third Parties</h2>
          <p>We may share data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Payment, hosting, analytics</li>
            <li><strong>Business Partners:</strong> With your explicit consent</li>
            <li><strong>Legal Requirements:</strong> When required by law</li>
          </ul>
          <p>We never sell your personal data.</p>
        </section>

        <section className="policy-section">
          <h2>6. Cookies Policy</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Core website functionality</li>
            <li><strong>Analytics Cookies:</strong> Google Analytics (anonymized)</li>
          </ul>
          <p>Manage cookies via your browser or our Cookie Banner.</p>
        </section>

        <section className="policy-section">
          <h2>7. Your Rights</h2>
          <ul>
            <li>Access, correct, or delete your data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent anytime</li>
          </ul>
          <p>
            Contact us at{" "}
            <a href="mailto:privacy@ecoplantprotein.com">
              privacy@ecoplantprotein.com
            </a>
            .
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Data Security</h2>
          <ul>
            <li>SSL/TLS encryption</li>
            <li>Routine audits</li>
            <li>Access control systems</li>
          </ul>
          <p>Note: No system is 100% secure.</p>
        </section>

        <section className="policy-section">
          <h2>9. Policy Updates</h2>
          <p>
            We may update this policy occasionally. The “Effective Date” at the top will reflect the latest changes.
          </p>
        </section>

        <section className="policy-section contact-section">
          <h2>10. Contact Us</h2>
          <address>
            EcoPlantProtein GmbH<br />
            Attn: Data Protection Officer<br />
            [Company Address]<br />
            Vienna, Austria<br />
            Email: <a href="mailto:privacy@ecoplantprotein.com">privacy@ecoplantprotein.com</a>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
