import React from 'react';
import heroVideo from '../assets/images/hero/hero-video.mp4';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/40"></div> {/* Dark Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-20 text-white pb-12 md:pb-0">
                <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4 text-white/90 animate-fade-in-up font-sans">
                    Welcome to Nirvana
                </h2>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium mb-10 leading-tight shadow-sm text-shadow-sm animate-fade-in-up delay-100 italic">
                    Sanctuary in Nature
                </h1>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto animate-fade-in-up delay-300">
                    <button className="px-8 py-3 bg-white text-nature-green hover:bg-light-beige font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans uppercase text-xs md:text-sm">
                        Book Your Stay
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 font-semibold tracking-wide transition-all shadow-lg transform hover:-translate-y-1 font-sans uppercase text-xs md:text-sm backdrop-blur-sm">
                        WhatsApp Enquiry
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div> */}
        </div>
    );
};

export default Hero;
