import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-white tracking-tight">
            SPEEDUP <span className="text-orange-500">TRAVELS</span>
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            The fastest and most reliable way to see the world. Connecting you to luxury stays and global destinations with excellence.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/visa-info" className="hover:text-white transition-colors">Visa Services</Link></li>
            <li><a href="/#tours" className="hover:text-white transition-colors">Featured Tours</a></li>
            <li><a href="/#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-orange-500" />
              <span>Lagos • Abuja • Port Harcourt</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-orange-500" />
              <span>+234 800 SPEEDUP</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-orange-500" />
              <span>bookings@speedup.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
          <p className="text-sm mb-4 text-slate-400">Get the latest travel deals first.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-500 outline-none text-white"
            />
            <button className="bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-r-lg transition-colors">
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2026 SPEED UP TRAVELS AND TOUR. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;