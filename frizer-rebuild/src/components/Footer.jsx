import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <h3>A&M Concept</h3>
                        <p>Salon premium de coafură.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <p>Strada Martir Gabriela Tako 3</p>
                        <p>0749 111 222</p>
                    </div>
                    <div className="footer-col">
                        <h4>Social</h4>
                        <div className="social-links">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTiktok /></a>
                            <a href="#"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <p>&copy; 2025 A&M Concept. Refined & Rebuilt.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
