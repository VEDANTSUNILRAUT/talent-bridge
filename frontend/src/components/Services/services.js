import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
// import breadcrumbImg from "../../assets/images/Breadcrump/breadcrumb.png";
const servicesData = [
  {
    id: 1,
    title: "Resume Builder",
    description: "Create professional resumes with AI-powered templates.",
    icon: "📄",
    buttonText: "Build Now",
    path: "/resume",
  },
  {
    id: 2,
    title: "Mock Interviews",
    description:
      "Practice interviews with expert feedback to boost confidence.",
    icon: "🤝",
    buttonText: "Start Practice",
    path: "/mock",
  },
  {
    id: 3,
    title: "Job Postings",
    description: "Explore job opportunities from top companies.",
    icon: "💼",
    buttonText: "View Jobs",
    path: "/job",
  },
  {
    id: 4,
    title: "Aptitude & Coding Tests",
    description: "Take tests to prepare for company placements.",
    icon: "🖥️",
    buttonText: "Take Test",
    path: "/test",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {/* Breadcrumb Section */}
      {/* <div className="breadcrumb-section">
        <img
          src={breadcrumbImg}
          alt="Breadcrumb Banner"
          className="breadcrumb-photo"
        />
        <div className="breadcrumb-overlay"></div>
      </div> */}

      {/* Introduction Section */}
      <section className="services-intro">
        <h1 className="services-title">Our Services</h1>
        <p className="services-intro-text">
          At Talent-Bridge, we provide a comprehensive suite of tools to help
          you achieve your career goals. Whether you're crafting your first
          resume, preparing for interviews, or looking for your dream job, our
          platform is designed to support you at every step of the way. Explore
          our services to unlock your full potential!
        </p>
      </section>

      {/* Services Grid Section */}
      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <Link to={service.path} className="service-button">
              {service.buttonText}
            </Link>
          </div>
        ))}
      </div>

      {/* Call-to-Action Footer */}
      <section className="services-cta">
        <h2 className="cta-title">Ready to Take the Next Step?</h2>
        <p className="cta-description">
          Join our platform today and start your journey towards a brighter
          career. With our AI-powered tools and expert guidance, success is just
          a few clicks away.
        </p>
        <Link to="/signup" className="cta-button">
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Services;
