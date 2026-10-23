import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Slider from '@radix-ui/react-slider';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { inventory, vehicleTypes, makes, type Vehicle } from '@/data/inventory';

function VehicleCard({ v, index }: { v: Vehicle; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-colors duration-300 hover:border-apex-blue/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={v.image}
          alt={`${v.year} ${v.name}`}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold"
          style={{ background: 'var(--success)', color: '#04180f' }}
        >
          In stock
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-apex-black/80 px-3 py-1 text-[11px] font-semibold text-apex-blue backdrop-blur-sm">
          {v.type}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-white">
          {v.year} {v.name}
        </h3>
        <div className="mt-1 text-sm text-[var(--muted-foreground)]">
          {v.miles} &middot; {v.drivetrain} &middot; {v.condition}
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="font-display text-2xl font-bold tabular-nums text-white">
              ${v.price.toLocaleString()}
            </span>
            <span className="ml-2 text-sm text-apex-blue">or ${v.monthly}/mo</span>
          </div>
          <button
            onClick={() => document.getElementById('financing')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-white transition-colors group-hover:border-apex-blue group-hover:bg-apex-blue group-hover:text-white"
            aria-label="View details"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Inventory() {
  const [filters, setFilters] = useState({
    type: 'All' as string,
    make: 'All' as string,
    maxPrice: 90000,
  });
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(
    () =>
      inventory.filter(
        (v) =>
          (filters.type === 'All' || v.type === filters.type) &&
          (filters.make === 'All' || v.make === filters.make) &&
          v.price <= filters.maxPrice
      ),
    [filters]
  );

  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="inventory" className="bg-[var(--background)] py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">IN STOCK NOW</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-white md:text-5xl">
            Browse Inventory
          </h2>
        </motion.div>

        <div className="sticky top-[76px] z-30 -mx-6 border-y border-[var(--border)] bg-[var(--background)]/95 px-6 py-4 backdrop-blur md:mx-0 md:rounded-xl md:border md:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="appearance-none rounded-full border border-[var(--border)] bg-[var(--card-elevated)] py-2 pl-4 pr-9 text-sm font-medium text-white outline-none transition-colors hover:border-apex-blue/50"
              >
                {vehicleTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All Types' : t}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
            </div>

            <div className="relative">
              <select
                value={filters.make}
                onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                className="appearance-none rounded-full border border-[var(--border)] bg-[var(--card-elevated)] py-2 pl-4 pr-9 text-sm font-medium text-white outline-none transition-colors hover:border-apex-blue/50"
              >
                {makes.map((m) => (
                  <option key={m} value={m}>
                    {m === 'All' ? 'All Makes' : m}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Max Price
              </span>
              <div className="apex-slider w-[140px] sm:w-[200px]">
                <Slider.Root
                  value={[filters.maxPrice]}
                  max={90000}
                  min={20000}
                  step={1000}
                  onValueChange={(val) => setFilters({ ...filters, maxPrice: val[0] })}
                  className="relative flex h-5 w-full items-center"
                >
                  <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-[var(--border)]">
                    <Slider.Range className="absolute h-full rounded-full bg-apex-blue" />
                  </Slider.Track>
                  <Slider.Thumb className="block h-4 w-4 rounded-full border-2 border-apex-blue bg-white shadow-md transition-transform hover:scale-115" />
                </Slider.Root>
              </div>
              <span className="font-display text-sm font-bold tabular-nums text-white">
                ${filters.maxPrice.toLocaleString()}
              </span>
            </div>

            <span className="ml-auto text-sm text-[var(--muted-foreground)]">
              {filtered.length} {filtered.length === 1 ? 'vehicle' : 'vehicles'}
            </span>
          </div>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((v, i) => (
              <VehicleCard key={v.id} v={v} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-[var(--muted-foreground)]">
              No vehicles match your filters. Try widening your search.
            </p>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center gap-3">
          {visibleCount < filtered.length && (
            <button
              onClick={() => setVisibleCount((c) => c + 6)}
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-apex-blue/50"
            >
              Load more
            </button>
          )}
          <p className="text-sm text-[var(--muted-foreground)]">
            View all 340 vehicles{' '}
            <span className="text-apex-blue">&rarr;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
