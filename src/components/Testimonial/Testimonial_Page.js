import React from "react";
import "./Testimonial_Page.css";

const testimonialData = [
  {
    name: "Rohan Gupta",
    university: "IIT Bombay",
    testimonial:
      "The placement training sessions were highly effective! The mock interviews and company-specific tests gave me the confidence to clear Google's technical rounds.",
    rating: "★★★★★",
    image: "https://placehold.co/50x50",
  },
  {
    name: "Ananya Sharma",
    university: "BITS Pilani",
    testimonial:
      "This platform played a huge role in my campus placements. The aptitude training and group discussions helped me secure a role at Deloitte. Highly recommend it!",
    rating: "★★★★★",
    image: "https://placehold.co/50x50",
  },
  {
    name: "Kartik Mehta",
    university: "VIT Vellore",
    testimonial:
      "The industry-specific training modules and technical test series were game-changers for me. I cracked the TCS Digital placement test with ease.",
    rating: "★★★★★",
    image: "https://placehold.co/50x50",
  },
  {
    name: "Sanya Patel",
    university: "NIT Trichy",
    testimonial:
      "The communication skills and interview preparation training here are top-notch. I got selected by Capgemini during the campus drives!",
    rating: "★★★★★",
    image: "https://placehold.co/50x50",
  },
  {
    name: "Aditya Singh",
    university: "Manipal Institute of Technology",
    testimonial:
      "The coding bootcamp sessions helped me master problem-solving. I successfully cleared the coding round of Amazon's placement process.",
    rating: "★★★★★",
    image: "https://placehold.co/50x50",
  },
  {
    name: "Priya Verma",
    university: "Delhi Technological University",
    testimonial:
      "The real-world projects and guidance provided were exceptional. I felt well-prepared for every stage of the placement process at Infosys.",
    rating: "★★★★★",
    image: "https://placehold.co/50x50",
  },
];

const TestimonialCard = ({ name, university, testimonial, rating, image }) => (
  <div className="testimonial-card">
    <div className="card-header">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{university}</p>
      </div>
    </div>
    <p className="card-text">{testimonial}</p>
    <div className="card-rating">{rating}</div>
  </div>
);

const Testimonials = () => (
  <div className="testimonials">
    <div
      className="header-section"
      style={{
        backgroundImage: "url('./imgg/testi_BG.png')", // Replace this link with your background image URL
      }}
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
    <div className="testimonial-grid">
      {testimonialData.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
    <div className="spacer"></div>
  </div>
);

export default Testimonials;
