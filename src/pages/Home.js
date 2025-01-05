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