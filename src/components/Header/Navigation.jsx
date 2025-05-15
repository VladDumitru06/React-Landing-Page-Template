import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';
import Logo from '../../assets/img/Logo.png';
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Use useMemo to prevent recreation of the navigation array on each render
    const navigation = useMemo(() => [
        { name: 'ACASA', href: '/#header', section: 'header' },
        { name: 'DESPRE\u00A0NOI', href: '/#about', section: 'about' },
        { name: 'REZULTATE', href: '/#features', section: 'features' },
        { name: 'VALORI', href: '/#services', section: 'services' },
        { name: 'SERVICII', href: '/#portfolio', section: 'portfolio' },
        { name: 'CLIENTI', href: '/#testimonials', section: 'testimonials' },
        { name: 'PORTOFOLIU', href: '/#team', section: 'team' },
        { name: 'CONTACT', href: '/#contact', section: 'contact' },
    ], []); // Empty dependency array means this only runs once

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Check which section is currently in view
            const sections = navigation.map(item => item.section);
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled, navigation]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <img alt={'company logo'} src={Logo} width={'100px'} />
            {/*<img src={Logo} alt="Logo" className="nav-logo" />*/}
            <nav className="nav">
                <div className="nav-content">
                    <div className="desktop-menu">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className="mobile-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 icon-transition" />
                        ) : (
                            <Menu className="w-6 h-6 icon-transition" />
                        )}
                    </button>
                </div>

                <div className={`mobile-menu ${isMenuOpen ? 'open-menu' : ''}`}>
                    {navigation.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`nav-link mobile-link mobile-link-${index}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navigation;