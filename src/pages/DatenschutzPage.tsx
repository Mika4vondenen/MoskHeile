export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">Datenschutzerklärung</h1>

        <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8">
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-2">Verantwortlicher</h3>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>Der Verantwortliche für die Datenverarbeitung auf dieser Website ist:</p>
              <p>Ihr Name<br />Ihre Adresse<br />Ihre E-Mail</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">3. Datenerfassung auf unserer Website</h2>
            <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-2">Cookies</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Diese Website setzt Cookies ein. Cookies sind kleine Textdateien, die von Ihrem Internetbrowser auf Ihrem Rechner abgelegt werden. Sie ermöglichen es uns, Ihre Browsererfahrung zu verbessern.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">4. Ihre Rechte</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Sie haben auch das Recht auf Datenportabilität und das Recht, Widerspruch gegen die Verarbeitung einzulegen.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">5. Kontakt zum Datenschutzbeauftragten</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Sollten Sie Fragen zum Datenschutz haben, erreichen Sie uns unter:
            </p>
            <div className="text-gray-300 space-y-2 mt-3 sm:mt-4 text-sm sm:text-base">
              <p>E-Mail: <a href="mailto:datenschutz@example.com" className="text-blue-400 hover:text-blue-300">datenschutz@example.com</a></p>
            </div>
          </section>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-neutral-900 rounded-lg border border-neutral-800">
            <p className="text-gray-400 text-xs sm:text-sm">
              Hinweis: Dies ist eine Vorlagenseite. Bitte passen Sie die Datenschutzerklärung an Ihre spezifischen Anforderungen an und konsultieren Sie ggf. einen Rechtsanwalt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
