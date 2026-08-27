export const technologyBasePath = '';

export const technologyOffice = {
  label: 'Head office',
  name: 'Black Opal Technologies',
  address: ['Smart Station, 1st Floor', 'Incubator Bldg. I Masdar City', 'Abu Dhabi, UAE'],
  phones: [
    { display: '+971 55 4377 007', href: 'tel:+971554377007' },
    { display: '+971 50 2404 708', href: 'tel:+971502404708' },
  ],
  email: 'info@blackopaltechnologies.com',
} as const;

export type TechnologyImage = {
  src: string;
  alt: string;
  position?: string;
};

export type Capability = {
  id: 'network' | 'elv' | 'software' | 'motorsport';
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  ctaLabel: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  categories: string[];
  tags: string[];
  listed: boolean;
  publishedCaseStudy: boolean;
};

export type TypicalEngagement = {
  title: string;
  description: string;
  deliverables: string[];
};

export const technologyNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: `${technologyBasePath}/solutions` },
  { label: 'Motorsport', href: `${technologyBasePath}/motorsport` },
  { label: 'Software & AI', href: `${technologyBasePath}/software-ai` },
  { label: 'Projects', href: `${technologyBasePath}/projects` },
  { label: 'About', href: `${technologyBasePath}/about` },
  { label: 'Contact', href: `${technologyBasePath}/contact` },
] as const;

export const solutionsNavigation = [
  {
    label: 'Solutions overview',
    description: 'Explore each specialist technology service and choose what your project needs.',
    href: `${technologyBasePath}/solutions`,
  },
  {
    label: 'Network & Fibre',
    description: 'Wired, wireless and fibre networks built for dependable day-to-day use.',
    href: `${technologyBasePath}/solutions/network-fibre`,
  },
  {
    label: 'ELV & Security',
    description: 'CCTV, access control, audio and monitoring designed around your operation.',
    href: `${technologyBasePath}/solutions/elv-security`,
  },
  {
    label: 'Systems Integration',
    description: 'Optional coordination when devices, networks, platforms and software need to connect.',
    href: `${technologyBasePath}/solutions#systems-integration`,
  },
] as const;

export const technologyImages = {
  hero: {
    src: '/images/technology/motorsport-night.jpg',
    alt: 'Race car operating on a circuit at night',
    position: '50% 64%',
  },
  raceTrack: {
    src: '/images/technology/motorsport-track.jpg',
    alt: 'Race car at speed on a professional circuit',
  },
  karting: {
    src: '/images/technology/karting.jpg',
    alt: 'Drivers competing on an indoor karting circuit',
  },
  dataCenter: {
    src: '/images/technology/data-center.jpg',
    alt: 'Modern data centre corridor with network racks',
  },
  networkEngineer: {
    src: '/images/technology/network-engineer.jpg',
    alt: 'Network engineer commissioning rack-mounted infrastructure',
  },
  controlRoom: {
    src: '/images/technology/control-room.jpg',
    alt: 'Engineers working in an operational control room',
  },
  commercial: {
    src: '/images/technology/commercial-interior.jpg',
    alt: 'Light-filled atrium in a modern hospitality environment',
  },
  cctv: {
    src: '/images/technology/cctv.jpg',
    alt: 'Building-mounted CCTV camera',
  },
} satisfies Record<string, TechnologyImage>;

export const websiteImages = {
  hero: {
    src: '/images/technology/home-network-control-room.png',
    alt: 'Network rack and operational control room in a connected facility',
    position: '50% 50%',
  },
  network: {
    src: '/images/technology/final/02_network_and_fibre_infrastructure.jpg',
    alt: 'Organised network cabling connected to infrastructure equipment',
  },
  elv: {
    src: '/images/technology/final/04_elv_and_security_systems.jpg',
    alt: 'Integrated security camera in a commercial facility',
  },
  software: {
    src: '/images/technology/final/05_software_and_digital_solutions.jpg',
    alt: 'Software development workspace with application code',
  },
  aiAutomation: {
    src: '/images/technology/final/06_ai_and_automation.jpg',
    alt: 'AI and automation interface supporting an operational workflow',
  },
  systemsIntegration: {
    src: '/images/technology/final/07_systems_integration.jpg',
    alt: 'Integrated technology systems connected across a facility',
  },
  wirelessSmartBuilding: {
    src: '/images/technology/final/08_wireless_and_smart_building_systems.jpg',
    alt: 'Wireless and smart-building technology within a modern facility',
  },
  motorsport: {
    src: '/images/technology/final/12_motorsport_and_automotive.jpg',
    alt: 'Professional motorsport circuit at dusk',
  },
} satisfies Record<string, TechnologyImage>;

