import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Download, MessageCircle, Boxes } from 'lucide-react';
import SectionBanner from '../components/SectionBanner';
import ProductCard from '../components/ProductCard';
import InquiryForm from '../components/InquiryForm';
import { fetchCategory, fetchProducts, type Product, type Category } from '../lib/data';

const categoryContent: Record<string, { overview: string; highlights: string[]; specs: Array<{ label: string; value: string }>; gallery: string[]; cta: string[] }> = {
  'stainless-steel-products': {
    overview: 'Premium stainless steel storage and display solutions designed for department stores, libraries, medical stores and commercial environments.',
    highlights: ['Department Storage Display Rack', '200 Kg Capacity', 'Chrome Finish', 'Double Side Access', 'Easy Cleaning'],
    specs: [
      { label: 'Use Case', value: 'Department Stores, Medical Stores, Libraries, Electrical Shops, Stationery Shops, Commercial Storage' },
      { label: 'Finish', value: 'Chrome finish with durable stainless steel construction' },
      { label: 'Access', value: 'Double side access for easy retrieval and display' },
    ],
    gallery: ['Storage display rack', 'Commercial shelving setup', 'Retail and institutional use'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'bathroom-storage': {
    overview: 'Elegant and rust-resistant bathroom storage with premium finishes, waterproof mirrors and compact dimensions suited for modern interiors.',
    highlights: ['3 Shelf Stainless Steel Rack', 'Marine Grade Finish', 'Rust Resistant', 'Heart Shaped Waterproof Mirrors', 'Premium Bathroom Storage'],
    specs: [
      { label: 'Product Dimensions', value: 'H 24 x W 18 x D 10 Inches' },
      { label: 'Finish', value: 'Marine grade stainless steel finish' },
      { label: 'Use', value: 'Bathrooms, hotels, premium residential and hospitality projects' },
    ],
    gallery: ['Bathroom storage rack', 'Waterproof mirror and shelving', 'Premium vanity storage'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'hostel-furniture': {
    overview: 'Robust and durable hostel furniture for student accommodation, dormitories and institutional living spaces.',
    highlights: ['Single Cot', 'Double Bunk', 'Triple Bunk', 'Mattresses', 'Pillows', 'Bedsheets', 'Duvets', 'Foam Mattress', 'Latex Mattress', 'Rubberized Coir Mattress'],
    specs: [
      { label: 'Suitability', value: 'Hostels, student housing, training centres and institutions' },
      { label: 'Comfort', value: 'Mattress and bedding options available for every bench and bunk' },
      { label: 'Build', value: 'Durable powder-coated steel and engineered comfort materials' },
    ],
    gallery: ['Dormitory bunk layout', 'Hostel bed and mattress range', 'Institutional furniture installation'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'office-furniture': {
    overview: 'Functional office furniture designed for filing, storage, seating and modern workplace efficiency.',
    highlights: ['Filing Cabinets', 'Shelving Units', 'Storage Cabinets', 'Office Cupboards', 'Industrial Storage', 'Pallet Racks', 'Commercial Storage'],
    specs: [
      { label: 'Applications', value: 'Corporate offices, administrative spaces and commercial interiors' },
      { label: 'Construction', value: 'Engineered wood and steel with premium finishing' },
      { label: 'Storage', value: 'Tall, modular and space-efficient solutions' },
    ],
    gallery: ['Executive office setup', 'Storage cabinets and filing systems', 'Corporate furniture installation'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'educational-furniture': {
    overview: 'Durable and student-friendly furniture for classrooms, libraries and play zones in schools and colleges.',
    highlights: ['Classroom Furniture', 'Book Racks', 'Library Furniture', 'Display Racks', 'Office Cupboards', 'Storage Lockers', 'Play Equipment'],
    specs: [
      { label: 'Applications', value: 'Schools, colleges, libraries and training institutes' },
      { label: 'Design', value: 'Safety-focused, easy-maintenance and space-efficient' },
      { label: 'Range', value: 'Desks, racks, lockers and play equipment available' },
    ],
    gallery: ['Classroom furniture range', 'Library storage and display', 'Educational interiors'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'auditorium': {
    overview: 'Premium auditorium, cinema and stadium seating built for comfort, appearance and long-term use.',
    highlights: ['Cinema Chairs', 'Auditorium Chairs', 'Stadium Chairs', 'Premium Cushion Seating', 'Multiple Colors'],
    specs: [
      { label: 'Applications', value: 'Auditoriums, cinemas and sports arenas' },
      { label: 'Finish', value: 'Premium upholstery with durable frame construction' },
      { label: 'Customization', value: 'Multiple color options and seating configurations' },
    ],
    gallery: ['Auditorium seating arrangement', 'Cinema style chair lineup', 'Stadium seating concept'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'letter-boxes': {
    overview: 'Elegant letter boxes available in ABS plastic, metal and wood finish options for offices and institutional entrances.',
    highlights: ['ABS Plastic', 'Metal', 'Wooden', 'Elegant Designs'],
    specs: [
      { label: 'Options', value: 'Plastic, metal and wooden letter boxes' },
      { label: 'Suitability', value: 'Corporate offices, institutional buildings and residential complexes' },
      { label: 'Design', value: 'Premium and refined finishes for modern entryways' },
    ],
    gallery: ['Elegant letter box designs', 'Institutional entrance solutions', 'Material finish options'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
};

export default function ProductCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [cat, setCat] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (!slug) return;
      const c = await fetchCategory(slug);
      setCat(c);
      if (c) {
        const ps = await fetchProducts(c.id);
        setProducts(ps);
      }
      setLoading(false);
    })();
  }, [slug]);

  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.short_desc || '').toLowerCase().includes(search.toLowerCase())
  );
  if (sort === 'name') filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      </div>
    );
  }

  if (!cat) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
        <p className="font-heading text-2xl font-bold text-white">Category not found</p>
        <Link to="/products" className="mt-4 rounded-full bg-gold px-6 py-2 font-sub text-sm text-navy">View All Products</Link>
      </div>
    );
  }

  const content = categoryContent[cat.slug] || categoryContent[cat.name.toLowerCase().replace(/\s+/g, '-')] || null;

  return (
    <>
      <SectionBanner title={cat.name} tagline={cat.tagline || ''} image={cat.banner_image || ''} crumb={cat.name} crumbTo={`/products/${cat.slug}`} />

      <section className="bg-white py-20">
        <div className="container-x px-6">
          {cat.description && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-body text-base text-navy/70">{cat.description}</p>
            </motion.div>
          )}

          {content && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 grid gap-6 rounded-lux border border-navy/10 bg-navy/5 p-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="font-sub text-xs uppercase tracking-[0.3em] text-gold">Category Highlights</p>
                <h2 className="mt-2 font-heading text-2xl font-black text-navy">{cat.name}</h2>
                <p className="mt-3 font-body text-sm text-navy/70">{content.overview}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {content.highlights.map((item) => (
                    <span key={item} className="rounded-full border border-navy/10 bg-white px-3 py-1.5 font-sub text-xs text-navy/70">{item}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-lux bg-white p-5 shadow-sm">
                <p className="font-heading text-sm font-bold text-navy">Specifications</p>
                <div className="mt-3 space-y-2">
                  {content.specs.map((spec) => (
                    <div key={spec.label} className="border-b border-navy/5 pb-2">
                      <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-navy/40">{spec.label}</p>
                      <p className="mt-1 font-body text-sm text-navy/70">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {content && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 rounded-lux bg-white p-6 shadow-sm ring-1 ring-navy/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-sub text-xs uppercase tracking-[0.3em] text-gold">Gallery & Details</p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-navy">Product Gallery & Technical Notes</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.cta.map((item) => (
                    <span key={item} className="rounded-full bg-navy/5 px-3 py-1.5 font-sub text-xs text-navy/70">{item}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {content.gallery.map((item) => (
                  <span key={item} className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 font-sub text-xs text-gold-3">{item}</span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Filters + Search */}
          <div className="mb-8 flex flex-col gap-4 rounded-lux bg-navy/5 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="w-full rounded-full bg-white px-10 py-2.5 font-sub text-sm text-navy outline-none ring-1 ring-navy/10 transition focus:ring-gold" />
            </div>
            <div className="flex items-center gap-3">
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full bg-white px-4 py-2.5 font-sub text-sm text-navy outline-none ring-1 ring-navy/10">
                <option value="newest">Newest</option>
                <option value="name">A-Z</option>
              </select>
              <Link to="/rfq" className="btn-ghost flex items-center gap-2 rounded-full px-4 py-2.5 font-sub text-sm text-navy"><Download className="h-4 w-4" /> Catalogue</Link>
              <a href={`https://wa.me/919999999999?text=I'm%20interested%20in%20${encodeURIComponent(cat.name)}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 font-sub text-sm text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>

          <p className="mb-6 font-sub text-sm text-navy/50">{filtered.length} product(s) found</p>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Boxes className="mb-4 h-12 w-12 text-navy/20" />
              <p className="font-sub text-sm text-navy/50">No products match your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} categorySlug={cat.slug} />)}
            </div>
          )}
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-navy py-20">
        <div className="container-x px-6">
          <div className="mx-auto max-w-2xl">
            <InquiryForm category={cat.name} />
          </div>
        </div>
      </section>
    </>
  );
}
