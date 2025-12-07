import eventPhoto from '../../assets/SON03067.webp';
import eventVideoPhoto from '../../assets/20230813-SON08196-Verbessert-RR.webp';

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
    description: 'Klare, saubere Bilder eurer Veranstaltung. Ob Festival, Konzert oder private Feier – ich dokumentiere die wichtigsten Momente übersichtlich und zuverlässig.\n\nIdeal für:\n• Events & Festivals\n• Firmenfeiern\n• Konzerte\n• Private Feiern',
    image: eventPhoto,
    link: '/services/event/fotografie',
  },
  {
    id: 'event-videography',
    title: 'Event-Videografie',
    description: 'Videos, die euer Event gut und verständlich zeigen – von Aftermovies über Social-Media-Clips bis zu Konzertmitschnitten.\n\nIdeal für:\n• Aftermovies\n• Konzertvideos\n• Social-Media-Clips\n• Event-Recaps',
    image: eventVideoPhoto,
    link: '/services/event/videografie',
  },
  {
    id: 'event-editing',
    title: 'Event-Editing',
    description: 'Nachbearbeitung für Event-Fotos und Event-Videos.\nSaubere Farben, ruhige Schnitte und Optimierungen, damit euer Eventmaterial gut aussieht und direkt nutzbar ist.\n\nIdeal für:\n• Aftermovies\n• Konzert- & Festivalvideos\n• Social-Media-Clips\n• Event-Fotos',
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
