import React, { useState } from 'react';
import axios from 'axios';
import { 
  Send, Loader2, Plane, Hotel, Globe, CreditCard, 
  Sparkles, MessageSquare, User, Mail, Phone, 
  MapPin, Calendar, Users, Wallet, FileText 
} from 'lucide-react';

const API_URL = 'https://travelagency-xfli.onrender.com/api';

const INQUIRY_OPTIONS = [
  { id: 'flight', label: 'Flight Booking', icon: Plane },
  { id: 'hotel', label: 'Hotel Reservation', icon: Hotel },
  { id: 'tour', label: 'Tour Package', icon: Globe },
  { id: 'visa', label: 'Visa Assistance', icon: CreditCard },
  { id: 'custom-service', label: 'Custom Service', icon: Sparkles },
  { id: 'general', label: 'General Inquiry', icon: MessageSquare }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', 
    inquiryType: [], 
    destinations: '', travelDates: '', travelersCount: '', budget: '',
    visaCountry: '', visaType: '', specialRequests: ''
  });

  const [status, setStatus] = useState('idle'); 
  const [formError, setFormError] = useState('');

  const handleTypeToggle = (typeId) => {
    setFormData((prev) => {
      const currentTypes = prev.inquiryType;
      if (currentTypes.includes(typeId)) {
        return { ...prev, inquiryType: currentTypes.filter(id => id !== typeId) };
      } else {
        return { ...prev, inquiryType: [...currentTypes, typeId] };
      }
    });
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.inquiryType.length === 0) {
      setFormError('Please select at least one area you need help with so we can route your request accurately.');
      // Scroll to error visually
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setStatus('sending');
    setFormError('');

    try {
      await axios.post(`${API_URL}/inquiries`, {
        ...formData,
        destinations: formData.destinations ? formData.destinations.split(',').map(d => d.trim()) : []
      });
      
      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', inquiryType: [], 
        destinations: '', travelDates: '', travelersCount: '', budget: '',
        visaCountry: '', visaType: '', specialRequests: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      {/* 1. HERO SECTION (Matches Home Component) */}
      <section className="relative pt-32 pb-48 bg-slate-900 -mt-20 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
            alt="Travel Planning" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
            
            <span className="text-orange-50 font-medium text-sm">Fast, tailored quotes in 24 hours</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Let's Plan Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Perfect Journey</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Tell us where you want to go and what you need. Our experts will craft a custom itinerary and handle all the complex logistics.
          </p>
        </div>
      </section>

      {/* 2. FUNNEL FORM SECTION */}
      <section className="relative z-20 -mt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-6 md:p-12 border border-slate-100">
          
          {/* STATUS MESSAGES */}
          {status === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl text-green-800 text-center animate-in fade-in slide-in-from-bottom-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Send className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-1">Request Received!</h3>
              <p className="font-medium text-green-700">We're reviewing your details and will contact you within 24 hours.</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center font-medium animate-in fade-in">
              ❌ Something went wrong linking to the server. Please check your connection and try again.
            </div>
          )}

          {formError && (
            <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-800 text-center font-medium animate-in fade-in">
              ⚠️ {formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* STEP 1: FUNNEL SELECTION */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-1 block">Step 1</span>
                <h3 className="text-2xl font-bold text-slate-900">What are you looking for?</h3>
                <p className="text-slate-500 text-sm">Select all the services you require for this trip.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {INQUIRY_OPTIONS.map((option) => {
                  const isSelected = formData.inquiryType.includes(option.id);
                  const Icon = option.icon;
                  return (
                    <div 
                      key={option.id}
                      onClick={() => handleTypeToggle(option.id)}
                      className={`cursor-pointer p-4 md:p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 group ${
                        isSelected 
                          ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-md shadow-orange-500/10' 
                          : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-orange-200 hover:bg-white hover:shadow-lg'
                      }`}
                    >
                      <Icon className={`w-8 h-8 transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110 group-hover:text-orange-500'}`} />
                      <span className={`font-semibold text-sm md:text-base ${isSelected ? 'text-orange-900' : 'text-slate-700'}`}>
                        {option.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* STEP 2: TRIP DETAILS */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-1 block">Step 2</span>
                <h3 className="text-2xl font-bold text-slate-900">Trip specifics</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input placeholder="Destinations (e.g. Dubai, Paris)" value={formData.destinations} onChange={e => setFormData({...formData, destinations: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input placeholder="Estimated Travel Dates" type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} value={formData.travelDates} onChange={e => setFormData({...formData, travelDates: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="number" placeholder="Number of Travelers" value={formData.travelersCount} onChange={e => setFormData({...formData, travelersCount: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="relative">
                  <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input placeholder="Estimated Budget (Optional)" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              {/* CONDITIONAL VISA FUNNEL STEP */}
              {formData.inquiryType.includes('visa') && (
                <div className="grid md:grid-cols-2 gap-6 bg-orange-50 p-6 md:p-8 rounded-2xl border border-orange-100 animate-in slide-in-from-top-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <FileText className="w-32 h-32" />
                  </div>
                  <div className="md:col-span-2 mb-2">
                    <h4 className="font-bold text-orange-900 flex items-center"><FileText className="w-5 h-5 mr-2" /> Visa Requirements</h4>
                    <p className="text-orange-700 text-sm">Since you selected Visa Assistance, please provide these details.</p>
                  </div>
                  <input required placeholder="Target Country for Visa" value={formData.visaCountry} onChange={e => setFormData({...formData, visaCountry: e.target.value})} className="w-full p-4 bg-white rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none relative z-10" />
                  <input required placeholder="Visa Type (Tourist, Student, Work)" value={formData.visaType} onChange={e => setFormData({...formData, visaType: e.target.value})} className="w-full p-4 bg-white rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none relative z-10" />
                </div>
              )}

              <div>
                <textarea placeholder="Any special requests, preferred airlines, or specific hotel requirements? Let us know here..." value={formData.specialRequests} onChange={e => setFormData({...formData, specialRequests: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none" rows="4" />
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* STEP 3: CONTACT INFO */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-1 block">Step 3</span>
                <h3 className="text-2xl font-bold text-slate-900">Your Details</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input required placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="relative md:col-span-2">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input required placeholder="Phone Number (with country code)" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="pt-4">
              <button disabled={status === 'sending'} type="submit" className="w-full py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer">
                {status === 'sending' ? <Loader2 className="animate-spin mr-3 w-6 h-6" /> : <Send className="mr-3 w-6 h-6" />}
                {status === 'sending' ? 'Generating Your Profile...' : 'Submit Trip Inquiry'}
              </button>
              <p className="text-center text-slate-400 text-sm mt-4 font-medium">
                🔒 Your information is secure and encrypted.
              </p>
            </div>

          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;