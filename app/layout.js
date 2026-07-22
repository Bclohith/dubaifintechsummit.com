import './globals.css';

export const metadata = {
  title: 'Dubai FinTech Summit 2026 | Global Financial Innovation Hub',
  description:
    'Join global FinTech leaders at Dubai FinTech Summit 2026 to explore innovation, investment, and digital transformation shaping the future of financial services.',
  keywords: 'Dubai FinTech Summit, fintech, Dubai, DIFC, financial innovation, blockchain, digital transformation',
  openGraph: {
    title: 'Dubai FinTech Summit 2026 | Global Financial Innovation Hub',
    description:
      'Join global FinTech leaders at Dubai FinTech Summit 2026 to explore innovation, investment, and digital transformation shaping the future of financial services.',
    url: 'https://dubaifintechsummit.com',
    siteName: 'Dubai FinTech Summit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai FinTech Summit 2026',
    description:
      'Connecting Markets. Transforming Economies. 2-3 November 2026, Madinat Jumeirah, Dubai.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
