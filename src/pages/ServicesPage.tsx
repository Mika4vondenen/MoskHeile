import { Link } from 'react-router-dom';
import { ServiceHero } from '../components/ui/service-hero';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#262626] pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHero
          title="Unsere Services"
          subtitle="Von der ersten Idee bis zum fertigen Projekt – Ich begleite Sie mit Professionalität und Leidenschaft."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-2xl mx-auto mt-12 sm:mt-16">
          <Link
            to="/services/event"
            className="w-full sm:w-auto group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#F5B700] to-[#ffc61a] p-8 sm:p-12 text-center hover:shadow-2xl hover:shadow-[#f59e0b]/20 transition-all duration-300 transform hover:scale-105"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F44] mb-3">
              Event
            </h2>
            <p className="text-[#0A1F44] text-sm sm:text-base font-medium">
              Festivals, Konzerte & Live-Events
            </p>
          </Link>

          <Link
            to="/services/business"
            className="w-full sm:w-auto group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#0d2a5c] p-8 sm:p-12 text-center hover:shadow-2xl hover:shadow-[#0A1F44]/40 transition-all duration-300 transform hover:scale-105"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5B700] mb-3">
              Business
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-medium">
              Unternehmen, Produkte & Marketing
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
