export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const eventServices: Service[] = [
  {
    id: 'event-photography',
    title: 'Event-Fotografie',
    description: 'Professionelle Eventdokumentation mit starken Momenten und modernem Look. Perfekt für Festivals, Konzerte und Firmenevents.',
    image: 'https://images.pexels.com/photos/1763814/pexels-photo-1763814.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/event/fotografie',
  },
  {
    id: 'event-videography',
    title: 'Event-Videografie',
    description: 'Dynamische Eventfilme und Aftermovies, die Ihre Veranstaltung unvergesslich machen. Mit klarer Bildsprache und emotionalen Momenten.',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/event/videografie',
  },
  {
    id: 'event-editing',
    title: 'Event-Editing',
    description: 'Schnelle Nachbearbeitung Ihrer Event-Aufnahmen. Farbkorrektur, Schnitt und professionelle Veredelung Ihrer Festival- und Konzert-Videos.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/event/editing',
  },
];

export const businessServices: Service[] = [
  {
    id: 'business-photography',
    title: 'Business-Fotografie',
    description: 'Hochwertige Business-Portraits, Produktfotos und Website-Content für Ihr Unternehmen. Professionell, modern und sofort einsatzbereit.',
    image: 'https://images.pexels.com/photos/3962629/pexels-photo-3962629.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/business/fotografie',
  },
  {
    id: 'business-videography',
    title: 'Business-Videografie',
    description: 'Imagefilme, Werbevideos und Social-Media-Content für Ihre Marke. Überzeugen Sie mit professionellen Videos, die Wirkung zeigen.',
    image: 'https://images.pexels.com/photos/4970330/pexels-photo-4970330.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/business/videografie',
  },
  {
    id: 'business-editing',
    title: 'Business-Editing',
    description: 'Professionelle Nachbearbeitung für Ihre Unternehmensvideos. Von Farbkorrektur bis Motion Graphics – alles aus einer Hand.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/business/editing',
  },
];
