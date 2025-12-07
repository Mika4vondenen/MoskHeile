import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { BlurFade } from '../components/ui/blur-fade';
import { useAnimation } from '../context/AnimationContext';

export default function ServicesPage() {
  const navigate = useNavigate();
  const { showInitialAnimation } = useAnimation();

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
    <div>
      <section className="pt-28 sm:pt-32 py-16 sm:py-24" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.25} inView={showInitialAnimation} sessionKey="services-header">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 dm-serif-text-regular" style={{ color: '#f59e0b' }}>
                Unsere Foto-, Video- & Editing-Services
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                Von der ersten Idee bis zum fertigen Projekt – wir begleiten Sie mit Professionalität und Leidenschaft.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.5} inView={showInitialAnimation} sessionKey="services-categories">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
              <section className="space-y-10 sm:space-y-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#f59e0b] tracking-widest mb-8 sm:mb-10">
                  EVENT
                </h2>

                <div className="space-y-5 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#171717' }}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Event-Fotografie
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Professionelle Eventdokumentation mit starken Momenten und modernem Look. Perfekt für Festivals, Konzerte und Firmenevents.
                  </p>
                  <Link
                    to="/services/event-fotografie"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#f59e0b] text-[#f59e0b] rounded-lg font-semibold text-sm sm:text-base hover:bg-[#f59e0b] hover:text-black hover:shadow-lg hover:shadow-[#f59e0b]/20 transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="space-y-5 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#171717' }}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Event-Videografie
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Dynamische Eventfilme und Aftermovies, die Ihre Veranstaltung unvergesslich machen. Mit klarer Bildsprache und emotionalen Momenten.
                  </p>
                  <Link
                    to="/services/event-videografie"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#f59e0b] text-[#f59e0b] rounded-lg font-semibold text-sm sm:text-base hover:bg-[#f59e0b] hover:text-black hover:shadow-lg hover:shadow-[#f59e0b]/20 transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </section>

              <section className="space-y-10 sm:space-y-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#f59e0b] tracking-widest mb-8 sm:mb-10">
                  BUSINESS
                </h2>

                <div className="space-y-5 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#171717' }}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Business-Fotografie
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Hochwertige Business-Portraits, Produktfotos und Website-Content für Ihr Unternehmen. Professionell, modern und sofort einsatzbereit.
                  </p>
                  <Link
                    to="/services/business-fotografie"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#f59e0b] text-[#f59e0b] rounded-lg font-semibold text-sm sm:text-base hover:bg-[#f59e0b] hover:text-black hover:shadow-lg hover:shadow-[#f59e0b]/20 transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="space-y-5 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#171717' }}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Business-Videografie
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Imagefilme, Werbevideos und Social-Media-Content für Ihre Marke. Überzeugen Sie mit professionellen Videos, die Wirkung zeigen.
                  </p>
                  <Link
                    to="/services/business-videografie"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#f59e0b] text-[#f59e0b] rounded-lg font-semibold text-sm sm:text-base hover:bg-[#f59e0b] hover:text-black hover:shadow-lg hover:shadow-[#f59e0b]/20 transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </section>
            </div>
          </BlurFade>

          <BlurFade delay={0.75} inView={showInitialAnimation} sessionKey="services-editing">
            <section className="mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#f59e0b] tracking-widest mb-8 sm:mb-10">
                POST-PRODUCTION / EDITING
              </h2>

              <div className="max-w-3xl mx-auto text-center space-y-6 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#171717' }}>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Professionelles Video-Editing & Post-Production
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Seit über fünf Jahren verwandle ich rohes Videomaterial in modernen, hochwertigen Content. Videoschnitt, Farbkorrektur, Retusche und Motion Graphics – alles aus einer Hand.
                </p>
                <div className="flex justify-center">
                  <Link
                    to="/services/editing"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#f59e0b] text-[#f59e0b] rounded-lg font-semibold text-sm sm:text-base hover:bg-[#f59e0b] hover:text-black hover:shadow-lg hover:shadow-[#f59e0b]/20 transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>
          </BlurFade>

          <BlurFade delay={1} inView={showInitialAnimation} sessionKey="services-cta">
            <div className="bg-black p-6 sm:p-8 lg:p-12 rounded-xl text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                Starten wir Ihr Projekt!
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto">
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
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
