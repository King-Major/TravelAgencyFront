import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              SpeedUp<span className="text-indigo-500">Travel</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Connecting you to the most luxurious stays and unforgettable 
              tours across Nigeria with speed, accountability, and excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Featured Tours</a></li>
              <li><a href="#hotels" className="hover:text-white transition-colors">Luxury Hotels</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-indigo-500" />
                <span>Lagos • Abuja • Port Harcourt</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-500" />
                <span>+234 800 SPEEDUP</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-indigo-500" />
                <span>bookings@speedup.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-sm mb-4">Get the latest travel deals first.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-r-lg transition-colors">
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2025 SpeedUp Travel Agency Nigeria. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;