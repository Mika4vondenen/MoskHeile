import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from './service-card';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServicesContentProps {
  activeTab: 'photography' | 'videography';
  photographyServices: Service[];
  videographyServices: Service[];
}

export function ServicesContent({
  activeTab,
  photographyServices,
  videographyServices,
}: ServicesContentProps) {
  const services = activeTab === 'photography' ? photographyServices : videographyServices;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#f59e0b] tracking-widest mb-8 sm:mb-12">
            {activeTab === 'photography' ? 'EVENT FOTOGRAFIE' : 'EVENT VIDEOGRAFIE'}
          </h2>
          <p className="text-center text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            {activeTab === 'photography'
              ? 'Professionelle Eventdokumentation mit starken Momenten und modernem Look. Perfekt für Festivals, Konzerte und Firmenevents.'
              : 'Dynamische Eventfilme und Aftermovies, die Ihre Veranstaltung unvergesslich machen. Mit klarer Bildsprache und emotionalen Momenten.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>

        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#f59e0b] tracking-widest mb-8 sm:mb-12">
            {activeTab === 'photography' ? 'BUSINESS FOTOGRAFIE' : 'BUSINESS VIDEOGRAFIE'}
          </h2>
          <p className="text-center text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            {activeTab === 'photography'
              ? 'Hochwertige Business-Portraits, Produktfotos und Website-Content für Ihr Unternehmen. Professionell, modern und sofort einsatzbereit.'
              : 'Imagefilme, Werbevideos und Social-Media-Content für Ihre Marke. Überzeugen Sie mit professionellen Videos, die Wirkung zeigen.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {services.map((service) => (
            <ServiceCard
              key={`business-${service.id}`}
              title={service.title.replace('Event', 'Business')}
              description={service.description}
              image={service.image}
              link={service.link.replace('event', 'business')}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
