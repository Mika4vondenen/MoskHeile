import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { BlurFade } from './ui/blur-fade';
import img1 from '../../assets/bunt.webp';
import img2 from '../../assets/Bunterrave.webp';
import img3 from '../../assets/DampfVerbessertRR.webp';
import img4 from '../../assets/darkrave.webp';
import img5 from '../../assets/DJ.webp';
import img6 from '../../assets/DJ2VerbessertRR.webp';
import img7 from '../../assets/djmagga.webp';
import img8 from '../../assets/djmax.webp';
import img9 from '../../assets/dunkelrave.webp';
import img10 from '../../assets/fest.webp';
import img11 from '../../assets/fest2.webp';
import img12 from '../../assets/jungspunt.webp';
import img13 from '../../assets/Rave.webp';
import img14 from '../../assets/VerbessertRR.webp';

interface GalleryItem {
  src: string;
  alt: string;
  category?: string;
}

const galleryItems: GalleryItem[] = [
  { src: img1, alt: 'Gallery image 1', category: 'Fotografie' },
  { src: img2, alt: 'Gallery image 2', category: 'Fotografie' },
  { src: img3, alt: 'Gallery image 3', category: 'Fotografie' },
  { src: img4, alt: 'Gallery image 4', category: 'Fotografie' },
  { src: img5, alt: 'Gallery image 5', category: 'Fotografie' },
  { src: img6, alt: 'Gallery image 6', category: 'Fotografie' },
  { src: img7, alt: 'Gallery image 7', category: 'Fotografie' },
  { src: img8, alt: 'Gallery image 8', category: 'Fotografie' },
  { src: img9, alt: 'Gallery image 9', category: 'Fotografie' },
  { src: img10, alt: 'Gallery image 10', category: 'Fotografie' },
  { src: img11, alt: 'Gallery image 11', category: 'Fotografie' },
  { src: img12, alt: 'Gallery image 12', category: 'Fotografie' },
  { src: img13, alt: 'Gallery image 13', category: 'Fotografie' },
  { src: img14, alt: 'Gallery image 14', category: 'Fotografie' },
];

interface LightboxProps {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ item, index, total, onClose, onNext, onPrev }: LightboxProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  };

  const handleSwipe = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const startX = touch.clientX;
    const endX = touch.changedTouches[touch.length - 1].clientX;
    if (startX - endX > 50) onNext();
    if (endX - startX > 50) onPrev();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      onTouchEnd={handleSwipe}
      tabIndex={0}
    >
      <div
        className="relative w-full h-full flex items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <X size={24} className="text-white sm:w-7 sm:h-7" />
        </button>

        <img
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-[90vh] object-contain px-2 sm:px-0"
        />

        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-lg p-2 sm:p-3 transition-colors duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} className="text-white sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-lg p-2 sm:p-3 transition-colors duration-200"
          aria-label="Next image"
        >
          <ChevronRight size={24} className="text-white sm:w-8 sm:h-8" />
        </button>

        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 text-white text-xs sm:text-sm">
          {index + 1} / {total}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const navHeight = 120;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < galleryItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden" style={{ backgroundColor: '#262626' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.25} inView sessionKey="gallery-header">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}>
              Galerie
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Ein Einblick in meine besten Werke
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} inView sessionKey="gallery-grid">
          <Masonry
            breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 sm:mb-5 lg:mb-6"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
                    <ChevronRight size={24} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </BlurFade>

      </div>

      {selectedIndex !== null && (
        <Lightbox
          item={galleryItems[selectedIndex]}
          index={selectedIndex}
          total={galleryItems.length}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
