import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Interior Salon",
        price: "Atmosferă Premium"
    },
    {
        src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Tuns Clasic",
        price: "110 RON"
    },
    {
        src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Coafat Ocazie",
        price: "300 RON"
    },
    {
        src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Vopsit Balayage",
        price: "450 RON"
    },
    {
        src: "https://images.unsplash.com/photo-1503951914875-befea64f8f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Tratament Keratină",
        price: "250 RON"
    },
    {
        src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Styling Masculin",
        price: "80 RON"
    },
    {
        src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Vopsit Rădăcină",
        price: "200 RON"
    },
    {
        src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Produse Premium",
        price: "Calitate Garantată"
    }
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
                ),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const goToSlide = (idx) => {
        setCurrentIndex(idx);
    };

    return (
        <section className="section gallery" id="gallery">
            <div className="container">
                <h2 className="section-title text-center">Galerie</h2>
                <p className="section-desc text-center">Descoperă atmosfera salonului nostru.</p>

                <div className="gallery-slideshow">
                    <div className="gallery-slide-container">
                        <img
                            src={galleryImages[currentIndex].src}
                            alt={galleryImages[currentIndex].title}
                            className="gallery-slide-img"
                        />
                        <div className="gallery-overlay">
                            <h3 className="gallery-title">{galleryImages[currentIndex].title}</h3>
                            <p className="gallery-price">{galleryImages[currentIndex].price}</p>
                        </div>
                    </div>

                    <button className="nav-btn prev-btn" onClick={prevSlide}>&#10094;</button>
                    <button className="nav-btn next-btn" onClick={nextSlide}>&#10095;</button>

                    <div className="dots-container">
                        {galleryImages.map((_, idx) => (
                            <span
                                key={idx}
                                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(idx)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
