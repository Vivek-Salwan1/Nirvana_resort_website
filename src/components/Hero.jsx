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
                <div className="absolute inset-0 bg-black/30"></div> {/* Dark Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-20 text-white pb-20 md:pb-0">
                <h2 className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 text-accent-yellow animate-fade-in-up">
                    Welcome to Paradise
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight max-w-4xl shadow-sm text-shadow-sm animate-fade-in-up delay-100">
                    A Refined Stay <br className="hidden md:block" /> in the Heart of Nature
                </h1>
                <p className="text-lg md:text-xl font-light mb-10 max-w-2xl text-gray-100 animate-fade-in-up delay-200">
                    A peaceful lakeside resort near Urmodi Dam. Experience nature like never before with premium comfort and breathtaking views.
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto animate-fade-in-up delay-300">
                    <button className="px-8 py-4 bg-nature-green hover:bg-nature-green-light text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book Your Stay
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white hover:bg-white hover:text-nature-green text-white rounded-full font-medium transition-all shadow-lg transform hover:-translate-y-1">
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
