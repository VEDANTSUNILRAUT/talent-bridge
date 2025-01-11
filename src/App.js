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

// Student Login
import Login from "./Authentication/Student/login";
import Signup from "./Authentication/Student/signup";
// Admin Login
import AdminLogin from "./Authentication/Admin/adminlogin";
import AdminSignup from "./Authentication/Admin/adminsignup";

<<<<<<< HEAD
// Testimonials
import Testimonials from "./pages/testimonial";

=======
// Job Detailes Page
import JobDetails from "./components/JobComponent/job_details";
>>>>>>> d50c5c15d73d008c33dc262199e7c269bb9afe92
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/job" element={<Job />} />
        <Route path="/job_details/:jobId" element={<JobDetails />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
