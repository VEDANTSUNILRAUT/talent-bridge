import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminsignup" element={<AdminSignup />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
