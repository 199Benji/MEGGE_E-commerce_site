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
        <div className="gadgetlogo">
          <div><img src="src/assets/Megge_logo.svg" alt="Megge logo" /></div>
          <div className="fill">
            <h1>MEGGE Gadget Request Form</h1>
            <p>Fill out the form below to request your desired MEGGE gadget.</p>
          </div>
        </div>

      <div className="forms">
      <form className="request-form" onSubmit={handleSubmit}>
        
        <div className="requestformCtn">
          <div className="inputCtn">
          <label>
          First Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your first name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          </div>

          <div className="inputCtn">
            <label >
              Last Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your last name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="email"> 
          <label>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="requestformCtn">
          <div className="inputCtn">
            <label>
              Phone no
            </label>
            <input
              type="number"
              name="number"
              placeholder="Enter your phone no"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
        
          <div className="inputCtn">
            <label>
              Gadget Name
            </label>
            <input
              type="text"
              name="gadget"
              placeholder="What gadget are you requesting?"
              value={formData.gadget}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="details">
          <label>
          Additional Details
           </label>
          <textarea
            name="details"
            placeholder="Describe specifications, quantity, etc."
            value={formData.details}
            onChange={handleChange}
            rows="5"
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>
      </div>
      </div>

    </div>
  );
}
