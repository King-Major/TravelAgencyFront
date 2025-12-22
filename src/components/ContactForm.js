import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://travelagency-xfli.onrender.com/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'flight',
    destinations: '',
    travelDates: '',
    travelersCount: '',
    budget: '',
    tripPurpose: '',
    preferredFlight: '',
    needTour: 'Not sure',
    visaCountry: '',
    visaType: '',
    specialRequests: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post(`${API_URL}/inquiries`, {
        ...formData,
        destinations: formData.destinations.split(',').map(d => d.trim()).filter(d => d)
      });
      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', inquiryType: 'flight',
        destinations: '', travelDates: '', travelersCount: '', budget: '',
        tripPurpose: '', preferredFlight: '', needTour: 'Not sure',
        visaCountry: '', visaType: '', specialRequests: ''
      });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Get Your Personalized Travel Quote</h2>
        <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12">
          Tell us about your dream trip – we'll handle the rest!
        </p>

        {status === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 sm:px-6 sm:py-4 rounded mb-6 sm:mb-8 text-center text-lg sm:text-xl">
            Thank you! We've received your request. Our team will contact you within 24 hours.
          </div>
        )}
        {status === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 sm:px-6 sm:py-4 rounded mb-6 sm:mb-8 text-center">
            Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-xl grid gap-4 sm:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input required placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" />
            <input required type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" />
            <input required placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" />
            <select value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg">
              <option value="flight">Flight Inquiry</option>
              <option value="hotel">Hotel Request</option>
              <option value="tour">Nigerian Tour</option>
              <option value="visa">Visa Assistance</option>
              <option value="custom-trip">Custom Trip</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <textarea placeholder="Destinations (e.g. Dubai, London)" value={formData.destinations} onChange={e => setFormData({...formData, destinations: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" rows="2" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <input placeholder="Travel Dates" value={formData.travelDates} onChange={e => setFormData({...formData, travelDates: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" />
            <input type="number" placeholder="Number of Travelers" value={formData.travelersCount} onChange={e => setFormData({...formData, travelersCount: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" />
            <input placeholder="Budget (optional)" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" />
          </div>

          {formData.inquiryType === 'visa' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input placeholder="Country Applying To" value={formData.visaCountry} onChange={e => setFormData({...formData, visaCountry: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" />
              <input placeholder="Visa Type (Tourist, Student, etc.)" value={formData.visaType} onChange={e => setFormData({...formData, visaType: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" />
            </div>
          )}

          <textarea placeholder="Special Requests / Trip Details" value={formData.specialRequests} onChange={e => setFormData({...formData, specialRequests: e.target.value})} className="border border-gray-300 p-3 sm:p-4 rounded-lg" rows="4 sm:rows-5" />

          <button type="submit" className="bg-blue-700 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 rounded-lg hover:bg-blue-800 transition">
            Send Request – Get Quote in 24 Hours
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;