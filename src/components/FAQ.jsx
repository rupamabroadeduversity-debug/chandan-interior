import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { faqs } from '../data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white/55 py-20 sm:py-24">
      <div className="section-shell max-w-4xl">
        <div className="mb-14 text-center">
          <p className="section-kicker">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-brand-charcoal)] sm:text-5xl">
            Clear answers for homeowners deciding whether to trust and contact a local interior service.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="luxury-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-lg font-semibold text-[var(--color-brand-charcoal)]">{faq.question}</span>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(184,138,82,0.12)] text-[var(--color-brand-charcoal)]">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="border-t border-[rgba(107,75,53,0.08)] px-6 pb-6 pt-4 text-base leading-7 text-[var(--color-brand-stone)]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

