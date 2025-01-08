import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

// Define navigation links with proper paths
const HEADER_NAV_LINKS = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Contact", url: "/contact" },
];

const BUTTON_CLASSES = "btn-login";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img
            aria-hidden="true"
            alt="Logo"
            src="/TB.png" // Correct path for images in the public folder
          />
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          {HEADER_NAV_LINKS.map((link, index) => (
            <Link key={index} to={link.url} className="nav-link">
              {link.text}
            </Link>
          ))}

          {/* Login Button */}
          <button
            className={BUTTON_CLASSES}
            onClick={handleLoginRedirect}
            aria-label="Login"
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
