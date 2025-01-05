import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

import Login from "./Authentication/login";
import Signup from "./Authentication/signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
