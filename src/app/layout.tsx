import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Linkfluence | Transform Expertise into LinkedIn Influence',
  description: 'AI-powered content platform to build your personal brand and employee advocacy at scale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
