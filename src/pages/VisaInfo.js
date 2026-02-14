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
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-2xl mb-4">
            <Globe className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Visa Consultation Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expert guidance for your visa applications. We navigate the complexities of immigration so you don't have to.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Popular Destinations */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-600 p-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Popular Destinations</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {destinations.map((country) => (
                <span key={country} className="px-4 py-2 bg-orange-50 text-orange-700 font-bold text-sm rounded-full hover:bg-orange-600 hover:text-white transition-colors cursor-default">
                  {country}
                </span>
              ))}
              <span className="px-4 py-2 bg-slate-100 text-slate-600 font-medium text-sm rounded-full">
                & Many More
              </span>
            </div>

            <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
              <h4 className="font-bold mb-2 flex items-center text-orange-400">
                Need Fast-Track? <ArrowRight className="ml-2 w-4 h-4" />
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our consultants stay updated with the latest immigration policies to ensure your application is professional and error-free.
              </p>
            </div>
          </div>

          {/* Right Side: Documents */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-600 p-2 rounded-lg">
                <ClipboardList className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">General Requirements</h3>
            </div>

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 hover:bg-orange-50 transition-colors group">
                  <div className="mt-1">
                    <FileCheck className="w-5 h-5 text-slate-400 group-hover:text-orange-500" />
                  </div>
                  <span className="text-slate-700 font-medium leading-tight">{doc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="/#contact" className="block w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center rounded-xl font-bold shadow-lg shadow-orange-200 hover:scale-[1.02] transition-transform">
                Start My Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInfo;