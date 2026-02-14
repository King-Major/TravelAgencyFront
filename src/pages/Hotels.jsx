import React, { useState, useEffect } from 'react';
import { Hotel, MapPin, Star, Wifi, Coffee, Car, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const API_URL = 'https://travelagency-xfli.onrender.com/api';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/hotels`)
      .then(r => r.json())
      .then(data => {
        setHotels(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-slate-900 py-16 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Luxury Stays & Suites</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Experience world-class hospitality in Nigeria's finest hotels.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        ) : !hotels || hotels.length === 0 ? (
          <div className="text-center text-slate-500">No hotels available at the moment.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, idx) => (
              <div key={hotel._id || idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  {hotel.photos ? (
                    <img src={hotel.photos} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400">
                        <Hotel className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                    <Star className="w-3 h-3 text-orange-500 fill-orange-500 mr-1" />
                    <span className="text-xs font-bold text-slate-900">4.8</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">{hotel.name}</h3>
                      <div className="flex items-center text-slate-500 text-sm">
                        <MapPin className="w-3 h-3 mr-1 text-orange-500" />
                        {hotel.destination}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 mb-6 line-clamp-2">{hotel.address}</p>

                  {/* Amenities (Mock for design) */}
                  <div className="flex gap-4 mb-6 pt-4 border-t border-slate-100">
                    <div className="flex flex-col items-center text-slate-400">
                        <Wifi className="w-4 h-4 mb-1" />
                        <span className="text-[10px]">Wifi</span>
                    </div>
                    <div className="flex flex-col items-center text-slate-400">
                        <Coffee className="w-4 h-4 mb-1" />
                        <span className="text-[10px]">Breakfast</span>
                    </div>
                    <div className="flex flex-col items-center text-slate-400">
                        <Car className="w-4 h-4 mb-1" />
                        <span className="text-[10px]">Parking</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Per Night</span>
                      <span className="text-2xl font-bold text-orange-600">₦{hotel.priceRange}</span>
                    </div>
                    <button 
                      onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
                    >
                      Reserve
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

export default Hotels;