import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    quote:
      'I filtered by monthly payment instead of price, which is how I actually think about a car. Took twenty minutes to find three options in my range.',
    name: 'Andre W.',
    purchased: 'Purchased 2024 Aurora GT',
  },
  {
    quote:
      'The trade-in offer they gave me online was the same number they gave me in person. I had budgeted a whole afternoon for that argument.',
    name: 'Sofia D.',
    purchased: 'Purchased 2023 Vantage EX',
  },
  {
    quote:
      'Finance office took fifty minutes and nobody tried to sell me paint protection. I did not know that was possible.',
    name: 'Kevin O.',
    purchased: 'Purchased 2025 Nimbus EV',
  },
];

export default function Reviews() {
  return (
    <section className="bg-[var(--card)] py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">CUSTOMER REVIEWS</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-white md:text-5xl">
            What Buyers Say
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card-elevated)] p-7"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-apex-blue text-apex-blue" strokeWidth={1} />
                ))}
              </div>
              <Quote className="mt-4 h-7 w-7 text-apex-blue/30" />
              <p className="mt-3 flex-1 text-base font-light leading-[1.7] text-[var(--foreground)]/85">
                {r.quote}
              </p>
              <div className="mt-6 border-t border-[var(--border)] pt-4">
                <p className="font-display text-base font-semibold text-white">{r.name}</p>
                <p className="mt-0.5 text-xs text-[var(--muted-foreground)]">{r.purchased}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
