import eventPhoto from '../../assets/20250907-msk09631-verbessert-rr-2.jpg';
import eventVideoPhoto from '../../assets/20231030-son05544-verbessert-rr.jpg';
import eventEditingPhoto from '../../assets/20230701-SON06592.webp';
import businessPhotoPhoto from '../../assets/e94e52c6c69a93e4b17a2570bb1a9e20.jpg';
import eventFotografieIcon from '../../assets/5dcbd8e8-73be-4b58-8b97-90007764cead.png';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: string;
}

export const eventServices: Service[] = [
  {
    id: 'event-photography',
    title: 'Event-Fotografie',
    description: 'Klare, saubere Bilder eurer Veranstaltung. Ob Festival, Konzert oder private Feier – ich dokumentiere die wichtigsten Momente übersichtlich und zuverlässig.\n\nIdeal für:\n• Events & Festivals\n• Firmenfeiern\n• Konzerte\n• Private Feiern',
    image: eventPhoto,
    link: '/services/event/fotografie',
    icon: eventFotografieIcon,
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
    image: eventEditingPhoto,
    link: '/services/event/editing',
  },
];

export const businessServices: Service[] = [
  {
    id: 'business-photography',
    title: 'Business-Fotografie',
    description: 'Echte Menschen, klare Bilder, starke Wirkung. Ob im Büro, im Laden oder draußen auf der Baustelle – ich fange eure Arbeit so ein, wie sie wirklich ist.\n\nIdeal für:\n• Team- & Portraitfotos\n• Produkte & Markenbilder\n• Baustellen-Reportagen\n• Website- & Social-Media-Content',
    image: businessPhotoPhoto,
    link: '/services/business/fotografie',
  },
  {
    id: 'business-videography',
    title: 'Business-Videografie',
    description: 'Videos, die zeigen, wer ihr seid und was ihr macht – klar, authentisch und passend zu eurer Marke. Für mehr Sichtbarkeit und Vertrauen.\n\nIdeal für:\n• Imagefilme\n• Recruiting-Videos\n• Werbeclips\n• Projekt- & Baustellenvideos',
    image: 'https://images.pexels.com/photos/4970330/pexels-photo-4970330.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/business/videografie',
  },
  {
    id: 'business-editing',
    title: 'Business-Editing',
    description: 'Editing für Unternehmen: klarer Schnitt, passende Farben und Optimierungen für Foto- und Videomaterial aus Betrieb, Büro oder Baustelle.\n\nIdeal für:\n• Imagefilme\n• Recruiting-Videos\n• Werbeclips\n• Produkt- & Baustellenmaterial',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/business/editing',
  },
];
