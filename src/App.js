import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import VisaInfo from './pages/VisaInfo';
import LeadCaptureModal from './components/LeadCaptureModal';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Tours from './pages/Tours';
import ContactForm from './components/ContactForm';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Custom 404 Page Component
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-8xl font-black text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-8 max-w-md mx-auto">
        Oops! The destination you are looking for seems to have vanished from our map. Let's get you back on track.
      </p>
      <Link 
        to="/" 
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
        <ScrollToTop />
        <Navbar />
        <LeadCaptureModal />
        
        <main className="flex-grow pt-20"> {/* pt-20 ensures content isn't hidden behind fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visa-info" element={<VisaInfo />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/tours" element={<Tours />} />
            
            {/* Contact Page Route */}
            <Route 
              path="/contact" 
              element={
                <div className="py-12 bg-slate-50">
                  <ContactForm />
                </div>
              } 
            />

            {/* Catch-all Route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;