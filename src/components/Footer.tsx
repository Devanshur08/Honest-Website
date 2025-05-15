
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
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
                <li><Link to="/services" className="text-gray-200 hover:text-white">Digital Strategy</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-white">Product Design</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-white">Digital Marketing</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-white">Customer Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Explore More</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-200 hover:text-white">About Us</Link></li>
                <li><Link to="/team" className="text-gray-200 hover:text-white">Our Team</Link></li>
                <li><Link to="/blog" className="text-gray-200 hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-200 hover:text-white">Contact</Link></li>
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
  );
};

export default Footer;
