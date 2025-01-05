
import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a simple React component for the Home page.</p>
    </div>
  );
}

export default Home;
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/herosection/Hero';
import Layout from '../components/Layout';
import About from '../components/about/About';
 export default function Home(){
  return(
    <Layout>
      <Hero/>
       <About/>
    </Layout>
  )
}
