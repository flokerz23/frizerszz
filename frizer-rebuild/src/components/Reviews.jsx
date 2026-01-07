import React, { useState, useEffect } from 'react';
import './Reviews.css';

const reviewsData = [
    { name: "Stanca Bianca", text: "Am avut o experiență super plăcută! Atmosfera e chill, personalul mega profesionist.", stars: 5 },
    { name: "Andreea Burticica", text: "Personalul a fost foarte profesionist. Mi s-a explicat fiecare pas.", stars: 5 },
    { name: "Teodora Nistor", text: "Servicii excepționale și atmosferă foarte plăcută.", stars: 5 }
];

const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reviewsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section reviews" id="reviews">
            <div className="container text-center">
                <h2 className="section-title">Ce spun clienții</h2>

                <div className="reviews-carousel">
                    {reviewsData.map((review, idx) => (
                        <div
                            key={idx}
                            className={`review-card ${idx === activeIndex ? 'active' : ''}`}
                        >
                            <div className="stars">
                                {[...Array(review.stars)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <h4 className="review-author">- {review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
