
import { createRoot } from 'react-dom/client'
import './index.css'

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="py-4 px-6 md:px-16 flex items-center justify-between bg-transparent w-full absolute top-0 left-0 z-10">
        <div className="text-white font-bold text-2xl uppercase">
          Honest
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-techgreen-light">HOME</a>
          <a href="#about" className="text-white hover:text-techgreen-light">ABOUT</a>
          <a href="#services" className="text-white hover:text-techgreen-light">SERVICES</a>
          <a href="#help" className="text-white hover:text-techgreen-light">HELP</a>
          <a href="#blog" className="text-white hover:text-techgreen-light">BLOG</a>
          <a href="#contact" className="text-white hover:text-techgreen-light">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-techgreen font-medium mb-2">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Technology Meets<br /><span className="text-techgreen">Business Brilliance</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <div className="w-10 h-10 flex items-center justify-center text-techgreen">
                    💼
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Digital Strategy</h3>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <div className="w-10 h-10 flex items-center justify-center text-techgreen">
                    🎨
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Product Design</h3>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <div className="w-10 h-10 flex items-center justify-center text-techgreen">
                    📱
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Digital Marketing</h3>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <div className="w-10 h-10 flex items-center justify-center text-techgreen">
                    🛠️
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Customer Support</h3>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <div className="w-10 h-10 flex items-center justify-center text-techgreen">
                    ⚙️
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Agile Development</h3>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 md:px-16">
          <div className="mb-16">
            <p className="text-techgreen font-medium mb-2">OUR PRODUCTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Revolutionizing Your<br />World with <span className="text-techgreen">Our Products</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-transparent border border-gray-700 p-6 rounded-md">
              <h3 className="text-xl font-semibold text-white mb-4">AI-POWERED LEAD GENERATION</h3>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum tempora voluptatem.</p>
              <button className="text-techgreen hover:text-techgreen-light font-medium">LEARN MORE →</button>
            </div>
            
            <div className="bg-transparent border border-gray-700 p-6 rounded-md">
              <h3 className="text-xl font-semibold text-white mb-4">NO-CODE WEBSITE PLATFORM</h3>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum tempora voluptatem.</p>
              <button className="text-techgreen hover:text-techgreen-light font-medium">LEARN MORE →</button>
            </div>
            
            <div className="bg-transparent border border-gray-700 p-6 rounded-md">
              <h3 className="text-xl font-semibold text-white mb-4">BUSINESS ANALYTICS DASHBOARD</h3>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at itaque corporis fugiat laborum tempora voluptatem.</p>
              <button className="text-techgreen hover:text-techgreen-light font-medium">LEARN MORE →</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Amazing Team Behind<br /><span className="text-techgreen">Our Success</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000" 
                alt="John Doe" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                alt="Jane Smith" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-600">COO</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000" 
                alt="Michael Brown" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Michael Brown</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000" 
                alt="Sarah Johnson" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Design Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="mb-16">
            <p className="text-techgreen font-medium mb-2">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have Questions? <span className="text-techgreen">Contact Us</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-techgreen"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-techgreen"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-techgreen"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-techgreen text-white px-8 py-3 rounded-md hover:bg-techgreen-dark transition duration-300"
                >
                  SEND
                </button>
              </form>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our team" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="bg-white py-12">
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <img src="https://via.placeholder.com/150x50" alt="Client Logo" className="mb-3" />
                <img src="https://via.placeholder.com/150x50" alt="Client Logo" className="mb-3" />
              </div>
              <div>
                <img src="https://via.placeholder.com/150x50" alt="Client Logo" className="mb-3" />
                <img src="https://via.placeholder.com/150x50" alt="Client Logo" className="mb-3" />
              </div>
              <div>
                <img src="https://via.placeholder.com/150x50" alt="Client Logo" className="mb-3" />
                <img src="https://via.placeholder.com/150x50" alt="Client Logo" className="mb-3" />
              </div>
              <div>
                <img src="https://via.placeholder.com/150x50" alt="Client Logo" className="mb-3" />
                <img src="https://via.placeholder.com/150x50" alt="Client Logo" className="mb-3" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-techgreen text-white">
          <div className="container mx-auto px-6 md:px-16 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4">HONEST</h3>
                <p className="text-gray-200 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna a libero consectetur.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-200">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-200">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-200">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Our Services</h4>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-gray-200 hover:text-white">Digital Strategy</a></li>
                  <li><a href="#services" className="text-gray-200 hover:text-white">Product Design</a></li>
                  <li><a href="#services" className="text-gray-200 hover:text-white">Digital Marketing</a></li>
                  <li><a href="#services" className="text-gray-200 hover:text-white">Customer Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Explore More</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-200 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-200 hover:text-white">Our Team</a></li>
                  <li><a href="#blog" className="text-gray-200 hover:text-white">Blog</a></li>
                  <li><a href="#contact" className="text-gray-200 hover:text-white">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Details</h4>
                <address className="not-italic text-gray-200">
                  <p>123 Business Street</p>
                  <p>San Francisco, CA 94107</p>
                  <p className="mt-3">info@honest.com</p>
                  <p>+1 (555) 123-4567</p>
                </address>
              </div>
            </div>
            
            <div className="border-t border-green-600 mt-12 pt-8">
              <p className="text-center text-gray-200">© {new Date().getFullYear()} Honest. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
