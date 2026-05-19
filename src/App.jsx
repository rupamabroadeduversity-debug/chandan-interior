import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { businessDetails } from './data';

function App() {
  return (
    <div className="min-h-screen text-[var(--color-brand-charcoal)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <a
        href={`https://wa.me/${businessDetails.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_18px_40px_rgba(29,24,20,0.28)] transition-transform duration-300 hover:scale-105"
        style={{ background: 'linear-gradient(135deg, #2e7d57, #1d5f41)' }}
        aria-label="Chat with Chandan Interior on WhatsApp"
        id="floating-whatsapp-cta"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
