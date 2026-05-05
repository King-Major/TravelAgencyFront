import React from 'react';
import { ArrowRight, Zap, Plane, Hotel, Globe, CreditCard, Star, ChevronRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CorporateServices from '../components/CorporateServices';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  // Added 'path' to each service object to tell the Link where to go
  const services = [
    { title: "Intl. Flights", icon: Plane, desc: "Best rates on global airlines.", img: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=500&auto=format&fit=crop", path: "/flights" },
    { title: "Luxury Hotels", icon: Hotel, desc: "Handpicked premium stays.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop", path: "/hotels" },
    { title: "World Tours", icon: Globe, desc: "Curated experiences.", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop", path: "/tours" },
    { title: "Visa Expert", icon: CreditCard, desc: "99% Success rate processing.", img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=500&auto=format&fit=crop", path: "/visa-info" }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 -mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
            alt="Luxury Travel" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Plane className="w-4 h-4 text-orange-400" />
              <span className="text-orange-50 font-medium text-sm">Reliable. Secure. Expert Knowledge.</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              {/* 2. Replaced "Curating" with TypeAnimation */}
              <TypeAnimation
                sequence={[
                  'Curating',
                  2000, 
                  'Architecting',
                  2000,
                  'Planning',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block min-w-[280px]" // Prevents layout shift
              />{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Seamless</span><br />
              journeys, 24/7..
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Experience seamless travel planning. From express visa processing to luxury flight bookings, we handle the logistics so you can handle the adventure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-black text-zinc-50 px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 hover:shadow-zinc-500/20 hover:shadow-xl transition-all flex items-center justify-center"
              >
                Plan My Trip <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link to="/visa-info" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all text-center">
                Visa Services
              </Link>
            </div>
            
            {/* EXPLICIT FUNNEL INSTRUCTION */}
            <p className="text-slate-400 text-sm md:text-base font-medium">
              Ready to start? Click the black button above to jump straight to our contact page and give us your requests. All responses are gotten within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section id="tours" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore Our Premium Services</h2>
            {/* EXPLICIT SERVICE INSTRUCTION */}
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Click on any of the specific services below to be directed to our available flight routes, hotel galleries, tour packages, and visa design processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link 
                to={service.path} 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 block border border-slate-200"
              >
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/20">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CorporateServices/>

      {/* 3. REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 text-center">Trusted by Travelers</h2>
        </div>
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory max-w-7xl mx-auto no-scrollbar">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="w-[85vw] sm:w-[300px] md:w-[400px] flex-none bg-slate-50 p-6 md:p-8 rounded-2xl snap-center border border-slate-100"
            >
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6 text-sm md:text-base">
                "Speed Up Travels lived up to their name. The visa process was incredibly fast, and the hotel they booked in Dubai was breathtaking."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">AO</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm md:text-base">Aminat O.</div>
                  <div className="text-xs text-slate-500">Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;