import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="animate-gradient-shift relative bg-[length:200%_200%]"
        style={{
          background: 'linear-gradient(120deg, #0a90ff, #0b5ed7)',
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)',
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-6 py-20 text-center md:px-16 md:py-28">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-extrabold tracking-[-0.025em] text-white md:text-6xl"
          >
            340 vehicles. One afternoon.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-base font-light leading-[1.7] text-white/90 md:text-lg"
          >
            Open seven days. Pre-qualify online, test drive today, and drive home in the same visit
            if the numbers work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-apex-blue transition-transform hover:scale-105 active:scale-95"
            >
              Browse Inventory
            </button>
            <a
              href="tel:3055550190"
              className="flex items-center gap-2 text-lg font-semibold text-white"
            >
              <Phone className="h-5 w-5" />
              (305) 555-0190
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
