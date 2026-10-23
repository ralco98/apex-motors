import { motion } from 'motion/react';
import { BadgeCheck, RotateCcw, ClipboardCheck, Star } from 'lucide-react';

const items = [
  { icon: BadgeCheck, label: 'No-haggle pricing' },
  { icon: RotateCcw, label: '7-day return policy' },
  { icon: ClipboardCheck, label: '172-point inspection' },
  { icon: Star, label: '4.8★ from 2,100+ reviews' },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-4 px-6 py-6 md:px-16 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-3 animate-[glow-pulse_0.6s_ease-out]"
          >
            <item.icon className="h-5 w-5 shrink-0 text-apex-blue" strokeWidth={2} />
            <span className="text-sm font-medium text-[var(--foreground)]/90">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
