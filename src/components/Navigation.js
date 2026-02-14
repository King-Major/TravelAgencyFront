import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { 
  Menu, X, MapPin, Plane, Hotel, Compass, 
  FileText, Phone, ChevronRight 
} from 'lucide-react';

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
  const navClass = scrolled || !isHome || isOpen
    ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
    : "bg-transparent py-5";
    
  const textClass = scrolled || !isHome || isOpen ? "text-slate-900" : "text-white";
  const iconClass = scrolled || !isHome || isOpen ? "text-slate-900" : "text-white";

  // Mobile Menu Item Component for reusability
  const MobileMenuItem = ({ to, icon: Icon, label, isHash = false }) => {
    const LinkComponent = isHash ? NavHashLink : Link;
    return (
      <LinkComponent 
        smooth 
        to={to} 
        onClick={closeMenu} 
        className="group flex items-center justify-between p-4 rounded-xl hover:bg-orange-50 transition-all duration-200 border border-transparent hover:border-orange-100"
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-orange-100 transition-colors">
            <Icon className="w-5 h-5 text-slate-600 group-hover:text-orange-600" />
          </div>
          <span className="text-lg font-semibold text-slate-700 group-hover:text-slate-900">{label}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-orange-400" />
      </LinkComponent>
    );
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2 group z-50" onClick={closeMenu}>
             <div className="relative">
                <MapPin className={`w-8 h-8 ${scrolled || !isHome || isOpen ? 'text-orange-600' : 'text-orange-500'} transition-colors`} />
                <Plane className={`w-4 h-4 absolute top-0 -right-1 ${textClass}`} />
             </div>
             <div className="flex flex-col">
                <span className={`font-black text-xl tracking-tighter leading-none ${textClass}`}>SPEEDUP</span>
                <span className={`text-[10px] font-bold tracking-widest ${scrolled || !isHome || isOpen ? 'text-slate-500' : 'text-white/80'}`}>TRAVELS & TOURS</span>
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
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden z-50 p-2 rounded-full hover:bg-black/5 transition-colors ${iconClass}`}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU REDESIGN */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-4 space-y-2 h-[calc(100vh-80px)] overflow-y-auto pb-20">
          
          <div className="px-2 py-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Menu</p>
            <div className="space-y-2">
              <MobileMenuItem to="/flights" icon={Plane} label="Find Flights" isHash={true} />
              <MobileMenuItem to="/hotels" icon={Hotel} label="Luxury Hotels" isHash={true} />
              <MobileMenuItem to="/tours" icon={Compass} label="Tours & Packages" isHash={true} />
              <MobileMenuItem to="/visa-info" icon={FileText} label="Visa Assistance" />
            </div>
          </div>

          <div className="border-t border-slate-100 mx-2 my-2"></div>

          <div className="px-2 py-4">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Support</p>
             <MobileMenuItem to="/#contact" icon={Phone} label="Contact Us" isHash={true} />
          </div>

          <div className="p-4">
            <NavHashLink smooth to="/#contact" onClick={closeMenu}>
              <button className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-200 active:scale-95 transition-all">
                Get Started
              </button>
            </NavHashLink>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;