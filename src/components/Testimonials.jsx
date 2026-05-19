import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-kicker">Trust Signals</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-brand-charcoal)] sm:text-5xl">
            The review style should feel warm, practical, and rooted in real homeowner decisions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-brand-stone)]">
            These are placeholder-style review directions, not public claims. They show the tone future testimonials
            should aim for once the business starts collecting stronger website proof.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="luxury-card relative p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[rgba(184,138,82,0.32)]" />
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={`${testimonial.id}-${idx}`}
                    className="h-4 w-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]"
                  />
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-[var(--color-brand-charcoal)]">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="mt-8 border-t border-[rgba(107,75,53,0.08)] pt-5">
                <div className="text-lg font-semibold text-[var(--color-brand-charcoal)]">{testimonial.name}</div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-stone)]">
                  {testimonial.role}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

