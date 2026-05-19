import { useEffect, useState } from 'react';
import { Home, Menu, Phone, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { businessDetails, navLinks } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fffaf5]/92 py-3 shadow-[0_14px_40px_rgba(29,24,20,0.08)] backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-shell">
        <div className="flex min-w-0 items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg sm:h-11 sm:w-11">
              <div
                className="flex h-full w-full items-center justify-center rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #1d1814, #6b4b35)' }}
              >
                <Home size={18} />
              </div>
            </div>
            <div className="min-w-0 max-w-[12.5rem] leading-tight sm:max-w-none">
              <span className="block truncate font-heading text-[1.35rem] font-semibold text-[var(--color-brand-charcoal)] sm:text-2xl">
                Chandan <span className="text-[var(--color-brand-gold)]">Interior</span>
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-brand-stone)] sm:block">
                Interior Decoration In Bardhaman
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[var(--color-brand-stone)] transition-colors hover:text-[var(--color-brand-charcoal)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${businessDetails.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(107,75,53,0.12)] bg-white/75 px-4 py-2 text-sm font-semibold text-[var(--color-brand-charcoal)]"
            >
              <Phone size={16} />
              {businessDetails.phone}
            </a>
            <a href="#contact" className="btn-primary text-sm">
              <Sparkles size={16} />
              Book Free Consultation
            </a>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="hidden shrink-0 rounded-full border border-[rgba(107,75,53,0.12)] bg-white/70 p-2.5 text-[var(--color-brand-charcoal)] sm:inline-flex lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="section-shell mt-3 lg:hidden"
          >
            <div className="luxury-card p-5">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl px-4 py-3 font-semibold text-[var(--color-brand-charcoal)] transition-colors hover:bg-[rgba(184,138,82,0.08)]"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary mt-2 text-sm"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
