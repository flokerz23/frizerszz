import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import './ServicePage.css';

const serviceData = {
    frizerie: {
        title: "Frizerie & Styling Masculin",
        desc: "Oferim o experiență completă de îngrijire masculină, într-un cadru relaxant și profesionist. Frizerii noștri sunt specializați în tunsori clasice și moderne, adaptate fizionomiei și stilului tău.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        details: [
            "Tuns din foarfecă - Tehnică precisă",
            "Fade / Pierdut - Tranziții perfecte",
            "Aranjat Barbă - Contur și formă",
            "Vopsit Masculin - Look modern"
        ],
        pricingList: [
            { service: "Tuns din foarfecă", price: "110 lei", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Tuns + Barbă", price: "100 lei", img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Tuns + Styling", price: "80 lei", img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Aranjat Barbă", price: "50 lei", img: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Tuns Copii", price: "60 lei", img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Decolorat Total", price: "150 lei", img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
        ]
    },
    coafor: {
        title: "Coafor & Styling Feminin",
        desc: "La salonul nostru, oferim servicii complete de coafor de cea mai înaltă calitate. Folosim doar produse premium și tehnici moderne pentru a-ți evidenția frumusețea naturală.",
        image: "https://images.unsplash.com/photo-1560066984-12186d30b7db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        details: [
            "Tuns Modern & Personalizat",
            "Coafat Ocazii & Mireasă",
            "Vopsit Profesional (Balayage, Suvițe)",
            "Tratamente Hidratare & SPA"
        ],
        pricingList: [
            { service: "Tuns Damă", price: "200 lei", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Vopsit Rădăcină", price: "300 lei", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Vopsit + Tuns", price: "350 lei", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Balayage", price: "500+ lei", img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Tratament", price: "250 lei", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Pachet SPA", price: "300 lei", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Vopsit Total", price: "350 lei", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Schimbare Look", price: "450+ lei", img: "https://images.unsplash.com/photo-1521590832169-7dad1a9b708b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { service: "Toner", price: "300 lei", img: "https://images.unsplash.com/photo-1620331313123-6cc35eec480a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
        ]
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
        pricingList: [
            { service: "Tratament de bază", price: "100 lei", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        ]
    },
    // Add other services as needed
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
                    <h2>Despre Serviciul Nostru</h2>
                    <p>{service.desc}</p>

                    <div className="text-center">
                        <a href="/#contact" className="btn btn-primary mt-5">Programează-te</a>
                    </div>
                </div>

                {service.pricingList && (
                    <div className="pricing-grid-container mt-5">
                        <h3 className="text-center mb-4">Servicii & Prețuri</h3>
                        <div className="service-grid">
                            {service.pricingList.map((item, idx) => (
                                <div key={idx} className="service-item">
                                    <img src={item.img} alt={item.service} loading="lazy" />
                                    <div className="service-overlay">
                                        <h4 className="service-name">{item.service}</h4>
                                        <p className="service-price">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
