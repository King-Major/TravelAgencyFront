import React from 'react';
import { 
  Users, 
  FileText, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateServicesSection = () => {
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
    <section className="bg-white py-16 w-full">
      {/* 1. SECTION HEADER (Replaced Hero) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 mb-6">
          <Building2 className="w-4 h-4 text-orange-600" />
          <span className="text-orange-600 font-medium text-sm">B2B Travel Management</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          Enterprise Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Travel Solutions.</span>
        </h2>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Simplify your organization's logistics with our end-to-end corporate booking system. From executive retreats to daily team movements.
        </p>
      </div>

      {/* 2. STATS TRUST BAR */}
      <div className="bg-slate-50 border-y border-slate-100 py-10 mb-20">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">Optimized for efficiency, built for growth.</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand that corporate travel isn't just about getting from A to B—it's about productivity, safety, and budget control. Our platform integrates directly with your finance workflow.
            </p>
            
            <ul className="space-y-4 pt-2">
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
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. EXPLICIT CTA SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-12 text-center shadow-sm">
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Ready to set up your corporate account?</h3>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            To get started, simply click the black button below to head over to our contact page and leave your company details. Our team will reach out within 24 hours.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            {/* BLACK CTA BUTTON */}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Click Here to Fill the Form <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <p className="text-slate-500 text-sm mt-2">
              Need immediate assistance? Call us directly at: <span className="text-slate-900 font-bold">+234 703-119-9713</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateServicesSection;