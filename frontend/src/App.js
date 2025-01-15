import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

// Pages
import Home from "./Pages/home";
import Resume from "./Pages/resume";
import Job from "./Pages/job";
import Testimonial from "./Pages/testimonial";
import About from "./Pages/aboutss";

// Admin Dashboard
import Admin from "./Pages/Admin_Dash";
// import StudentProfile from "./components/Admin/StudentProfile";

// Student Login
import Login from "./Authentication/Student/login";
import Signup from "./Authentication/Student/signup";
// Admin Login
import AdminLogin from "./Authentication/Admin/adminlogin";
import AdminSignup from "./Authentication/Admin/adminsignup";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/job" element={<Job />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
