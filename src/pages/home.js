import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/herosection/Hero';
import About from '../components/about/About';
 export default function Home(){
  return(
    <>
  
      <Hero/>
       <About/>
    </>
   
  )
}