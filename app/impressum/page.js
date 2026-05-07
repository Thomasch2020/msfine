export const metadata = {
  title: 'Impressum | makerstage',
  description: 'Impressum von makerstage.',
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="container legal-shell">
        <a href="/" className="brand brand-logo-link" aria-label="Zur makerstage Startseite">
          <img src="/brand/makerstage-logo.png" alt="makerstage Logo" className="brand-logo" width="666" height="106" />
        </a>

        <article className="legal-card">
          <p className="section-kicker">Rechtliches</p>
          <h1>Impressum</h1>

          <h2>Kontaktadresse</h2>
          <p>
            icccon AG<br />
            Andreasstrasse 5<br />
            CH-8050 Zürich<br />
            Schweiz
          </p>
          <p>
            Telefon: +41 44 305 90 00<br />
            E-Mail: info@icccon.ch<br />
            Website: www.icccon.ch
          </p>

          <h2>Copyright/Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Inhalte dürfen ausschliesslich zum privaten, nicht kommerziellen Gebrauch genutzt werden. Jede Vervielfältigung, Verbreitung und Nutzung, die über den privaten Gebrauch hinausgeht, bedarf der schriftlichen Genehmigung der Rechteinhaber. Dies gilt auch für Dateien, die zum Download angeboten werden.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden derartige Inhalte umgehend entfernt.
          </p>

          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff, der Nutzung oder Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Für solche Webseiten wird jegliche Verantwortung abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr der Nutzerinnen und Nutzer.
          </p>

          <h2>Datenschutz</h2>
          <p>
            Personenbezogene Daten erheben wir nur dann, wenn sie notwendig sind, zum Beispiel bei Online-Anfragen via Kontaktformular oder E-Mail, damit Anfragen beantwortet oder Unterlagen zugesendet werden können.
          </p>

          <a href="/" className="legal-back">Zurück zur Startseite</a>
        </article>
      </div>
    </main>
  );
}
