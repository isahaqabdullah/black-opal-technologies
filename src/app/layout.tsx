import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { TechnologyShell } from './_components/TechnologyShell';
import { technologyOffice } from './_data/site';
import { defaultDescription, defaultTitle, siteName, siteUrl } from './_data/seo';

export const viewport: Viewport = {
  themeColor: '#050505',
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  authors: [{ name: siteName, url: '/' }],
  creator: siteName,
  publisher: siteName,
  category: 'technology services',
  icons: {
    icon: [
      { url: '/icon-petal-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-petal-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/icon-petal-192.png', type: 'image/png', sizes: '192x192' }],
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: '/',
    siteName,
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl.origin}/#organization`,
  name: siteName,
  url: siteUrl.origin,
  logo: new URL('/images/black-opal-logo.png', siteUrl).toString(),
  email: technologyOffice.email,
  contactPoint: technologyOffice.phones.map((phone) => ({
    '@type': 'ContactPoint',
    telephone: phone.href.replace('tel:', ''),
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: 'English',
  })),
  address: {
    '@type': 'PostalAddress',
    streetAddress: technologyOffice.address.join(', '),
    addressLocality: 'Abu Dhabi',
    addressCountry: 'AE',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl.origin}/#website`,
  url: siteUrl.origin,
  name: siteName,
  publisher: { '@id': `${siteUrl.origin}/#organization` },
  inLanguage: 'en',
};

const structuredData = JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, '\\u003c');

export default function TechnologyLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
        <TechnologyShell>{children}</TechnologyShell>
      </body>
    </html>
  );
}
