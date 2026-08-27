import { Mail, Phone } from 'lucide-react';
import { technologyOffice } from '../_data/site';

export function TechnologyOfficeCard({ className = '' }: { className?: string }) {
  return (
    <address className={`tech-office-card ${className}`.trim()}>
      <span className="tech-office-label">{technologyOffice.label}</span>
      <h3 className="tech-display">{technologyOffice.name}</h3>
      <div className="tech-office-address">
        {technologyOffice.address.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="tech-office-links">
        {technologyOffice.phones.map((phone) => (
          <a href={phone.href} key={phone.href}>
            <Phone size={14} aria-hidden="true" />
            <span>{phone.display}</span>
          </a>
        ))}
        <a href={`mailto:${technologyOffice.email}`}>
          <Mail size={14} aria-hidden="true" />
          <span>{technologyOffice.email}</span>
        </a>
      </div>
    </address>
  );
}
