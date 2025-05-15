
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen bg-black flex items-center relative overflow-hidden">
      {/* Colorful gradient overlay */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-blue-800 via-purple-800 to-pink-600 absolute top-0 right-0 w-3/4 h-full opacity-70 blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-16 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Business has transitioned to <span className="text-techgreen-light">The Digital Era</span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna a libero consectetur.
          </p>
          <button className="bg-techgreen px-8 py-3 text-white font-medium rounded-md hover:bg-techgreen-dark transition duration-300">
            GET STARTED
          </button>
        </div>
      </div>
      
      {/* Laptop image */}
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-70">
        <div className="w-full h-full bg-contain bg-no-repeat bg-bottom" style={{backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000')"}}></div>
      </div>
    </section>
  );
};

export default Hero;
