import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  onDetailsClick?: () => void;
}

export function ServiceCard({ title, description, image, onDetailsClick }: ServiceCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden bg-[#171717] hover:shadow-2xl hover:shadow-[#f59e0b]/10 transition-all duration-300 h-full flex flex-col">
      <div className="aspect-video overflow-hidden bg-gray-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 sm:p-8 space-y-4 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-white min-h-[3.5rem] flex items-center">
          {title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1 whitespace-pre-wrap">
          {description}
        </p>
        <button
          onClick={onDetailsClick}
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#f59e0b] text-[#f59e0b] rounded-lg font-semibold text-sm sm:text-base hover:bg-[#f59e0b] hover:text-black hover:shadow-lg hover:shadow-[#f59e0b]/20 transition-all duration-300 w-full justify-center"
        >
          Details zum Service
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
