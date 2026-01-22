import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';
import { Shield, Globe, Info } from 'lucide-react';

type Language = 'de' | 'en' | 'fr';

interface DatenschutzContent {
  title: string;
  description: string;
  content: string[];
}

interface DatenschutzData {
  [key: string]: DatenschutzContent;
}

const datenschutzData: DatenschutzData = {
  de: {
    title: 'Datenschutzerklärung',
    description: 'Informationen zur Datenverarbeitung gemäß DSGVO',
    content: [
      '1. Datenschutz auf einen Blick - Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
      '2. Verantwortliche Stelle: Verantwortlich für die Datenverarbeitung auf dieser Website ist: MOSK unlimited – Einzelunternehmer, Dmitriy Mamon, Weissenbrücke 2, 4770 Amel, Belgien. E-Mail: d.mamon@moskunlimited.be, Telefon: 0176 4769 7299',
      '3. Datenerfassung - Kontaktformular: Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.',
      '3. Datenerfassung - Cookies: Diese Website verwendet nur technisch notwendige Cookies, um die Funktionalität der Website zu gewährleisten. Diese Cookies speichern keine personenbezogenen Daten und dienen ausschließlich dazu, Ihre Einstellungen während Ihres Besuchs zu speichern.',
      '3. Datenerfassung - Server-Log-Dateien: Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt: Browsertyp und Browserversion, Verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.',
      '4. Ihre Rechte: Sie haben jederzeit das Recht: Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO), Die Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten zu verlangen (Art. 16 DSGVO), Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO), Die Einschränkung der Verarbeitung Ihrer Daten zu verlangen (Art. 18 DSGVO), Der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DSGVO), Ihre Daten in einem gängigen, maschinenlesbaren Format zu erhalten (Art. 20 DSGVO). Zur Ausübung dieser Rechte wenden Sie sich bitte an: d.mamon@moskunlimited.be',
      '5. Datensicherheit: Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.',
      '6. Aktualität und Änderung dieser Datenschutzerklärung: Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.',
    ],
  },
  en: {
    title: 'Privacy Policy',
    description: 'Information on data processing according to GDPR',
    content: [
      '1. Privacy at a Glance - General Information: The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.',
      '2. Controller: The controller for data processing on this website is: MOSK unlimited – Sole Proprietor, Dmitriy Mamon, Weissenbrücke 2, 4770 Amel, Belgium. Email: d.mamon@moskunlimited.be, Phone: 0176 4769 7299',
      '3. Data Collection - Contact Form: If you send us inquiries via the contact form, your details from the inquiry form including the contact data you provided there will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent. The processing of this data is based on Art. 6 para. 1 lit. b GDPR.',
      '3. Data Collection - Cookies: This website only uses technically necessary cookies to ensure the functionality of the website. These cookies do not store any personal data and serve exclusively to save your settings during your visit.',
      '3. Data Collection - Server Log Files: The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us: Browser type and version, Operating system used, Referrer URL, Hostname of the accessing computer, Time of server request, IP address. This data is not merged with other data sources.',
      '4. Your Rights: You have the right at any time to: Obtain information about your personal data stored by us (Art. 15 GDPR), Request the correction of incorrect or completion of incomplete data (Art. 16 GDPR), Request the deletion of your data stored by us (Art. 17 GDPR), Request the restriction of the processing of your data (Art. 18 GDPR), Object to the processing of your data (Art. 21 GDPR), Receive your data in a common, machine-readable format (Art. 20 GDPR). To exercise these rights, please contact: d.mamon@moskunlimited.be',
      '5. Data Security: We use the widespread SSL procedure (Secure Socket Layer) within the website visit in connection with the highest encryption level supported by your browser. We also use suitable technical and organizational security measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction or unauthorized access by third parties.',
      '6. Validity and Changes to this Privacy Policy: This privacy policy is currently valid and dated January 2026. Due to the further development of our website or due to changed legal or official requirements, it may become necessary to change this privacy policy.',
    ],
  },
  fr: {
    title: 'Politique de Confidentialité',
    description: 'Informations sur le traitement des données selon le RGPD',
    content: [
      '1. Protection des données en un coup d\'œil - Informations générales: Les remarques suivantes fournissent un aperçu simple de ce qui arrive à vos données personnelles lorsque vous visitez ce site web. Les données personnelles sont toutes les données qui peuvent être utilisées pour vous identifier personnellement.',
      '2. Responsable: Le responsable du traitement des données sur ce site web est: MOSK unlimited – Entreprise individuelle, Dmitriy Mamon, Weissenbrücke 2, 4770 Amel, Belgique. E-mail: d.mamon@moskunlimited.be, Téléphone: 0176 4769 7299',
      '3. Collecte de données - Formulaire de contact: Si vous nous envoyez des demandes via le formulaire de contact, vos coordonnées du formulaire de demande, y compris les coordonnées que vous y avez fournies, seront stockées par nous dans le but de traiter la demande et en cas de questions de suivi. Nous ne transmettons pas ces données sans votre consentement. Le traitement de ces données est basé sur l\'art. 6 para. 1 lit. b du RGPD.',
      '3. Collecte de données - Cookies: Ce site web utilise uniquement des cookies techniquement nécessaires pour assurer la fonctionnalité du site. Ces cookies ne stockent aucune donnée personnelle et servent exclusivement à enregistrer vos paramètres pendant votre visite.',
      '3. Collecte de données - Fichiers journaux du serveur: Le fournisseur des pages collecte et stocke automatiquement des informations dans des fichiers journaux dits du serveur, que votre navigateur nous transmet automatiquement: Type et version du navigateur, Système d\'exploitation utilisé, URL de référence, Nom d\'hôte de l\'ordinateur accédant, Heure de la demande du serveur, Adresse IP. Ces données ne sont pas fusionnées avec d\'autres sources de données.',
      '4. Vos droits: Vous avez le droit à tout moment de: Obtenir des informations sur vos données personnelles stockées par nous (Art. 15 RGPD), Demander la correction de données incorrectes ou l\'achèvement de données incomplètes (Art. 16 RGPD), Demander la suppression de vos données stockées par nous (Art. 17 RGPD), Demander la restriction du traitement de vos données (Art. 18 RGPD), Vous opposer au traitement de vos données (Art. 21 RGPD), Recevoir vos données dans un format commun lisible par machine (Art. 20 RGPD). Pour exercer ces droits, veuillez contacter: d.mamon@moskunlimited.be',
      '5. Sécurité des données: Nous utilisons la procédure SSL répandue (Secure Socket Layer) lors de la visite du site web en connexion avec le niveau de cryptage le plus élevé pris en charge par votre navigateur. Nous utilisons également des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre la manipulation accidentelle ou intentionnelle, la perte partielle ou complète, la destruction ou l\'accès non autorisé par des tiers.',
      '6. Validité et modifications de cette politique de confidentialité: Cette politique de confidentialité est actuellement valide et datée de janvier 2026. En raison du développement ultérieur de notre site web ou en raison d\'exigences légales ou officielles modifiées, il peut devenir nécessaire de modifier cette politique de confidentialité.',
    ],
  },
};

