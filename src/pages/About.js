import React from 'react';
import { ArrowRight, Clock, Shield, Globe2, Target, CheckCircle2, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const pillars = [
    {
      title: "Anticipatory Logistics",
      desc: "We solve for the flight delay before you even receive the notification.",
      icon: Clock,
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop"
    },
    {
      title: "Elite Protocol",
      desc: "We provide the 'beck and call' service model required for high-net-worth movement.",
      icon: Shield,
      img: "https://images.unsplash.com/photo-1540339832862-4745ea3fa0e1?w=500&auto=format&fit=crop"
    },
    {
      title: "Global Infrastructure",
      desc: "We leverage a curated network of international partners to ensure 'local' expertise, anywhere on the map.",
      icon: Globe2,
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop"
    }
  ];

  const founders = [
    {
      name: "Moyosola Timothy Agboola",
      role: "Co-Founder | Aviation & Logistics Strategist",
      bio: "Moyosola is the engine behind Speedup’s operational precision. As a certified Aviator and Travel Consultant with 7 years of 'boots-on-the-ground' experience and a Bachelor’s in Tourism & Hospitality Management, he treats every itinerary like a flight plan.",
      certs: ["IATA Certified", "Amadeus Expert", "Sabre Specialist"],
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop" // Placeholder
    },
    {
      name: "Aworeni Opeyemi Oluwaseun",
      role: "Co-Founder | Corporate Strategy & Experience Architect",
      bio: "Opeyemi is the visionary architect of the Speedup experience. A dedicated Business Coach and Corporate Travel Specialist, he bridges the gap between high-level business objectives and world-class leisure, ensuring every journey is a strategic asset.",
      certs: ["Qatar Specialist", "Tour Planner", "Digital Marketing", "Project Management"],
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop" // Placeholder
    }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-900 -mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070&auto=format&fit=crop" 
            alt="Private Jet Architecture" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-orange-50 font-medium text-sm">Established August 2018</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Architecture,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Not Just Booking.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We didn't set out to be another agency in the directory; we set out to build the world’s most efficient logistics engine for high-stakes travelers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VISION & PRECISION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Precision in Motion</h2>
                <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  At Speedup, we believe that "luxury" isn't just a 5-star hotel—it’s the luxury of never having to wait. We specialize in the high-velocity requirements of VIPs, top executives, and global explorers who demand precision.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Most agencies react to your requests. <strong>We anticipate your obstacles.</strong> Whether it is architecting a multi-city international tour, securing complex visa protocols, or managing door-to-door executive logistics, we operate on a "zero-friction" mandate.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">Time Optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">Zero-Friction Mandate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">VIP Logistics</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">Failure Not An Option</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop" 
                alt="Executive Travel" 
                className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-800 hidden md:block">
                <div className="text-orange-500 font-bold text-3xl mb-1">2018</div>
                <div className="text-slate-300 text-sm font-medium">Foundation Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SPEEDUP STANDARD (PILLARS) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Speedup Standard</h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              While others "process" bookings, we engineer journeys. Our foundation is built on three non-negotiable pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUNDERS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Visionaries Behind the Movement</h2>
            <p className="text-slate-600 mt-4 text-lg max-w-3xl mx-auto">
              At the core of Speedup is a partnership built on a shared alma mater and a decade of combined expertise. They didn't just start a company; they engineered a new standard for global travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, idx) => (
              <div key={idx} className="flex flex-col bg-slate-50 rounded-3xl overflow-hidden shadow-md border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={founder.img} 
                    alt={founder.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-orange-400 font-medium text-sm">{founder.role}</p>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-orange-500" />
                      Certifications & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.certs.map((cert, cIdx) => (
                        <span key={cIdx} className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            The Destination is Yours.<br/>
            <span className="text-orange-500">The Velocity is Ours.</span>
          </h2>
          <p className="text-xl text-slate-300">
            We aren’t just moving you across the globe; we are ensuring you arrive ready to perform, explore, and lead. Let's engineer your next journey.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 hover:text-white hover:shadow-orange-500/20 hover:shadow-xl transition-all items-center justify-center"
          >
            Initiate Protocol <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;