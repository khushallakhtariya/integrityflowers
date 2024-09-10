import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/checkout/Checkout.css";
import Header from "./Header";

const Checkout = () => {
  const [darkBackground, setDarkBackground] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContinueClick = () => {
    setDarkBackground(true); // Set dark background
    navigate("/checkout/2"); // Navigate to the second page
  };

  return (
    <>
      <div
        className={`container-div-navbar ${
          darkBackground ? "dark-background" : ""
        }`}
      >
        <Header />
      </div>
      <hr style={{ color: "gray", height: "1px" }} />
      <div className="checkout-container">
        <div className="checkout-header">
          <p>With every gift we enclose your message on a small free card. </p>
        </div>
      </div>
      <div className="checkout-body">
        <div className="checkout-body">
          <textarea name="" id="" rows="15" cols="50"></textarea>
        </div>
      </div>
      <button className="continue-button" onClick={handleContinueClick}>
        Continue
      </button>
    </>
  );
};

export default Checkout;
