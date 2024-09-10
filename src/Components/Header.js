import React, { useState } from "react";
import "../assets/Header/Header.css";

import img from "../assets/images/navbar/vite.51456a49f282eba71c4c.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleStepClick = (step) => {
    setCurrentStep(step);
    navigate(`/checkout/${step}`); // Pass state
  };

  return (
    <div className="add-card-container">
      <div className="card-icon">
        <img src={img} alt="Card Icon" />
      </div>
      <div className="add-card-text">
        <h1>Add a card</h1>
        <div className="steps">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div
                className={`step ${currentStep >= step ? "completed" : ""} ${
                  currentStep === step ? "active" : ""
                }`}
                onClick={() => handleStepClick(step)}
              >
                {step}
              </div>
              {step < 3 && <div className="line"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="cart-icon">
        <i className="fa-solid fa-basket-shopping"></i>
        <div className="cart-count">0</div>
      </div>
    </div>
  );
};

export default Header;
