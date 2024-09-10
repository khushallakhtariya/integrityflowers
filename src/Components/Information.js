import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/Inforamation/Information.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Calendar from "react-calendar";

function Information() {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  const [showDropdown, setShowDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState("");

  const deliveryOptions = [
    { day: "Thu", date: "12th July" },
    { day: "Fri", date: "12th July" },
    { day: "Sat", date: "12th July" },
    { day: "Sun", date: "12th July" },
    { day: "More" },
  ];

  const handleMoreClick = () => {
    setShowCalendar(!showCalendar);
  };

  if (!item) {
    return <div>No item selected</div>;
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="container-div-navbar">
        <NavBar name={item.alt} date={selectedDelivery} price={item.price} />
      </div>
      <div className="container-div">
        <div className="main-Content">
          <div className="selected-item">
            <img src={item.src} alt={item.alt} />
            <a onClick={() => navigate(-1)}>Back</a>
          </div>
          <div className="information">
            <div className="flex">
              <h3>{item.alt}</h3>
              <p>{item.price}</p>
            </div>
            <div className="information-item-1">
              <span>
                Buy Mellow Yellow Bouquet bouquet for your occasion. The best
                present is the beautiful bouquet.
              </span>
            </div>
            <div className="information-item">
              <li>5 Days freshness guarnateeVase </li>
              <li>Vase not included</li>
            </div>
            <div className="contents">
              <select name="" id="">
                <option value="">Choose a content</option>

                <option value="">Pistachio leaf</option>
                <option value="">5 x Solidago</option>
                <option value="">3 x Lisianthus white</option>
                <option value="">3 x Limonium liliac</option>
                <option value="">3 x Sunflowers</option>
                <option value="">3 x Sunflowers</option>
              </select>

              <div className="options">
                <div className="option-container">
                  <h3>Step 1 - Choose an option</h3>
                  <div className="option-item">
                    <input
                      type="checkbox"
                      name="option"
                      id="standard"
                      defaultChecked
                    />
                    <label htmlFor="standard">
                      Standard (as shown in picture) - £99.99 £49.99
                    </label>
                  </div>
                  <button onClick={toggleDropdown} className="continue-button">
                    Continue
                  </button>
                  {showDropdown && (
                    <div className="dropdown-message">
                      <h3>Step 2 - Choose your delivery</h3>
                      <div className="mini-card-container">
                        {deliveryOptions.map((option, index) => (
                          <div className="mini-card" key={index}>
                            {option.day === "More" ? (
                              <button onClick={handleMoreClick}>More</button>
                            ) : (
                              <button
                                onClick={() =>
                                  setSelectedDelivery(
                                    `${option.day} ${option.date}`
                                  )
                                }
                              >
                                {option.day} {option.date}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                      {showCalendar && (
                        <div className="calendar-container">
                          <Calendar
                            onChange={(date) =>
                              setSelectedDelivery(date.toString())
                            }
                          />
                        </div>
                      )}
                      <p className="delivery-date">
                        <b>{selectedDelivery}</b>Your delivery date:
                      </p>
                      Delivery Charge - £4.99
                      <button
                        className="place-order-button"
                        onClick={() =>
                          navigate("/checkout", {
                            state: {
                              name: item.alt,
                              date: selectedDelivery,
                              price: item.price,
                            },
                          })
                        }
                      >
                        Place Order
                      </button>
                    </div>
                  )}
                </div>

                <div className="option-container">
                  {!showDropdown && (
                    <>
                      <h3>Step 2 - Choose your delivery</h3>
                    </>
                  )}
                </div>
              </div>
              <div className="related-items">
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fa-brands fa-cc-paypal"></i>
                <i class="fa-brands fa-cc-apple-pay"></i>
                <i class="fa-brands fa-cc-amazon-pay"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Information;
