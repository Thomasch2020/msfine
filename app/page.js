'use client';

import { useEffect, useState } from 'react';

const pillars = [
  {
    title: 'Vision',
    text: 'Wir gestaltenden den Immobilienlebenszyklus von morgen – und setzen damit weltweit Massstäbe.',
  },
  {
    title: 'Mission',
    text: 'Wir vernetzen alle Akteure rund um Immobilien und schaffen eine lebendige Plattform für Innovation, Austausch und Zusammenarbeit. Die Digitalisierung und Nachhaltigkeit sind dabei die Basis auf die wir bauen.',
  },
  {
    title: 'Strategie',
    text: 'Einmal im Jahr bringen wir auf der Stage frische und spannende Innovationen sowie wertvollen Austausch zusammen. Das ganze Jahr unterstützen wir die Realisierung dieser Innovationen in Unternehmen und im Markt. Nach einem Jahr treffen wir uns wieder und tauschen unsere Erfahrungen aus.',
  },
];

const partnerTiers = [
  {
    name: 'Bronze',
    price: 'Netzwerk Partner',
    items: [
      'Recht: Nennung auf Stage- und Kommunikationsmassnahmen',
      'Recht: Exklusive News von makerstage',
      'Recht: Gratis- und reduzierte Eintritte zur Stage',
      'Pflicht: Kommunikation und Marketing über das eigene Netzwerk',
      'Pflicht: Verbreitung von Aktionen über eigene Kanäle',
      'Pflicht: Finanzielle Beteiligung CHF 1000/a',
    ],
  },
  {
    name: 'Silber',
    price: 'CHF 5’000 / Jahr',
    items: [
      'Alle Bronze-Rechte und -Pflichten',
      'Beteiligung an der Finanzierung der Plattform',
      'Halbe A4-Seite Unternehmenswerbung in Publikationen',
    ],
  },
  {
    name: 'Gold',
    price: 'CHF 10’000 / Jahr',
    featured: true,
    items: [
      'Alle Bronze-Rechte und -Pflichten',
      'Ganze A4-Seite Unternehmenswerbung',
      'Reduzierte und Gratistickets',
      'Messestandplatz oder Messestand',
    ],
  },
  {
    name: 'Platin',
    price: 'CHF 15’000–20’000 / Jahr',
    featured: true,
    items: [
      'Alle Bronze-Rechte und -Pflichten',
      'Zwei A4-Seiten Werbung oder Artikel',
      'Marketingartikel auf der Stage verteilen',
      '15 Minuten Präsentationsslot',
      'Vorrecht auf Pilotierung von The Makers Projekten',
    ],
  },
  {
    name: 'Rhodium',
    price: 'Partner',
    featured: true,
    items: [
      'Recht: Alle Plation-Rechte und -Pflichten',
      'Recht: Vier A4-Seiten Werbung oder Artikel in der Stage Print',
      'Recht: Beliebig Marketingartikel auf der Stage verteilen',
      'Recht: 30 Minuten Präsentationsslot einer Innovation im eigenen Branding',
      'Recht: Vorrecht auf Pilotierung von The Makers Projekten',
      'Pflicht: CHF 20’000 / Jahr',
    ],
  },
];

const partners = [
  { name: 'icccon.ch', url: 'https://icccon.ch/' },
  { name: 'burkhardtgroup.com', url: 'https://burkhardtgroup.com/' },
  { name: 'allthings.me', url: 'https://allthings.me/' },
  { name: 'swiss-securitas.com', url: 'https://swiss-securitas.com/' },
  { name: 'bauklar.ai', url: 'https://bauklar.ai/' },
  { name: 're-x.ch', url: 'https://re-x.ch/' },
];

const heroVideos = [
  '/videos/hero-01.mp4',
  '/videos/hero-02.mp4',
  '/videos/hero-03.mp4',
];

function VideoHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroVideos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" aria-label="makerstage Intro">
      <div className="hero-media" aria-hidden="true">
        {heroVideos.map((src, index) => (
          <video
            key={src}
            className={`hero-video ${index === activeIndex ? 'is-active' : ''}`}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ))}
        <div className="hero-overlay" />
        <div className="hero-glow" />
      </div>

      <div className="container hero-content">
        <h1>
          Die Zukunft der <span>Immobilienwelt</span> gemeinsam auf die Bühne bringen.
        </h1>
        <p className="lead">
          The Makers Stage – ist die Plattform für reale und technologiegetriebene Innovationen aus aller Welt. Hier treffen sich Macher:innen, um Erfahrungen mit diesen Innovationen zu teilen, voneinander zu lernen und gemeinsam die Zukunft erfolgreich in Unternehmen und in den Markt einzubringen.
        </p>

        <div className="cta-row">
          <a href="#save-the-date" className="button button-primary">Save the Date</a>
          <a href="#partner-models" className="button button-secondary">Partner werden</a>
        </div>

        <div className="quick-grid">
          <div className="quick-card">
            <div className="quick-title">The Stage</div>
            <p>Einmal pro Jahr Innovation und Austausch.</p>
          </div>
          <div className="quick-card">
            <div className="quick-title">The Makers</div>
            <p>Ganzjährig Projekte und Realisierung.</p>
          </div>
          <div className="quick-card">
            <div className="quick-title">Community</div>
            <p>Einzelpersonen, Unternehmen, kurz: Zukunft Gestalter:innen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand brand-logo-link" aria-label="makerstage Startseite">
            <img src="/brand/makerstage-logo.png" alt="makerstage Logo" className="brand-logo" width="666" height="106" />
          </a>
          <nav className="nav" aria-label="Hauptnavigation">
            <a href="#about">Über</a>
            <a href="#format">Format</a>
            <a href="#partner-models">Partner</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </header>

      <div id="top" />
      <VideoHero />

      <section id="about" className="section section-grid">
        <div className="container">
          <div className="section-head narrow">
            <p className="section-kicker">Über</p>
            <h2 className="overview-title">The Makers Stage verbindet die Schweizer Immobilienbranche</h2>
            <div className="section-copy">
              <p>
                <span className="accent-text">durch die Kraft eines kuratierten Events mit der Dynamik eines aktiven Netzwerks.</span>
              </p>
              <p>
                Unser Ziel ist es, über technologiegetriebene Innovation nicht nur zu diskutieren, sondern diese erlebbar zu machen: real, greifbar und inspirierend. Wir schaffen damit Begeisterung, die über den Moment hinaus wirkt - und bringen Menschen zusammen, die gemeinsam darüber sprechen, wie technologiegetriebene Innovationen konkret in Projekte sowie Unternehmen und den Markt eingebracht werden können.
              </p>
              <p>
                Während China und das Silicon Valley in den vergangenen Jahren bei der Nutzung neuer technologiegetriebener Innovationen Vorsprung erlangt haben, steht die Schweizer Immobilienbranche jetzt vor einer einzigartigen Chance: von diesen Entwicklungen zu lernen, das Potenzial für sich zu nutzen und die Zukunft der Branche aktiv mitzugestalten.<br />
                <span className="accent-line">Wenn wir unsere Kompetenzen, Erfahrungen und Ideen bündeln, können wir nicht nur aufholen - sondern weltweit neue Massstäbe setzen.</span>
              </p>
              <p>
                The Makers Stage ist der Ort für alle, die nicht abwarten, sondern etwas bewegen wollen. Für Menschen, die Innovation erleben, sich dafür begeistern können und gemeinsam in die Umsetzung bringen möchten.
              </p>
            </div>
          </div>

          <div className="cards three-col">
            {pillars.map((pillar) => (
              <article className="glass-card" key={pillar.title}>
                <p className="card-kicker">{pillar.title}</p>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="format" className="section alt-section">
        <div className="container">
          <p className="section-kicker format-kicker">FORMAT</p>
          <div className="split-grid format-grid">
            <article className="glass-card feature-card">
              <p className="card-kicker">Einmal im Jahr</p>
              <h3>The Stage</h3>
            </article>
            <article className="glass-card feature-card">
              <p className="card-kicker">365 Tage Wirkung</p>
              <h3>The Makers</h3>
            </article>
          </div>
        </div>
      </section>

      <section id="save-the-date" className="section save-date-section">
        <div className="container">
          <div className="highlight-panel highlight-panel-image">
              <div>
                <p className="section-kicker">Save the Date</p>
                <h2>13. Januar 2027</h2>
              </div>
              <div className="mini-panel save-date-info">
                <p className="card-kicker save-date-kicker">FIRST STAGE · NEXT TO IMMO27</p>
                <p>
                  Zum Jahresauftakt erwartet euch in Zürich Oerlikon ein besonderer Tag: zwei Events an einem Standort - die IMMO27 in der Halle 550 und unsere erste Stage in der Halle 622.
                </p>
                <p>
                  Mit der Stage führen wir den Spirit des IFMA Spotlight 2026 weiter: ein kompakten, inspirierenden Rückblick mit relevanten Impulsen, Austausch und Begegnungen innerhalb der Branche findet ihr hier: <a href="https://www.youtube.com/watch?v=jSa3bXpuQhg&t=2s" target="_blank" rel="noreferrer">Rückblick</a>
                </p>
                <p>
                  Ihr könnt euch bereits heute anmelden: <a href="#registration" className="accent-text">Anmeldung</a>
                </p>
              </div>
          </div>
        </div>
      </section>

      <section id="registration" className="section registration-section">
        <div className="container registration-shell">
          <div className="registration-copy">
            <p className="section-kicker">ANMELDUNG</p>
            <h2>Zur Stage anmelden.</h2>
            <p>Du hast folgende Optionen dich zur Stage anzumelden:</p>
            <p>Wenn Du keine maker:in bist kostet Dich die Stage CHF 150.</p>
            <p>Bist Du maker:in oder hat deine Fima einen Partnerstatus hast Du freien Eintritt insofern das Kontingent nicht aufgebraucht ist.</p>
          </div>

          <form className="contact-form registration-form" method="post" action="/api/registration">
            <label>
              <span>Vorname</span>
              <input type="text" name="firstName" placeholder="Vorname" required />
            </label>
            <label>
              <span>Nachname</span>
              <input type="text" name="lastName" placeholder="Nachname" required />
            </label>
            <label>
              <span>Unternehmen*</span>
              <input type="text" name="company" placeholder="Firma / Organisation" />
            </label>
            <label>
              <span>E-Mail</span>
              <input type="email" name="email" placeholder="name@provider.ch" required />
            </label>
            <label>
              <span>Telefon*</span>
              <input type="tel" name="phone" placeholder="+41 ..." />
            </label>
            <label>
              <span>Teilnahmestatus</span>
              <select name="status" defaultValue="Kein:e Maker:in / Partner:in">
                <option>Kein:e Maker:in / Partner:in</option>
                <option>Bronze Partner:in</option>
                <option>Silber Partner:in</option>
                <option>Gold Partner:in</option>
                <option>Platin Partner:in</option>
                <option>Rhodium Partner:in</option>
              </select>
            </label>
            <label className="full">
              <span>Rechnungsadresse / Bemerkung</span>
              <textarea name="message" rows="5" placeholder="Adresse für Rechnung, Partnerunternehmen oder weitere Hinweise" />
            </label>
            <button type="submit" className="button button-primary">Anmeldung senden</button>
          </form>
          <p className="registration-note">*Optional</p>
        </div>
      </section>

      <section id="partner-models" className="section alt-section partner-section">
        <div className="container">
          <div className="section-head narrow">
            <p className="section-kicker">PARTNER</p>
          </div>

          <div className="logo-grid">
            {partners.map((partner) => (
              <a key={partner.name} href={partner.url} className="logo-card" target="_blank" rel="noreferrer" aria-label={partner.name}>
                <span className="logo-text">{partner.name}</span>
              </a>
            ))}
          </div>

          <div className="partner-model-block">
            <div className="section-head narrow">
              <h2 className="overview-title">Vier Modelle, um makerstage mitzugestalten.</h2>
            </div>

            <div className="tier-scroll" aria-label="Partnermodelle horizontal scrollbar">
              <div className="cards four-col">
                {partnerTiers.map((tier) => (
                  <article className={`tier-card ${tier.featured ? 'tier-featured' : ''}`} key={tier.name}>
                    <p className="card-kicker">{tier.name}</p>
                    <h3>{tier.price}</h3>
                    <ul>
                      {tier.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section initiator-section">
        <div className="container split-quote">
          <article className="glass-card feature-card">
            <p className="section-kicker">INITIATOR</p>
            <h3>Thomas Kral</h3>
            <p>
              mit dem Anspruch, die Schweizer Immobilienbranche zusammen zu bringen und weltweit Massstäbe in der Nutzung technologiegetriebene Innovationen zu setzen.
            </p>
          </article>
          <div className="quote-panel">
            <blockquote>
              «Die Schweizer Immobilienbranche hat das Potenzial, weltweit Massstäbe zu setzen – wenn wir es gemeinsam tun.»
            </blockquote>
            <p>
              The Makers Stage bündelt Kräfte, teilt Ressourcen und eröffnet einen Raum, in dem Fachpersonen, Unternehmen und Innovatoren voneinander lernen und Projekte gemeinsam realisieren können.
            </p>
          </div>
        </div>
      </section>


      <section id="contact" className="section alt-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="section-kicker">Kontakt</p>
            <h2>Lass uns makerstage gemeinsam aufbauen.</h2>
            <p>
              Nutze die Kontaktmöglichkeiten und sprich uns mit Deinen Anliegen an egal was Dir zum Thema makerstage auf dem Herzen liegt.
            </p>
            <div className="contact-meta">
              <div>
                <strong>E-Mail</strong>
                <span>thomas.kral@icccon.ch</span>
              </div>
            </div>
          </div>

          <form className="contact-form" method="post" action="/api/contact">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Vorname Nachname" required />
            </label>
            <label>
              <span>Unternehmen</span>
              <input type="text" name="company" placeholder="Firma / Organisation" />
            </label>
            <label>
              <span>E-Mail</span>
              <input type="email" name="email" placeholder="name@firma.ch" required />
            </label>
            <label>
              <span>Interesse</span>
              <select name="interest" defaultValue="Partnerschaft">
                <option>Partnerschaft</option>
                <option>Speaker</option>
                <option>Allgemeine Anfrage</option>
              </select>
            </label>
            <label className="full">
              <span>Nachricht</span>
              <textarea name="message" rows="6" placeholder="Wie möchtest du makerstage unterstützen oder mitgestalten?" required />
            </label>
            <button type="submit" className="button button-primary">Anfrage senden</button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner footer-legal">
          <p>© 2026 makerstage.</p>
          <nav className="footer-links" aria-label="Rechtliches">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutzerklaerung">Datenschutzerklärung</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
