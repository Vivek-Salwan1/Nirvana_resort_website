import React from 'react';
import heroBg from '../assets/images/hero/hero-bg.jpg';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
                aria-label="Peaceful lakeside resort view"
            >
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-20 text-white pb-20 md:pb-0">
                <h2 className="text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 text-white/90 animate-fade-in-up font-sans">
                    Welcome to Paradise
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-tight max-w-5xl shadow-sm text-shadow-sm animate-fade-in-up delay-100 italic">
                    A Refined Stay <br className="hidden md:block" /> in the Heart of Nature
                </h1>
                <p className="text-lg md:text-xl font-light mb-12 max-w-2xl text-white/90 animate-fade-in-up delay-200 font-sans tracking-wide">
                    A peaceful lakeside resort near Urmodi Dam. Experience nature like never before with premium comfort and breathtaking views.
                </p>

                <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto animate-fade-in-up delay-300">
                    <button className="px-10 py-4 bg-white text-nature-green hover:bg-light-beige rounded-full font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans uppercase text-sm">
                        Book Your Stay
                    </button>
                    <button className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 rounded-full font-semibold tracking-wide transition-all shadow-lg transform hover:-translate-y-1 font-sans uppercase text-sm backdrop-blur-sm">
                        WhatsApp Enquiry
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
