export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'photography' | 'videography';
}

export const photographyServices: Service[] = [
  {
    id: 'event-photography',
    title: 'Event-Fotografie',
    description: 'Professionelle Eventdokumentation mit starken Momenten und modernem Look. Perfekt für Festivals, Konzerte und Firmenevents.',
    image: 'https://images.pexels.com/photos/1763814/pexels-photo-1763814.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'photography',
  },
  {
    id: 'business-photography',
    title: 'Business-Fotografie',
    description: 'Hochwertige Business-Portraits, Produktfotos und Website-Content für Ihr Unternehmen. Professionell, modern und sofort einsatzbereit.',
    image: 'https://images.pexels.com/photos/3962629/pexels-photo-3962629.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'photography',
  },
  {
    id: 'product-photography',
    title: 'Produkt-Fotografie',
    description: 'Perfekte Produktinszenierung für E-Commerce, Kataloge und Werbematerialien. Hochauflösend und verkaufsfördernd.',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'photography',
  },
  {
    id: 'portrait-photography',
    title: 'Portrait-Fotografie',
    description: 'Authentische Portraits für Business, Social Media oder persönliche Projekte. Natürlich und professionell.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'photography',
  },
];

export const videographyServices: Service[] = [
  {
    id: 'event-videography',
    title: 'Event-Videografie',
    description: 'Dynamische Eventfilme und Aftermovies, die Ihre Veranstaltung unvergesslich machen. Mit klarer Bildsprache und emotionalen Momenten.',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'videography',
  },
  {
    id: 'business-videography',
    title: 'Business-Videografie',
    description: 'Imagefilme, Werbevideos und Social-Media-Content für Ihre Marke. Überzeugen Sie mit professionellen Videos, die Wirkung zeigen.',
    image: 'https://images.pexels.com/photos/4970330/pexels-photo-4970330.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'videography',
  },
  {
    id: 'video-editing',
    title: 'Video-Editing',
    description: 'Professionelle Nachbearbeitung für Ihre Videos. Von Farbkorrektur bis Motion Graphics – alles aus einer Hand.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'videography',
  },
  {
    id: 'social-media-content',
    title: 'Social Media Content',
    description: 'Kurze, packende Videos für Instagram, TikTok und YouTube. Optimiert für maximale Reichweite und Engagement.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'videography',
  },
];

export const allServices = [...photographyServices, ...videographyServices];
