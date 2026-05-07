export const metadata = {
  title: 'Datenschutzerklärung | makerstage',
  description: 'Datenschutzerklärung von makerstage.',
};

export default function DatenschutzerklaerungPage() {
  return (
    <main className="legal-page">
      <div className="container legal-shell">
        <a href="/" className="brand brand-logo-link" aria-label="Zur makerstage Startseite">
          <img src="/brand/makerstage-logo.png" alt="makerstage Logo" className="brand-logo" width="666" height="106" />
        </a>

        <article className="legal-card">
          <p className="section-kicker">Rechtliches</p>
          <h1>Datenschutzerklärung</h1>

          <p>
            Der Schutz Ihrer Privatsphäre ist uns ein wichtiges Anliegen. Wir bearbeiten personenbezogene Daten gemäss den Anforderungen des Schweizer Datenschutzgesetzes (DSG). Darüber hinaus richten wir uns, soweit anwendbar, auch nach den Vorgaben der Europäischen Datenschutzgrundverordnung (DSGVO).
          </p>

          <h2>1. Verantwortliche Stelle</h2>
          <p>
            icccon AG<br />
            Andreasstrasse 5<br />
            CH-8050 Zürich<br />
            Schweiz
          </p>
          <p>
            E-Mail: info@icccon.ch<br />
            Telefon: +41 44 305 90 00
          </p>

          <h2>2. Bearbeitete Personendaten und Bearbeitungszwecke</h2>
          <p>
            Beim Aufrufen der Webseite werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server der Webseite gesendet. Diese Informationen können temporär in einem Logfile gespeichert werden.
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Endgeräts</li>
            <li>Datum und Uhrzeit der Serveranfrage</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Referrer-URL, Browsertyp, Browserversion und Betriebssystem</li>
            <li>Access-Provider und übertragene Datenmenge</li>
          </ul>
          <p>
            Diese Daten werden bearbeitet, um einen reibungslosen Verbindungsaufbau, die bestmögliche Nutzung der Webseite, die Systemsicherheit und -stabilität sowie administrative Zwecke sicherzustellen.
          </p>

          <h2>3. Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, bearbeiten wir die von Ihnen übermittelten Angaben, damit wir Ihre Anfrage beantworten können. Weitere Angaben können freiwillig gemacht werden.
          </p>

          <h2>4. Cookies und Analysedienste</h2>
          <p>
            Wir können Cookies einsetzen. Cookies sind kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, die Nutzung unseres Angebots angenehmer zu gestalten, die Nutzung der Webseite statistisch zu erfassen und unser Angebot zu optimieren.
          </p>
          <p>
            Sie können Ihren Browser so konfigurieren, dass keine Cookies gespeichert werden oder jeweils ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Bei der Deaktivierung von Cookies können gegebenenfalls nicht alle Funktionen der Webseite vollständig genutzt werden.
          </p>

          <h2>5. Weitergabe von Daten</h2>
          <p>
            Wir können Personendaten an Dienstleister weitergeben, deren Leistungen wir für Betrieb, Hosting, Kommunikation oder Wartung der Webseite in Anspruch nehmen. Wir achten bei der Auswahl solcher Dienstleister darauf, dass der Datenschutz während der Bearbeitung angemessen sichergestellt ist.
          </p>

          <h2>6. Speicherung</h2>
          <p>
            Wir speichern Personendaten in personenbezogener Form nur so lange, wie es für die jeweiligen Zwecke erforderlich oder gesetzlich vorgeschrieben ist. Danach werden Personendaten gelöscht oder anonymisiert.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben insbesondere das Recht:</p>
          <ul>
            <li>Auskunft über die von uns bearbeiteten Personendaten zu verlangen,</li>
            <li>die Berichtigung unrichtiger Personendaten zu verlangen,</li>
            <li>die Löschung oder Einschränkung der Bearbeitung zu verlangen,</li>
            <li>eine erteilte Einwilligung mit Wirkung für die Zukunft zu widerrufen,</li>
            <li>sich an die zuständige Datenschutzbehörde zu wenden.</li>
          </ul>

          <h2>8. Datensicherheit</h2>
          <p>
            Wir treffen geeignete technische und organisatorische Sicherheitsmassnahmen, um Personendaten gegen Manipulation, Verlust, Zerstörung oder unbefugten Zugriff Dritter zu schützen.
          </p>

          <h2>9. Änderung dieser Datenschutzerklärung</h2>
          <p>
            Durch die Weiterentwicklung der Webseite oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
          </p>

          <a href="/" className="legal-back">Zurück zur Startseite</a>
        </article>
      </div>
    </main>
  );
}
