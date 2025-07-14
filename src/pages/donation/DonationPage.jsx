import React, { useState } from "react";
import { PayPalDonationButton } from "./PayPalDonation";
import {
  CheckCircle,
  EnergySavingsLeafOutlined,
  Favorite,
  VolunteerActivism,
} from "@mui/icons-material";
import "./DonationPage.css";

const DonationPage = () => {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [activeButton, setActiveButton] = useState(25);
  const [showToast, setShowToast] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const presetAmounts = [5, 10, 20, 50, 100];

  const handleAmountClick = (value) => {
    setAmount(value);
    setActiveButton(value);
    setCustomAmount("");
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setAmount(parseFloat(value));
      setActiveButton(null);
    }
  };

  const handleDonationSuccess = (details) => {
    console.log("Donation successful:", details);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="donation-container">
      <header className="donation-header">
        <EnergySavingsLeafOutlined className="header-icon" />
        <h1>Support Our Environmental Mission</h1>
        <p>Every dollar contributes to a greener future</p>
      </header>

      <div className="donation-content">
        <div className="donation-motivation">
          <div className="impact-point">
            <VolunteerActivism className="impact-icon" />
            <h3>Your Impact Matters</h3>
            <p>Just $25 can help us plant 10 trees in deforested areas.</p>
          </div>
          <div className="impact-point">
            <Favorite className="impact-icon" />
            <h3>Sustaining Our Work</h3>
            <p>
              Monthly donations provide reliable funding for our initiatives.
            </p>
          </div>
        </div>

        <div className="donation-box">
          <h2>Make a Difference Today</h2>

          <div className="donation-options">
            {presetAmounts.map((value) => (
              <button
                key={value}
                className={`amount-option ${
                  activeButton === value ? "active" : ""
                }`}
                onClick={() => handleAmountClick(value)}
              >
                ${value}
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Or enter custom amount"
            className="custom-amount"
            value={customAmount}
            onChange={handleCustomAmount}
            min="1"
            step="1"
          />

          <div className="paypal-container">
            {!paymentCompleted ? (
              <PayPalDonationButton
                amount={amount}
                onSuccess={(details) => {
                  handleDonationSuccess();
                  setPaymentCompleted(true);
                }}
              />
            ) : (
              <div className="confirmation-message">
                <CheckCircle style={{ fontSize: "3rem", color: "#2e7d32" }} />
                <h3>Payment Successful!</h3>
                <p>Thank you for your ${amount} donation.</p>
                <button
                  className="donate-again-btn"
                  onClick={() => setPaymentCompleted(false)}
                >
                  Make Another Donation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showToast && (
        <div className="donation-toast">
          <CheckCircle className="toast-icon" />
          <div>
            <h3>Thank you for your ${amount} donation!</h3>
            <p>A receipt has been sent to your email.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
