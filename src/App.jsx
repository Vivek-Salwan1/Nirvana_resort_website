import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-soft-white font-sans text-muted-gray selection:bg-nature-green selection:text-white">
      <Navbar />
      <Hero />

      {/* Placeholder content for scrolling demonstration */}
      <section id="stay" className="h-screen bg-soft-white flex items-center justify-center">
        <h2 className="text-4xl font-serif text-nature-green">Stay Section (Coming Soon)</h2>
      </section>

      <section id="experiences" className="h-screen bg-light-beige flex items-center justify-center">
        <h2 className="text-4xl font-serif text-nature-green">Experiences Section (Coming Soon)</h2>
      </section>
    </div>
  );
}

export default App;
