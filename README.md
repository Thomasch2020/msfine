# makerstage landingpage

Deploybares Next.js-Projekt fuer GitHub und Vercel.

## Sicherheitsupdate
- Next.js wurde von `15.3.2` auf `16.2.4` aktualisiert.
- React und React DOM wurden von `19.0.0` auf `19.2.5` aktualisiert.
- `engines.node` wurde auf `>=20.9.0` gesetzt, passend zur Next.js-16-Anforderung.

## Enthalten
- eingebundenes makerstage-Logo unter `public/brand/makerstage-logo.png`
- Logo im Header, Footer und in den Metadaten/Open-Graph-Daten
- Multi-Video-Hero mit drei MP4-Dateien in `public/videos`
- Partnerlogo-Sektion mit realen Logos aus dem Internet
- Kontaktformular mit Demo-API-Route unter `app/api/contact/route.js`
- responsive Landingpage ohne zusaetzliche UI-Abhaengigkeiten

## Lokal starten
```bash
npm install
npm run dev
```

## Build testen
```bash
npm run build
npm start
```

## Vercel Deploy
1. ZIP entpacken
2. den Ordnerinhalt in dein GitHub-Repository pushen, sodass `package.json` im Repository-Root liegt
3. Repository in Vercel importieren oder einen neuen Push ins bestehende GitHub-Repository machen
4. Build Command: `npm run build`
5. Deploy ausloesen

## Hinweise
- Das makerstage-Logo liegt lokal im Projekt und wird aus `public/brand/makerstage-logo.png` geladen.
- Die Partnerlogos stammen aus dem Internet und sollten vor dem finalen Produktiveinsatz markenrechtlich freigegeben werden.
- Die Kontakt-Route ist eine Demo. Fuer echten Mailversand kannst du Resend, Formspree oder eine eigene SMTP/API-Logik anbinden.
- Wenn Vercel nach dem Push weiter cached, in Vercel einen neuen Deploy mit leerem Build Cache starten.

## Kontaktformular

Das Kontaktformular sendet jede Anfrage an `thomas.kral@icccon.ch` und versendet zusätzlich die hinterlegte makerstage-Antwortmail an die ausfüllende Person.

Für Vercel müssen die SMTP-Variablen aus `.env.example` als Environment Variables hinterlegt werden.
