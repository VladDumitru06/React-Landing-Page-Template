import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Code, Users } from 'lucide-react';
import './footer.css';
import LogoRCI from '../../assets/img/rci_white_logo.svg';
import Logo from '../../assets/img/Logo alb-alb.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-section main-section">
                        <div className="footer-logo-container">
                            <img src={Logo} alt="Logo" className="footer-logo" />
                        </div>
                        <p className="company-description">
                            CIMA DATA ANALYTICS S.A. is a company of RCI Holding. Find more at www.rci-holding.com
                        </p>
                        <div className="footer-logo-container">
                            <img src={LogoRCI} alt="Logo" className="footer-logo-rci" />
                        </div>
                        <div className="social-icons">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">
                            <Code size={18} />
                            <span>Servicii</span>
                        </h3>
                        <ul className="footer-links">
                            <li><a href="#services">Dezvoltare Software</a></li>
                            <li><a href="#services">Aplicații Web</a></li>
                            <li><a href="#services">Aplicații Mobile</a></li>
                            <li><a href="#services">Cloud & DevOps</a></li>
                            <li><a href="#services">Consultanță IT</a></li>
                            <li><a href="#services">Inteligență Artificială</a></li>
                        </ul>
                    </div>



                    <div className="footer-section">
                        <h3 className="footer-title">
                            <Users size={18} />
                            <span>Companie</span>
                        </h3>
                        <ul className="footer-links">
                            <li><a href="#about">Despre Noi</a></li>
                            <li><a href="#team">Echipa</a></li>
                            <li><a href="#careers">Cariere</a></li>
                            <li><a href="#partners">Parteneri</a></li>
                            <li><a href="#press">Presă</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">
                            <Users size={18} />
                            <span>Connect</span>
                        </h3>
                        <ul className="contact-info">
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <a href="tel:+40712345678">+40 712 345 678</a>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <a href="mailto:contact@techsolutions.ro">contact@techsolutions.ro</a>
                            </li>
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>Tech Hub, Str. Inovației 42, București</span>
                            </li>
                        </ul>

                        <div className="social-icons">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    <span>© {currentYear} CIMA DATA ANALYTICS S.A.</span>
                    <span>All Rights Reserved</span>
                </div>
                <div className="footer-bottom-links">
                    <a href="#terms">Termeni</a>
                    <span className="separator">•</span>
                    <a href="#privacy">Confidențialitate</a>
                    <span className="separator">•</span>
                    <a href="#cookies">Cookies</a>
                    <span className="separator">•</span>
                    <a href="#security">Securitate</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;