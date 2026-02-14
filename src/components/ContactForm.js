import React, { useState } from 'react';
import axios from 'axios';
import { Send, Loader2 } from 'lucide-react';

const API_URL = 'https://travelagency-xfli.onrender.com/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', inquiryType: 'flight',
    destinations: '', travelDates: '', travelersCount: '', budget: '',
    visaCountry: '', visaType: '', specialRequests: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await axios.post(`${API_URL}/inquiries`, {
        ...formData,
        destinations: formData.destinations ? formData.destinations.split(',').map(d => d.trim()) : []
      });
      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', inquiryType: 'flight',
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
            
            {/* ERROR MESSAGE */}
            {status === 'error' && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center font-medium animate-in fade-in">
                    ❌ Something went wrong. Please check your connection and try again.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <input required placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                    <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <input required placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                    <select value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all">
                        <option value="flight">Flight Booking</option>
                        <option value="hotel">Hotel Reservation</option>
                        <option value="tour">Tour Package</option>
                        <option value="visa">Visa Assistance</option>
                        <option value="general">General Inquiry</option>
                    </select>
                </div>

                <textarea placeholder="Destinations (e.g. Dubai, London)" value={formData.destinations} onChange={e => setFormData({...formData, destinations: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" rows="2" />

                <div className="grid md:grid-cols-3 gap-6">
                    <input placeholder="Travel Date" type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} value={formData.travelDates} onChange={e => setFormData({...formData, travelDates: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                    <input type="number" placeholder="No. of Travelers" value={formData.travelersCount} onChange={e => setFormData({...formData, travelersCount: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                    <input placeholder="Budget (Optional)" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>

                {formData.inquiryType === 'visa' && (
                    <div className="grid md:grid-cols-2 gap-6 bg-orange-50 p-6 rounded-xl">
                        <input placeholder="Target Country" value={formData.visaCountry} onChange={e => setFormData({...formData, visaCountry: e.target.value})} className="w-full p-4 bg-white rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-500" />
                        <input placeholder="Visa Type (Tourist, Student)" value={formData.visaType} onChange={e => setFormData({...formData, visaType: e.target.value})} className="w-full p-4 bg-white rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-500" />
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