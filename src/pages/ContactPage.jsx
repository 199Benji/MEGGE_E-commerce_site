import React, { useState } from "react";
import "./ContactPage.css";
import Request from "../components/Requestt.jsx"


 function ContactPage() {
  
  return (
    <div className="contact-container">
       
      <div className="contact-container1">
        <h2>Contact MEGGE Gadgets</h2>
        <p>MEGGE company is a brand that offers quality and standard Gadgets. </p>
        
        <button className="button1">CONTACT US </button>
      </div>

      <div className="message"> 
          <h1>Send Messages</h1>
          <p>You can also reach us on:</p>
      </div>

      <div className="site">
        <div className="contacts">
          <div className="icons">
            <i class="fa-solid fa-phone"></i>
            <div>
              <p className="heading">Phone Number</p>
              <p>+2348089855878</p>
            </div>
          </div>

          <div className="icons">
            <i class="fa-solid fa-square-envelope"></i>
            <div>
              <p className="heading">Email Address</p>
              <p><a href="anthonyesther133@gmail.com">anthonyesther133@gmail.com</a></p>
            </div>
          </div>

          <div className="icons">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <p className="heading">Location</p>
              <p>Uyo,Akwa-Ibom State</p>
            </div>
          </div>
        </div>

        <div className="media">
          <Request />
        </div>
      </div>
    </div>
  );
}
export default ContactPage;