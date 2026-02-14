import React, { useState, useEffect } from 'react';
import { Plane, Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const API_URL = 'https://travelagency-xfli.onrender.com/api';

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/flights`)
      .then(r => r.json())
      .then(data => {
        setFlights(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Page Header */}
      <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-orange-600 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Find Your Next Flight</h1>
          </div>
          
          {/* Mock Search Bar for Professional Look */}
          <div className="mt-8 bg-white p-2 rounded-xl flex flex-col md:flex-row gap-2 shadow-xl max-w-4xl">
            <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input type="text" placeholder="Where are you flying to?" className="bg-transparent w-full outline-none text-slate-700" />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
              <Calendar className="w-5 h-5 text-slate-400 mr-3" />
              <input type="text" placeholder="Travel Date" className="bg-transparent w-full outline-none text-slate-700" />
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all">
              Search Flights
            </button>
          </div>
        </div>
      </div>

      {/* Flights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Available Routes</h2>
          <button className="flex items-center space-x-2 text-slate-500 hover:text-orange-600 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter Results</span>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        ) : flights.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
            <Plane className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-xl text-slate-500">No flights currently scheduled.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {flights.map(flight => (
              <div key={flight._id} className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 overflow-hidden group">
                <div className="flex flex-col md:flex-row">
                  {/* Left: Flight Info */}
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded-full tracking-wider">
                        {flight.airline || 'Airline'}
                      </span>
                      <span className="text-sm font-mono text-slate-400">{flight.flightNumber}</span>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-start gap-4 md:gap-12 mb-6">
                      <div className="text-center md:text-left">
                        <div className="text-2xl font-black text-slate-900">{flight.from}</div>
                        <div className="text-xs text-slate-500 font-medium">Departure</div>
                      </div>
                      
                      <div className="flex flex-col items-center px-4">
                        <div className="w-20 md:w-32 h-[1px] bg-slate-300 relative">
                          <Plane className="w-4 h-4 text-orange-500 absolute -top-2 right-1/2 translate-x-1/2 rotate-90" />
                        </div>
                        <span className="text-xs text-orange-600 font-medium mt-2">Direct</span>
                      </div>

                      <div className="text-center md:text-right">
                        <div className="text-2xl font-black text-slate-900">{flight.to}</div>
                        <div className="text-xs text-slate-500 font-medium">Arrival</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        {flight.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        {flight.departureTime}
                      </div>
                    </div>
                  </div>

                  {/* Right: Price & Action (Blue Background) */}
                  <div className="bg-slate-900 p-6 md:w-64 flex flex-col justify-center items-center text-center border-l border-slate-800">
                    <p className="text-slate-400 text-sm mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-white mb-6">₦{flight.price.toLocaleString()}</p>
                    <button 
                      onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                      className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Book Ticket <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Section for Booking */}
      <div id="contact-section" className="bg-white border-t border-slate-200">
         <ContactForm />
      </div>
    </div>
  );
};

export default Flights;