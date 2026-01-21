import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';

type Language = 'de' | 'en' | 'fr';

interface AGBContent {
  title: string;
  description: string;
  content: string[];
}

interface AGBData {
  [key: string]: AGBContent;
}

const agbData: AGBData = {
  de: {
    title: 'Allgemeine Geschäftsbedingungen',
    description: 'Gültig ab Januar 2025',
    content: [
      '1. Geltungsbereich: Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen uns und unseren Kunden.',
      '2. Vertragsschluss: Der Vertrag kommt durch Ihre Bestellung und unsere Auftragsbestätigung zustande.',
      '3. Preise und Zahlung: Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung ist sofort fällig.',
      '4. Lieferung: Die Lieferzeit beträgt in der Regel 3-5 Werktage ab Vertragsschluss.',
      '5. Widerrufsrecht: Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.',
      '6. Gewährleistung: Es gelten die gesetzlichen Gewährleistungsrechte.',
      '7. Haftung: Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit.',
      '8. Datenschutz: Wir verarbeiten Ihre personenbezogenen Daten gemäß der DSGVO.',
      '9. Eigentumsvorbehalt: Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.',
      '10. Schlussbestimmungen: Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.',
    ],
  },
  en: {
    title: 'Terms and Conditions',
    description: 'Valid from January 2025',
    content: [
      '1. Scope: These Terms and Conditions apply to all contracts between us and our customers.',
      '2. Contract Formation: The contract is formed by your order and our order confirmation.',
      '3. Prices and Payment: All prices include statutory VAT. Payment is due immediately.',
      '4. Delivery: The delivery time is usually 3-5 working days from the conclusion of the contract.',
      '5. Right of Withdrawal: You have the right to withdraw from this contract within fourteen days without giving any reason.',
      '6. Warranty: Statutory warranty rights apply.',
      '7. Liability: We are liable without limitation for intent and gross negligence.',
      '8. Data Protection: We process your personal data in accordance with GDPR.',
      '9. Retention of Title: The delivered goods remain our property until full payment has been made.',
      '10. Final Provisions: Should individual provisions of these Terms and Conditions be or become invalid, the validity of the remaining provisions shall remain unaffected.',
    ],
  },
  fr: {
    title: 'Conditions Générales',
    description: 'Valable à partir de janvier 2025',
    content: [
      '1. Champ d\'application: Ces Conditions Générales s\'appliquent à tous les contrats entre nous et nos clients.',
      '2. Formation du contrat: Le contrat est formé par votre commande et notre confirmation de commande.',
      '3. Prix et paiement: Tous les prix incluent la TVA légale. Le paiement est dû immédiatement.',
      '4. Livraison: Le délai de livraison est généralement de 3 à 5 jours ouvrables à compter de la conclusion du contrat.',
      '5. Droit de rétractation: Vous avez le droit de vous rétracter de ce contrat dans un délai de quatorze jours sans donner de motif.',
      '6. Garantie: Les droits de garantie légaux s\'appliquent.',
      '7. Responsabilité: Nous sommes responsables sans limitation pour les actes intentionnels et la négligence grave.',
      '8. Protection des données: Nous traitons vos données personnelles conformément au RGPD.',
      '9. Réserve de propriété: Les marchandises livrées restent notre propriété jusqu\'au paiement intégral.',
      '10. Dispositions finales: Si certaines dispositions des présentes Conditions Générales sont ou deviennent invalides, la validité des autres dispositions n\'en sera pas affectée.',
    ],
  },
};

export default function AGBPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('de');

  const languageButtons = [
    { code: 'de' as Language, label: 'Deutsch', flag: '🇩🇪' },
    { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
    { code: 'fr' as Language, label: 'Français', flag: '🇫🇷' },
  ];

  const currentContent = agbData[selectedLanguage];

  return (
    <div className="min-h-screen bg-neutral-950 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center whitespace-nowrap">
            AGB / Terms & Conditions / Conditions Générales
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
            {languageButtons.map((lang) => (
              <Button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                variant={selectedLanguage === lang.code ? 'default' : 'outline'}
                size="lg"
                className="min-w-[140px] transition-all duration-200"
              >
                <span className="mr-2 text-xl">{lang.flag}</span>
                {lang.label}
              </Button>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">{currentContent.title}</CardTitle>
            <CardDescription className="text-base">
              {currentContent.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] w-full rounded-md border border-neutral-800 p-4 bg-neutral-950">
              <div className="space-y-4">
                {currentContent.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
