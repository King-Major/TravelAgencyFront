import React, { useState } from 'react';
import axios from 'axios';
import { Send, Loader2 } from 'lucide-react';

const API_URL = 'https://travelagency-xfli.onrender.com/api';

const INQUIRY_OPTIONS = [
  { id: 'flight', label: 'Flight Booking' },
  { id: 'hotel', label: 'Hotel Reservation' },
  { id: 'tour', label: 'Tour Package' },
  { id: 'visa', label: 'Visa Assistance' },
  { id: 'custom-service', label: 'Custom Service' },
  { id: 'general', label: 'General Inquiry' }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', 
    inquiryType: [], // Changed to an empty array
    destinations: '', travelDates: '', travelersCount: '', budget: '',
    visaCountry: '', visaType: '', specialRequests: ''
  });

  const [status, setStatus] = useState('idle'); 
  const [formError, setFormError] = useState('');

  // Helper function to toggle inquiry types in the array
  const handleTypeToggle = (typeId) => {
    setFormData((prev) => {
      const currentTypes = prev.inquiryType;
      if (currentTypes.includes(typeId)) {
        // Remove if already selected
        return { ...prev, inquiryType: currentTypes.filter(id => id !== typeId) };
      } else {
        // Add if not selected
        return { ...prev, inquiryType: [...currentTypes, typeId] };
      }
    });
    setFormError(''); // Clear error if they select something
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation: ensure at least one type is selected
    if (formData.inquiryType.length === 0) {
      setFormError('Please select at least one inquiry type.');
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
        name: '', email: '', phone: '', inquiryType: [], // Reset to empty array
        destinations: '', travelDates: '', travelersCount: '', budget: '',
        visaCountry: '', visaType: '', specialRequests: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get Your Travel Quote</h2>
            <p className="text-slate-600 mt-2">Tell us your plans, and we'll handle the logistics.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            
            {/* SUCCESS MESSAGE */}
            {status === 'success' && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center font-medium animate-in fade-in">
                    ✅ Request received! We will contact you within 24 hours.
                </div>
            )}
            
            {/* API ERROR MESSAGE */}
            {status === 'error' && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center font-medium animate-in fade-in">
                    ❌ Something went wrong. Please check your connection and try again.
                </div>
            )}

            {/* VALIDATION ERROR MESSAGE */}
            {formError && (
                <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-800 text-center font-medium animate-in fade-in">
                    ⚠️ {formError}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <input required placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                    <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <input required placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>

                {/* MULTI-SELECT CHECKBOX GRID */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-700 ml-1">What do you need help with? (Select all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {INQUIRY_OPTIONS.map((option) => {
                        const isSelected = formData.inquiryType.includes(option.id);
                        return (
                          <div 
                            key={option.id}
                            onClick={() => handleTypeToggle(option.id)}
                            className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center justify-center text-center ${
                              isSelected 
                                ? 'border-orange-500 bg-orange-50 text-orange-700 font-semibold' 
                                : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-orange-200'
                            }`}
                          >
                            {option.label}
                          </div>
                        );
                      })}
                    </div>
                </div>

                <textarea placeholder="Destinations (e.g. Dubai, London)" value={formData.destinations} onChange={e => setFormData({...formData, destinations: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" rows="2" />

                <div className="grid md:grid-cols-3 gap-6">
                    <input placeholder="Travel Date" type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} value={formData.travelDates} onChange={e => setFormData({...formData, travelDates: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                    <input type="number" placeholder="No. of Travelers" value={formData.travelersCount} onChange={e => setFormData({...formData, travelersCount: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                    <input placeholder="Budget (Optional)" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>

                {/* CONDITIONALLY RENDER IF 'VISA' IS IN THE ARRAY */}
                {formData.inquiryType.includes('visa') && (
                    <div className="grid md:grid-cols-2 gap-6 bg-orange-50 p-6 rounded-xl border border-orange-100 animate-in slide-in-from-top-4">
                        <input required placeholder="Target Country for Visa" value={formData.visaCountry} onChange={e => setFormData({...formData, visaCountry: e.target.value})} className="w-full p-4 bg-white rounded-xl border-none focus:ring-2 focus:ring-orange-500" />
                        <input required placeholder="Visa Type (Tourist, Student, etc.)" value={formData.visaType} onChange={e => setFormData({...formData, visaType: e.target.value})} className="w-full p-4 bg-white rounded-xl border-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                )}

                <textarea placeholder="Special requests or additional details..." value={formData.specialRequests} onChange={e => setFormData({...formData, specialRequests: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" rows="4" />

                <button disabled={status === 'sending'} type="submit" className="w-full py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center disabled:opacity-70">
                    {status === 'sending' ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" />}
                    {status === 'sending' ? 'Sending Request...' : 'Submit Inquiry'}
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;