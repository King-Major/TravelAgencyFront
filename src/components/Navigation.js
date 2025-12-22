import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Menu, X, Globe } from 'lucide-react'; // Ensure lucide-react is installed

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SpeedUp Agency
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavHashLink smooth to="/#flights" className="text-gray-700 hover:text-blue-600 transition">Flights</NavHashLink>
            <NavHashLink smooth to="/#tours" className="text-gray-700 hover:text-blue-600 transition">Tours</NavHashLink>
            <NavHashLink smooth to="/#hotels" className="text-gray-700 hover:text-blue-600 transition">Hotels</NavHashLink>
            <Link to="/visa-info" className="text-gray-700 hover:text-blue-600 transition font-medium">Visa Info</Link>
            <NavHashLink smooth to="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</NavHashLink>
            
            <NavHashLink smooth to="/#contact">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium">
                Get Started
              </button>
            </NavHashLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 p-6">
            <NavHashLink smooth to="/#flights" onClick={closeMenu} className="text-lg text-gray-700 hover:text-blue-600 transition">
              Flights
            </NavHashLink>
            <NavHashLink smooth to="/#tours" onClick={closeMenu} className="text-lg text-gray-700 hover:text-blue-600 transition">
              Tours
            </NavHashLink>
            <NavHashLink smooth to="/#hotels" onClick={closeMenu} className="text-lg text-gray-700 hover:text-blue-600 transition">
              Hotels
            </NavHashLink>
            <Link to="/visa-info" onClick={closeMenu} className="text-lg text-gray-700 hover:text-blue-600 transition font-medium">
              Visa Info
            </Link>
            <NavHashLink smooth to="/#contact" onClick={closeMenu} className="text-lg text-gray-700 hover:text-blue-600 transition">
              Contact
            </NavHashLink>
            
            <NavHashLink smooth to="/#contact" onClick={closeMenu}>
              <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-md">
                Get Started
              </button>
            </NavHashLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;