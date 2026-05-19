import { motion } from 'framer-motion';
import { processSteps } from '../data';

const Process = () => {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">Process</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-brand-charcoal)] sm:text-5xl">
            A simpler path from local discovery to a real project conversation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-brand-stone)]">
            The process language is intentionally direct. It helps a first-time visitor understand what happens after
            they call, message, or request a consultation without making the service feel complex.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="luxury-card relative p-7"
              >
                <div className="absolute right-6 top-5 text-6xl font-heading leading-none text-[rgba(184,138,82,0.16)]">
                  {item.step}
                </div>
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{ background: 'linear-gradient(135deg, #b88a52, #6b4b35)' }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-charcoal)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-brand-stone)]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

