import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';
import drawingSvg from '../assets/drawing.svg';

const PageTransition = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Trigger animation on route change
        setIsActive(true);

        // BACKUP: Force cleanup after 2s if animation event fails
        const safetyTimer = setTimeout(() => {
            setIsActive(false);
        }, 2000);

        return () => clearTimeout(safetyTimer);
    }, [location]);

    // Cleanup handler called when main animation finishes
    const handleAnimationEnd = () => {
        setIsActive(false);
    };

    if (!isActive) return null;

    return (
        <div className="page-transition-overlay active">
            {/* The top blade triggers the cleanup when its animation ends */}
            <div
                className="blade blade-top"
                onAnimationEnd={handleAnimationEnd}
            ></div>
            <div className="blade blade-bottom"></div>
            <img src={drawingSvg} className="cut-icon" alt="scissors" />
        </div>
    );
};

export default PageTransition;
