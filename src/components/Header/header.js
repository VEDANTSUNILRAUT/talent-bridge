import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

import User from "../../assets/images/LoginModal/user.png";
import Admin from "../../assets/images/LoginModal/admin.png";
import Header_logo from "../../assets/images/Header_Logo/TB.png";

const HEADER_NAV_LINKS = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Contact", url: "/contact" },
];

const BUTTON_CLASSES = "btn-login";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Handle login redirection based on user role
  const handleLoginRedirect = (role) => {
    setShowModal(false);
    if (role === "admin") {
      navigate("/adminlogin");
    } else if (role === "student") {
      navigate("/login");
    } else {
      console.error("Invalid login role:", role); // Handle invalid role
    }
  };

  const handleSignupChoice = (role) => {
    setShowModal(false);
    if (role === "admin") {
      navigate("/adminsignup");
    } else if (role === "student") {
      navigate("/signup");
    } else {
      console.error("Invalid signup role:", role); // Handle invalid role
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            aria-hidden="true"
            alt="Logo"
            src={Header_logo} 
          />
        </div>

        <nav className="nav-links">
          {HEADER_NAV_LINKS.map((link, index) => (
            <Link key={index} to={link.url} className="nav-link">
              {link.text}
            </Link>
          ))}

          <button
            className={BUTTON_CLASSES}
            onClick={() => setShowModal(true)}
            aria-label="Login"
          >
            Login
          </button>
        </nav>
      </div>

      {showModal && (
        <div className="modal">
          <button className="close-button" onClick={() => setShowModal(false)}>
            &times;
          </button>
          <div className="modal-content">
            <div className="modal-box">
              <img src={User} alt="Student" />
              <p>Welcome, Student!</p>
              <button className="login" onClick={() => handleLoginRedirect("student")}>
                Login
              </button>
              <button className="signup" onClick={() => handleSignupChoice("student")}>
                Sign Up
              </button>
            </div>
            <div className="modal-box">
              <img src={Admin} alt="Admin" />
              <p>Welcome, Admin!</p>
              <button className="login" onClick={() => handleLoginRedirect("admin")}>
                Login
              </button>
              <button className="signup" onClick={() => handleSignupChoice("admin")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;