import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

// Pages
import Home from "./Pages/home";
import Resume from "./Pages/resume";
import Job from "./Pages/job";
import Testimonial from "./Pages/testimonial";
import About from "./Pages/aboutss"; // Ensure this path matches your file structure

// Admin Dashboard
import Admin from "./Pages/Admin_Dash";
import AdminProfile from "./components/Admin/adminProfile";

// Student Login
import Login from "./Authentication/Student/login";
import Signup from "./Authentication/Student/signup";
// Admin Login
import AdminLogin from "./Authentication/Admin/adminlogin";
import AdminSignup from "./Authentication/Admin/adminsignup";
// Profile
import Profile from "./Pages/Student_Profile";

// Contact Form
import ContactForm from "./components/Contact/contact"

function App() {
  const location = useLocation();

  // Define routes where you don't want the Header and Footer
  const adminRoutes = ["/admin", "/admin-profile"];

  return (
    <>
      {/* <Header /> */}
      {!adminRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/job" element={<Job />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/studentprofile" element={<Profile />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
      {!adminRoutes.includes(location.pathname) && <Footer />}
      {/* <Footer /> */}
    </>
  );
}

export default App;
