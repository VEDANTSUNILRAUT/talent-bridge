import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
//import Services from "./components/Services/services";

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

// CRUD
import AddStudent from "./components/Crud/StudentCrud/addStudent";
import ViewStudnet from "./components/Crud/StudentCrud/viewStudent";
import ViewDrive from "./components/Crud/StudentCrud/viewDrive";
import AddCompany from "./components/Crud/CompanyCrud/addCompany";
import AddCordinator from "./components/Crud/CordCrud/addCordinator";
// Contact Form
import ContactForm from "./components/Contact/contact";
import ServiceSection from "./Pages/serviceSection";

// Services

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
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/view-student/:id" element={<ViewStudnet />} />
        <Route path="/view-drive/:id" element={<ViewDrive/>}/>
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/add-cordinator" element={<AddCordinator />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<ServiceSection />} />
      </Routes>
      {!adminRoutes.includes(location.pathname) && <Footer />}
      {/* <Footer /> */}
    </>
  );
}

export default App;
