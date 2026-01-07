import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Gallery />
            <Reviews />
        </main>
    );
};

export default Home;
