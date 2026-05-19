import { useState } from 'react';
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessDetails } from '../data';

const initialForm = {
  name: '',
  phone: '',
  projectType: 'Residential decor consultation',
  locality: '',
};

const projectTypes = [
  'Residential decor consultation',
  'Living room styling',
  'Bedroom refresh',
  'Dining or small-space decor',
  'Lighting or ceiling details',
  'Full home interior discussion',
];

const Contact = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      'Hello Chandan Interior, I would like to book a free consultation.',
      `Name: ${form.name || 'Not provided'}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Project Type: ${form.projectType}`,
      `Locality / Project Location: ${form.locality || 'Not provided'}`,
    ].join('\n');

    window.open(`https://wa.me/${businessDetails.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.25rem] bg-[var(--color-brand-charcoal)] p-8 text-white shadow-[0_24px_72px_rgba(29,24,20,0.22)] sm:p-10"
          >
            <p className="section-kicker text-[var(--color-brand-cream-strong)]">Consultation Flow</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Make the next step feel easy, premium, and immediate.</h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              The conversion logic is intentionally simple: give visitors a direct number, a WhatsApp-first path, and a
              short consultation form that turns into a ready-to-send inquiry.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-brand-cream-strong)]">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Call</div>
                  <a href={`tel:${businessDetails.phone}`} className="mt-1 block text-xl font-semibold text-white">
                    {businessDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-brand-cream-strong)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Visit</div>
                  <p className="mt-1 text-lg font-semibold text-white">{businessDetails.address}</p>
                  <p className="text-white/72">{businessDetails.city}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-brand-cream-strong)]">
                  <Clock3 size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Hours</div>
                  <p className="mt-1 text-lg font-semibold text-white">{businessDetails.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="luxury-card p-7 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="section-kicker">Book Now</p>
                  <h3 className="mt-3 text-3xl font-semibold text-[var(--color-brand-charcoal)]">
                    Start your free interior consultation
                  </h3>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(184,138,82,0.12)] text-[var(--color-brand-gold)] sm:flex">
                  <MessageCircle size={22} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--color-brand-stone)]">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[rgba(107,75,53,0.12)] bg-white px-4 py-3 text-[var(--color-brand-charcoal)] outline-none transition focus:border-[var(--color-brand-gold)]"
                    placeholder="Enter your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--color-brand-stone)]">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[rgba(107,75,53,0.12)] bg-white px-4 py-3 text-[var(--color-brand-charcoal)] outline-none transition focus:border-[var(--color-brand-gold)]"
                    placeholder="+91"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--color-brand-stone)]">Project Type</span>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[rgba(107,75,53,0.12)] bg-white px-4 py-3 text-[var(--color-brand-charcoal)] outline-none transition focus:border-[var(--color-brand-gold)]"
                  >
                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--color-brand-stone)]">
                    Project Locality
                  </span>
                  <input
                    type="text"
                    name="locality"
                    value={form.locality}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[rgba(107,75,53,0.12)] bg-white px-4 py-3 text-[var(--color-brand-charcoal)] outline-none transition focus:border-[var(--color-brand-gold)]"
                    placeholder="Bardhaman / nearby area"
                  />
                </label>

                <button type="submit" className="btn-primary mt-3 md:col-span-2" id="contact-form-cta">
                  Send Consultation Request on WhatsApp
                </button>
              </form>

              <div className="mt-4 text-sm leading-6 text-[var(--color-brand-stone)]">
                This opens a pre-filled WhatsApp message so the business receives the lead with useful context
                immediately.
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_18px_60px_rgba(33,24,18,0.08)]">
              <iframe
                src={businessDetails.mapEmbed}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chandan Interior Bardhaman Location"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

