import React, { useState, useEffect } from 'react';
import { Compass, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const API_URL = 'https://travelagency-xfli.onrender.com/api';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Removing 'featured=true' to show all tours on the dedicated page
    fetch(`${API_URL}/tours`)
      .then(r => r.json())
      .then(data => {
        setTours(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      
      {/* Hero */}
      <div className="relative h-[40vh] bg-slate-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center justify-center p-3 bg-orange-600/20 border border-orange-500/30 backdrop-blur-md rounded-full mb-6">
            <Compass className="w-6 h-6 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Adventure Awaits</h1>
          <p className="text-xl text-slate-300">Discover curated tour packages designed for explorers.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        ) : tours.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-slate-500">New tour packages are being curated. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map(tour => (
              <div key={tour._id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col group h-full">
                {/* Image Header */}
                <div className="h-64 relative bg-slate-800 overflow-hidden">
                  {/* Fallback pattern if no image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-slate-600" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-1">{tour.title}</h3>
                    <div className="flex items-center text-orange-400 text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-1" /> {tour.destination}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-6 mb-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>Group Tour</span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-3">
                    Experience the beauty of {tour.destination} with our comprehensive tour package. Includes guided visits, transportation, and more.
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Price</span>
                      <div className="text-2xl font-black text-slate-900">₦{tour.price.toLocaleString()}</div>
                    </div>
                    <button 
                      onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                      className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div id="contact-section" className="bg-white border-t border-slate-200">
         <ContactForm />
      </div>
    </div>
  );
};

export default Tours;