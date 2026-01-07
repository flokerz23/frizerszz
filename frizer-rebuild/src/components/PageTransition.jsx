import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './PageTransition.css';

const PageTransition = () => {
    const location = useLocation();
    const containerRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Kill previous animation if running
            if (tl.current) tl.current.kill();

            tl.current = gsap.timeline();

            // Sequence:
            // 1. Blades slam shut (Cut)
            // 2. Pause brief moment
            // 3. Blades open (Reveal new page)

            tl.current
                .set(".blade", { display: "block" })
                // Shut
                .to(".blade-top", {
                    y: "0%",
                    rotate: 0,
                    duration: 0.4,
                    ease: "power4.inOut"
                }, 0)
                .to(".blade-bottom", {
                    y: "0%",
                    rotate: 0,
                    duration: 0.4,
                    ease: "power4.inOut"
                }, 0)
                // Optional Icon Pop
                .to(".cut-icon", {
                    scale: 1,
                    opacity: 1,
                    duration: 0.2,
                    ease: "back.out(1.7)"
                }, 0.3)
                // Pause
                .to({}, { duration: 0.4 })
                // Open (Retreat)
                .to(".blade-top", {
                    y: "-105%",
                    rotate: 5,
                    duration: 0.6,
                    ease: "power3.inOut"
                })
                .to(".blade-bottom", {
                    y: "105%",
                    rotate: 5,
                    duration: 0.6,
                    ease: "power3.inOut"
                }, "<") // Sync
                .to(".cut-icon", {
                    scale: 0,
                    opacity: 0,
                    duration: 0.2
                }, "<")
                ;
        }, containerRef);

        return () => ctx.revert();
    }, [location]); // Trigger on route change

    return (
        <div className="page-transition-overlay" ref={containerRef}>
            <div className="blade blade-top"></div>
            <div className="blade blade-bottom"></div>
            {/* Optional FontAwesome Scissors or similar visual could go here, using text for now or simple circle */}
            <div className="cut-icon">✂</div>
        </div>
    );
};

export default PageTransition;
