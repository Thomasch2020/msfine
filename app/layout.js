import './globals.css';

export const metadata = {
  title: 'makerstage',
  description: 'The Makers Stage verbindet die Schweizer Immobilienbranche und macht technologiegetriebene Innovationen erlebbar.',
  icons: {
    icon: '/brand/makerstage-logo.png',
    shortcut: '/brand/makerstage-logo.png',
    apple: '/brand/makerstage-logo.png',
  },
  openGraph: {
    title: 'makerstage',
    description: 'The Makers Stage verbindet die Schweizer Immobilienbranche und macht technologiegetriebene Innovationen erlebbar.',
    images: [
      {
        url: '/brand/makerstage-logo.png',
        width: 666,
        height: 106,
        alt: 'makerstage Logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
