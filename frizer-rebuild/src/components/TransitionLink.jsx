import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TransitionLink = ({ to, children, className, onClick }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        e.preventDefault();

        // If trying to navigate to current page, do nothing or just scroll to top?
        // Let's assume standard behavior: do nothing if exactly same, or allow full transition.
        if (location.pathname === to) return;

        // 1. Trigger Animation
        const overlay = document.getElementById('transition-overlay');
        if (overlay) {
            overlay.classList.remove('active');
            void overlay.offsetWidth; // Force reflow
            overlay.classList.add('active');
        }

        // 2. Execute original onClick if provided
        if (onClick) onClick(e);

        // 3. Wait for "Cut" (approx 600ms to fully close), then Navigate
        setTimeout(() => {
            navigate(to);
            // Scroll to top on new page
            window.scrollTo(0, 0);
        }, 600);

        // 4. Cleanup class after animation ends (1.5s total)
        setTimeout(() => {
            if (overlay) overlay.classList.remove('active');
        }, 1500);
    };

    return (
        <a href={to} className={className} onClick={handleClick}>
            {children}
        </a>
    );
};

export default TransitionLink;
