import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo-white.png';
import logo2 from '../assets/images/logo-black.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Stay', href: '#stay' },
        { name: 'Experiences', href: '#experiences' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Location', href: '#location' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md py-3 text-nature-green'
                : 'bg-transparent py-5 text-white'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center cursor-pointer z-50 relative">
                    <span className={isMobileMenuOpen && !isScrolled ? 'text-nature-green' : ''}>
                        <img
                            src={isScrolled || isMobileMenuOpen ? logo2 : logo}
                            alt="Nirvana Resort Logo"
                            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                        />
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide hover:text-accent-yellow transition-colors ${isScrolled ? 'text-nature-green' : 'text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        className={`px-5 py-2 border transition-all duration-300 font-medium text-sm ${isScrolled
                            ? 'border-nature-green text-nature-green hover:bg-nature-green hover:text-white'
                            : 'border-white text-white hover:bg-white hover:text-nature-green'
                            }`}
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 overflow-hidden">
                            <span
                                className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    } ${isScrolled || isMobileMenuOpen ? 'bg-nature-green' : 'bg-white'}`}
                            ></span>
                            <span
                                className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                    } ${isScrolled || isMobileMenuOpen ? 'bg-nature-green' : 'bg-white'}`}
                            ></span>
                            <span
                                className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    } ${isScrolled || isMobileMenuOpen ? 'bg-nature-green' : 'bg-white'}`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-light-beige z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex flex-col space-y-6 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif text-nature-green hover:text-nature-green-light transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="mt-4 px-8 py-3 bg-nature-green text-white rounded-full font-medium shadow-lg hover:bg-nature-green-light transition-all transform hover:scale-105">
                            Book Your Stay
                        </button>

                        {/* Click to Call */}
                        <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-muted-gray mt-4">
                            <span>📞</span> <span>+91 99306 90326</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
