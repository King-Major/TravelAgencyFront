import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Clock, MapPin, Users, ArrowRight, Info, HeadphonesIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const API_URL = 'https://travelagency-xfli.onrender.com/api';
// Define the WhatsApp number
const WHATSAPP_NUMBER = "2347031199713";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Removing 'featured=true' to show all tours on the dedicated page
    fetch(`${API_URL}/tours`)
      .then(r => r.json())
      .then(data => {
        setTours(data.data || []);
        console.log(data.data)
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Helper function to generate the dynamic WhatsApp link for tours
  const generateWhatsAppLink = (tour) => {
    const message = `Hello, I'm interested in booking a tour package. Here are the details:\n\n` +
      `🌍 *Tour Name:* ${tour.title || 'N/A'}\n` +
      `📍 *Destination:* ${tour.destination || 'N/A'}\n` +
      `⏱ *Duration:* ${tour.duration || 'N/A'}\n` +
      `💰 *Price:* ₦${tour.price ? Number(tour.price).toLocaleString() : 'N/A'}\n\n` +
      `Can you provide more information or help me book this?`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

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
        
        {/* Booking Funnel Expectation Banner */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start sm:items-center gap-4">
          <div className="p-2 bg-blue-100 rounded-full shrink-0">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Seamless Booking Experience</h3>
            <p className="text-sm text-blue-800 mt-1">
              Found your perfect adventure? Clicking the <strong>arrow button</strong> will connect you directly with our friendly representatives on WhatsApp to quickly finalize your details and secure your spot.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        ) : tours.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
            <Compass className="w-16 h-16 text-slate-300 mx-auto mb-4" />
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
                      {/* Added Number() to safely handle string prices like "300000" */}
                      <div className="text-2xl font-black text-slate-900">₦{Number(tour.price).toLocaleString()}</div>
                    </div>
                    
                    {/* External Link for WhatsApp */}
                    <a 
                      href={generateWhatsAppLink(tour)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center"
                    >
                      <ArrowRight className="w-6 h-6" />
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
              <h3 className="text-xl font-bold text-slate-900">Don't see your preferred destination?</h3>
            </div>
            <p className="text-slate-600">
              No problem! Let us know your specific travel dreams. Fill out our quick request form and our dedicated travel experts will get back to you with tailored tour options <strong>within 24 hours</strong>.
            </p>
          </div>
          
          {/* React Router Link tag for internal navigation */}
          <Link 
            to="/contact" 
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
          >
            Request Custom Tour
          </Link>
        </div>

      </div>

      {/* <div id="contact-section" className="bg-white border-t border-slate-200">
         <ContactForm />
      </div> */}
    </div>
  );
};

export default Tours;