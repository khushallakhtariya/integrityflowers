import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/Number/Number.css";
import chat from "../assets/images/contect/chat.svg";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Number = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    orderNumber: "",
    deliveryPostcode: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for empty fields
    for (let key in formData) {
      if (formData[key] === "") {
        toast.error("Please fill in all fields.");
        return;
      }
    }
    toast.success(
      "Thank you! Our Customer Support Team will get back to you shortly"
    );
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      telephone: "",
      orderNumber: "",
      deliveryPostcode: "",
      message: "",
    });
  };

  return (
    <>
      <div className="container-div-navbar">
        <NavBar />
      </div>
      <div className="contact-form-container-q">
        <div className="banner-tt">
          <div className="banner-text-tt">
            <div className="icon-chat">
              <h1>
                We're here to help <img src={chat} alt="chat" />
              </h1>
            </div>
            <p>
              Have a question, a special request, or simply want to say hello?
              We'd love to hear from you! Reach out to us and let our passionate
              team of floral enthusiasts assist you. Whether you're dreaming up
              a custom arrangement, seeking expert advice, or just want to share
              your floral inspiration, we're here to make your experience with
              Integrity Flowers as delightful as a bouquet in full bloom.
              Connect with us today and let's bring your floral visions to life!
            </p>
          </div>
          <div className="banner-icon">
            {/* <i className="fas fa-comment-dots"></i>
          <i className="fas fa-smile"></i> */}
          </div>
        </div>
        <h2>Contact Us</h2>
        <p>
          You can contact us on email at{" "}
          <a href="mailto:help@integrityflowers.co.uk">
            help@integrityflowers.co.uk
          </a>
        </p>
        <p>Or fill our online form:</p>
        <form className="form-q" onSubmit={handleSubmit}>
          <div className="form-group-q">
            <label className="label-q" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name-q"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-q">
            <label className="label-q" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email-q"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-q">
            <label className="label-q" htmlFor="telephone">
              Your Telephone Number
            </label>
            <input
              type="tel"
              id="telephone-q"
              name="telephone"
              placeholder="Your Telephone Number"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-q">
            <label className="label-q" htmlFor="orderNumber">
              Order Number
            </label>
            <input
              type="text"
              id="orderNumber-q"
              name="orderNumber"
              placeholder="Order Number"
              value={formData.orderNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-q">
            <label className="label-q" htmlFor="deliveryPostcode">
              Delivery Postcode
            </label>
            <input
              type="text"
              id="deliveryPostcode-q"
              name="deliveryPostcode"
              placeholder="Delivery Postcode"
              value={formData.deliveryPostcode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-q">
            <label className="label-q" htmlFor="message">
              You would like to...
            </label>
            <textarea
              id="message-q"
              name="message"
              placeholder="You would like to..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Number;
