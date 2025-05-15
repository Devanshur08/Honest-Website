
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Words from Our Satisfied <span className="text-techgreen">Customers</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white shadow-lg rounded-xl p-8 relative z-10">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                alt="Customer" 
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Emily Watson</h4>
                <p className="text-gray-600 text-sm">Marketing Director</p>
              </div>
            </div>
            
            <p className="text-gray-700 italic">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur sed dolores. Maiores esse aut, tempora 
              reiciendis voluptatem sunt. Tempore aliquid harum repudiandae ipsum, reprehenderit reiciendis assumenda dolorem ab."
            </p>
            
            <div className="flex justify-between mt-8">
              <button className="bg-techgreen-light text-white h-10 w-10 rounded-full flex items-center justify-center">
                ←
              </button>
              <button className="bg-techgreen text-white h-10 w-10 rounded-full flex items-center justify-center">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
