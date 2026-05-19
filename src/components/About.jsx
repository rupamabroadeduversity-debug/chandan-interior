import { motion } from 'framer-motion';
import { partners, publications, studioHighlights } from '../data';

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[2.25rem] bg-[var(--color-brand-charcoal)] p-8 text-white shadow-[0_26px_80px_rgba(29,24,20,0.22)] sm:p-10"
          >
            <p className="section-kicker text-[var(--color-brand-cream-strong)]">Studio Positioning</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              The opportunity here is simple: turn a local service into a stronger premium brand presence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              Chandan Interior already has the kind of business that benefits from a clean digital showroom. This
              concept focuses on trust, local relevance, and visual storytelling instead of overcomplicating the lead
              journey.
            </p>

            <div className="mt-10 grid gap-4">
              {studioHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-brand-cream-strong)]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="luxury-card p-8 sm:p-10">
              <p className="section-kicker">What This Site Should Do</p>
              <h3 className="mt-4 text-3xl font-semibold text-[var(--color-brand-charcoal)] sm:text-4xl">
                Build confidence fast, explain the offer clearly, and make the first inquiry feel natural.
              </h3>
              <p className="mt-5 text-lg leading-8 text-[var(--color-brand-stone)]">
                For a business without a strong existing website, the homepage must do multiple jobs at once: show
                taste, prove service relevance, create local trust, and move the visitor into call or WhatsApp without
                hesitation.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="luxury-card p-7">
                <h4 className="text-2xl font-semibold text-[var(--color-brand-charcoal)]">Core Page Signals</h4>
                <div className="mt-5 flex flex-wrap gap-3">
                  {publications.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(107,75,53,0.12)] bg-[rgba(246,239,231,0.8)] px-4 py-2 text-sm font-semibold text-[var(--color-brand-charcoal)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="luxury-card p-7">
                <h4 className="text-2xl font-semibold text-[var(--color-brand-charcoal)]">Best-Fit Showcase Areas</h4>
                <div className="mt-5 flex flex-wrap gap-3">
                  {partners.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(107,75,53,0.12)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-brand-charcoal)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

