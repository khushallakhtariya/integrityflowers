import React from "react";
import Checkout from "./Checkout";
import Delivery from "./Delivery";
import Payment from "./Payment"; // Add this line

function CheckoutPage({ step }) {
  // Handle the step prop as needed
  return (
    <div>
      {/* Render content based on the step */}
      {step === "1" && (
        <div>
          <Checkout />
        </div>
      )}
      {step === "2" && (
        <div>
          <Delivery />
        </div>
      )}
      {step === "3" && (
        <div>
          <Payment />
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
