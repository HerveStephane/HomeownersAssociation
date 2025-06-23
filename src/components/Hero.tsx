import React from 'react';

const Hero: React.FC = () => {
  return (
    
  <section className="w-full bg-gradient-to-br from-green-100 to-white py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
      Willkommen in unserer Hausgemeinschaft
    </h1>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Gemeinsam sorgen wir für ein sicheres, gepflegtes und harmonisches Zuhause für alle Bewohner.
    </p>
    <a
      href="#contact"
      className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
    >
      Jetzt Kontakt aufnehmen
    </a>
  </div>
</section>

  );
};

export default Hero;
