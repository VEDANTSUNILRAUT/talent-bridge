// Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./header.css";

import User from "../../assets/images/LoginModal/user.png";
import Admin from "../../assets/images/LoginModal/admin.png";
import HeaderLogo from "../../assets/images/Header_Logo/TB.png";
import ProfileImg from "../../assets/images/Header_Logo/profile_image.jpg";

const HEADER_NAV_LINKS = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Contact", url: "/contact" },
  { text: "Notice", url: "/student-notice" },
];

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/student_profile",
          { withCredentials: true }
        );
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLoginRedirect = (role) => {
    setShowModal(false);
    if (role === "admin") {
      navigate("/adminlogin");
    } else if (role === "student") {
      navigate("/login");
    } else {
      console.error("Invalid login role:", role);
    }
  };

  const handleSignupChoice = (role) => {
    setShowModal(false);
    if (role === "admin") {
      navigate("/adminsignup");
    } else if (role === "student") {
      navigate("/signup");
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <img aria-hidden="true" alt="Logo" src={HeaderLogo} />
        </div>

        <nav className="header-nav-links">
          {HEADER_NAV_LINKS.map((link, index) => (
            <Link key={index} to={link.url} className="header-nav-link">
              {link.text}
            </Link>
          ))}

          {isLoggedIn ? (
            <img
              src={ProfileImg}
              onClick={() => navigate("/studentprofile")}
              alt="Profile"
              className="header-profile-img"
            />
          ) : (
            <button
              className="header-btn-login"
              onClick={() => setShowModal(true)}
              aria-label="Login"
            >
              Login
            </button>
          )}
        </nav>
      </div>

      {showModal && (
        <div className="header-modal-overlay">
          <div className="header-modal">
            <button
              className="header-modal-close-btn"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div className="header-modal-content">
              <div className="header-modal-box">
                <img src={User} alt="Student" />
                <p>Welcome, Student!</p>
                <button
                  className="header-modal-login"
                  onClick={() => handleLoginRedirect("student")}
                >
                  Login
                </button>
                <button
                  className="header-modal-signup"
                  onClick={() => handleSignupChoice("student")}
                >
                  Sign Up
                </button>
              </div>
              <div className="header-modal-box">
                <img src={Admin} alt="Admin" />
                <p>Welcome, TPO!</p>
                <button
                  className="header-modal-login"
                  onClick={() => handleLoginRedirect("admin")}
                >
                  Login
                </button>
                <button
                  className="header-modal-signup"
                  onClick={() => handleSignupChoice("admin")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
