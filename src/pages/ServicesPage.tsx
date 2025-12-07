import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceHero } from '../components/ui/service-hero';
import { ServicesTabs } from '../components/ui/services-tabs';
import { ServicesContent } from '../components/ui/services-content';
import { ServiceCard } from '../components/ui/service-card';
import { photographyServices, videographyServices } from '../data/services-new';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'photography' | 'videography'>('photography');
  const navigate = useNavigate();

  const currentServices = activeTab === 'photography' ? photographyServices : videographyServices;

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

  const handleServiceDetails = () => {
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#262626] pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHero
          title="Unsere Services"
          subtitle="Von der ersten Idee bis zum fertigen Projekt – Ich begleite Sie mit Professionalität und Leidenschaft."
        />

        <ServicesTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <ServicesContent tabKey={activeTab}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            {currentServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                onDetailsClick={handleServiceDetails}
              />
            ))}
          </div>
        </ServicesContent>

        <div className="bg-black p-6 sm:p-8 lg:p-12 rounded-xl text-center mt-12 sm:mt-16">
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
