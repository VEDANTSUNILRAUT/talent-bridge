import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const HEADER_NAV_LINKS = [
  { text: "Home", url: "/home" },
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Contact", url: "/contact" },
];

const BUTTON_CLASSES = "btn-login";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    setShowModal(true);
  };

  const handleLoginChoice = (role) => {
    setShowModal(false);
    if (role === 'admin') {
      navigate('/adminlogin'); // Redirect to admin login page
    } else if (role === 'student') {
      navigate('/login'); // Redirect to student login page
    }
  };
  

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            aria-hidden="true"
            alt="Logo"
            src="/TB.png"
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
            onClick={handleLoginRedirect}
            aria-label="Login"
          >
            Login
          </button>
        </nav>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login As</h2>
            <button onClick={() => handleLoginChoice('student')}>Student</button>
            <button onClick={() => handleLoginChoice('admin')}>Admin</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
