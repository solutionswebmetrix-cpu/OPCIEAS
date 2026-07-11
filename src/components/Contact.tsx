import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Video, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-32">
      <div className="absolute inset-0 blueprint-bg opacity-20" />
      <div className="container-x relative px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sub text-sm uppercase tracking-[0.3em] text-gold">Contact</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 font-heading text-3xl font-black text-white sm:text-4xl xl:text-5xl">
            Let's Build Together
          </motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left — info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            {[
              { icon: MapPin, title: 'Head Office', lines: ['OPCIEAS Pvt. Ltd.', 'Industrial Area, India'] },
              { icon: Phone, title: 'Phone', lines: ['+91 98765 43210', '+91 98765 43211'] },
              { icon: Mail, title: 'Email', lines: ['info@opcieas.com', 'exports@opcieas.com'] },
              { icon: Clock, title: 'Working Hours', lines: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Emergency support available 24/7'] },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-lux glass-navy p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold"><c.icon className="h-6 w-6" /></div>
                <div>
                  <p className="font-heading text-sm font-bold text-white">{c.title}</p>
                  {c.lines.map((l) => <p key={l} className="font-body text-sm text-white/60">{l}</p>)}
                </div>
              </div>
            ))}

            {/* Meeting options */}
            <div className="rounded-lux glass-navy p-5">
              <p className="mb-3 font-heading text-sm font-bold text-white">Book a Meeting</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Video, label: 'Zoom' },
                  { icon: Video, label: 'Google Meet' },
                  { icon: Video, label: 'MS Teams' },
                  { icon: MessageCircle, label: 'WhatsApp' },
                  { icon: Calendar, label: 'Factory Visit' },
                ].map((m) => (
                  <button key={m.label} className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 font-sub text-xs text-white/70 transition hover:border-gold hover:text-gold">
                    <m.icon className="h-3.5 w-3.5" /> {m.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — map + quick form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            <div className="overflow-hidden rounded-lux glass-navy">
              <div className="relative h-64 bg-navy-2">
                <div className="absolute inset-0 blueprint-bg opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-gold" />
                    <p className="mt-2 font-sub text-sm text-white/70">Interactive Map</p>
                    <p className="font-body text-xs text-white/40">Industrial Area, India</p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute -inset-3 animate-glow rounded-full bg-gold/40" />
                  <span className="relative block h-4 w-4 rounded-full bg-gold" />
                </div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); window.location.hash = '#rfq'; }} className="rounded-lux glass-navy p-6">
              <p className="mb-4 font-heading text-sm font-bold text-white">Quick Contact</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <input placeholder="Name" className="rounded-xl border border-white/10 bg-navy/50 px-4 py-3 font-body text-sm text-white outline-none focus:border-gold" />
                <input placeholder="Email" className="rounded-xl border border-white/10 bg-navy/50 px-4 py-3 font-body text-sm text-white outline-none focus:border-gold" />
              </div>
              <textarea placeholder="Message" rows={3} className="mt-3 w-full rounded-xl border border-white/10 bg-navy/50 px-4 py-3 font-body text-sm text-white outline-none focus:border-gold" />
              <button className="btn-gold mt-4 w-full rounded-full px-6 py-3 font-sub text-sm">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
