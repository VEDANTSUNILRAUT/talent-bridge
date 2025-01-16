import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./header.css";

import User from "../../assets/images/LoginModal/user.png";
import Admin from "../../assets/images/LoginModal/admin.png";
import Header_logo from "../../assets/images/Header_Logo/TB.png";
import ProfileImg from "../../assets/images/Header_Logo/profile_image.jpg";

const HEADER_NAV_LINKS = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Contact", url: "/contact" },
];

const BUTTON_CLASSES = "btn-login";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const checkLoginStatus = async () => {
          try {
              const response = await axios.get("http://localhost:5000/student_profile", { withCredentials: true });
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
  

    // ✅ Updated this function to directly set login state
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
        }
    };


    return (
        <header className="header11">
            <div className="container">
                <div className="logo">
                    <img aria-hidden="true" alt="Logo" src={Header_logo} />
                </div>

                <nav className="nav-links">
                    {HEADER_NAV_LINKS.map((link, index) => (
                        <Link key={index} to={link.url} className="nav-link">
                            {link.text}
                        </Link>
                    ))}

                    {/* ✅ Real-time Profile Button Display */}
                    {isLoggedIn ? (
                        <>
                            
                            <img src={ProfileImg} onClick={()=>navigate("/studentprofile")} alt="notload" className="profileimg"/>
                        </>
                    ) : (
                        <button
                            className={BUTTON_CLASSES}
                            onClick={() => setShowModal(true)}
                            aria-label="Login"
                        >
                            Login
                        </button>
                    )}
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
