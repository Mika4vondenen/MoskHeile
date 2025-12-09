import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { BlurFade } from './ui/blur-fade';
import { useAnimation } from '../context/AnimationContext';
import heroImg1 from '../../assets/1d26fb92-f725-4f82-8838-d35c9c7fe8b1.png';
import heroImg2 from '../../assets/982564cf-d447-492e-a99f-f592f3f4d981.png';
import heroImg3 from '../../assets/f61c5e57-a3c5-4a50-99e0-637f33fef76b.png';

export default function Hero() {
  const navigate = useNavigate();
  const images = [heroImg1, heroImg2, heroImg3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { showInitialAnimation } = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStartClick = () => {
    navigate('/services');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1F44] via-[#0d2a5c] to-[#0A1F44] pt-16 sm:pt-20 md:pt-0">
      {images.map((image, index) => (
        <div key={image} className={`absolute inset-0 transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-80' : 'opacity-0'}`}>
          <img
            src={image}
            alt="Hero"
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44]/80 via-[#0d2a5c]/50 to-[#0A1F44]/80 mix-blend-multiply" />
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 text-center">
        <BlurFade delay={0.25} inView={showInitialAnimation} sessionKey="hero-title">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}>
            <div>FOTOS. VIDEOS. EDITING.</div>
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inView={showInitialAnimation} sessionKey="hero-subtitle">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}>
            Ich verwandle ihre Vision in ein Visuelles Meisterwerk. Für Privatkunden und Unternehmen in Belgien,Luxemburg und Deutschland.
          </p>
        </BlurFade>

        <BlurFade delay={0.75} inView={showInitialAnimation} sessionKey="hero-button">
          <InteractiveHoverButton
            text="Starten"
            onClick={handleStartClick}
          />
        </BlurFade>
      </div>
    </section>
  );
}
