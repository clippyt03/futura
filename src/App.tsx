import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyFutura from './components/WhyFutura';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Blog from './components/Blog';
import Footer from './components/Footer';
import GlobalCursor from './components/GlobalCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingElements from './components/FloatingElements';

// Pages
import About from './pages/About';
import Documentation from './pages/Documentation';
import Support from './pages/Support';
import Status from './pages/Status';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import GDPR from './pages/GDPR';

function HomePage() {
  return (
    <>
      <FloatingElements />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyFutura />
      <CaseStudies />
      <CTA />
      <Blog />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white font-orbitron relative">
        <ScrollProgress />
        <GlobalCursor />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/support" element={<Support />} />
          <Route path="/status" element={<Status />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/gdpr" element={<GDPR />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;