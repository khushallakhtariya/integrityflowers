import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/Payment/Payment.css";
import Header from "./Header";

const Payment = () => {
  const [promoCode, setPromoCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(
    "Tuesday 10th September 2024"
  );
  const [cardMessage, setCardMessage] = useState("");

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleDeliveryDateChange = (event) => {
    setDeliveryDate(event.target.value);
  };

  const handleCardMessageChange = (event) => {
    setCardMessage(event.target.value);
  };

  const handleApplyPromoCode = () => {
    // Here you would implement the logic to apply the promo code
    console.log("Promo code applied:", promoCode);
  };

  const handleProceedToPayment = () => {
    if (recipient && deliveryDate && cardMessage) {
      setShowModal(true);
    } else {
      toast.error("Please fill in all fields before proceeding to payment.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPayment = () => {
    setShowModal(false);
    toast.success("Payment successful!");
  };

  return (
    <>
      <Header />
      <hr style={{ color: "gray", height: "1px" }} />

      <div className="checkout-container-li">
        <h2>Mellow Yellow Bouquet</h2>
        <div className="price-li">Price: £99.99 £49.99</div>
        <div className="input-field-li">
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={handleRecipientChange}
          />
        </div>
        <div className="input-field-li">
          <label htmlFor="delivery-date">Delivery Date:</label>
          <input
            type="text"
            id="delivery-date"
            value={deliveryDate}
            onChange={handleDeliveryDateChange}
          />
        </div>
        <div className="input-field-li">
          <label htmlFor="card-message">Card Message:</label>
          <textarea
            id="card-message"
            value={cardMessage}
            onChange={handleCardMessageChange}
          />
        </div>
        <div className="delivery-charge-li">Delivery Charge: £4.99</div>
        <div className="promo-code-field">
          <input
            type="text"
            placeholder="Enter your Promo/voucher code"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
          <button onClick={handleApplyPromoCode}>Apply</button>
        </div>
        <div className="total-li">Total: £ 54.98</div>
        <button
          className="proceed-to-payment-li"
          onClick={handleProceedToPayment}
        >
          Proceed to payment
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Credit or debit card</h2>
            <div className="card-number">
              <label htmlFor="card-number">
                <i className="fa-regular fa-credit-card"></i> Card Number
              </label>
              <input
                type="text"
                id="card-number"
                placeholder="Enter card number"
              />
            </div>
            <div className="btn-container">
              <button onClick={handleConfirmPayment} className="submit-btn">
                Submit Payment
              </button>

              <button onClick={handleCloseModal} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Payment;
