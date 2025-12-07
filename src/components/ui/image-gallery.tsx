'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';

export function ImageGallery() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4">
      <div className="mx-auto w-full max-w-7xl">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {Array.from({ length: 30 }).map((_, index) => {
            const isPortrait = Math.random() > 0.5;
            const width = isPortrait ? 1080 : 1920;
            const height = isPortrait ? 1920 : 1080;

            return (
              <AnimatedImage
                key={index}
                alt={`Image ${index}`}
                src={`https://picsum.photos/seed/${index}/${width}/${height}`}
                placeholder={`https://placehold.co/${width}x${height}/`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
}

function AnimatedImage({ alt, src, placeholder }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <div
      ref={ref}
      className="relative w-full break-inside-avoid mb-6"
    >
      <div className="relative w-full overflow-hidden rounded-lg border border-neutral-200 shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          alt={alt}
          src={imgSrc}
          className={cn(
            'w-full h-auto object-contain opacity-0 transition-all duration-1000 ease-in-out',
            {
              'opacity-100': isInView && !isLoading,
            },
          )}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
          onError={handleError}
        />
      </div>
    </div>
  );
}
