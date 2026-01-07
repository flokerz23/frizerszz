import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './Gallery.css';

const galleryImages = [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521590832169-7dad1a9b708b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const Gallery = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Horizontal scroll effect or staggered fade?
            // Let's go with staggered fade for now as per request.

            gsap.from(".gallery-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="section gallery" id="gallery" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title text-center mb-4">Galerie</h2>
                <div className="gallery-grid">
                    {galleryImages.map((src, idx) => (
                        <div className="gallery-item" key={idx}>
                            <img src={src} alt={`Gallery ${idx}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
