import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { IMG } from '../lib/images';

const timeline = [
  { year: '2000', title: 'Company Started', desc: 'OPCIEAS founded with a vision for premium commercial furniture.' },
  { year: '2005', title: 'Large Manufacturing Expansion', desc: 'Scaled production capacity with modern machinery and larger facility.' },
  { year: '2010', title: 'Government Tender Projects', desc: 'Approved supplier for government & institutional furniture tenders.' },
  { year: '2015', title: 'International Export', desc: 'Began exporting to international markets with global compliance.' },
  { year: '2020', title: 'Smart Manufacturing', desc: 'Adopted automation, CNC & laser cutting for precision production.' },
  { year: '2025', title: 'Global Expansion', desc: 'Operating across 20+ export markets with a global dealer network.' },
];

const galleryImages = [
  IMG.products['Office Furniture'].img,
  IMG.products['Industrial Storage'].img,
  IMG.products['Educational Furniture'].img,
  IMG.products['Warehouse Racks'].img,
  IMG.products['Hospital Furniture'].img,
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const totalWidth = container.scrollWidth;
    const halfWidth = totalWidth / 2;

    const tl = gsap.to(container, {
      x: -halfWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      paused: isPaused,
    });

    if (isPaused) {
      tl.pause();
    } else {
      tl.resume();
    }

    return () => tl.kill();
  }, [isPaused]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-white py-32">
      <div className="pointer-events-none absolute right-10 top-20 h-40 w-40 rounded-full border border-navy/10 bg-navy/5 blur-2xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-20 left-10 h-60 w-60 rounded-full border border-gold/10 bg-gold/5 blur-3xl animate-float" />

      <div className="container-x grid gap-12 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left — Animated Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="group relative overflow-hidden rounded-lux border-2 border-gold/30 p-1">
            <div className="absolute inset-0 animate-glow rounded-lux bg-gradient-to-r from-gold/20 via-transparent to-gold/20" />
            <div 
              className="relative overflow-hidden rounded-lux"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                ref={carouselRef} 
                className="flex gap-4"
              >
                {/* Duplicate images for infinite loop */}
                {[...galleryImages, ...galleryImages].map((img, i) => (
                  <div 
                    key={i} 
                    className="group/img relative flex-shrink-0 overflow-hidden rounded-xl luxury-shadow"
                    style={{ width: '300px', height: '380px' }}
                  >
                    <img 
                      src={img} 
                      alt={`OPCIEAS gallery ${i + 1}`} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 rounded-lux glass-light p-5 luxury-shadow"
          >
            <p className="font-heading text-3xl font-black text-navy">25+</p>
            <p className="font-sub text-xs text-navy/60">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Right — content */}
        <motion.div style={{ y }} className="relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sub text-sm uppercase tracking-[0.3em] text-gold"
          >
            About OPCIEAS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-heading text-3xl font-black leading-tight text-navy sm:text-4xl xl:text-5xl"
          >
            Building Commercial Furniture That Shapes Modern Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 font-body text-base leading-relaxed text-navy/70"
          >
            OPCIEAS is a premium commercial furniture manufacturer specializing in government projects, educational institutions, corporate offices, hospitals, hotels, industrial storage, warehouse solutions and international export.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Government Projects', 'Educational Institutions', 'Corporate Offices', 'Hospitals', 'Hotels', 'Industrial Storage', 'Warehouse Solutions', 'International Export'].map((t) => (
              <span key={t} className="rounded-full border border-navy/15 bg-navy/5 px-3 py-1.5 font-sub text-xs font-medium text-navy/80">{t}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {['25+ Years Experience', 'ISO Certified', 'Government Approved', 'Trusted by Leading Brands'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-sub text-sm font-medium text-navy">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="container-x mt-24 px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-heading text-2xl font-extrabold text-navy sm:text-3xl"
        >
          Our Journey
        </motion.h3>
        <div className="relative">
          <div className="absolute left-0 top-0 h-1 w-full overflow-hidden rounded-full bg-navy/10">
            <motion.div className="h-full bg-gradient-to-r from-gold-2 to-gold" style={{ scaleX: scrollYProgress, transformOrigin: 'left' }} />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-10 md:grid-cols-3 lg:grid-cols-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -top-[42px] left-0 h-5 w-5 rounded-full border-2 border-gold bg-white" />
                <p className="font-heading text-2xl font-black gold-text">{t.year}</p>
                <p className="mt-1 font-sub text-sm font-semibold text-navy">{t.title}</p>
                <p className="mt-1 font-body text-xs text-navy/60">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
