import React from 'react';
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