export default function DatenschutzPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('de');

  const languageButtons = [
    { code: 'de' as Language, label: 'Deutsch' },
    { code: 'en' as Language, label: 'English' },
    { code: 'fr' as Language, label: 'Français' },
  ];

  const currentContent = datenschutzData[selectedLanguage];

  return (
    <div className="min-h-screen bg-neutral-950 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#22c55e]" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
              Datenschutz / Privacy Policy
            </h1>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm">Choose your language:</span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {languageButtons.map((lang) => (
              <Button
                key={lang.code}
                variant="ghost"
                onClick={() => setSelectedLanguage(lang.code)}
                className={
                  selectedLanguage === lang.code
                    ? "min-w-[140px] transition-all duration-200 bg-black text-white hover:bg-black border-0"
                    : "min-w-[140px] transition-all duration-200 bg-[#22c55e] text-black hover:bg-[#16a34a] border-0"
                }
              >
                {lang.label}
              </Button>
            ))}
          </div>
        </div>

        <Card className="border-2 border-[#22c55e]/20 shadow-lg bg-neutral-900">
          <CardHeader className="bg-gradient-to-r from-[#22c55e]/10 to-transparent">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 sm:w-6 sm:h-6 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white">
                  {currentContent.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2 text-gray-400">
                  {currentContent.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ScrollArea className="h-[500px] sm:h-[600px] w-full rounded-lg border-2 border-[#22c55e]/20 p-4 sm:p-6 bg-neutral-800/30">
              <div className="space-y-4 sm:space-y-6">
                {currentContent.content.map((paragraph, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#22c55e]/50 transition-colors"
                  >
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
