import { useState } from 'react';
import { motion } from 'motion/react';
import * as Slider from '@radix-ui/react-slider';
import { Check } from 'lucide-react';

const terms = [36, 48, 60, 72];
const apr = 0.069;

const bulletPoints = [
  'Soft credit check for pre-qualification — no impact on your score',
  'We work with 22 lenders, including credit unions',
  'Rates from 4.9% APR for qualified buyers',
];

export default function Calculator() {
  const [price, setPrice] = useState(42000);
  const [down, setDown] = useState(5000);
  const [term, setTerm] = useState(60);

  const principal = Math.max(price - down, 0);
  const r = apr / 12;
  const monthly = Math.round((principal * r) / (1 - Math.pow(1 + r, -term)));

  return (
    <section id="financing" className="bg-[var(--card)] py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow">FINANCING</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-white md:text-[42px]">
              Know the Payment Before You Come In
            </h2>
            <p className="mt-5 max-w-md text-base font-light leading-[1.7] text-[var(--foreground)]/70">
              Nobody enjoys discovering their real payment after three hours in a windowless
              office. Run the numbers here, get pre-qualified with a soft credit check, and
              arrive knowing exactly what you are signing.
            </p>
            <ul className="mt-8 space-y-4">
              {bulletPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-apex-blue/15">
                    <Check className="h-3.5 w-3.5 text-apex-blue" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[var(--foreground)]/80">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card-elevated)] p-6 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                  Vehicle Price
                </label>
                <span className="font-display text-sm font-bold tabular-nums text-white">
                  ${price.toLocaleString()}
                </span>
              </div>
              <div className="apex-slider mt-3">
                <Slider.Root
                  value={[price]}
                  max={90000}
                  min={15000}
                  step={500}
                  onValueChange={(val) => setPrice(val[0])}
                  className="relative flex h-5 w-full items-center"
                >
                  <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-[var(--border)]">
                    <Slider.Range className="absolute h-full rounded-full bg-apex-blue" />
                  </Slider.Track>
                  <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-apex-blue bg-white shadow-md transition-transform hover:scale-115" />
                </Slider.Root>
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                  Down Payment
                </label>
                <span className="font-display text-sm font-bold tabular-nums text-white">
                  ${down.toLocaleString()}
                </span>
              </div>
              <div className="apex-slider mt-3">
                <Slider.Root
                  value={[down]}
                  max={Math.round(price * 0.5)}
                  min={0}
                  step={500}
                  onValueChange={(val) => setDown(val[0])}
                  className="relative flex h-5 w-full items-center"
                >
                  <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-[var(--border)]">
                    <Slider.Range className="absolute h-full rounded-full bg-apex-blue" />
                  </Slider.Track>
                  <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-apex-blue bg-white shadow-md transition-transform hover:scale-115" />
                </Slider.Root>
              </div>
            </div>

            <div className="mt-7">
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Term (months)
              </label>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {terms.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`rounded-lg py-2.5 text-sm font-semibold transition-all ${
                      term === t
                        ? 'bg-apex-blue text-white'
                        : 'border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]/70 hover:border-apex-blue/50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-6 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Estimated monthly
              </span>
              <motion.div
                key={monthly}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-2 font-display text-6xl font-extrabold tabular-nums text-apex-blue"
              >
                ${monthly.toLocaleString()}
              </motion.div>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                {term} months at {(apr * 100).toFixed(1)}% APR &middot; Estimate only, subject to
                credit approval
              </p>
            </div>

            <div className="mt-6">
              <button className="w-full rounded-full bg-apex-blue py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95">
                Get Pre-Qualified
              </button>
              <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">
                Soft credit check only — does not affect your score.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
