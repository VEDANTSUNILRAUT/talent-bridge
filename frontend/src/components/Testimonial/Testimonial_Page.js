import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API calls
import "./Testimonial_Page.css";
import Testimonial_BreadCrumb from "../../assets/images/Testimonial_BG/testi_BG.png";
import Testimonial from "../../assets/images/Testimonial_BG/testimonial.png";

const renderStars = (rating) =>
  "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));

const TestimonialCard = ({ name, email, testimonial, rating }) => (
  <div className="testimonial-card">
    <div className="card-header">
      <img src={Testimonial} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
    <p className="card-text">{testimonial}</p>
    <div className="card-rating">{renderStars(rating)}</div>{" "}
    {/* Render Stars */}
  </div>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:5000/testimonial"); // Replace with your actual API URL
        setTestimonials(response.data); // Store data in state
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch testimonials");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonials">
      <div
        className="header-section"
        style={{ backgroundImage: `url(${Testimonial_BreadCrumb})` }}
      >
        <h1>Testimonials</h1>
        <h2>What Customers Are Saying</h2>
      </div>

      <div className="highlight-section">
        <h2>Our Alumni</h2>
        <p>
          We've been building creative tools together for over a decade and have
          a deep appreciation for software applications and AI tools.
        </p>
      </div>

      {/* Show loading or error message */}
      {loading ? <p>Loading testimonials...</p> : null}
      {error ? <p style={{ color: "red" }}>{error}</p> : null}

      {/* Display fetched testimonials */}
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      <div className="spacer"></div>
    </div>
  );
};

export default Testimonials;
