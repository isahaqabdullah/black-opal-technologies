import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { TechnologyShell } from './_components/TechnologyShell';

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000');

export const viewport: Viewport = {
  themeColor: '#050505',
};

export const metadata: Metadata = {
  metadataBase,
  applicationName: 'Black Opal Technologies',
  title: {
    default: 'Black Opal Technologies | Infrastructure, Security & Software',
    template: '%s | Black Opal Technologies',
  },
  description:
    'Specialist services across network and fibre, ELV and security, custom software, automation and motorsport technology.',
  icons: {
    icon: [
      { url: '/icon-petal-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-petal-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/icon-petal-192.png', type: 'image/png', sizes: '192x192' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Black Opal Technologies | Infrastructure, Security & Software',
    description:
      'Specialist services across network and fibre, ELV and security, custom software, automation and motorsport technology.',
    siteName: 'Black Opal Technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Opal Technologies | Infrastructure, Security & Software',
    description:
      'Specialist services across network and fibre, ELV and security, custom software, automation and motorsport technology.',
  },
};

export default function TechnologyLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TechnologyShell>{children}</TechnologyShell>
      </body>
    </html>
  );
}
