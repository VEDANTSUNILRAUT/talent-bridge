import React from 'react';
// import { Link } from 'react-router-dom';
import Hero from '../components/Herosection/Hero';
import About from '../components/About/about';
import Services from '../components/Services/services';
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services/>
    </>
  );
}