export const capabilities: Capability[] = [
  {
    id: 'network',
    eyebrow: 'Physical layer',
    title: 'Network & Fibre Infrastructure',
    description: 'Reliable wired, wireless and fibre connectivity, from the first survey through testing and handover.',
    items: [
      'Fibre-optic infrastructure',
      'Structured cabling',
      'LAN/WAN',
      'Switching & routing',
      'Enterprise Wi-Fi',
      'Network redundancy',
      'Testing & commissioning',
    ],
    ctaLabel: 'Explore Infrastructure',
    href: `${technologyBasePath}/solutions/network-fibre`,
  },
  {
    id: 'elv',
    eyebrow: 'Connected systems',
    title: 'ELV & Security Systems',
    description: 'CCTV, access control, audio and monitoring that give your team clear visibility and control.',
    items: [
      'CCTV',
      'Security systems',
      'Access control',
      'Audio systems',
      'Wireless infrastructure',
      'Structured cabling',
      'Monitoring systems',
    ],
    ctaLabel: 'Explore ELV Solutions',
    href: `${technologyBasePath}/solutions/elv-security`,
  },
  {
    id: 'software',
    eyebrow: 'Digital layer',
    title: 'Software, AI & Automation',
    description: 'Custom software and practical automation built around the way your people already work.',
    items: [
      'Custom software',
      'Web applications',
      'SaaS platforms',
      'Operational dashboards',
      'AI-powered applications',
      'AI agents',
      'Workflow automation',
      'API integrations',
      'Cloud platforms',
    ],
    ctaLabel: 'Explore Software & AI',
    href: `${technologyBasePath}/software-ai`,
  },
  {
    id: 'motorsport',
    eyebrow: 'Specialist operations',
    title: 'Motorsport Technology',
    description: 'Trackside infrastructure and operational systems built for the speed and pressure of live motorsport.',
    items: [
      'Circuit networking',
      'Race control systems',
      'CCTV & track monitoring',
      'Timing integrations',
      'Onboard camera systems',
      'Driver video platforms',
      'Race operations software',
      'Data integration',
    ],
    ctaLabel: 'Explore Motorsport Technology',
    href: `${technologyBasePath}/motorsport`,
  },
];

export const typicalEngagements: TypicalEngagement[] = [
  {
    title: 'New facility technology fit-outs',
    description: 'Plan and deliver the technology infrastructure required to make a new or refurbished site operational.',
    deliverables: ['Network and fibre', 'Wi-Fi and racks', 'CCTV and access control', 'Testing and handover'],
  },
  {
    title: 'Network and fibre upgrades',
    description: 'Replace, extend or strengthen existing connectivity without losing sight of live operational needs.',
    deliverables: ['Site surveys', 'Capacity and resilience', 'Cabling and fibre', 'Cutover and documentation'],
  },
  {
    title: 'ELV and security projects',
    description: 'Install or modernise the systems that give teams visibility, access control and operational awareness.',
    deliverables: ['CCTV', 'Access control', 'Audio and monitoring', 'Commissioning'],
  },
  {
    title: 'Custom operational software',
    description: 'Build focused software around the workflows, information and decisions that matter to the operation.',
    deliverables: ['Internal applications', 'Customer portals', 'Dashboards', 'SaaS platforms'],
  },
  {
    title: 'Automation and system connections',
    description: 'Reduce repetitive work and move information reliably between the platforms a team already uses.',
    deliverables: ['Workflow automation', 'APIs', 'Reporting', 'Applied AI'],
  },
  {
    title: 'Motorsport technology systems',
    description: 'Deliver specialist infrastructure and digital tools for circuits, race operations and driver programmes.',
    deliverables: ['Circuit connectivity', 'Race control', 'Timing and video', 'Driver platforms'],
  },
];

export const differentiators = [
  {
    title: 'We start with the problem',
    description: 'We understand the users, risks and operating conditions before recommending products.',
  },
  {
    title: 'We stay accountable',
    description: 'Our work can cover design, delivery, commissioning, handover and ongoing support.',
  },
  {
    title: 'We coordinate where required',
    description: 'When services or third-party systems must interact, their interfaces and responsibilities are defined clearly.',
  },
  {
    title: 'We plan for the difficult days',
    description: 'Reliability, recovery and operational continuity are designed in from the start.',
  },
  {
    title: 'We leave room to grow',
    description: 'Capacity and expansion are considered early so today’s solution does not become tomorrow’s constraint.',
  },
  {
    title: 'We make it maintainable',
    description: 'Clear architecture, documentation and handover help your team manage the system long after launch.',
  },
];

export const integrationFlow = [
  'Device / Camera',
  'Network',
  'Edge / Server',
  'Cloud',
  'Software Platform',
  'Operator / Customer',
];

export const integrationCategories = [
  'CCTV',
  'IoT & edge devices',
  'Networking',
  'Timing systems',
  'Cloud platforms',
  'APIs',
  'Existing enterprise systems',
  'Web & mobile applications',
];

