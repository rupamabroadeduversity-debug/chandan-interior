import { ArrowRight, MapPin, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessDetails, trustSignals } from '../data';

const heroPanels = [
  {
    title: 'Living Room Styling',
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200',
    height: 'h-[18rem] sm:h-[27rem]',
  },
  {
    title: 'Bedroom Mood Layering',
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    height: 'h-[12rem] sm:h-[15rem]',
  },
  {
    title: 'Dining Accent Details',
    image:
      'https://images.pexels.com/photos/6207940/pexels-photo-6207940.jpeg?auto=compress&cs=tinysrgb&w=1200',
    height: 'h-[12rem] sm:h-[15rem]',
  },
];

const heroHighlights = [
  {
    value: 'Residential decor',
    label: 'Service Focus',
    note: 'Living rooms, bedrooms, dining zones, and everyday family spaces.',
    icon: Sparkles,
  },
  {
    value: 'Call + WhatsApp',
    label: 'Lead Flow',
    note: 'A direct, familiar contact path that feels easy for local clients.',
    icon: MessageCircle,
  },
  {
    value: 'Bardhaman',
    label: 'City',
    note: 'Locally positioned for nearby homeowners looking for interior guidance.',
    icon: MapPin,
  },
];

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <video
          src="/remove_the_person_only_the_roo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full scale-[1.03] object-cover opacity-60 saturate-[1.05]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(92deg,rgba(251,247,242,0.96)_0%,rgba(248,241,232,0.9)_30%,rgba(247,239,230,0.62)_60%,rgba(255,253,250,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.18),transparent_16%),radial-gradient(circle_at_top_right,_rgba(184,138,82,0.2),_transparent_34%),radial-gradient(circle_at_12%_18%,_rgba(40,53,47,0.08),_transparent_26%)]" />
      </div>

      <div className="section-shell relative z-10 pb-16 sm:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(184,138,82,0.22)] bg-white/75 px-4 py-2 text-sm font-semibold text-[var(--color-brand-charcoal)] shadow-sm backdrop-blur">
              <MapPin className="h-4 w-4 text-[var(--color-brand-gold)]" />
              Near Malaria Office Bus Stop, Bardhaman
            </div>

            <h1 className="max-w-4xl text-[3.55rem] font-semibold leading-[0.94] tracking-[-0.03em] text-[var(--color-brand-charcoal)] sm:text-6xl lg:text-7xl">
              Transform your home with
              <span className="block text-[var(--color-brand-gold)]">elegant interior decoration in Bardhaman.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-brand-stone)] sm:text-xl">
              Chandan Interior is positioned here as a warm, premium, local decor brand that helps homeowners create
              polished spaces and makes the first consultation feel simple, direct, and trustworthy.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary text-base" id="hero-primary-cta">
                Book Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href={`https://wa.me/${businessDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base"
                id="hero-secondary-cta"
              >
                <MessageCircle size={18} />
                WhatsApp Inquiry
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,250,244,0.72))] p-5 shadow-[0_18px_55px_rgba(33,24,18,0.08)] backdrop-blur-md"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(29,24,20,0.96),rgba(107,75,53,0.88))] text-white shadow-lg">
                      <Icon size={18} />
                    </div>
                    <div className="text-[1.15rem] leading-[1.02] font-semibold text-[var(--color-brand-charcoal)] sm:text-[1.85rem]">
                      {item.value}
                    </div>
                    <div className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-stone)]">
                      {item.label}
                    </div>
                    <p className="mt-3 max-w-[22ch] text-[0.92rem] leading-7 text-[var(--color-brand-stone)] sm:text-sm sm:leading-6">
                      {item.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="grid gap-4 sm:grid-cols-[1.06fr_0.94fr]">
              <div
                className={`relative overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_24px_70px_rgba(29,24,20,0.18)] ${heroPanels[0].height}`}
              >
                <img
                  src={heroPanels[0].image}
                  alt={heroPanels[0].title}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,24,20,0.72)] via-[rgba(29,24,20,0.14)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xl font-semibold text-white">{heroPanels[0].title}</span>
                </div>
              </div>

              <div className="grid gap-4">
                {heroPanels.slice(1).map((panel) => (
                  <div
                    key={panel.title}
                    className={`relative overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_22px_60px_rgba(29,24,20,0.14)] ${panel.height}`}
                  >
                    <img src={panel.image} alt={panel.title} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,24,20,0.72)] via-[rgba(29,24,20,0.14)] to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-lg font-semibold text-white">{panel.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -left-4 top-8 hidden rounded-[1.75rem] bg-[var(--color-brand-charcoal)] p-5 text-white shadow-2xl md:block">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[var(--color-brand-gold)]" />
                <div>
                  <div className="text-lg font-semibold">Premium local positioning</div>
                  <div className="text-sm text-white/70">Built to replace listing-only discovery</div>
                </div>
              </div>
            </div>

            <div className="mt-4 ml-auto hidden max-w-[20rem] rounded-[1.75rem] bg-white p-5 shadow-2xl md:block">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[var(--color-brand-gold)]" />
                <div>
                  <div className="text-lg font-semibold text-[var(--color-brand-charcoal)]">Simple next step</div>
                  <div className="text-sm text-[var(--color-brand-stone)]">Call, WhatsApp, or request consultation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="flex items-center justify-center gap-3 rounded-full border border-[rgba(184,138,82,0.18)] bg-white/76 px-5 py-3 text-sm font-semibold text-[var(--color-brand-charcoal)] shadow-[0_12px_30px_rgba(33,24,18,0.05)] backdrop-blur"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-gold)]" />
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
