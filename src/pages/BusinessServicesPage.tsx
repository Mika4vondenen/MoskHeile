import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServiceHero } from '../components/ui/service-hero';
import { ServiceList } from '../components/ui/service-list';
import { businessServices } from '../data/services';

export default function BusinessServicesPage() {
  const navigate = useNavigate();

  const getNavHeight = () => {
    if (window.innerWidth < 640) return 80;
    return 100;
  };

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const navHeight = getNavHeight();
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#262626] pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHero
          title="Business Services"
          subtitle="Hochwertige Business-Portraits, Produktfotos, Imagefilme und Website-Content für Ihr Unternehmen. Professionell, modern und sofort einsatzbereit."
        />

        <ServiceList services={businessServices} />

        <div className="bg-black p-6 sm:p-8 lg:p-12 rounded-xl text-center mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
            Starten wir Ihr Projekt!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch und lassen Sie uns gemeinsam Ihre Vision verwirklichen.
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 sm:gap-3 bg-[#F5B700] text-[#0A1F44] px-5 sm:px-8 py-2 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Jetzt Beratung anfragen
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
