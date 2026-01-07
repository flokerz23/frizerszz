import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Reveal Hero Content
        tl.fromTo(contentRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.5 }
        );

        // Parallax Effect
        gsap.to(videoRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Floating elements logic could be added here
    }, []);

    return (
        <section className="hero" ref={heroRef} id="home">
            <div className="hero-video-container">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    poster="/hero-bg.png"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content" ref={contentRef}>
                <h1 className="hero-title">Transformă-ți părul în artă</h1>
                <p className="hero-subtitle">
                    Salon de coafură premium unde fiecare șuviță devine o expresie a personalității tale.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Contactează-ne</a>
                    <a href="#despre" className="btn btn-outline">Despre Noi</a>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroller"></div>
            </div>
        </section>
    );
};

export default Hero;
