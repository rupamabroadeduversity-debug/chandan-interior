import { motion } from 'framer-motion';
import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">Services</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-brand-charcoal)] sm:text-5xl">
            Decor-focused interior help that feels polished, local, and easy to trust.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-brand-stone)]">
            This version of the site is structured to help visitors understand Chandan Interior&apos;s likely service
            scope quickly, from room styling and decor decisions to consultation-led project planning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="luxury-card group p-8"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #1d1814, #6b4b35)' }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-charcoal)]">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-brand-stone)]">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

