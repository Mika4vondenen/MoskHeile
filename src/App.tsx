import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import GalleryTestPage from './pages/GalleryTestPage';
import { AnimationProvider } from './context/AnimationContext';

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
          </Routes>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </AnimationProvider>
  );
}

export default App;
