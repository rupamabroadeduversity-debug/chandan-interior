import { Home, Phone } from 'lucide-react';
import { businessDetails, navLinks } from '../data';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-brand-charcoal)] py-16 text-white">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                style={{ background: 'linear-gradient(135deg, #b88a52, #6b4b35)' }}
              >
                <Home size={20} />
              </div>
              <div>
                <div className="font-heading text-3xl font-semibold">Chandan Interior</div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                  Elegant Interior Decoration In Bardhaman
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/68">
              This concept mockup is designed to give Chandan Interior a cleaner digital showroom, stronger trust
              signals, and a more direct local consultation flow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-base text-white/76 transition-colors hover:text-white">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Contact</h3>
            <div className="mt-5 space-y-4 text-white/76">
              <a href={`tel:${businessDetails.phone}`} className="flex items-center gap-3 hover:text-white">
                <Phone size={16} />
                {businessDetails.phone}
              </a>
              <p>{businessDetails.fullAddress}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Chandan Interior concept mockup.</p>
          <p>Crafted for conversion strategy and presentation by Pantechsoft.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

