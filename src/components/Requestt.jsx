import React, { useState } from "react";
import "./Requestt.css";

export default function Request() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    gadget: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your gadget request has been submitted!`);
    setFormData({ name: "", email: "", number: "", gadget: "", details: "" });
  };

  return (
    <div className="request-container">
      <div className="gadget">
        <h1>MEGGE Gadget Request Form</h1>
        <p>Fill out the form below to request your desired MEGGE gadget.</p>
      

      <div className="forms">
      <form className="request-form" onSubmit={handleSubmit}>
        
        <div className="first">
          <label>
          First Name
          <input
            type="text"
            name="name"
            placeholder="Enter your first name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label >
          Last Name
          <input
            type="text"
            name="name"
            placeholder="Enter your last name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        </div>

        <div className="email"> 
          <label>
          Email Address
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        </div>

        <div className="number">
        <label>
          Phone no
          <input
            type="number"
            name="number"
            placeholder="Enter your phone no"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gadget Name
          <input
            type="text"
            name="gadget"
            placeholder="What gadget are you requesting?"
            value={formData.gadget}
            onChange={handleChange}
            required
          />
        </label>
        </div>

        <div className="details">
          <label>
          Additional Details
          <textarea
            name="details"
            placeholder="Describe specifications, quantity, etc."
            value={formData.details}
            onChange={handleChange}
            rows="5"
          />
        </label>
        </div>

        <button type="submit">Submit Request</button>
      </form>
      </div>
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
  );
}
