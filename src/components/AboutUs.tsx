
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore our story, values, and the<br />mission that inspires <span className="text-techgreen">everything we do</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vel. Quam voluptatem eos ea magnam animi sequi,
            doloribus expedita optio quis, adipisci, sapiente fuga quos quisquam inventore ullam ipsum? Velit, mollitia?
          </p>
        </div>
        
        <div className="mt-12">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
            alt="Team working together" 
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
