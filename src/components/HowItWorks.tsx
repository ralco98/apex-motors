import { motion } from 'motion/react';
import { Eye, FileCheck, Car, PenLine } from 'lucide-react';

const steps = [
  {
    icon: Eye,
    title: 'Browse',
    duration: 'as long as you like',
    desc: 'Filter by payment rather than sticker price if that is how you actually budget. Every listing shows both.',
  },
  {
    icon: FileCheck,
    title: 'Pre-qualify',
    duration: '2 minutes',
    desc: 'Soft credit check gives you a real rate and a real budget before anyone shakes your hand.',
  },
  {
    icon: Car,
    title: 'Test drive',
    duration: '30–45 minutes',
    desc: 'Take it on the highway, not around the block. Bring your car seat and check that it fits.',
  },
  {
    icon: PenLine,
    title: 'Sign and go',
    duration: 'about an hour',
    desc: 'Paperwork is prepared before you arrive. No surprise add-ons in the finance office, because we do not sell them there.',
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="bg-[var(--card)] py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-eyebrow">THE PROCESS</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-white md:text-5xl">
            How Buying Works Here
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--border)] lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-full origin-left bg-apex-blue"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="relative flex flex-row items-start gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.12, type: 'spring', stiffness: 200 }}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-apex-blue bg-[var(--card)]"
                >
                  <step.icon className="h-5 w-5 text-apex-blue" strokeWidth={2} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-apex-blue font-display text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </motion.div>

                <div className="lg:mt-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <span className="mt-0.5 block text-xs font-semibold uppercase tracking-wider text-apex-blue">
                    {step.duration}
                  </span>
                  <p className="mt-2 max-w-[240px] text-sm font-light leading-[1.7] text-[var(--muted-foreground)] lg:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
