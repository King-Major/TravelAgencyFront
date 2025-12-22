
import React, { useState, useRef, useEffect } from 'react';
import {Send, MapPin, Calendar, Users, Star, Menu, X, MessageCircle, Sparkles, TrendingUp, Globe, Heart, Plane, Hotel, Compass, Mail, Phone, User, Zap, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import ContactForm from '../components/ContactForm';


const API_URL = 'https://travelagency-xfli.onrender.com/api';

export default function TravelLandingPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm your AI travel assistant. I can help you find flights, hotels, or amazing World tours. What interests you? ✈️" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);
  
  // API Data States
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    destination: '',
    travelDate: '',
    travelersCount:'',
    budget:'',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [flightsRes, hotelsRes, toursRes] = await Promise.all([
          fetch(`${API_URL}/flights`).then(r => r.json()).catch(() => ({ data: [] })),
          fetch(`${API_URL}/hotels`).then(r => r.json()).catch(() => ({ data: [] })),
          fetch(`${API_URL}/tours?featured=true`).then(r => r.json()).catch(() => ({ data: [] }))
        ]);
        
        setFlights(flightsRes.data || []);
        setHotels(hotelsRes.data || []);
        setTours(toursRes.data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const features = [
    { 
      icon: Zap, 
      title: 'Speedy Response', 
      desc: 'Get instant booking confirmations and 24/7 lightning-fast support for all your inquiries.' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Accountability', 
      desc: 'Transparent pricing and guaranteed bookings—we take full responsibility for your comfort.' 
    },
    { 
      icon: Award, 
      title: 'Excellence', 
      desc: 'Curated premium stays that meet the highest standards of luxury and hospitality.' 
    },
    { icon: Heart, title: '24/7 Support', desc: 'Real human assistance whenever you need it' }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
    
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let response = '';
      
      if (lowerInput.includes('flight')) {
        response = `I can help you with flights! We have ${flights.length} international flights available. Would you like to see specific destinations?`;
      } else if (lowerInput.includes('hotel')) {
        response = `Great! We offer luxury hotels in amazing destinations. How many guests will be traveling?`;
      } else if (lowerInput.includes('tour') || lowerInput.includes('World')) {
        response = `Wonderful! We have ${tours.length} featured World tours. Are you interested in cultural experiences, adventure, or relaxation?`;
      } else if (lowerInput.includes('visa')) {
        response = `We provide comprehensive visa assistance services. Which country are you planning to visit?`;
      } else {
        const responses = [
          "I can help you with flights, hotels, World tours, or visa assistance. What interests you most?",
          "Let me know your travel preferences and I'll find the perfect package for you!",
          "Tell me more about your ideal trip - budget, destination preferences, or travel dates?",
        ];
        response = responses[Math.floor(Math.random() * responses.length)];
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 800);
    
    setInputValue('');
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,

    // REQUIRED BY MODEL
    inquiryType: formData.service,

    // MODEL EXPECTS ARRAY
    destinations: formData.destination
      ? [formData.destination]
      : [],

    travelDates: formData.travelDate,
    travelersCount: Number(formData.travelersCount),
    budget: formData.budget,

    // MESSAGE → specialRequests
    specialRequests: formData.message
  };


    try {
      await fetch(`${API_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      setFormSubmitted(true);
      setFormData({  name: '',
      email: '',
      phone: '',
      service: '',
      destination: '',
      travelDate: '',
      travelersCount: '',
      budget: '',
      message: '' });
      
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-70"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  The Fastest Travel Planning
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Explore the World
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  with Confidence
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                International Flights • Luxury Hotels • World Tours • Visa Assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setChatOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with AI Assistant</span>
                </button>
                <a 
                  href="#contact"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  Plan My Trip
                </a>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
                alt="Tropical paradise"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Verified Reviews</div>
                    <div className="text-sm text-gray-600">Trusted by 50,000+ travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon; 
              
              return (
                <div key={idx} className="group p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flights Section */}
      <section id="flights" className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Plane className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Available International Flights
              </h2>
            </div>
            <p className="text-xl text-gray-600">Explore our curated selection of international routes</p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : flights.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <p className="text-xl text-gray-600">No flights available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flights.map(flight => (
                <div key={flight._id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Plane className="w-8 h-8" />
                      <span className="text-sm font-semibold">{flight.flightNumber}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{flight.from} → {flight.to}</h3>
                    <p className="text-sm opacity-90">{flight.airline}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-gray-600 mb-4">
                      <Calendar className="w-5 h-5" />
                      <span>{flight.date} | {flight.departureTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Starting from</span>
                      <span className="text-3xl font-bold text-blue-700">₦{flight.price.toLocaleString()}</span>
                    </div>
                    <button 
                     onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Compass className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Featured Tours
              </h2>
            </div>
            <p className="text-xl text-gray-600">Discover the beauty and culture of Nations</p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          ) : tours.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl shadow-lg">
              <p className="text-xl text-gray-600">Exciting tours coming soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map(tour => (
                <div key={tour._id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-400 to-pink-400 h-64 flex items-center justify-center text-white">
                      <MapPin className="w-24 h-24 opacity-50" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{tour.destination}</span>
                        <span className="text-sm">• {tour.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Starting from</span>
                        <span className="text-2xl font-bold">₦{tour.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hotels Section */}
      <section id="hotels" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Hotel className="w-8 h-8 text-indigo-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Luxury Stays in Nigeria
              </h2>
            </div>
            <p className="text-xl text-gray-600">Experience world-class hospitality and comfort</p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : !hotels || hotels.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl shadow-lg">
              <p className="text-xl text-gray-600">Premium accommodations coming soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel) => (
                <div key={hotel._id || hotel.name} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100">
                    
                    <div className="h-72 w-full relative">
                      {hotel.photos ? (
                        <img 
                          src={hotel.photos} 
                          alt={hotel.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                          <Hotel className="w-12 h-12 text-indigo-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">4.9</span>
                        </div>
                        <span className="text-[10px] uppercase bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                          {Array.isArray(hotel.amenities) 
                            ? hotel.amenities[0] 
                            : typeof hotel.amenities === 'string' 
                              ? hotel.amenities.split(',')[0] 
                              : 'Premium'}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-1 leading-tight">{hotel.name}</h3>
                      
                      <div className="flex items-start space-x-1 mb-4">
                        <MapPin className="w-4 h-4 text-indigo-300 mt-1 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{hotel.destination}</span>
                          <span className="text-xs text-gray-300 line-clamp-1">{hotel.address}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-white/20 pt-4">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400 uppercase tracking-tighter">Avg. per night</span>
                          <span className="text-2xl font-bold text-white">₦{hotel.priceRange}</span>
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-bold text-sm transition-all transform group-hover:scale-105">
                          View Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Plan Your Perfect Journey
      </h2>
      <p className="text-xl text-gray-600">Let us help you create unforgettable travel experiences</p>
    </div>

    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      {formSubmitted && (
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center text-lg font-medium">
          ✅ Thank you! We'll be in touch soon.
        </div>
      )}

      <form onSubmit={handleContactSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="+234 800 000 0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select a service</option>
              <option value="flight">International Flights</option>
              <option value="hotel">Hotel Booking</option>
              <option value="tour">Nigerian Tours</option>
              <option value="visa">Visa Assistance</option>
              <option value="general">Complete Package</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="e.g., Dubai, London, Paris"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Travelers
            </label>
            <input
              type="number"
              name="travelersCount"
              value={formData.travelersCount}
              onChange={handleInputChange}
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="e.g., 2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Budget (Optional)
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="$2000 - $3000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            placeholder="Tell us more about your travel plans, preferences, special requests..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  </div>
</section>

 

      {/* AI Chat Button (Floating) */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center z-40"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* AI Chatbot Interface */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">AI Travel Assistant</div>
                <div className="text-xs text-white/80">Always here to help</div>
              </div>
            </div>
            <button 
              onClick={() => setChatOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about flights, tours, hotels..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}