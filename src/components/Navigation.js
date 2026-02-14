import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Menu, X, MapPin, Plane } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Check if we are on the home page for transparent nav effect
  const isHome = location.pathname === '/';
  
  // Dynamic classes based on scroll/page
  const navClass = scrolled || !isHome 
    ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
    : "bg-transparent py-5";
    
  const textClass = scrolled || !isHome ? "text-slate-900" : "text-white";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
             <div className="relative">
                <MapPin className={`w-8 h-8 ${scrolled || !isHome ? 'text-orange-600' : 'text-orange-500'} transition-colors`} />
                <Plane className={`w-4 h-4 absolute top-0 -right-1 ${textClass}`} />
             </div>
             <div className="flex flex-col">
                <span className={`font-black text-xl tracking-tighter leading-none ${textClass}`}>SPEEDUP</span>
                <span className={`text-[10px] font-bold tracking-widest ${scrolled || !isHome ? 'text-slate-500' : 'text-white/80'}`}>TRAVELS & TOURS</span>
             </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            <NavHashLink smooth to="/flights" className={`font-medium hover:text-orange-500 transition ${textClass}`}>Flights</NavHashLink>
            <NavHashLink smooth to="/hotels" className={`font-medium hover:text-orange-500 transition ${textClass}`}>Hotels</NavHashLink>
            <NavHashLink smooth to="/tours" className={`font-medium hover:text-orange-500 transition ${textClass}`}>Tours</NavHashLink>
            <Link to="/visa-info" className={`font-medium hover:text-orange-500 transition ${textClass}`}>Visa Info</Link>
            
            <NavHashLink smooth to="/#contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all">
                Plan My Trip
              </button>
            </NavHashLink>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${textClass}`}>
            {isOpen ? <X className="w-8 h-8 text-slate-900" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 space-y-4">
            <NavHashLink smooth to="/#flights" onClick={closeMenu} className="text-lg font-semibold text-slate-800">Flights</NavHashLink>
            <NavHashLink smooth to="/#hotels" onClick={closeMenu} className="text-lg font-semibold text-slate-800">Hotels</NavHashLink>
            <NavHashLink smooth to="/#tours" onClick={closeMenu} className="text-lg font-semibold text-slate-800">Tours</NavHashLink>
            <Link to="/visa-info" onClick={closeMenu} className="text-lg font-semibold text-slate-800">Visa Info</Link>
            <NavHashLink smooth to="/#contact" onClick={closeMenu}>
              <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold">
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