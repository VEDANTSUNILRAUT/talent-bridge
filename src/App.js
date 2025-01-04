import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

import Job from "./pages/job";
function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Job />
      <Footer />
    </>
  );
}

export default App;
