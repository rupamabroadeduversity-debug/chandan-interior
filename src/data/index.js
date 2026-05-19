import {
  ArrowUpRight,
  HandCoins,
  Home,
  LayoutGrid,
  Lightbulb,
  MessageCircleMore,
  Palette,
  ShieldCheck,
  Sparkles,
  Sofa,
} from 'lucide-react';

export const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Studio', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

export const services = [
  {
    id: 1,
    title: 'Home Interior Styling',
    description:
      'Decor-led interior guidance for living rooms, bedrooms, dining areas, and everyday family spaces that need a more polished finish.',
    icon: Home,
  },
  {
    id: 2,
    title: 'Room Refresh Concepts',
    description:
      'Smart upgrade concepts for spaces that need stronger mood, layout flow, and better visual balance without feeling overdone.',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Color, Texture, And Decor Direction',
    description:
      'Wall treatments, surface tones, soft furnishings, and detail layering that help the home feel complete and cohesive.',
    icon: Palette,
  },
  {
    id: 4,
    title: 'Storage And Furniture Coordination',
    description:
      'Practical styling around wardrobes, TV units, study corners, and furniture placement for cleaner, more usable rooms.',
    icon: Sofa,
  },
  {
    id: 5,
    title: 'Lighting And Ceiling Details',
    description:
      'Accent lighting, false ceiling direction, and finishing touches that improve atmosphere and make rooms feel more premium.',
    icon: Lightbulb,
  },
  {
    id: 6,
    title: 'Consultation And Project Planning',
    description:
      'A simple first-step discussion to align project type, room goals, local execution needs, and the best next move.',
    icon: HandCoins,
  },
];

export const studioHighlights = [
  {
    title: 'Local-Service Trust Gap',
    description:
      'Chandan Interior appears to rely mainly on listing discovery and phone contact, so the website must do more trust-building work than usual.',
    icon: ShieldCheck,
  },
  {
    title: 'WhatsApp-Led Inquiry Flow',
    description:
      'The strongest conversion path is direct and familiar: call, WhatsApp, or send a quick consultation request with just enough context.',
    icon: MessageCircleMore,
  },
  {
    title: 'Portfolio-First Positioning',
    description:
      'For interior buyers, visual proof matters more than long copy. The homepage should feel like a curated showroom, not a directory listing.',
    icon: LayoutGrid,
  },
];

export const trustSignals = [
  'Bardhaman Local Focus',
  'Residential Decor Showcase',
  'Free Consultation CTA',
  'Call + WhatsApp Lead Flow',
];

export const publications = [
  'Bardhaman-focused messaging',
  'Mobile-first contact blocks',
  'Project gallery storytelling',
  'Trust-building service copy',
];

export const partners = [
  'Living room decor direction',
  'Bedroom mood styling',
  'Dining and small-space updates',
  'Consultation-led lead capture',
];

export const packages = [
  {
    title: 'Local Search Positioning',
    range: 'Bardhaman + nearby areas',
    note: 'Copy and section hierarchy should make the business feel highly relevant for local interior and decor searches.',
  },
  {
    title: 'Lead Capture Strategy',
    range: 'Call + WhatsApp + form',
    note: 'The conversion path should be simple, familiar, and repeated across the page without feeling pushy.',
  },
  {
    title: 'Portfolio Direction',
    range: 'Living, bedroom, dining',
    note: 'The strongest future content will be project visuals that show taste, finish quality, and before-after confidence.',
  },
];

