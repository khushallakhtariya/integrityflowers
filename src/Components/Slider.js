import React, { useState, useEffect } from "react";
import "../assets/slider/slider.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "FLOWERS FOR ALL OCCASION",
      description: "Upto 60% Off All Flowers & Gifts",
    },
    {
      title: "5 DAYS FRESHNESS GUARANTEE",
      description: "Sent in bud for a longer vase life",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="slider">
      <button onClick={prevSlide}>{"<"}</button>
      <div className="slider-content">
        <p>{slides[currentSlide].title}</p>
        <p>{slides[currentSlide].description}</p>
      </div>
      <button onClick={nextSlide}>{">"}</button>
    </div>
  );
}

export default Slider;
