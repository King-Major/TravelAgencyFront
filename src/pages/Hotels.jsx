import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hotel, MapPin, Star, Wifi, Coffee, Car, ArrowRight, Info, HeadphonesIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const API_URL = 'https://travelagency-xfli.onrender.com/api';
// Define the WhatsApp number
const WHATSAPP_NUMBER = "2347031199713";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/hotels`)
      .then(r => r.json())
      .then(data => {
        setHotels(data.data || []);
        console.log(data.data)
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Helper function to generate the dynamic WhatsApp link for hotels
  const generateWhatsAppLink = (hotel) => {
    // Safely join amenities if they exist, otherwise show 'N/A'
    const amenitiesList = hotel.amenities && hotel.amenities.length > 0 
      ? hotel.amenities.join(', ') 
      : 'N/A';

    const message = `Hello, I'm interested in booking a hotel room. Here are the details:\n\n` +
      `🏨 *Hotel Name:* ${hotel.name || 'N/A'}\n` +
      `📍 *Location:* ${hotel.destination || 'N/A'}\n` +
      `🏢 *Address:* ${hotel.address || 'N/A'}\n` +
      `✨ *Amenities:* ${amenitiesList}\n` +
      `💰 *Price Range:* ₦${hotel.priceRange || 'N/A'}\n\n` +
      `Are there rooms available for my dates?`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-slate-900 py-16 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Luxury Stays & Suites</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Experience world-class hospitality in Nigeria's finest hotels.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Booking Funnel Expectation Banner */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start sm:items-center gap-4">
          <div className="p-2 bg-blue-100 rounded-full shrink-0">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Seamless Booking Experience</h3>
            <p className="text-sm text-blue-800 mt-1">
              Found your perfect stay? Clicking <strong>"Reserve"</strong> will connect you directly with our friendly representatives on WhatsApp to quickly finalize your details and secure your room.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        ) : !hotels || hotels.length === 0 ? (
          <div className="text-center text-slate-500 py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
             <Hotel className="w-16 h-16 text-slate-300 mx-auto mb-4" />
             <p className="text-xl text-slate-500">No hotels available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, idx) => (
              <div key={hotel._id || idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden bg-slate-200 flex-shrink-0">
                  {hotel.photos && hotel.photos.length > 0 ? (
                    // Using the first photo in the array if available
                    <img src={hotel.photos[0]} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                <div className="p-6 flex flex-col flex-1">
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
                  <div className="flex gap-4 mb-6 pt-4 border-t border-slate-100 mt-auto">
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

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-xs text-slate-400 block">Per Night</span>
                      {/* Price range is already a string like "2000 - 30000", so we leave it as is */}
                      <span className="text-2xl font-bold text-orange-600">₦{hotel.priceRange}</span>
                    </div>
                    
                    {/* External Link for WhatsApp */}
                    <a 
                      href={generateWhatsAppLink(hotel)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors inline-block text-center"
                    >
                      Reserve
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
              <h3 className="text-xl font-bold text-slate-900">Don't see your preferred hotel?</h3>
            </div>
            <p className="text-slate-600">
              No problem! Let us know your specific accommodation needs. Fill out our quick request form and our dedicated travel experts will get back to you with tailored hotel options <strong>within 24 hours</strong>.
            </p>
          </div>
          
          {/* React Router Link tag for internal navigation */}
          <Link 
            to="/contact" 
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
          >
            Request Custom Stay
          </Link>
        </div>

      </div>

      {/* <div id="contact-section" className="bg-white border-t border-slate-200">
        <ContactForm />
      </div> */}
    </div>
  );
};

export default Hotels;