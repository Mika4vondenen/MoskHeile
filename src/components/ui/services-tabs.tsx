import { motion } from 'framer-motion';

interface ServicesTabsProps {
  activeTab: 'photography' | 'videography';
  onTabChange: (tab: 'photography' | 'videography') => void;
}

export function ServicesTabs({ activeTab, onTabChange }: ServicesTabsProps) {
  return (
    <div className="flex justify-center items-center gap-4 mb-12 sm:mb-16">
      <button
        onClick={() => onTabChange('photography')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onTabChange('photography');
          }
        }}
        className={`relative px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
          activeTab === 'photography'
            ? 'bg-[#f59e0b] text-black shadow-lg shadow-[#f59e0b]/20'
            : 'bg-transparent text-gray-300 border-2 border-gray-600 hover:border-[#f59e0b]/50 hover:text-white'
        }`}
        aria-pressed={activeTab === 'photography'}
        role="tab"
      >
        {activeTab === 'photography' && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-[#f59e0b] rounded-lg -z-10"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        Photography
      </button>

      <button
        onClick={() => onTabChange('videography')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onTabChange('videography');
          }
        }}
        className={`relative px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
          activeTab === 'videography'
            ? 'bg-[#f59e0b] text-black shadow-lg shadow-[#f59e0b]/20'
            : 'bg-transparent text-gray-300 border-2 border-gray-600 hover:border-[#f59e0b]/50 hover:text-white'
        }`}
        aria-pressed={activeTab === 'videography'}
        role="tab"
      >
        {activeTab === 'videography' && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-[#f59e0b] rounded-lg -z-10"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        Videography
      </button>
    </div>
  );
}
