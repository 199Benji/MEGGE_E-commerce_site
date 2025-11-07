import React, { useState, useEffect } from "react";
import './BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Button suppose show
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to dey Smooth
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="back-to-top" onClick={scrollToTop}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    )
  );
}
