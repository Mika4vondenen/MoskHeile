import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventServicesPage from './pages/EventServicesPage';
import BusinessServicesPage from './pages/BusinessServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ImpressumPage from './pages/ImpressumPage';
import AGBPage from './pages/AGBPage';
import TermsPage from './pages/TermsPage';
import ConditionsGeneralesPage from './pages/ConditionsGeneralesPage';
import GalleryTestPage from './pages/GalleryTestPage';
import { AnimationProvider } from './context/AnimationContext';
import { Button } from './components/ui/button';

export function LanguageSelector({ currentLanguage }: { currentLanguage: string }) {
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const languageButtons = [
    { code: 'de', label: 'Deutsch', href: '/agb' },
    { code: 'en', label: 'English', href: '/terms' },
    { code: 'fr', label: 'Français', href: '/conditions-generales' },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {languageButtons.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          onClick={() => {
            setSelectedLanguage(lang.code);
            window.location.href = lang.href;
          }}
          className={
            selectedLanguage === lang.code
              ? "min-w-[140px] transition-all duration-200 bg-black text-white hover:bg-black border-0"
              : "min-w-[140px] transition-all duration-200 bg-[#22c55e] text-black hover:bg-[#16a34a] border-0"
          }
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}

function App() {
  return (
    <AnimationProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/event" element={<EventServicesPage />} />
            <Route path="/services/business" element={<BusinessServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/gallery-test" element={<GalleryTestPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/agb" element={<AGBPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/conditions-generales" element={<ConditionsGeneralesPage />} />
          </Routes>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </AnimationProvider>
  );
}

export default App;
