import { motion } from 'motion/react';
import { Wrench, Gauge, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Scheduled Maintenance',
    desc: 'Factory-interval service by certified technicians, with a loaner car on any job over three hours.',
  },
  {
    icon: Gauge,
    title: 'Repairs & Diagnostics',
    desc: 'Full diagnostic bay, OEM parts, and a written estimate before any work begins.',
  },
  {
    icon: Package,
    title: 'Parts & Accessories',
    desc: 'Genuine parts, roof racks, tow packages, and winter sets, fitted while you wait.',
  },
];

export default function Service() {
  return (
    <section id="service" className="bg-[var(--background)] py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">SERVICE DEPARTMENT</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-white md:text-5xl">
            We Keep It Running
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-7 transition-colors hover:border-apex-blue/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-apex-blue/10 transition-colors group-hover:bg-apex-blue/20">
                <s.icon className="h-6 w-6 text-apex-blue" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm font-light leading-[1.7] text-[var(--muted-foreground)]">
                {s.desc}
              </p>
              <button className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-apex-blue transition-colors hover:text-white">
                Schedule Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Service Hours
              </span>
              <p className="mt-1 font-display text-base font-semibold text-white">
                Mon–Fri 7am–6pm &middot; Sat 8am–4pm &middot; Sun closed
              </p>
            </div>
            <button className="rounded-full border border-apex-blue/30 bg-apex-blue/10 px-6 py-2.5 text-sm font-semibold text-apex-blue transition-colors hover:bg-apex-blue hover:text-white">
              Schedule Service
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
