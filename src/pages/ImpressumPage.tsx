export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">Impressum</h1>

        <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8">
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Unternehmen</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>MOSK unlimited – Einzelunternehmer</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Geschäftssitz</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>Weissenbrücke 2</p>
              <p>4770 Amel. Belgien</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Rechtliche Vertretung</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>Dmitriy Mamon</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Firmennummer</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>BE1029443083</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Kontakt</h2>
            <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>E-Mail: <a href="mailto:d.mamon@moskunlimited.be" className="text-blue-400 hover:text-blue-300">d.mamon@moskunlimited.be</a></p>
              <p>Telefon: 0176 4769 7299</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Die Inhalte unserer Seiten wurden mit großer Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Haftung für Links</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Unsere Website enthält Links zu externen Websites Dritter. Wir haben keinen Einfluss auf deren Inhalte und können daher keine Gewähr für diese Inhalte übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Urheberrecht</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Urhebers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
