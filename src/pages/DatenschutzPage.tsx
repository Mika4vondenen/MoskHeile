export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">Datenschutz</h1>

        <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8">
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">1. Datenschutz auf einen Blick</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">2. Verantwortliche Stelle</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-2">MOSK unlimited – Einzelunternehmer</p>
              <p>Dmitriy Mamon</p>
              <p>Weissenbrücke 2</p>
              <p>4770 Amel, Belgien</p>
              <p className="mt-2">E-Mail: <a href="mailto:d.mamon@moskunlimited.be" className="text-blue-400 hover:text-blue-300">d.mamon@moskunlimited.be</a></p>
              <p>Telefon: 0176 4769 7299</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">3. Datenerfassung auf dieser Website</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="mt-2">
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Cookies</h3>
              <p>
                Diese Website verwendet nur technisch notwendige Cookies, um die Funktionalität der Website zu gewährleisten. Diese Cookies speichern keine personenbezogenen Daten und dienen ausschließlich dazu, Ihre Einstellungen während Ihres Besuchs zu speichern.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-2">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">4. Ihre Rechte</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Die Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Die Einschränkung der Verarbeitung Ihrer Daten zu verlangen (Art. 18 DSGVO)</li>
                <li>Der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DSGVO)</li>
                <li>Ihre Daten in einem gängigen, maschinenlesbaren Format zu erhalten (Art. 20 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Zur Ausübung dieser Rechte wenden Sie sich bitte an: <a href="mailto:d.mamon@moskunlimited.be" className="text-blue-400 hover:text-blue-300">d.mamon@moskunlimited.be</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">5. Datensicherheit</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
              </p>
              <p className="mt-2">
                Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
