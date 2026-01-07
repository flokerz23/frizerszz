import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import './ServicePage.css';

const serviceData = {
    frizerie: {
        title: "Frizerie",
        desc: "Styling masculin premium.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        details: [
            "Tuns Clasic & Modern",
            "Aranjat Barbă & Contur",
            "Tratamente Scalp",
            "Vopsit Masculin"
        ],
        price: "de la 50 RON"
    },
    coafor: {
        title: "Coafor",
        desc: "Stilizare profesională pentru doamne.",
        image: "https://images.unsplash.com/photo-1560066984-12186d30b7db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        details: [
            "Tuns & Aranjat",
            "Coafuri Ocazii",
            "Extensii Păr",
            "Consultanță Stil"
        ],
        price: "de la 80 RON"
    },
    cosmetica: {
        title: "Cosmetică",
        desc: "Răsfăț și îngrijire pentru tenul tău.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        details: [
            "Curățare Facială",
            "Masaj Facial",
            "Tratamente Anti-Aging",
            "Pensat & Vopsit Sprâncene"
        ],
        price: "de la 100 RON"
    },
    // Add other services as needed: unghii, machiaj, etc.
};

const ServicePage = () => {
    const { slug } = useParams();
    const service = serviceData[slug] || serviceData['frizerie']; // Fallback
    const contentRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2 }
        );
    }, [slug]);

    return (
        <div className="service-page">
            <div className="service-hero" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="overlay"></div>
                <h1 className="service-title">{service.title}</h1>
            </div>

            <div className="container content-section" ref={contentRef}>
                <div className="service-desc-box">
                    <h2>Despre Serviciu</h2>
                    <p>{service.desc}</p>
                    <p className="price-tag">Prețuri {service.price}</p>
                    <a href="/#contact" className="btn btn-primary mt-4">Programează-te</a>
                </div>

                <div className="service-details-list">
                    <h3>Ce includem</h3>
                    <ul>
                        {service.details.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
