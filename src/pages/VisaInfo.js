import React, { useState } from 'react';
import { 
  FileCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  MapPin,
  CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VisaInfo = () => {
  const [activeTab, setActiveTab] = useState('sa-evisa');

  // Visa specific data based on the provided requirements
  const visaProtocols = {
    'sa-evisa': {
      country: "South Africa",
      type: "E-Visa",
      processingTime: "8-10 business days",
      requirements: [
        "International Passport Data-page",
        "Passport photo (white background)",
        "Yellow Fever card (Front and inside pages)",
        "Invitation letter (If applicable)"
      ],
      notes: [
        "Duration of stay is subject to Immigration discretion.",
        "Ensure you have a clean immigration history with SA (No rejections, overstays, arrests, deportations, or bans)."
      ]
    },
    'sa-sticker': {
      country: "South Africa",
      type: "Sticker Visa",
      processingTime: "Minimum 3 work weeks after submission",
      requirements: [
        "Application Form",
        "Two identical passport photographs (white background)",
        "Valid Int'l passport (valid for at least 6 months)",
        "Applicant's passport data page, existing visas, and previously issued visas",
        "Employment letter and work I.D card",
        "Self Introduction & Company Introduction letters",
        "CAC documents (For entrepreneurs/company sponsored)",
        "6 months Payslips",
        "Yellow Fever vaccination Card (Front and inside) with letter from Port Health Services",
        "6 months recent Bank Statement (Signed and stamped by the bank) with a reference letter",
        "Company 6 months bank statement & Sponsor letter (If sponsored)",
        "Marriage certificate / Childbirth certificate (If applicable)",
        "Invitation letter & Passport data-page of the host"
      ],
      notes: [
        "Visa issuance is strictly at the discretion of the consular.",
        "A fixed VFS Fee will be paid directly by you via POS on the day of submission at the Application center.",
        "Other documents may be required based on the peculiarity of your application."
      ]
    },
    'zambia': {
      country: "Zambia",
      type: "Single Entry Visa",
      processingTime: "7-10 working days after submission",
      requirements: [
        "Application Form",
        "Two identical passport size photographs (White background)",
        "Valid passport (valid for at least 6 months)",
        "Copy of passport data page and copies of existing/previously issued visas",
        "Company & Self Introduction letters",
        "Signed Cover letter addressed to the Director General of Immigration of Zambia",
        "Yellow fever card (Front and inside page)",
        "Six months recent bank statement (Signed and stamped by the bank)",
        "Marriage certificate (If applicable)",
        "Letter of consent from husband (For women traveling without their husband)",
        "Letter of consent from parents (For minors not traveling with parents)",
        "Residency Permit (For non-Nigerians)"
      ],
      notes: [
        "Other documents may be requested based on the peculiarity of your application."
      ]
    },
    'morocco': {
      country: "Morocco",
      type: "Standard Visa",
      processingTime: "Standard Processing",
      requirements: [
        "Passport Photo (35 × 45mm)",
        "International Passport data page",
        "Any visa copy or resident permit you have for the UK or US"
      ],
      notes: []
    },
    'uk': {
      country: "United Kingdom",
      type: "Visitor Visa",
      processingTime: "Varies by application",
      requirements: [
        "Valid passport or travel document (must be valid for the whole of your stay)",
        "Proof you'll leave the UK at the end of your visit",
        "Proof you're able to support yourself and your dependants (or have external funding)",
        "Proof you're able to pay for your return or onward journey (or have external funding)"
      ],
      notes: [
        "You must not live in the UK for extended periods through frequent or successive visits, or make the UK your main home."
      ]
    },
    'canada': {
      country: "Canada",
      type: "Visitor Visa",
      processingTime: "Varies by embassy",
      requirements: [
        "Valid passport (make sure it isn't due to expire before the end of your visit)",
        "National identity card",
        "Letter of invitation from your host and proof of your relationship to them",
        "Employment information (name, address, tenure; employer letter recommended)",
        "Financial information (bank/investment statements for the past six months)",
        "Trip details (arrival/departure dates, accommodation, planned itinerary)",
        "Travel history (past 5 years of travel, and places lived outside home country for 6+ months)"
      ],
      notes: [
        "Core Eligibility: You must be in good health and not have a criminal record.",
        "You must demonstrate strong ties to your home country and clear intent to leave Canada.",
        "Ensure you have enough verifiable funds for your stay."
      ]
    },
    'schengen': {
      country: "Schengen Area",
      type: "Visitor or Tourist Visa",
      processingTime: "Standard Processing",
      requirements: [
        "Completed and signed Application Form (often via platforms like VFS Global)",
        "Two recent Passport photos",
        "Valid Passport (valid for at least 3 months beyond return date, with at least 2 blank pages)",
        "Proof of Travel (Confirmed return flights/travel itinerary)",
        "Accommodation Proof (Hotel bookings, rental agreement, or proof of private stay)",
        "Financial Means (Last 3 months bank statements showing £40-£120/day, or sponsorship letter)",
        "Travel Insurance (Valid for all Schengen states, €30,000 minimum coverage for medical/repatriation)",
        "Employment Docs (Recent employer letter, payslips, or proof of business ownership)",
        "Valid Residence Permit (If applying outside home country, usually needs 3+ months validity beyond return)"
      ],
      notes: [
        "Visa Fee: Generally €90 (approx. £78) for adults, with reduced rates for children."
      ]
    },
    'general': {
      country: "Global Destinations",
      type: "USA, Dubai, Australia, Turkey & More",
      processingTime: "Varies by Embassy",
      requirements: [
        "Valid Passport (6+ months validity)",
        "Recent Passport Photographs",
        "6 Months Bank Statements",
        "Employment Letter / Business Docs",
        "Flight Itinerary & Hotel Reservations"
      ],
      notes: [
        "Our consultants stay updated with the latest immigration policies to ensure your application is professional and error-free."
      ]
    }
  };

  const currentProtocol = visaProtocols[activeTab];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000&auto=format&fit=crop" 
            alt="Visa Architecture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6 border border-white/20">
            <Globe className="w-8 h-8 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Border Logistics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Visa Protocols</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We navigate the complexities of global immigration. From fast-track E-Visas to complex Consular submissions, we engineer your application for a zero-friction approval process.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TAB NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'sa-evisa', label: 'South Africa (E-Visa)' },
              { id: 'sa-sticker', label: 'South Africa (Sticker)' },
              { id: 'zambia', label: 'Zambia' },
              { id: 'morocco', label: 'Morocco' },
              { id: 'uk', label: 'UK' },
              { id: 'canada', label: 'Canada' },
              { id: 'schengen', label: 'Schengen' },
              { id: 'general', label: 'Other Destinations' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* MAIN CONTENT GRID */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* LEFT SIDE: Requirements Details */}
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-8 border-b border-slate-100 gap-4">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">{currentProtocol.country}</h2>
                  <p className="text-orange-600 font-bold uppercase tracking-wider text-sm flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    {currentProtocol.type}
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-700 font-medium text-sm">{currentProtocol.processingTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <FileCheck className="w-6 h-6 mr-3 text-orange-500" />
                Required Documentation
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {currentProtocol.requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>

              {currentProtocol.notes.length > 0 && (
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                  <h4 className="font-bold text-orange-800 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                    Important Protocol Notes
                  </h4>
                  <ul className="space-y-3">
                    {currentProtocol.notes.map((note, index) => (
                      <li key={index} className="flex items-start text-sm text-orange-900/80">
                        <span className="mr-2 text-orange-400">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* RIGHT SIDE: Call to Action & Guarantees */}
            <div className="space-y-6">
              <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Globe className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to initiate?</h3>
                <p className="text-slate-300 text-sm mb-8 relative z-10 leading-relaxed">
                  Our experts handle the heavy lifting, ensuring your documents meet the exact standards required by consular officials.
                </p>
                <Link 
                  to="/contact" 
                  className="block w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center rounded-xl font-bold shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all relative z-10"
                >
                  Start My Application
                </Link>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">The Speedup Standard</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-4 h-4 text-slate-600" />
                    </div>
                    <span className="text-slate-600 font-medium">Meticulous document vetting</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-slate-600" />
                    </div>
                    <span className="text-slate-600 font-medium">End-to-end embassy guidance</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-4 h-4 text-slate-600" />
                    </div>
                    <span className="text-slate-600 font-medium">Transparent fee structuring</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default VisaInfo;