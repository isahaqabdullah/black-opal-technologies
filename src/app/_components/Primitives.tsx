import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import type { TechnologyImage } from '../_data/site';
import { technologyBasePath } from '../_data/site';

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`tech-section-heading tech-section-heading-${align} tech-reveal`}>
      {label ? <span className="tech-kicker">{label}</span> : null}
      <h2 className="tech-display tech-section-title">{title}</h2>
      {description ? <p className="tech-copy tech-section-description">{description}</p> : null}
    </div>
  );
}

export function TechLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
}) {
  return (
    <Link className={`tech-link tech-link-${variant} ${className}`.trim()} href={href}>
      <span className="tech-link-label">{children}</span>
      <ArrowRight size={15} strokeWidth={1.7} aria-hidden="true" />
    </Link>
  );
}

export function ImagePanel({
  image,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  children,
}: {
  image: TechnologyImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`tech-image-panel ${className}`.trim()}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition: image.position }}
      />
      <span className="tech-image-shade" aria-hidden="true" />
      {children}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="tech-breadcrumbs">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item) => (
          <li key={`${item.label}-${item.href ?? 'current'}`}>
            <ChevronRight size={12} aria-hidden="true" />
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  label,
  title,
  description,
  image,
  breadcrumbs,
  children,
}: {
  label: string;
  title: string;
  description: string;
  image?: TechnologyImage;
  breadcrumbs: Array<{ label: string; href?: string }>;
  children?: ReactNode;
}) {
  return (
    <section className={`tech-page-hero${image ? '' : ' tech-page-hero-no-image'}`}>
      {image ? <ImagePanel image={image} priority sizes="100vw" className="tech-page-hero-image" /> : null}
      <div className="tech-page-hero-overlay" aria-hidden="true" />
      <div className="tech-shell tech-page-hero-inner">
        <Breadcrumbs items={breadcrumbs} />
        <div className="tech-page-hero-copy tech-reveal">
          <span className="tech-kicker">{label}</span>
          <h1 className="tech-display tech-page-title">{title}</h1>
          <p className="tech-copy tech-page-description">{description}</p>
          {children ? <div className="tech-page-hero-actions">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function SystemGraphic({
  label,
  items,
  className = '',
}: {
  label: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={`tech-system-graphic ${className}`.trim()}>
      <div className="tech-system-graphic-header">
        <span>Delivery framework</span>
        <strong>{label}</strong>
      </div>
      <div className="tech-system-graphic-core">
        <span>Black Opal</span>
        <strong>Defined scope and ownership</strong>
      </div>
      <ol aria-label={label}>
        {items.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="tech-final-cta">
      <div className="tech-shell tech-final-cta-inner tech-reveal">
        <span className="tech-kicker">What are you looking to deliver?</span>
        <h2 className="tech-display">Choose a specialist service or tell us what the project needs to achieve.</h2>
        <p className="tech-copy">
          You do not need a finished specification. Select the closest service, describe the requirement and we will
          help establish a practical scope and next step.
        </p>
        <div className="tech-actions">
          <TechLink href={`${technologyBasePath}/contact`}>Discuss a Project</TechLink>
        </div>
      </div>
    </section>
  );
}
