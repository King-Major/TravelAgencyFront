import React from 'react';
import { 
  Briefcase, 
  Users, 
  FileText, 
  CreditCard, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  BarChart3, 
  Globe2, 
  Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateServices = () => {
  const benefits = [
    { 
      title: "End-of-Month Billing", 
      icon: FileText, 
      desc: "Travel now, pay later. Consolidate all your team's travel expenses into one simple monthly invoice for better cash flow management." 
    },
    { 
      title: "Dedicated Account Manager", 
      icon: Users, 
      desc: "Skip the queue. Get a dedicated travel consultant who knows your company's preferences and handles all bookings 24/7." 
    },
    { 
      title: "Customized Travel Policy", 
      icon: ShieldCheck, 
      desc: "We help you set and enforce travel budgets and class limits across your organization to prevent overspending." 
    },
    { 
      title: "Priority Support", 
      icon: Zap, 
      desc: "Emergency re-routing, last-minute cancellations, and instant flight changes handled with the highest priority." 
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-900 -mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Building2 className="w-4 h-4 text-orange-400" />
              <span className="text-orange-50 font-medium text-sm">B2B Travel Management</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Enterprise Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Travel Solutions.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Simplify your organization's logistics with our end-to-end corporate booking system. From executive retreats to daily team movements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* LINKED TO YOUR EXISTING CONTACT FORM */}
              <a href="#contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-orange-500/30 hover:shadow-2xl transition-all flex items-center justify-center">
                Get a Corporate Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS TRUST BAR */}
      <div className="bg-slate-50 border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900">500+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Global Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900">15%</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Avg. Cost Saving</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900">100%</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Billing Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. VALUE PROPOSITIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Optimized for efficiency, built for growth.</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We understand that corporate travel isn't just about getting from A to B—it's about productivity, safety, and budget control. Our platform integrates directly with your finance workflow.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Consolidated monthly invoicing",
                  "Airport VIP lounge access for executives",
                  "Employee travel insurance included",
                  "Real-time expense reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <div className="mr-3 p-1 bg-green-100 rounded-full text-green-600">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION (The "Advertisement") */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your business travel?</h2>
                <p className="text-slate-400 text-lg">
                  Join hundreds of companies that trust us with their global movements. Setup takes less than 24 hours.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                {/* THIS ANCHOR TAG LINKS TO THE FORM ON YOUR HOME PAGE */}
                <a 
                  href="#contact" 
                  className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-xl hover:bg-orange-500 hover:text-white transition-all text-center"
                >
                  Contact Corporate Team
                </a>
                <p className="text-slate-500 text-sm text-center">
                  Or call us at: <span className="text-white font-medium">+234 703-119-9713</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateServices;