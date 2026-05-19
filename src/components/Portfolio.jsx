import { motion } from 'framer-motion';
import { packages, portfolio } from '../data';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[var(--color-brand-charcoal)] py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker text-[var(--color-brand-cream-strong)]">Portfolio Direction</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              A portfolio-first layout that helps a local decor business feel premium right away.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              These cards define the kind of visual proof the website should grow into: warm residential spaces,
              detail-led upgrades, and concise project storytelling that makes quality easier to believe.
            </p>
          </div>
          <a href="#contact" className="btn-secondary self-start !border-white/15 !bg-white/10 !text-white text-sm">
            View Consultation CTA
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {portfolio.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/6"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,24,20,0.92)] via-[rgba(29,24,20,0.18)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex rounded-full bg-[var(--color-brand-gold)] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-charcoal)]">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">{item.detail}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-cream-strong)]">
                {item.title}
              </div>
              <div className="mt-3 text-3xl font-semibold text-[var(--color-brand-gold)]">{item.range}</div>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

