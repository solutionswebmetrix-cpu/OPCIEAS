import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText, Play, ChevronDown, ShieldCheck, Award, Factory, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { IMG, BANNER_VIDEOS } from '../lib/images';

const stats = [
  { value: 25, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Furniture Products' },
  { value: 500, suffix: '+', label: 'Institutional Projects' },
  { value: 100, suffix: '+', label: 'Corporate Clients' },
  { value: 20, suffix: '+', label: 'Export Markets' },
];

const certs = ['ISO 9001', 'NSIC', 'MSME', 'Trademark', 'IEC', 'Govt. Approved'];
const clients = ['TATA', 'NOKIA', 'JW Marriott'];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const dur = 1800;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          setN(Math.floor(start + (value - start) * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({ x: (e.clientX - rect.left - rect.width / 2) / 30, y: (e.clientY - rect.top - rect.height / 2) / 30 });
    };
    window.addEventListener('mousemove', onMove);
    
    // Auto-advance banner videos every 5 seconds
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % BANNER_VIDEOS.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', onMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden bg-dark">
      {/* Background video slider — preloaded, pointer-events-none */}
      <div className="pointer-events-none absolute inset-0">
        {BANNER_VIDEOS.map((video, index) => (
          <motion.video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBannerIndex ? 0.7 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/60" />
      </div>

      {/* Floating ambient orbs — decorative, no pointer events */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-navy-3/40 blur-[120px] animate-float" />

      <div className="container-x relative z-10 flex min-h-screen items-center px-6 py-32">
        {/* Left content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2"
          >
            <span className="h-2 w-2 animate-glow rounded-full bg-gold" />
            <span className="font-sub text-xs tracking-widest text-white/80">MANUFACTURING EXCELLENCE SINCE 2000</span>
          </motion.div>

          {/* Split-letter headline */}
          <h1 className="font-heading text-4xl font-black leading-[1.05] text-white text-shadow-lux sm:text-5xl xl:text-6xl">
            {'Commercial Furniture'.split('').map((c, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.03, duration: 0.5 }} className="inline-block">{c === ' ' ? '\u00A0' : c}</motion.span>
            ))}
            <br />
            <span className="gold-text">
              {'Manufacturing'.split('').map((c, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.03, duration: 0.5 }} className="inline-block">{c === ' ' ? '\u00A0' : c}</motion.span>
              ))}
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-4 font-sub text-lg text-white/70"
          >
            Commercial Furniture Manufacturer • Government Tender Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-5 max-w-xl font-body text-sm text-white/50"
          >
            Premium furniture solutions for export, education, hospitality, healthcare and institutional projects across India and global markets.
          </motion.p>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Commercial Furniture', 'Government Tender', 'Export Furniture', 'Educational Furniture', 'Institutional Furniture'].map((t) => (
              <span key={t} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-sub text-xs font-medium text-white/80">{t}</span>
            ))}
          </div>

          {/* Buttons — always clickable, z-20 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="relative z-20 mt-8 flex flex-wrap gap-3"
          >
            <Link to="/products" className="btn-gold magnetic flex items-center gap-2 rounded-full px-6 py-3 font-sub text-sm">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/rfq" className="btn-ghost magnetic flex items-center gap-2 rounded-full px-6 py-3 font-sub text-sm">
              <FileText className="h-4 w-4" /> Request Quote
            </Link>
            <Link to="/products" className="btn-ghost magnetic flex items-center gap-2 rounded-full px-6 py-3 font-sub text-sm">
              <Download className="h-4 w-4" /> Download Catalogue
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-5"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl font-extrabold gold-text sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 font-sub text-[10px] uppercase tracking-wider text-white/50">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trust badge — decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex items-center gap-3 rounded-full glass px-5 py-2.5">
          <Award className="h-4 w-4 text-gold" />
          <span className="font-sub text-xs tracking-wide text-white/80">25 Years of Premium Manufacturing</span>
          <Factory className="h-4 w-4 text-gold" />
          <Globe2 className="h-4 w-4 text-gold" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/50"
      >
        <Link to="/company/about">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
