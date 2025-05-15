
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-3 rounded-full">
          <div className="w-10 h-10 flex items-center justify-center text-techgreen">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="text-techgreen font-medium mb-2">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Technology Meets<br /><span className="text-techgreen">Business Brilliance</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Digital Strategy" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum."
            icon="💼" 
          />
          <ServiceCard 
            title="Product Design" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum."
            icon="🎨" 
          />
          <ServiceCard 
            title="Digital Marketing" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum."
            icon="📱" 
          />
          <ServiceCard 
            title="Customer Support" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum."
            icon="🛠️" 
          />
          <ServiceCard 
            title="Agile Development" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum."
            icon="⚙️" 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
