import type { Metadata } from 'next';

export const siteName = 'Black Opal Technologies';
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://blackopaltechnologies.com',
);

export const defaultTitle = 'Black Opal Technologies | Infrastructure, Security & Software';
export const defaultDescription =
  'Specialist services across network and fibre, ELV and security, custom software, automation and motorsport technology.';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName,
      locale: 'en_AE',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'Black Opal Technologies — Infrastructure, Security and Software',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/opengraph-image'],
    },
  };
}
