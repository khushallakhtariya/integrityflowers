import React, { useState } from "react";
import "../assets/navbar/navbar.css";
import logo from "../assets/images/navbar/Integrityflowers Transparent cropped .ad071a6edeebd795f001.png";
import Flower from "../assets/images/navbar/1716546254_7.jpg";
import Flower2 from "../assets/images/navbar/1716546275_6.jpg";
import Flower3 from "../assets/images/navbar/1716546293_5.jpg";
import Flower4 from "../assets/images/navbar/1716546310_2.jpg";
import UniqueTreats from "../assets/images/navbar/1716548795_Happy Birthday Hamper .jpg";
import UniqueTreats2 from "../assets/images/navbar/1716548833_Cadbury Variety.jpg";
function NavBar() {
  const links = [
    "Summer Bloms",
    "Flowers",
    "Plants",
    "Hampers",
    "Unique Treats",
  ];
  const images = [
    {
      title: "Flowers",
      items: [
        { src: Flower, alt: "Sparkle Bouquet", name: "Sparkle Bouquet" },
        { src: Flower2, alt: "A Ray of Sunshine", name: "A Ray of Sunshine" },
        { src: Flower3, alt: "Mellow Yellow", name: "Mellow Yellow" },
        { src: Flower4, alt: "Carpe Diem", name: "Carpe Diem" },
      ],
    },
    {
      title: "Unique Treats",
      items: [
        { src: UniqueTreats, alt: "Happy Birthday Hamper", name: "Happy Birthday Hamper" },
        { src: UniqueTreats2, alt: "Cadbury Variety", name: "Cadbury Variety" },
      ],
    },
  ];

  const [popup, setPopup] = useState(null);

  const handleMouseEnter = (link) => {
    if (link === "Flowers" || link === "Unique Treats") {
      setPopup(link);
      
    }
  };

  const handleMouseLeave = () => {
    setPopup(null);
    
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left-container">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-right-container">
          <div className="upper-part">
            <div className="navbar-sign-in-register">
              <p>Sign In / Register |</p>
            </div>
            <div className="navbar-cart-icons">
              <i className="fa-solid fa-phone"></i> <p>+1234567890 |</p>
            </div>
            <div className="navbar-cart-icons">
              <i className="fa-solid fa-basket-shopping"></i> <p>Basket (0)</p>
            </div>
          </div>
          <div className="lower-part">
            <div className="navbar-words">
              <p>Earliest available delivery</p>
              <span>{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-links">
        <table>
          <tr>
            {links.map((link, index) => (
              <td key={index}>
                <button
                  onMouseEnter={() => handleMouseEnter(link)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link}
                </button>
              </td>
            ))}
          </tr>
        </table>
      </div>
      {popup && (
        <div className="popup-container">
          <div
            className="popup"
            onMouseEnter={() => setPopup(popup)}
            onMouseLeave={handleMouseLeave}
          >
            {images
              .filter((image) => image.title === popup)
              .map((image) => (
                <div className="popup-items-container" key={image.title}>
                  {image.items.map((item, index) => (
                    <div key={index} className="popup-item">
                      <img src={item.src} alt={item.alt} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            <div className="popup-button">
              <button>View our full range of flowers</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
