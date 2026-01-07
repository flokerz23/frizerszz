import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame to GSAP's ticker
    const update = (time) => {
      lenis.raf(time * 1000); // Lenis requires time in milliseconds
    };

    gsap.ticker.add(update);

    // Disable GSAP's default lag smoothing to prevent stuttering
    gsap.ticker.lagSmoothing(0);

    // Cleanup function
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Navbar />
        {/* <PageTransition /> Temporarily removed to fix load issue */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicii/:slug" element={<ServicePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
