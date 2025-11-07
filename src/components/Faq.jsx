// Faq.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return window for all unused items in their original packaging. If you’re not fully satisfied with your purchase, you can request a refund or exchange within 30 days of delivery."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3–5 business days. Express delivery is available within 1–2 business days. International orders may take 7–14 business days depending on your location."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, Google Pay, and bank transfers for bulk orders."
    },
    {
      question: "Are your gadgets covered by warranty?",
      answer: "Yes. All products come with a manufacturer’s warranty of 1–2 years depending on the brand. Extended warranty plans are also available on select items."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find quick answers to common questions about our gadgets and services</p>
        
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>Our customer support team is here to help you</p>
          <div className="contact-options">
            <NavLink to="/ContactPage" className="contact-btn secondary" title="Contact">Contact Us</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;