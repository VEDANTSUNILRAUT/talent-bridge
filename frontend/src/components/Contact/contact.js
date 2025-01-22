import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
   const navigate=useNavigate();
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submission state
    setResponseMessage(""); // Clear previous messages

    try {
      const response = await axios.post("http://localhost:5000/contact", formData); // Update endpoint here
      setResponseMessage(response.data.message || "Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
       navigate("/");
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Failed to submit the form. Please try again."
      );
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <div className="fcf-body">
        <div id="fcf-form">
      <h3 className="fcf-h3">Contact us</h3>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
      <form id="fcf-form-id" className="fcf-form-class" onSubmit={handleSubmit}>
        <div className="fcf-form-group">
          <label htmlFor="Name" className="fcf-label">
            Your name
          </label>
          <div className="fcf-input-group">
            <input
              type="text"
              id="Name"
              name="name"
              className="fcf-form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="fcf-form-group">
          <label htmlFor="Email" className="fcf-label">
            Your email address
          </label>
          <div className="fcf-input-group">
            <input
              type="email"
              id="Email"
              name="email"
              className="fcf-form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="fcf-form-group">
          <label htmlFor="Message" className="fcf-label">
            Your message
          </label>
          <div className="fcf-input-group">
            <textarea
              id="Message"
              name="message"
              className="fcf-form-control"
              rows="6"
              maxLength="3000"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="fcf-form-group">
          <button
            type="submit"
            id="fcf-button"
            className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
            disabled={isSubmitting} // Disable button during submission
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
