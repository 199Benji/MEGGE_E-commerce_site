import React, { useState } from "react";
import "./ContactPage.css";
import Request from "../components/Request.jsx"


 function ContactPage() {
  
  return (
    <>
    <div className="contact-container">
       
      <div className="contact-container1">
        <h2>Contact MEGGE Gadgets</h2>
        <p>MEGGE company is a brand that offers quality and standard Gadgets. </p>
        
        <button className="button1">CONTACT US </button>
      </div>

      <div className="message"> 
          <h1>Send Messages</h1>
          <p>You can also contact us on</p>
      </div>

      <div className="site">
        <div className="contacts">
          <div className="icons">
            <i class="fa-solid fa-phone"></i>
            <div>
              <p className="heading">PHONE NUMBER</p>
              <p>+2348121153217</p>
              <p>You can reach us on normal calls</p>
              <p>or message us on whatsapp</p>
            </div>
          </div> 

          <div className="icons">
            <i class="fa-solid fa-square-envelope"></i>
            <div>
              <p className="heading">EMAIL ADDRESS</p>
              <p><a href="anthonyesther133@gmail.com">anthonyesther133@gmail.com</a></p>
              <p>Conctact us with this email now</p>
            </div>
          </div>

          <div className="icons">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <p className="heading">LOCATION</p>
              <p>You can also visit our loacation in</p>
              <p>Abak road, Uyo,Akwa-Ibom</p>
            </div>
          </div>

          <div className="icons">
            <i class="fa-brands fa-square-facebook"></i>
            <div>
              <p className="heading">FACEBOOK</p>
              <p>We are also available on facebook</p>
              <p>Contact us Immeediately</p>
            </div>
          </div>

        </div>        
      </div>
      <div className="media">
          <Request />
        </div>
    </div>
    
    <div className='Contactmap' style={{margin: '0 90px'}}>
      <h1 style={{color: 'var(--primary_color)', fontFamily: 'var(--Paragraph_font)', textAlign: 'center'}}>Find Us on Google Maps</h1>
      <p style={{color: 'var(--Black_Hover_color)', fontFamily: 'var(--Paragraph_font)', textAlign: 'center', padding: '10px 120px 40px'}}>Bringing convenience closer to you — visit us along Abak Road, Uyo, and experience seamless shopping with MEGGE.</p>
      <div style={{ width: "100%", height: "350px" }}>
        <iframe
          title="Abak Road Map"
          src="https://www.google.com/maps?q=4.981412,7.793813&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
      </>
  );
}
export default ContactPage;