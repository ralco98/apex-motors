import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const columns = [
  {
    title: 'Inventory',
    links: ['All Vehicles', 'SUVs', 'Sedans', 'Trucks', 'Electric Vehicles', 'Coupes'],
  },
  {
    title: 'Financing & Trade-In',
    links: ['Payment Calculator', 'Get Pre-Qualified', 'Trade-In Valuation', 'Lender Partners', 'Rates & Offers'],
  },
  {
    title: 'Service & Contact',
    links: ['Schedule Service', 'Parts & Accessories', 'Hours & Location', 'Contact Us', 'Careers'],
  },
];

const socials = [Facebook, Instagram, Twitter, Youtube];

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)]"
      style={{ background: 'hsl(220, 16%, 5%)' }}
    >
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-2xl font-extrabold text-white">APEX</span>
              <span className="text-[9px] font-semibold tracking-[0.3em] text-[var(--muted-foreground)]">
                MOTORS
              </span>
            </div>
            <p className="mt-3 text-sm font-light text-[var(--muted-foreground)]">
              New &amp; certified pre-owned &middot; Miami, Florida
            </p>
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-[var(--foreground)]/70">
                <MapPin className="h-4 w-4 shrink-0 text-apex-blue" />
                <span>8800 Biscayne Boulevard, Miami, FL 33138</span>
              </div>
              <a href="tel:3055550190" className="flex items-center gap-2.5 text-sm text-[var(--foreground)]/70">
                <Phone className="h-4 w-4 shrink-0 text-apex-blue" />
                <span>(305) 555-0190</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-[var(--foreground)]/70">
                <Clock className="h-4 w-4 shrink-0 text-apex-blue" />
                <span>Mon–Sat 9am–8pm &middot; Sun 11am–6pm</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] transition-colors hover:border-apex-blue hover:text-apex-blue"
                  aria-label="Social media"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-[var(--muted-foreground)] transition-colors hover:text-apex-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-[var(--muted-foreground)]">
              &copy; 2026 Apex Motors LLC. All rights reserved. &middot; Dealer License #DL-0448210
            </p>
            <div className="flex gap-5 text-xs">
              <a href="#" className="text-[var(--muted-foreground)] transition-colors hover:text-apex-blue">
                Privacy Policy
              </a>
              <a href="#" className="text-[var(--muted-foreground)] transition-colors hover:text-apex-blue">
                Accessibility
              </a>
              <a href="#" className="text-[var(--muted-foreground)] transition-colors hover:text-apex-blue">
                Terms
              </a>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-[var(--muted-foreground)]/60">
            Advertised payments are estimates and exclude tax, title, and dealer fees. Subject to
            credit approval. Vehicle availability changes daily.
          </p>
        </div>
      </div>
    </footer>
  );
}
