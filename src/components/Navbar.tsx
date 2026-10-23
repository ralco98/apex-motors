import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const navLinks = ['Inventory', 'Financing', 'Trade-In', 'Service', 'About'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ backgroundColor: 'rgba(18,20,26,0.7)' }}
        animate={{ backgroundColor: scrolled ? 'rgba(18,20,26,0.92)' : 'rgba(18,20,26,0.7)' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 z-40 w-full border-b border-[var(--border)] backdrop-blur-md"
      >
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-6 md:px-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-1.5">
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              APEX
            </span>
            <ChevronRight className="h-4 w-4 text-apex-blue" strokeWidth={3} />
            <span className="text-[9px] font-semibold tracking-[0.3em] text-[var(--muted-foreground)]">
              MOTORS
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase().replace('-', '').replace('trade-in', 'trade-in'))}
                className="text-sm font-medium text-[var(--foreground)]/80 transition-colors hover:text-apex-blue"
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="tel:3055550190" className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <Phone className="h-3.5 w-3.5 text-apex-blue" />
              (305) 555-0190
            </a>
            <button
              onClick={() => scrollTo('inventory')}
              className="rounded-full bg-apex-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Browse Inventory
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-apex-black/98 lg:hidden"
          >
            <div className="flex h-[76px] items-center justify-between px-6">
              <span className="font-display text-2xl font-extrabold text-white">APEX</span>
              <button onClick={() => setMenuOpen(false)} className="text-white" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 pt-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  onClick={() => scrollTo(link.toLowerCase().replace('-', '').replace('trade-in', 'trade-in'))}
                  className="border-b border-[var(--border)] py-4 text-left font-display text-xl font-semibold text-white"
                >
                  {link}
                </motion.button>
              ))}
            </nav>
            <div className="px-6 pt-8">
              <a
                href="tel:3055550190"
                className="flex items-center gap-2 text-lg font-semibold text-white"
              >
                <Phone className="h-5 w-5 text-apex-blue" />
                (305) 555-0190
              </a>
              <button
                onClick={() => scrollTo('inventory')}
                className="mt-6 w-full rounded-full bg-apex-blue py-3.5 text-sm font-semibold text-white"
              >
                Browse Inventory
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
