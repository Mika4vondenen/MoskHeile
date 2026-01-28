import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { BlurFade } from './ui/blur-fade';
import { useAnimation } from '../context/AnimationContext';

// Importiere hochwertige Bilder für den Slider
import heroImg1 from '../../assets/20231030-son05544-verbessert-rr.jpg';
import heroImg2 from '../../assets/msk_bigg_6-bearbeitet.jpg';
import heroImg3 from '../../assets/dslr_camera_lens_original_669131.jpg';
// Optional: Ein viertes Bild hinzufügen, falls gewünscht, z.B.:
// import heroImg4 from '../../assets/SON03064.webp';

export default function Hero() {
  const navigate = useNavigate();
  // Nutze nur die eindeutigen Bilder
  const images = [heroImg1, heroImg2, heroImg3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { showInitialAnimation } = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleStartClick = () => {
    navigate('/services');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image Slider */}
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            currentImageIndex === index ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hero Background ${index + 1}`}
            className="w-full h-full object-cover scale-105" // Leichter Zoom für besseren Look
          />
          {/* Overlay Gradient für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        <BlurFade delay={0.25} inView={showInitialAnimation} sessionKey="hero-title">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg" 
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            <span className="block text-[#22c55e]">FOTOS.</span>
            <span className="block">VIDEOS.</span>
            <span className="block text-[#22c55e]">EDITING.</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inView={showInitialAnimation} sessionKey="hero-subtitle">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Ihre Vision. Mein Handwerk. Ein Ergebnis, das überzeugt.
          </p>
        </BlurFade>

        <BlurFade delay={0.75} inView={showInitialAnimation} sessionKey="hero-button">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <InteractiveHoverButton
              text="Jetzt Starten"
              onClick={handleStartClick}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}