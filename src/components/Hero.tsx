import { motion } from 'motion/react';
import { Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [maxPayment, setMaxPayment] = useState('');

  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src="https://images.pexels.com/photos/35319488/pexels-photo-35319488.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
        alt="Vehicle on a wet city street at night"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(18,20,26,0.95) 0%, rgba(18,20,26,0.6) 45%, rgba(18,20,26,0.25) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 60%, rgba(18,20,26,1) 100%)',
        }}
      />

      <div className="relative z-10 flex h-full items-center pl-6 md:pl-16">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            MIAMI, FL &middot; 340 VEHICLES IN STOCK &middot; OPEN 7 DAYS
          </motion.p>

          <h1 className="mt-5 font-display text-[40px] font-extrabold leading-[1.0] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[80px]">
            {['Find it. Finance it.', 'Drive it home', 'today.'].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 * i + 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-xl text-base font-light leading-[1.7] text-[var(--foreground)]/80 sm:text-lg"
          >
            New and certified pre-owned across twelve makes, with transparent pricing and no
            four-hour finance office marathon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-apex-blue px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Browse Inventory
            </button>
            <button
              onClick={() => document.getElementById('tradein')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Value My Trade
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:gap-2 blue-glow"
          >
            <input
              value={make}
              onChange={(e) => setMake(e.target.value)}
              placeholder="Make"
              className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none"
            />
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Model"
              className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none"
            />
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <input
              value={maxPayment}
              onChange={(e) => setMaxPayment(e.target.value)}
              placeholder="Max monthly payment"
              className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none"
            />
            <button
              onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 rounded-xl bg-apex-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-apex-blue"
          >
            Browse all 340 vehicles
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
