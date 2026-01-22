import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';
import { LanguageSelector } from '../App';

const termsContent = {
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
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            AGB / Terms & Conditions / Conditions Générales
          </h1>
          <LanguageSelector currentLanguage="en" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">{termsContent.title}</CardTitle>
            <CardDescription className="text-base">
              {termsContent.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] w-full rounded-md border border-neutral-800 p-4 bg-neutral-950">
              <div className="space-y-4">
                {termsContent.content.map((paragraph, index) => (
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
