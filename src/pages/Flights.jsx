import React, { useState, useEffect } from 'react';
import { Plane, Calendar, Clock, ArrowRight, Filter, Info, HeadphonesIcon } from 'lucide-react';

const API_URL = 'https://travelagency-xfli.onrender.com/api';
// Define the WhatsApp number here
const WHATSAPP_NUMBER = "2347031199713";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/flights`)
      .then(r => r.json())
      .then(data => {
        setFlights(data.data || []);
        console.log(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Helper function to generate the dynamic WhatsApp link
  const generateWhatsAppLink = (flight) => {
    const message = `Hello, I'm interested in booking a flight. Here are the details:\n\n` +
      `✈️ *Airline:* ${flight.airline || 'N/A'}\n` +
      `📍 *Route:* ${flight.from} to ${flight.to}\n` +
      `📅 *Date:* ${flight.date || 'N/A'}\n` +
      `🕒 *Time:* ${flight.departureTime} - ${flight.arrivalTime}\n` +
      `💰 *Price:* ₦${flight.price ? flight.price.toLocaleString() : 'N/A'}\n\n` +
      `Can we continue the discussion?`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

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
        </div>
      </div>

      {/* Flights Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Booking Funnel Expectation Banner */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start sm:items-center gap-4">
          <div className="p-2 bg-blue-100 rounded-full shrink-0">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Seamless Booking Experience</h3>
            <p className="text-sm text-blue-800 mt-1">
              Found your perfect flight? Clicking <strong>"Book Ticket"</strong> will connect you directly with our friendly representatives on WhatsApp to quickly finalize your details and secure your seat.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Available Routes</h2>
          <button className="flex items-center space-x-2 text-slate-500 hover:text-orange-600 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter Results</span>
          </button>
        </div>

        {/* Flights Grid */}
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

                  {/* Right: Price & Action */}
                  <div className="bg-slate-900 p-6 md:w-64 flex flex-col justify-center items-center text-center border-l border-slate-800">
                    <p className="text-slate-400 text-sm mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-white mb-6">₦{flight.price ? flight.price.toLocaleString() : '0'}</p>
                    
                    <a 
                      href={generateWhatsAppLink(flight)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Book Ticket <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Can't Find What You're Looking For Banner */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 sm:flex sm:items-center sm:justify-between shadow-sm">
          <div className="sm:text-left mb-6 sm:mb-0 flex-1 pr-4">
            <div className="flex items-center gap-3 mb-2">
              <HeadphonesIcon className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-slate-900">Don't see your preferred flight?</h3>
            </div>
            <p className="text-slate-600">
              No problem! Let us know your specific travel needs. Fill out our quick request form and our dedicated travel experts will get back to you with tailored flight options <strong>within 24 hours</strong>.
            </p>
          </div>
          
          {/* Note: Update the href below to match your actual contact page route. */}
          {/* If you are using React Router, you can swap this <a> tag for a <Link to="/contact"> */}
          <a 
            href="/contact" 
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
          >
            Request Custom Flight
          </a>
        </div>
      </div>
    </div>
  );
};

export default Flights;