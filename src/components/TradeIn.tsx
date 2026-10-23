import { motion } from 'motion/react';
import { ClipboardList, Calculator, KeyRound } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Tell us about it',
    desc: 'Year, make, model, mileage, and honest condition. Two minutes.',
  },
  {
    icon: Calculator,
    title: 'Get a real number',
    desc: 'Not a range. An actual offer, backed by our current auction and retail data.',
  },
  {
    icon: KeyRound,
    title: 'Bring it in',
    desc: 'We verify the condition, and if it matches, the offer stands. Apply it to a purchase or take a cheque.',
  },
];

export default function TradeIn() {
  const [form, setForm] = useState({
    year: '',
    make: '',
    model: '',
    mileage: '',
    condition: '',
  });

  return (
    <section id="tradein" className="bg-[var(--background)] py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-16">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] lg:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-[600px]">
            <img
              src="https://images.pexels.com/photos/4173191/pexels-photo-4173191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Car keys being handed across a counter at a dealership"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, transparent 0%, rgba(28,31,38,0.4) 100%)' }}
            />
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-eyebrow">TRADE-IN</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-white md:text-4xl">
                Your Car Is Worth More Than You Think
              </h2>
            </motion.div>

            <div className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-apex-blue/30 bg-apex-blue/10">
                    <step.icon className="h-5 w-5 text-apex-blue" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xs font-bold text-apex-blue">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-base font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-sm font-light leading-relaxed text-[var(--muted-foreground)]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--card-elevated)] p-5">
              <div className="grid grid-cols-2 gap-3">
                <input
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  placeholder="Year"
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-sm text-white placeholder-[var(--muted-foreground)] outline-none transition-colors focus:border-apex-blue"
                />
                <input
                  value={form.make}
                  onChange={(e) => setForm({ ...form, make: e.target.value })}
                  placeholder="Make"
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-sm text-white placeholder-[var(--muted-foreground)] outline-none transition-colors focus:border-apex-blue"
                />
                <input
                  value={form.model}
                  onChange={(e) => setForm({ ...form, model: e.target.value })}
                  placeholder="Model"
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-sm text-white placeholder-[var(--muted-foreground)] outline-none transition-colors focus:border-apex-blue"
                />
                <input
                  value={form.mileage}
                  onChange={(e) => setForm({ ...form, mileage: e.target.value })}
                  placeholder="Mileage"
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-sm text-white placeholder-[var(--muted-foreground)] outline-none transition-colors focus:border-apex-blue"
                />
              </div>
              <div className="mt-3">
                <select
                  value={form.condition}
                  onChange={(e) => setForm({ ...form, condition: e.target.value })}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-apex-blue"
                >
                  <option value="">Condition</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
              <button className="mt-4 w-full rounded-full bg-apex-blue py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95">
                Get My Offer
              </button>
              <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">
                Offers are good for 7 days and 500 miles, whether or not you buy from us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
