import { motion } from 'framer-motion';

const row1 = ['TATA', 'NOKIA', 'JW Marriott', 'Infosys', 'Wipro', 'TCS', 'L&T', 'Reliance', 'BHEL', 'ONGC'];
const row2 = ['IIT Bombay', 'AIIMS', 'ISB', 'Tata Motors', 'Mahindra', 'Aditya Birla', 'SBI', 'Indian Railways', 'DRDO', 'HAL'];

export default function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden bg-navy py-24">
      <div className="container-x mb-12 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sub text-sm uppercase tracking-[0.3em] text-gold">Client Showcase</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 font-heading text-3xl font-black text-white sm:text-4xl">
          Trusted by Industry Leaders
        </motion.h2>
      </div>

      <div className="relative space-y-6">
        {/* Edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-navy to-transparent" />

        <div className="flex w-max animate-marquee gap-6">
          {[...row1, ...row1].map((c, i) => (
            <div key={i} className="flex h-20 min-w-[180px] items-center justify-center rounded-lux glass-navy px-8">
              <span className="font-heading text-xl font-bold tracking-wide text-white/70">{c}</span>
            </div>
          ))}
        </div>
        <div className="flex w-max animate-marquee-rev gap-6">
          {[...row2, ...row2].map((c, i) => (
            <div key={i} className="flex h-20 min-w-[180px] items-center justify-center rounded-lux glass-navy px-8">
              <span className="font-heading text-xl font-bold tracking-wide text-white/70">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
