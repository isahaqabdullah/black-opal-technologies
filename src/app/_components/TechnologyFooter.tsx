import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { technologyBasePath } from '../_data/site';
import { TechnologyLogo } from './TechnologyLogo';
import { TechnologyOfficeCard } from './TechnologyOfficeCard';

const companyLinks = [
  { label: 'About', href: `${technologyBasePath}/about` },
  { label: 'Projects', href: `${technologyBasePath}/projects` },
  { label: 'Contact', href: `${technologyBasePath}/contact` },
];

const solutionLinks = [
  { label: 'Network & Fibre', href: `${technologyBasePath}/solutions/network-fibre` },
  { label: 'ELV & Security', href: `${technologyBasePath}/solutions/elv-security` },
  { label: 'Software & AI', href: `${technologyBasePath}/software-ai` },
  { label: 'Systems Integration', href: `${technologyBasePath}/solutions#systems-integration` },
];

const motorsportLinks = [
  { label: 'Circuit Infrastructure', href: `${technologyBasePath}/motorsport#circuit-infrastructure` },
  { label: 'Race Monitoring & Video', href: `${technologyBasePath}/motorsport#race-monitoring-video-systems` },
];

export function TechnologyFooter() {
  return (
    <footer className="tech-footer">
      <div className="tech-shell tech-footer-grid">
        <div className="tech-footer-brand">
          <TechnologyLogo compact />
          <p>
            Network and fibre, ELV and security, software, automation and motorsport technology—available as independent specialist services.
          </p>
          <TechnologyOfficeCard className="tech-footer-office" />
        </div>

        <div className="tech-footer-column">
          <h2>Company</h2>
          {companyLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="tech-footer-column">
          <h2>Solutions</h2>
          {solutionLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="tech-footer-column">
          <h2>Motorsport</h2>
          {motorsportLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="tech-footer-column tech-footer-contact">
          <h2>Contact</h2>
          <p>Tell us what you need to build, improve or bring under control.</p>
          <Link href={`${technologyBasePath}/contact`}>
            Discuss a Project <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="tech-shell tech-footer-bottom">
        <span>© Black Opal Technologies. All rights reserved.</span>
        <span>A Black Opal company</span>
      </div>
    </footer>
  );
}
