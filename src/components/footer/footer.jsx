import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Code, Users } from 'lucide-react';
import './footer.css';
import LogoRCI from '../../assets/img/rci_white_logo.svg';
import Logo from '../../assets/img/Logo alb-alb.png';
import { FaLinkedinIn } from "react-icons/fa";
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
                            CIMA DATA ANALYTICS S.A. is a company of RCI Holding. Find more at <a href="https://www.rci-holding.com">www.rci-holding.com</a>
                        </p>
                        <div className="footer-logo-container">
                            <img src={LogoRCI} alt="Logo" className="footer-logo-rci" />
                        </div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/rci-holding/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn  size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">
                            <Code size={18} />
                            <span>Servicii</span>
                        </h3>
                        <ul className="footer-links">
                            <li><a href="#services">Consultanță strategică și transformare digitală</a></li>
                            <li><a href="#services">Servicii de tehnologie și integrare</a></li>
                            <li><a href="#services">Data Science și inteligență artificială</a></li>
                            <li><a href="#services">Inovație și tehnologii emergente</a></li>
                            <li><a href="#services">Securitate cibernetică și conformitate</a></li>
                        </ul>
                    </div>



                    <div className="footer-section">
                        <h3 className="footer-title">
                            <Users size={18} />
                            <span>Companie</span>
                        </h3>
                        <ul className="footer-links">
                            <li><a href="#about">Despre Noi</a></li>
                            <li><a href="#team">Rezultate</a></li>
                            <li><a href="#careers">Valori</a></li>
                            <li><a href="#partners">Servicii</a></li>
                            <li><a href="#press">Clienti</a></li>
                            <li><a href="#press">Portofoliu</a></li>
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
                                <a href="tel:+40712345678">0741 182 778</a>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <a href="mailto:contact@techsolutions.ro">office@cimadata.ro</a>
                            </li>
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>Bulevardul Dacia 20, București 010412</span>
                            </li>
                        </ul>

                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/cimadatarci/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn  size={20} />
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
                    <a href="/policy">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;