export const motorsportFeatures = [
  {
    title: 'Circuit Infrastructure',
    description: 'Fibre, networking, Wi-Fi and trackside connectivity planned for venue-wide coverage and race-control continuity.',
  },
  {
    title: 'Race Operations',
    description: 'Clear tools for incidents, warnings, penalties and the people coordinating a live session.',
  },
  {
    title: 'Onboard Video',
    description: 'A practical route from the onboard camera to review, storage and secure driver access.',
  },
  {
    title: 'Driver Technology',
    description: 'Driver profiles, academy workflows and performance information brought into one usable platform.',
  },
];

export const softwareCategories = [
  {
    title: 'Custom Software',
    items: ['Business applications', 'Operational tools', 'Customer portals', 'SaaS products', 'Admin platforms', 'Backend systems'],
  },
  {
    title: 'AI Solutions',
    items: ['AI assistants', 'AI agents', 'AI-powered analytics', 'AI coaching', 'Intelligent data processing', 'LLM integration'],
  },
  {
    title: 'Automation',
    items: ['Workflow automation', 'CRM automation', 'Automated reporting', 'Notifications', 'Data synchronization', 'Business-process automation'],
  },
  {
    title: 'Integration',
    items: ['REST APIs', 'Third-party systems', 'Hardware integration', 'IoT', 'Cloud services', 'Existing enterprise software'],
  },
];

export const projects: Project[] = [
  {
    slug: 'race-control-platform',
    title: 'Race Control & Infringement Management Platform',
    summary: 'A live operational platform for recording incidents, issuing warnings and penalties, and keeping multiple race-control users aligned.',
    categories: ['Motorsport', 'Software', 'Integration'],
    tags: ['Motorsport', 'Software', 'Real-Time Systems'],
    listed: true,
    publishedCaseStudy: false,
  },
  {
    slug: 'ai-business-automation',
    title: 'AI & Business Automation',
    summary: 'Practical automation for repetitive workflows, data processing and decision support, designed around the client’s existing operation.',
    categories: ['AI & Automation', 'Software', 'Integration'],
    tags: ['AI', 'Automation', 'Integration'],
    listed: true,
    publishedCaseStudy: false,
  },
  {
    slug: 'circuit-connectivity-framework',
    title: 'Circuit Connectivity Framework',
    summary: 'A representative resilient fibre, trackside networking, CCTV and race-control connectivity programme for a live circuit environment.',
    categories: ['Motorsport', 'Infrastructure', 'ELV'],
    tags: ['Motorsport', 'Infrastructure', 'ELV'],
    listed: true,
    publishedCaseStudy: false,
  },
  {
    slug: 'integrated-facility-systems',
    title: 'Integrated Facility Systems',
    summary: 'A representative facility programme covering network infrastructure, security, monitoring and the interfaces needed for coordinated operation.',
    categories: ['Infrastructure', 'ELV', 'Integration'],
    tags: ['Infrastructure', 'ELV', 'Integration'],
    listed: true,
    publishedCaseStudy: false,
  },
  {
    slug: 'enterprise-network-modernisation',
    title: 'Enterprise Network & Fibre Modernisation',
    summary: 'A representative upgrade covering site survey, fibre backbone, structured cabling, switching, enterprise Wi-Fi, resilience and documented handover.',
    categories: ['Infrastructure'],
    tags: ['Network', 'Fibre', 'Wi-Fi'],
    listed: true,
    publishedCaseStudy: false,
  },
  {
    slug: 'security-system-modernisation',
    title: 'CCTV & Access Control Modernisation',
    summary: 'A representative security upgrade covering camera coverage, access permissions, recording, monitoring, alerts, commissioning and operator handover.',
    categories: ['ELV'],
    tags: ['CCTV', 'Access Control', 'ELV'],
    listed: true,
    publishedCaseStudy: false,
  },
];

export const publicProjects = projects.filter((project) => project.listed);
export const publishedProjectCaseStudies = projects.filter((project) => project.publishedCaseStudy);

export const projectFilters = [
  'All',
  'Motorsport',
  'Infrastructure',
  'Software',
  'AI & Automation',
  'ELV',
  'Integration',
] as const;

export const deliveryProcess = [
  { number: '01', title: 'Define', description: 'Agree the requirement, intended outcome, boundaries and commercial priorities.' },
  { number: '02', title: 'Assess', description: 'Review the site, existing technology, users, constraints and available information.' },
  { number: '03', title: 'Design', description: 'Set out the technical approach, responsibilities, scope and delivery plan.' },
  { number: '04', title: 'Deliver', description: 'Install the infrastructure or build the software with visible progress and clear control.' },
  { number: '05', title: 'Test', description: 'Verify the delivered work against the agreed specification and operating scenarios.' },
  { number: '06', title: 'Handover & Support', description: 'Provide useful records, explain the system and agree the route for ongoing support.' },
];

export const insightCategories = [
  'Motorsport Technology',
  'Network Infrastructure',
  'AI & Automation',
  'Systems Integration',
  'Project Updates',
];

export const projectTypeOptions = [
  'Network / Fibre',
  'ELV / Security',
  'Software Development',
  'AI / Automation',
  'Motorsport Technology',
  'Systems Integration',
  'Not Sure Yet',
  'Other',
] as const;
