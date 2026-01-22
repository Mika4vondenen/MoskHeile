import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';
import { LanguageSelector } from '../App';

const conditionsContent = {
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
};

export default function ConditionsGeneralesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            AGB / Terms & Conditions / Conditions Générales
          </h1>
          <LanguageSelector currentLanguage="fr" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">{conditionsContent.title}</CardTitle>
            <CardDescription className="text-base">
              {conditionsContent.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] w-full rounded-md border border-neutral-800 p-4 bg-neutral-950">
              <div className="space-y-4">
                {conditionsContent.content.map((paragraph, index) => (
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
