import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
<<<<<<< HEAD

// Student Login
import Login from "./Authentication/Student/login";
import Signup from "./Authentication/Student/signup";
// Admin Login
import AdminLogin from "./Authentication/Admin/adminlogin";
import AdminSignup from "./Authentication/Admin/adminsignup";
=======
import Resume from "./pages/resume";
import Login from "./Authentication/login";
import Signup from "./Authentication/signup";
>>>>>>> 867d7d4e21eb350d21fb1cffd90ad868416cb0a3

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminsignup" element={<AdminSignup />} />
=======
        <Route path="/resume" element={<Resume/>}/>
>>>>>>> 867d7d4e21eb350d21fb1cffd90ad868416cb0a3
      </Routes>
      <Footer />
    </>

  );
}

export default App;
