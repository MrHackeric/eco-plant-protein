import React from "react";
import { Helmet } from "react-helmet";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Helmet>
        <title>Privacy Policy | EcoPlantProtein</title>
        <meta
          name="description"
          content="Learn how EcoPlantProtein collects, uses, and protects your personal data in compliance with GDPR and other privacy laws."
        />
      </Helmet>

      <div className="policy-container">
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
            <li>
              <strong>Contact Information:</strong> Name, email, phone number,
              company name
            </li>
            <li>
              <strong>Business Information:</strong> Job title, industry,
              project details
            </li>
            <li>
              <strong>Payment Data:</strong> Billing address (processed securely
              via third-party providers)
            </li>
          </ul>

          <h3>Automatically Collected Data</h3>
          <ul>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, device
              information
            </li>
            <li>
              <strong>Cookies:</strong> Session cookies, analytics cookies (see
              Section 6)
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Legal Basis for Processing (GDPR)</h2>
          <p>
            For EU users, we process your data under the following legal bases:
          </p>
          <ul>
            <li>
              <strong>Contractual Necessity:</strong> To fulfill sample requests
              or partnerships
            </li>
            <li>
              <strong>Legitimate Interest:</strong> Website analytics and
              service improvement
            </li>
            <li>
              <strong>Consent:</strong> For marketing communications (you may
              withdraw anytime)
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. How We Use Your Data</h2>
          <div className="usage-table">
            <div className="usage-row header">
              <div className="usage-purpose">Purpose</div>
              <div className="usage-data">Data Type</div>
            </div>
            <div className="usage-row">
              <div className="usage-purpose">Process inquiries and samples</div>
              <div className="usage-data">Contact + Business Info</div>
            </div>
            <div className="usage-row">
              <div className="usage-purpose">Website optimization</div>
              <div className="usage-data">Usage Data + Cookies</div>
            </div>
            <div className="usage-row">
              <div className="usage-purpose">Security monitoring</div>
              <div className="usage-data">IP Address + Device Data</div>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>5. Data Sharing & Third Parties</h2>
          <p>We may share data with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Payment processors, hosting
              providers
            </li>
            <li>
              <strong>Business Partners:</strong> Only with your explicit
              consent
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law
            </li>
          </ul>
          <p>We never sell your personal data.</p>
        </section>

        <section className="policy-section">
          <h2>6. Cookies Policy</h2>
          <p>We use:</p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Necessary for website
              functionality
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Google Analytics (anonymized
              data)
            </li>
          </ul>
          <p>
            You can manage cookies via browser settings or our Cookie Consent
            Banner.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Your Rights</h2>
          <p>Under GDPR and other privacy laws, you have the right to:</p>
          <ul>
            <li>Access, correct, or delete your data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@ecoplantprotein.com">
              privacy@ecoplantprotein.com
            </a>
            .
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Data Security</h2>
          <p>We implement:</p>
          <ul>
            <li>SSL/TLS encryption</li>
            <li>Regular security audits</li>
            <li>Access controls</li>
          </ul>
          <p>Despite these measures, no system is 100% secure.</p>
        </section>

        <section className="policy-section">
          <h2>9. Policy Updates</h2>
          <p>
            We may update this policy periodically. The "Effective Date" at the
            top will indicate revisions.
          </p>
        </section>

        <section className="policy-section contact-section">
          <h2>10. Contact Us</h2>
          <p>For privacy-related questions:</p>
          <address>
            EcoPlantProtein GmbH
            <br />
            Attn: Data Protection Officer
            <br />
            [Company Address]
            <br />
            Vienna, Austria
            <br />
            Email:{" "}
            <a href="mailto:privacy@ecoplantprotein.com">
              privacy@ecoplantprotein.com
            </a>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
