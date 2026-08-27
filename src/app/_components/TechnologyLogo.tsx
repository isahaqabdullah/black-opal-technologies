import Image from 'next/image';
import Link from 'next/link';
export function TechnologyLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className={`tech-logo${compact ? ' tech-logo-compact' : ''}`}
      aria-label="Black Opal Technologies home"
    >
      <Image
        src="/images/black-opal-logo.png"
        alt=""
        aria-hidden="true"
        width={338}
        height={100}
        className="tech-logo-mark"
      />
    </Link>
  );
}
