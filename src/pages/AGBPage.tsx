import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';

const agbContent = {
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
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            AGB / Terms & Conditions / Conditions Générales
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/agb" className="lang-button lang-active">
              Deutsch
            </a>
            <a href="/terms" className="lang-button">
              English
            </a>
            <a href="/conditions-generales" className="lang-button">
              Français
            </a>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">{agbContent.title}</CardTitle>
            <CardDescription className="text-base">
              {agbContent.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] w-full rounded-md border border-neutral-800 p-4 bg-neutral-950">
              <div className="space-y-4">
                {agbContent.content.map((paragraph, index) => (
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
