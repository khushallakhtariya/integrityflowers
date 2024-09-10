import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/Delivery/Delivery.css";
import Header from "./Header";

const Delivery = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "United Kingdom",
    postcode: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a backend server
    console.log("Form data:", formData);
    toast.success("Form submitted successfully!");
  };

  return (
    <>
      <Header />
      <hr style={{ color: "gray", height: "1px" }} />
      <div className="delivery-container-ll">
        <form className="form-ll" onSubmit={handleSubmit}>
          <div className="form-group-ll">
            <label htmlFor="fullName">Full name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-ll">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-ll">
            <label htmlFor="addressLine1">Delivery address line 1:</label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-ll">
            <label htmlFor="addressLine2">Delivery address line 2:</label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-ll">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-ll">
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              disabled
            >
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>
          <div className="form-group-ll">
            <label htmlFor="postcode">Postcode:</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-ll">
            Continue
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Delivery;