export const portfolio = [
  {
    id: 1,
    title: 'Warm Neutral Family Living Room',
    category: 'Residential Decor',
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: 'A portfolio card direction for elegant seating flow, layered lighting, and a finished family-home look.',
  },
  {
    id: 2,
    title: 'Compact Kitchen With Clean Material Rhythm',
    category: 'Room Upgrade',
    image:
      'https://images.pexels.com/photos/5824902/pexels-photo-5824902.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: 'Ideal for showing how practical upgrades can still feel premium and thoughtfully styled.',
  },
  {
    id: 3,
    title: 'Bedroom Mood With Soft Texture Layers',
    category: 'Bedroom Styling',
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: 'A calm visual story focused on wall tone, bed backdrop, wardrobe integration, and softness.',
  },
  {
    id: 4,
    title: 'Dining Corner Designed To Feel Complete',
    category: 'Small-Space Decor',
    image:
      'https://images.pexels.com/photos/6207940/pexels-photo-6207940.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detail: 'Useful for proving that even compact zones can become visually memorable with the right detailing.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Call Or WhatsApp First',
    description:
      'Start with the easiest contact method so the inquiry feels immediate and the team can understand the room or project type quickly.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Share Space And Style Goals',
    description:
      'Discuss the room, mood, references, practical needs, and local execution context before design direction is proposed.',
    icon: LayoutGrid,
  },
  {
    step: '03',
    title: 'Consultation And Scope Alignment',
    description:
      'Use the consultation to frame the likely decor direction, expected work areas, and what should happen next.',
    icon: ArrowUpRight,
  },
  {
    step: '04',
    title: 'Move Into Execution Planning',
    description:
      'Once trust is built, the website should help turn a warm inquiry into a clearer project discussion and site-level follow-up.',
    icon: ShieldCheck,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Future homeowner review',
    role: 'Living Room Styling Client',
    content:
      'We wanted our home to feel more complete and polished, and the guidance felt practical instead of confusing or overcomplicated.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Future family client review',
    role: 'Bedroom And Decor Refresh',
    content:
      'The best part was how clearly the ideas were explained. It felt tasteful, achievable, and much easier to trust from the first conversation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Future local referral review',
    role: 'Consultation Client',
    content:
      'The experience felt personal and locally grounded. We could ask questions directly and move forward without a complicated process.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'What kind of work should Chandan Interior highlight first?',
    answer:
      'Residential decor and room-level interior improvements should lead the story, especially living rooms, bedrooms, dining spaces, and practical family-home upgrades.',
  },
  {
    question: 'Why is the website focused so heavily on WhatsApp and direct contact?',
    answer:
      'Because the current business discovery path appears phone-led. A premium website should strengthen that behavior rather than force an unfamiliar funnel.',
  },
  {
    question: 'How should the portfolio be presented if public project proof is still limited?',
    answer:
      'Start with a strong visual gallery structure, then add real room photos, simple project summaries, and outcome-focused captions over time.',
  },
  {
    question: 'Does this design work for local SEO too?',
    answer:
      'Yes. Bardhaman-specific headlines, service-area references, and section copy make it easier to position the brand for local interior-related searches.',
  },
  {
    question: 'What is the main conversion goal of this mockup?',
    answer:
      'To make first-time visitors trust the business faster and take one simple next action: book a consultation, call directly, or open WhatsApp.',
  },
];

export const businessDetails = {
  name: 'Chandan Interior',
  tagline: 'Elegant Interior Decoration In Bardhaman',
  phone: '+91 98321 35381',
  whatsapp: '919832135381',
  email: '',
  website: '',
  address: 'Near Malaria Office Bus Stop, Barabalidanga Rd, Sreepally',
  city: 'Burdwan - 713101, West Bengal',
  fullAddress:
    'Near Malaria Office Bus Stop, Barabalidanga Rd, Sreepally, Burdwan - 713101, West Bengal',
  hours: 'Call or WhatsApp to schedule your consultation',
  founder: 'Chandan Dutta',
  mapEmbed:
    'https://www.google.com/maps?q=Near%20Malaria%20Office%20Bus%20Stop%20Barabalidanga%20Rd%20Sreepally%20Burdwan%20713101&output=embed',
  stats: [
    { label: 'Service Focus', value: 'Residential decor' },
    { label: 'Lead Flow', value: 'Call + WhatsApp' },
    { label: 'City', value: 'Bardhaman' },
  ],
};
