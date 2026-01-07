import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const location = useLocation();

    const handleNavClick = (sectionId) => {
        setMenuOpen(false);
        if (location.pathname !== '/') {
            // Navigate to home then scroll (simple fallback)
            window.location.href = `/${sectionId}`;
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">A&M Concept</Link>

                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Acasă</Link>
                    <a href="/#about" onClick={() => handleNavClick('#about')}>Despre</a>

                    {/* Dropdown for Services could be added here, for now direct links */}
                    <Link to="/servicii/frizerie" onClick={() => setMenuOpen(false)}>Frizerie</Link>
                    <Link to="/servicii/coafor" onClick={() => setMenuOpen(false)}>Coafor</Link>

                    <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
                    <a href="/#contact" onClick={() => handleNavClick('#contact')}>Contact</a>
                </div>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
