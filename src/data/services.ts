import eventPhoto from '../../assets/djmax.webp';
import eventVideoPhoto from '../../assets/Bunterrave.webp';
import eventEditingPhoto from '../../assets/fest.webp';
import businessPhotoPhoto from '../../assets/arbeit.jpeg';
import eventFotografieIcon from '../../assets/cammicon.png';
import eventVideografieIcon from '../../assets/cam.png';
import eventEditingIcon from '../../assets/editing.png';

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
    title: 'Fotografie',
    description: 'Erinnerungen, die bleiben – in ruhigen, klaren Bildern. Ich begleite deinen Anlass dezent und fokussiere mich auf echte Momente, Details und Stimmung.\n\nIdeal für:\n• Geburtstage & private Feiern\n• Verlobungen & Jubiläen\n• Familien- & Paarfotos\n• Taufen & besondere Anlässe',
    image: eventPhoto,
    link: '/services/event/fotografie',
    icon: eventFotografieIcon,
  },
  {
    id: 'event-videography',
    title: 'Videografie',
    description: 'Bewegte Bilder, die Atmosphäre und Emotionen authentisch einfangen. Ich dokumentiere private Anlässe unaufdringlich und mit Fokus auf natürliche Abläufe, Stimmung und Details.\n\nIdeal für:\n\n• Geburtstage & private Feiern\n• Verlobungen & Jubiläen\n• Familienmomente & Paare\n• Besondere Anlässe',
    image: eventVideoPhoto,
    link: '/services/event/videografie',
    icon: eventVideografieIcon,
  },
  {
    id: 'event-editing',
    title: 'Editing',
    description: 'Nachbearbeitung für Event-Fotos und Event-Videos.\nSaubere Farben, ruhige Schnitte und Optimierungen, damit euer Eventmaterial gut aussieht und direkt nutzbar ist.\n\nIdeal für:\n• Aftermovies\n• Konzert- & Festivalvideos\n• Social-Media-Clips\n• Event-Fotos',
    image: eventEditingPhoto,
    link: '/services/event/editing',
    icon: eventEditingIcon,
  },
];

export const businessServices: Service[] = [
  {
    id: 'business-photography',
    title: 'Fotografie',
    description: 'Professionelle Fotografie für Unternehmen, Marken und Veranstaltungen. Ich liefere klare, konsistente Bilder, die dein Business authentisch repräsentieren und vielseitig einsetzbar sind – online wie offline.\n\nIdeal für:\n\n• Firmenveranstaltungen & Business-Events\n• Konferenzen & Messen\n• Corporate Portraits & Teams\n• Branding-, Presse- & Dokumentationsfotos',
    image: businessPhotoPhoto,
    link: '/services/business/fotografie',
    icon: eventFotografieIcon,
  },
  {
    id: 'business-videography',
    title: 'Videografie',
    description: 'Sachliche, wirkungsvolle Videos für Unternehmen und professionelle Auftritte. Ich setze Inhalte strukturiert um und lege Wert auf eine klare Bildsprache sowie einen professionellen Produktionsablauf.\n\nIdeal für:\n\n• Firmen- & Eventvideos\n• Image- & Brandingvideos\n• Social-Media- & Webcontent\n• Dokumentationen & Recaps',
    image: 'https://images.pexels.com/photos/4970330/pexels-photo-4970330.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/business/videografie',
    icon: eventVideografieIcon,
  },
  {
    id: 'business-editing',
    title: 'Editing',
    description: 'Professionelle Postproduktion für bestehendes Videomaterial. Ich übernehme Schnitt, Farbkorrektur und Feinschliff – abgestimmt auf Zielgruppe, Plattform und Einsatzzweck.\n\nIdeal für:\n\n• Schnitt von vorhandenem Material\n• Social-Media- & Onlinevideos\n• Image- & Unternehmensvideos\n• Optimierung für Web & Präsentationen',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/services/business/editing',
    icon: eventEditingIcon,
  },
];
