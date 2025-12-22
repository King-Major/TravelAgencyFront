import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <Plane size={32} className="sm:size-40" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">SkyBound Travels</h1>
              <p className="text-xs sm:text-sm">Your Journey Begins Here – Flights | Hotels | Tours | Visa</p>
            </div>
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm sm:text-base">
            <a href="tel:+234123456789" className="flex items-center gap-2">
              <Phone size={16} className="sm:size-20" />
              <span>+234 123 456 789</span>
            </a>
            <a href="mailto:info@skyboundtravels.com" className="flex items-center gap-2">
              <Mail size={16} className="sm:size-20" />
              <span>info@skyboundtravels.com</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-blue-800 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap gap-4 sm:gap-8 text-base sm:text-lg justify-center sm:justify-start">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/visa-info" className="hover:underline">Visa Information</Link></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;