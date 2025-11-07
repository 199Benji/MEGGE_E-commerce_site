import React from 'react'
import './Request.css'

const Request = () => {
  const details = [
    {
      icon: <i className="fas fa-phone"></i>,
      head: "Phone Number",
      detail: "+234 123 4567 890"
    },
    {
      icon: <i className="fas fa-phone"></i>,
      head: "Email Address",
      detail: "megge@gmail.com"
    },
    {
      icon: <i className="fas fa-phone"></i>,
      head: "Fax Address",
      detail: "+234 123 4567 890"
    },
    {
      icon: <i className="fas fa-phone"></i>,
      head: "Location",
      detail: "Along Abak Road, Uyo"
    }
  ];
  return (
    <section className="RequestPage">
      <div className="heroBgMedia">
        <div className="heroBg">
            <h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact Us
            </h1>
            <p 
              className="heroBg-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Redefining Your Electronic Gadget Experience by delivering innovative, reliable, and stylish devices that seamlessly elevate your daily life, keeping you connected, empowered, and ahead of the tech curve.
            </p>
        </div>
      </div>

      <div className="contactContainer">
        <div className="contactInfo">
          {details.map((member, index) => (
            <div className="contactItem" key={index}>
              {member.icon}
              <div className="contactItemText">
                <h3 className="contact-name">{member.head}</h3>
                <p className="contact-role">{member.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contactFormContainer">
          <h2>Send Message</h2>
          <p>Have a question? Send us a message—we’ll get back to you quickly.</p>
          {/* Contact Form */}
          <form action="#" className="contactForm">
            <div className="contactInput">
              <input type="text" placeholder='Your Name' />
              <input type="text" placeholder='Email Address' />
            </div>
            <div className="contactInput">
              <input type="tel" placeholder='Phone Number' />
              <input type="text" placeholder='Subject' />
            </div>
            <textarea name="contactMesage" id="contactMesage" placeholder='Message' />
          </form>

          <button className="contactBtn">Send Message</button>
        </div>
      </div>

      {/* Embed: Abak Road, Uyo */}
      <div className='Contactmap' style={{margin: '0 200px'}}>
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
    </section>
  )
}

export default Request