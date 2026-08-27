import { BellRing, Camera, Check, DoorOpen, Radio, ShieldCheck, Volume2 } from 'lucide-react';
import type { Metadata } from 'next';
import { FinalCTA, ImagePanel, PageHero, SectionHeading, TechLink } from '../../_components/Primitives';
import { technologyBasePath, technologyImages, websiteImages } from '../../_data/site';

export const metadata: Metadata = {
  title: 'ELV & Security Systems',
  description: 'CCTV, access control, audio and monitoring designed around the way people operate and protect a facility.',
};

const systems = [
  { icon: Camera, title: 'CCTV & Video', copy: 'Camera locations, recording and monitoring planned around what your team genuinely needs to see and review.' },
  { icon: DoorOpen, title: 'Access Control', copy: 'Doors, permissions and movement rules configured around people and day-to-day operating procedures.' },
  { icon: Volume2, title: 'Audio Systems', copy: 'Public address and operational communications designed for clear coverage and straightforward use.' },
  { icon: Radio, title: 'Wireless Infrastructure', copy: 'Reliable connectivity for staff, guests and operational devices across the facility.' },
  { icon: BellRing, title: 'Monitoring & Alerts', copy: 'Useful alerts, sensible escalation and a clear view of system health from one operating position.' },
  { icon: ShieldCheck, title: 'Integrated Security', copy: 'Cameras, access control, software and operator screens connected around shared incident procedures.' },
];

export default function ElvSecurityPage() {
  return (
    <>
      <PageHero
        label="ELV & Security"
        title="Security and low-voltage systems your team can actually use"
        description="We bring CCTV, access control, audio, monitoring and connectivity together around the way your facility is operated."
        image={technologyImages.cctv}
        breadcrumbs={[
          { label: 'Solutions', href: `${technologyBasePath}/solutions` },
          { label: 'ELV & Security' },
        ]}
      >
        <TechLink href={`${technologyBasePath}/contact`}>Discuss an ELV Project</TechLink>
      </PageHero>

      <section className="tech-section">
        <div className="tech-shell tech-editorial-layout">
          <SectionHeading label="Designed around the operator" title="More equipment does not automatically mean better control" />
          <div className="tech-editorial-copy tech-reveal">
            <p>
              A security system is only useful if the right person can see what happened, understand the alert and act
              quickly. That depends on more than the camera or door controller—it depends on coverage, connectivity,
              storage, permissions and a practical operating procedure.
            </p>
            <p>
              We coordinate those details as one job. Your operators get a system designed around real events, and your
              technical team gets clear records of how it is connected and supported.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-section tech-detail-services">
        <div className="tech-shell">
          <SectionHeading label="Systems" title="Practical tools for a safer, more visible facility" />
          <div className="tech-detail-service-grid">
            {systems.map((system, index) => {
              const Icon = system.icon;
              return (
                <article className="tech-detail-service-card tech-reveal" key={system.title}>
                  <div><Icon size={22} strokeWidth={1.4} aria-hidden="true" /><span>0{index + 1}</span></div>
                  <h3 className="tech-display">{system.title}</h3>
                  <p>{system.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tech-section tech-split-section">
        <div className="tech-shell tech-split-layout tech-split-layout-reverse">
          <div className="tech-split-copy tech-reveal">
            <span className="tech-kicker">Integration and commissioning</span>
            <h2 className="tech-display">Designed around what your operators need to see, decide and do</h2>
            <ul className="tech-check-list tech-check-list-large">
              {[
                'Coverage and operational requirements defined before product selection',
                'Network, storage and power demand coordinated across systems',
                'Operator interfaces designed around real events and escalation paths',
                'Third-party and software integrations documented explicitly',
                'Testing scenarios agreed before commissioning',
                'Handover includes records, training and maintainability requirements',
              ].map((item) => <li key={item}><Check size={15} aria-hidden="true" /> {item}</li>)}
            </ul>
            <TechLink href={`${technologyBasePath}/solutions#systems-integration`} variant="text">Explore Systems Integration</TechLink>
          </div>
          <ImagePanel image={websiteImages.wirelessSmartBuilding} className="tech-split-image" sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </section>

      <section className="tech-section tech-lifecycle-section">
        <div className="tech-shell">
          <SectionHeading label="Before handover" title="Installed is not the same as ready to operate" />
          <div className="tech-lifecycle-grid tech-lifecycle-grid-four">
            {['Functional testing', 'Failure and recovery scenarios', 'Operator workflow validation', 'Documentation & handover'].map((item, index) => (
              <div className="tech-lifecycle-step tech-reveal" key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
