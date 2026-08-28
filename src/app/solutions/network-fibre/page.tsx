import { Check, Network, Router, Server, Wifi, Workflow } from 'lucide-react';
import { FinalCTA, ImagePanel, PageHero, SectionHeading, TechLink } from '../../_components/Primitives';
import { technologyBasePath, technologyImages } from '../../_data/site';
import { createPageMetadata } from '../../_data/seo';

export const metadata = createPageMetadata({
  title: 'Network & Fibre Infrastructure',
  description: 'Wired, wireless and fibre networks planned, installed, tested and documented for dependable day-to-day use.',
  path: '/solutions/network-fibre',
});

const services = [
  { icon: Workflow, title: 'Fibre-Optic Infrastructure', copy: 'Backbones, pathways and terminations designed for today’s needs and sensible future expansion.' },
  { icon: Network, title: 'Structured Cabling', copy: 'Copper, fibre, containment, racks and labelling installed so the system remains easy to trace and maintain.' },
  { icon: Router, title: 'Switching & Routing', copy: 'Core, distribution and access networks with the right segmentation and resilience for the operation.' },
  { icon: Wifi, title: 'Enterprise Wi-Fi', copy: 'Coverage, capacity and roaming planned around the building, its users and the devices they depend on.' },
  { icon: Server, title: 'Edge & Server Environments', copy: 'Racks, compute, storage and service connections coordinated with the network and the systems they support.' },
  { icon: Check, title: 'Testing & Commissioning', copy: 'Certification, real-world validation, usable records and a structured operational handover.' },
];

const principles = [
  'Resilience aligned to operational criticality',
  'Network segmentation and clear security boundaries',
  'Capacity planned for current load and future expansion',
  'Physical pathways that remain serviceable over time',
  'Documented naming, addressing and asset records',
  'Performance verified before operational handover',
];

export default function NetworkFibrePage() {
  return (
    <>
      <PageHero
        label="Network & Fibre"
        title="A network your operation can rely on—and your team can maintain"
        description="We plan, deliver and test wired, wireless and fibre infrastructure for reliable coverage, sensible resilience and long-term serviceability."
        image={technologyImages.networkEngineer}
        breadcrumbs={[
          { label: 'Solutions', href: `${technologyBasePath}/solutions` },
          { label: 'Network & Fibre' },
        ]}
      >
        <TechLink href={`${technologyBasePath}/contact`}>Discuss Infrastructure</TechLink>
      </PageHero>

      <section className="tech-section">
        <div className="tech-shell tech-editorial-layout">
          <SectionHeading
            label="Why the foundation matters"
            title="When the network struggles, every connected system feels it"
          />
          <div className="tech-editorial-copy tech-reveal">
            <p>
              Cameras, access control, phones, cloud applications and day-to-day communications can all depend on the
              same network. Poor coverage, undocumented changes or a single weak link soon becomes an operational issue,
              not just an IT inconvenience.
            </p>
            <p>
              We look at the whole path: containment, fibre, cabling, racks, switching, wireless and edge services. Then
              we test the result in the conditions your people and connected systems will actually face.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-section tech-detail-services">
        <div className="tech-shell">
          <SectionHeading label="Core services" title="Everything needed for a network that is ready for use" />
          <div className="tech-detail-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="tech-detail-service-card tech-reveal" key={service.title}>
                  <div><Icon size={22} strokeWidth={1.4} aria-hidden="true" /><span>0{index + 1}</span></div>
                  <h3 className="tech-display">{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tech-section tech-split-section">
        <div className="tech-shell tech-split-layout">
          <ImagePanel image={technologyImages.dataCenter} className="tech-split-image" sizes="(max-width: 900px) 100vw, 48vw" />
          <div className="tech-split-copy tech-reveal">
            <span className="tech-kicker">What good looks like</span>
            <h2 className="tech-display">Reliable in service. Clear when something needs attention.</h2>
            <ul className="tech-check-list tech-check-list-large">
              {principles.map((principle) => (
                <li key={principle}><Check size={15} aria-hidden="true" /> {principle}</li>
              ))}
            </ul>
            <TechLink href={`${technologyBasePath}/contact`} variant="text">Plan Your Network</TechLink>
          </div>
        </div>
      </section>

      <section className="tech-section tech-lifecycle-section">
        <div className="tech-shell">
          <SectionHeading label="From survey to support" title="We leave you with a working network and a useful record of it" />
          <div className="tech-lifecycle-grid">
            {['Survey & requirements', 'Architecture & design', 'Deployment coordination', 'Configuration', 'Testing & certification', 'Documentation & support'].map((item, index) => (
              <div className="tech-lifecycle-step tech-reveal" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
