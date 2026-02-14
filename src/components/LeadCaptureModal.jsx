import React, { useState, useEffect } from 'react';
import { XCircle } from 'lucide-react';

const LeadCaptureModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after 20 seconds
    const timer = setTimeout(() => setShow(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
        <button 
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
        >
          <XCircle className="w-8 h-8 drop-shadow-md" />
        </button>
        
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white text-center">
          <h3 className="text-3xl font-black">Get 5% Off! ✈️</h3>
          <p className="text-white/90 mt-2">Sign up for our newsletter and get a discount on your first processing fee.</p>
        </div>
        
        <div className="p-8 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
          
          <button className="w-full py-4 text-white font-bold rounded-xl bg-slate-900 hover:bg-slate-800 transition-all shadow-lg">
            Claim My Discount
          </button>
          <p className="text-xs text-center text-slate-400">We respect your inbox. No spam.</p>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;