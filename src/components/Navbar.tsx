import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, FileText, Globe, MessageCircle, ChevronDown } from 'lucide-react';

const menu = [
  {
    label: 'Home', items: [
      { name: 'Overview', to: '/' },
      { name: 'Why Choose Us', to: '/#why' },
      { name: 'Manufacturing', to: '/#manufacturing' },
    ],
  },
  {
    label: 'Company', items: [
      { name: 'About Us', to: '/company/about' },
      { name: 'Manufacturing', to: '/company/manufacturing' },
      { name: 'Infrastructure', to: '/company/infrastructure' },
      { name: 'Quality Control', to: '/company/quality-control' },
      { name: 'Certifications', to: '/company/certifications' },
      { name: 'Clients', to: '/company/clients' },
      { name: 'Careers', to: '/company/careers' },
      { name: 'Contact', to: '/company/contact' },
    ],
  },
  {
    label: 'Products', items: [
      { name: 'All Categories', to: '/products' },
      { name: 'Office Furniture', to: '/products/office-furniture' },
      { name: 'Educational Furniture', to: '/products/educational-furniture' },
      { name: 'Hospital Furniture', to: '/products/hospital-furniture' },
      { name: 'Industrial Storage', to: '/products/industrial-storage' },
      { name: 'School Furniture', to: '/products/school-furniture' },
      { name: 'Hostel Furniture', to: '/products/hostel-furniture' },
      { name: 'Hotel Furniture', to: '/products/hotel-furniture' },
      { name: 'Steel Furniture', to: '/products/steel-furniture' },
      { name: 'Warehouse Racks', to: '/products/warehouse-racks' },
      { name: 'Library Furniture', to: '/products/library-furniture' },
      { name: 'Auditorium Chairs', to: '/products/auditorium-chairs' },
    ],
  },
  {
    label: 'Industries', items: [
      { name: 'Government', to: '/industries/government' },
      { name: 'Corporate', to: '/industries/corporate' },
      { name: 'Healthcare', to: '/industries/healthcare' },
      { name: 'Hospitality', to: '/industries/hospitality' },
      { name: 'Export', to: '/industries/export' },
    ],
  },
  { label: 'Export', to: '/#export' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Clients', to: '/#clients' },
  { label: 'Contact', to: '/company/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-[1000] w-full transition-all duration-500 ${
          scrolled ? 'glass-navy py-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-x flex items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-navy/60 font-heading text-xl font-black gold-text">O</div>
            <div className="hidden sm:block">
              <p className="font-heading text-lg font-extrabold tracking-widest text-white">OPCIEAS</p>
              <p className="font-sub text-[10px] tracking-[0.2em] text-gold">PVT. LTD.</p>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-1 lg:flex">
            {menu.map((m) => (
              <div key={m.label} className="relative" onMouseEnter={() => setMega(m.items ? m.label : null)} onMouseLeave={() => setMega((cur) => (cur === m.label ? null : cur))}>
                {m.to ? (
                  <Link to={m.to} className="group relative block px-4 py-2 font-sub text-sm font-medium text-white/80 transition-colors hover:text-white">
                    {m.label}
                    <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-2/3" />
                  </Link>
                ) : (
                  <span className="group relative block cursor-pointer px-4 py-2 font-sub text-sm font-medium text-white/80 transition-colors hover:text-white">
                    {m.label}
                    {m.items && <ChevronDown className="ml-1 inline h-3 w-3" />}
                    <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-2/3" />
                  </span>
                )}

                <AnimatePresence>
                  {m.items && mega === m.label && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="absolute left-1/2 top-full z-20 -translate-x-1/2 pt-3">
                      <div className="glass-navy w-64 rounded-lux p-4 luxury-shadow">
                        <div className="space-y-1">
                          {m.items.map((item) => (
                            <Link key={item.name} to={item.to} onClick={() => setMega(null)} className="group flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-white/5">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-navy"><FileText className="h-3.5 w-3.5" /></div>
                              <span className="font-sub text-sm text-white/80 group-hover:text-white">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 font-sub text-xs text-white/70 transition hover:border-gold hover:text-gold"><Globe className="h-3.5 w-3.5" /> EN</button>
            <Link to="/products" className="btn-ghost flex items-center gap-2 rounded-full px-4 py-2 font-sub text-sm"><Download className="h-4 w-4" /> Catalogue</Link>
            <Link to="/rfq" className="btn-gold rounded-full px-5 py-2 font-sub text-sm">Request Quote</Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="relative z-[1002] text-white lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1001] bg-black/60 lg:hidden" onClick={() => setOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="fixed right-0 top-0 z-[1002] h-full w-[80vw] max-w-sm overflow-y-auto bg-navy p-6 pt-20 lg:hidden">
              {menu.map((m) => (
                <div key={m.label}>
                  {m.to ? (
                    <Link to={m.to} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 font-sub text-base text-white/80">{m.label}</Link>
                  ) : (
                    <div className="border-b border-white/10 py-3">
                      <p className="font-sub text-base font-bold text-white">{m.label}</p>
                      <div className="mt-2 space-y-1 pl-4">
                        {m.items?.map((item) => <Link key={item.name} to={item.to} onClick={() => setOpen(false)} className="block py-1.5 font-sub text-sm text-white/60 hover:text-gold">{item.name}</Link>)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link to="/products" onClick={() => setOpen(false)} className="btn-ghost rounded-full px-4 py-3 text-center font-sub text-sm">Download Catalogue</Link>
                <Link to="/rfq" onClick={() => setOpen(false)} className="btn-gold rounded-full px-4 py-3 text-center font-sub text-sm">Request Quote</Link>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-sub text-sm text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
