
import React from 'react';

const ProductCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-transparent border border-gray-700 p-6 rounded-md">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <button className="text-techgreen hover:text-techgreen-light font-medium">LEARN MORE →</button>
    </div>
  );
};

const Products: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-16">
          <p className="text-techgreen font-medium mb-2">OUR PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Revolutionizing Your<br />World with <span className="text-techgreen">Our Products</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="AI-POWERED LEAD GENERATION" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum tempora voluptatem."
          />
          <ProductCard 
            title="NO-CODE WEBSITE PLATFORM" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum tempora voluptatem."
          />
          <ProductCard 
            title="BUSINESS ANALYTICS DASHBOARD" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum tempora voluptatem."
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
