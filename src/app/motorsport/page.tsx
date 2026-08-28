import { Camera, Check, Gauge, RadioTower } from 'lucide-react';
import { FinalCTA, ImagePanel, PageHero, SectionHeading, TechLink } from '../_components/Primitives';
import { motorsportFeatures, technologyBasePath, technologyImages } from '../_data/site';
import { createPageMetadata } from '../_data/seo';

export const metadata = createPageMetadata({
  title: 'Motorsport Technology',
  description: 'Circuit networks, race-control software, race monitoring, video systems and timing integrations built for live motorsport operations.',
  path: '/motorsport',
});

const capabilityGroups = [
  {
    id: 'circuit-infrastructure',
    icon: RadioTower,
    title: 'Circuit Infrastructure',
    items: ['Circuit fibre backbone', 'Trackside network infrastructure', 'Race-control connectivity', 'Venue Wi-Fi', 'CCTV and monitoring', 'Redundancy planning'],
  },
  {
    id: 'race-monitoring-video-systems',
    icon: Camera,
    title: 'Race Monitoring and Video Systems',
    items: ['Trackside and onboard camera integration', 'Live race monitoring', 'Race-control video wall feeds', 'Multi-camera recording and playback', 'Secure video storage and sharing', 'Incident review workflows'],
  },
];

export default function MotorsportPage() {
  return (
    <>
      <PageHero
        label="Motorsport Technology"
        title="Mission-critical technology for live motorsport."
        description="We integrate circuit infrastructure, race control, timing, race monitoring and video into one resilient ecosystem—giving officials the visibility and reliability needed when every second counts."
        image={technologyImages.hero}
        breadcrumbs={[{ label: 'Motorsport' }]}
      >
        <TechLink href={`${technologyBasePath}/contact`}>Discuss a Motorsport Project</TechLink>
      </PageHero>

      <section className="tech-section">
        <div className="tech-shell tech-editorial-layout">
          <SectionHeading label="A specialist operating environment" title="The circuit, control room and driver cannot work in isolation" />
          <div className="tech-editorial-copy tech-reveal">
            <p>
              A motorsport venue is a large, exposed site where incidents happen quickly and several teams need the same
              information at the same time. A weak trackside link or a confusing control-room workflow becomes an
              operational problem within seconds.
            </p>
            <p>
              We plan the trackside network, race-control software, monitoring, video and timing data together.
              That means fewer blind spots, clearer handovers and technology that supports the race team instead of slowing it down.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-section tech-motorsport-capabilities">
        <div className="tech-shell">
          <SectionHeading label="What we cover" title="From the trackside cabinet to race-control visibility" />
          <div className="tech-motorsport-capability-grid">
            {capabilityGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <article className="tech-motorsport-capability tech-reveal" id={group.id} key={group.title}>
                  <div className="tech-service-overview-topline"><Icon size={25} strokeWidth={1.35} aria-hidden="true" /><span>0{index + 1}</span></div>
                  <h2 className="tech-display">{group.title}</h2>
                  <ul className="tech-check-list">
                    {group.items.map((item) => <li key={item}><Check size={13} aria-hidden="true" /> {item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tech-section tech-motorsport-visual-section">
        <div className="tech-shell tech-motorsport-visual-grid">
          <ImagePanel image={technologyImages.karting} className="tech-motorsport-visual-main" sizes="(max-width: 900px) 100vw, 62vw">
            <div className="tech-image-caption"><span>Facility layer</span><strong>Circuit / karting / academy environments</strong></div>
          </ImagePanel>
          <div className="tech-motorsport-visual-side">
            <ImagePanel image={technologyImages.raceTrack} className="tech-motorsport-visual-small" sizes="(max-width: 900px) 100vw, 34vw">
              <div className="tech-image-caption"><span>Operations layer</span><strong>Control room visibility</strong></div>
            </ImagePanel>
            <div className="tech-motorsport-quote tech-reveal">
              <Gauge size={31} strokeWidth={1.1} aria-hidden="true" />
              <p className="tech-display">Fast events demand calm, dependable systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section tech-operating-model-section">
        <div className="tech-shell">
          <SectionHeading label="One operating plan" title="Every motorsport system has a clear role" />
          <div className="tech-operating-model-grid">
            {motorsportFeatures.map((feature, index) => (
              <article className="tech-operating-model-card tech-reveal" key={feature.title}>
                <span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p>
              </article>
            ))}
          </div>
          <div className="tech-callout tech-reveal">
            <div><span className="tech-kicker">Where systems meet</span><h2 className="tech-display">Timing, race monitoring, networks and software work best when every interface has a clear owner.</h2></div>
            <TechLink href={`${technologyBasePath}/contact`} variant="secondary">Discuss a Motorsport System</TechLink>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
