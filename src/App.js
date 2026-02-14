import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import VisaInfo from './pages/VisaInfo';
import LeadCaptureModal from './components/LeadCaptureModal';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Tours from './pages/Tours';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
