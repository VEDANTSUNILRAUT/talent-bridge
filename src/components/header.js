import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="navbar-container">
        <nav className="navbar">
          {/* Logo Section */}
          <div className="navbar-logo">
            <a href="index.html">
              <img src="assets/images/logo-dark.png" alt="Logo" />
            </a>
          </div>

          {/* Navbar Links Section */}
          <div className="navbar-links">
            <ul className="navbar-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Login Button Section */}
          <div className="navbar-login">
            <button className="login-button">Login</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
