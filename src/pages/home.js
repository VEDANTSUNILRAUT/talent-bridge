import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/herosection/Hero';
import Layout from '../components/Layout';
import About from '../components/about/About';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export default Home;
