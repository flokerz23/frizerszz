import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    { title: "Frizerie", desc: "Styling masculin premium.", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Coafor", desc: "Stilizare profesională.", img: "https://images.unsplash.com/photo-1560066984-12186d30b7db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Colorare", desc: "Culori vibrante și sănătoase.", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Tratamente", desc: "Revitalizare completă.", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const Services = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1
            });

            // Use context-scoped selector
            const q = gsap.utils.selector(containerRef);

            q('.service-card').forEach((card, i) => {
                gsap.fromTo(card,
                    {
                        y: 100,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                            markers: false
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section services" id="services" ref={containerRef}>
            <div className="container">
                <div className="section-header text-center" ref={titleRef}>
                    <h2 className="section-title">Serviciile Noastre</h2>
                    <p className="section-desc">Experiența completă de înfrumusețare.</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-img-wrapper">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <div className="service-info">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
