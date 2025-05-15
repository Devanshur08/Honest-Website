
import React from 'react';

const TeamMember: React.FC<{ name: string; position: string; image: string }> = ({ name, position, image }) => {
  return (
    <div className="text-center">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Amazing Team Behind<br /><span className="text-techgreen">Our Success</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <TeamMember 
            name="John Doe" 
            position="CEO & Founder"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
          />
          <TeamMember 
            name="Jane Smith" 
            position="COO"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
          />
          <TeamMember 
            name="Michael Brown" 
            position="CTO"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000"
          />
          <TeamMember 
            name="Sarah Johnson" 
            position="Design Lead"
            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
