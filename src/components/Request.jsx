import React, { useState } from "react";
import "./Request.css";

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
  );
}
