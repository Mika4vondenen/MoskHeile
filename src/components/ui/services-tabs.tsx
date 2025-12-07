interface ServiceTab {
  id: 'photography' | 'videography';
  label: string;
}

interface ServicesTabsProps {
  activeTab: 'photography' | 'videography';
  onTabChange: (tab: 'photography' | 'videography') => void;
}

const tabs: ServiceTab[] = [
  { id: 'photography', label: 'Photography' },
  { id: 'videography', label: 'Videography' },
];

export function ServicesTabs({ activeTab, onTabChange }: ServicesTabsProps) {
  return (
    <div className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-[#f59e0b] text-black shadow-lg shadow-[#f59e0b]/20'
              : 'border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b]/10'
          }`}
          aria-pressed={activeTab === tab.id}
          aria-label={`${tab.label} tab`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
