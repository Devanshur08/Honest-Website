
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 md:px-16 flex items-center justify-between bg-transparent w-full absolute top-0 left-0 z-10">
      <div className="text-white font-bold text-2xl uppercase">
        Honest
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-white hover:text-techgreen-light">HOME</Link>
        <Link to="/about" className="text-white hover:text-techgreen-light">ABOUT</Link>
        <Link to="/services" className="text-white hover:text-techgreen-light">SERVICES</Link>
        <Link to="/help" className="text-white hover:text-techgreen-light">HELP</Link>
        <Link to="/blog" className="text-white hover:text-techgreen-light">BLOG</Link>
        <Link to="/contact" className="text-white hover:text-techgreen-light">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
