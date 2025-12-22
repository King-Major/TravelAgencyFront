import React from 'react';
import { FileCheck, Globe, ClipboardList, CheckCircle2, ArrowRight } from 'lucide-react';

const VisaInfo = () => {
  const documents = [
    "Valid Passport (6+ months validity)",
    "Recent Passport Photographs",
    "6 Months Bank Statements",
    "Employment Letter / Business Docs",
    "Flight Itinerary & Hotel Reservations"
  ];

  const destinations = ["UK", "USA", "Canada", "Schengen", "Dubai", "Australia", "Turkey"];

  return (
    <section id="visa" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-xl mb-4">
            <Globe className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visa Consultation Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide expert guidance and end-to-end assistance for visa applications 
            to **all countries** from Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Popular Destinations */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Popular Destinations</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {destinations.map((country) => (
                <span 
                  key={country} 
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-full border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-colors cursor-default"
                >
                  {country}
                </span>
              ))}
              <span className="px-4 py-2 bg-gray-100 text-gray-600 font-medium rounded-full border border-gray-200">
                & Many More
              </span>
            </div>

            <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
              <h4 className="font-bold mb-2 flex items-center">
                Need Fast-Track? <ArrowRight className="ml-2 w-4 h-4" />
              </h4>
              <p className="text-sm text-gray-400">
                Our consultants stay updated with the latest immigration policies to ensure 
                your application is professional and error-free.
              </p>
            </div>
          </div>

          {/* Right Side: Documents */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <ClipboardList className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">General Requirements</h3>
            </div>

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-indigo-50/50 transition-colors group">
                  <div className="mt-1">
                    <FileCheck className="w-5 h-5 text-indigo-500 group-hover:text-indigo-600" />
                  </div>
                  <span className="text-gray-700 font-medium leading-tight">{doc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center lg:text-left">
              <p className="text-indigo-600 font-bold text-lg mb-4">
                Ready to start your journey?
              </p>
              <a 
                href="#contact" 
                className="inline-block w-full py-4 bg-indigo-600 text-white text-center rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
              >
                Get Personalized Assistance
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisaInfo;