import { Service } from '../../data/services';
import { ServiceCard } from './service-card';

interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
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
  );
}
