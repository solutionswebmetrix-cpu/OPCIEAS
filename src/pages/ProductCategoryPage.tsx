import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Download, MessageCircle, Boxes } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import SectionBanner from '../components/SectionBanner';
import ProductCard from '../components/ProductCard';
import InquiryForm from '../components/InquiryForm';
import { fetchCategory, fetchProducts, type Product, type Category } from '../lib/data';

const categoryContent: Record<string, { overview: string; highlights: string[]; specs: Array<{ label: string; value: string }>; gallery: string[]; cta: string[] }> = {
  'hostel-furniture': {
    overview: 'Robust and durable hostel furniture for student accommodation, dormitories and institutional living spaces.',
    highlights: ['Single Cot', 'Two Tier Bunk Bed', 'Three Tier Steel Cot', 'Commercial Mattress', 'Pillow', 'Premium Bed Sheets', 'Duvet', 'Blanket', 'Hostel Accessories'],
    specs: [
      { label: 'Suitability', value: 'Hostels, dormitories, student housing and residential institutions' },
      { label: 'Build', value: 'Powder-coated steel frames with durable bedding textile finishes' },
      { label: 'Comfort', value: 'Mattress, pillow and linen options for institutional comfort and long-term use' },
    ],
    gallery: ['Hostel dormitory setup', 'Bunk beds and mattresses', 'Hostel bedding accessories'],
    cta: ['Request Quote', 'WhatsApp Inquiry'],
  },
  'school-furniture': {
    overview: 'School furniture designed for classrooms, libraries, laboratories and administration with safety, durability and student comfort.',
    highlights: ['Classroom Furniture', 'Student Desk', 'Student Chair', 'Teacher Table', 'Teacher Chair', 'Laboratory Furniture', 'Library Furniture', 'Book Rack', 'Storage Cabinet', 'Display Rack'],
    specs: [
      { label: 'Suitability', value: 'Schools, colleges, coaching centres and institutional campuses' },
      { label: 'Materials', value: 'Powder-coated steel, engineered wood and durable laminated surfaces' },
      { label: 'Design', value: 'Ergonomic, space-efficient and easy to maintain' },
    ],
    gallery: ['Classroom furniture set', 'Library shelving and study areas', 'Laboratory furniture and racks'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'bathroom-collection': {
    overview: 'Premium bathroom collection featuring waterproof mirrors, rust-resistant racks and compact storage solutions for modern commercial washrooms.',
    highlights: ['Bathroom Storage Rack', 'Waterproof Mirror', 'Heart Shape Mirror', 'Premium Stainless Steel Rack', 'Marine Grade SS Rack'],
    specs: [
      { label: 'Finish', value: 'Marine grade stainless steel and premium polished coatings' },
      { label: 'Protection', value: 'Waterproof, rust-resistant and corrosion-proof design' },
      { label: 'Use', value: 'Hotels, hospitals, hostels, apartments and premium bathrooms' },
    ],
    gallery: ['Bathroom storage design', 'Waterproof mirror display', 'Premium stainless steel bathroom rack'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'letter-boxes': {
    overview: 'Premium letter boxes for apartments, societies and office entrances, available in ABS plastic, metal and wood finishes.',
    highlights: ['ABS Plastic Letter Box', 'Metal Letter Box', 'Wooden Letter Box', 'Apartment Letter Box', 'Society Letter Box'],
    specs: [
      { label: 'Material Options', value: 'ABS Plastic, Metal and Wood' },
      { label: 'Applications', value: 'Residential societies, apartments, offices and gated communities' },
      { label: 'Design', value: 'Secure, weatherproof and premium finish options' },
    ],
    gallery: ['Apartment letter box systems', 'Stylish metal and wooden letter boxes', 'Society mail solutions'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'premium-seating': {
    overview: 'Premium seating solutions for auditoriums, cinemas and stadiums with comfort, durability and superior design.',
    highlights: ['Auditorium Chairs', 'Cinema Seats', 'Stadium Chairs', 'Premium Comfort', 'Durable Upholstery'],
    specs: [
      { label: 'Applications', value: 'Auditoriums, cinema halls and stadiums' },
      { label: 'Materials', value: 'Steel frames, upholstered seating and weather-resistant finishes' },
      { label: 'Features', value: 'Ergonomic comfort, cup holders and folding mechanisms' },
    ],
    gallery: ['Auditorium seating models', 'Cinema seat layout', 'Stadium chair installations'],
    cta: ['Request Quote', 'Download Catalogue'],
  },
  'play-equipment': {
    overview: 'Durable play equipment for schools, parks and residential communities built for safety and long-lasting use.',
    highlights: ['Slides', 'Swings', 'Climbing Frames', 'Play Structures', 'Outdoor Activity Equipment'],
    specs: [
      { label: 'Suitability', value: 'Schools, parks, societies and community centres' },
      { label: 'Materials', value: 'HDPE, steel and UV-protected finishes' },
      { label: 'Safety', value: 'Child-safe design with durable, weather-resistant construction' },
    ],
    gallery: ['Playground equipment', 'School play area installations', 'Outdoor activity structures'],
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
      <PageMeta
        title={`${cat.name} | OPCIEAS`}
        description={cat.description || `Premium ${cat.name} products from OPCIEAS for commercial, institutional and export applications.`}
        keywords={`${cat.name}, commercial furniture, ${cat.name.toLowerCase()}, OPCIEAS`}
        canonical={`https://www.opcieascommercialfurniture.com/products/${cat.slug}`}
        schema={{ '@context': 'https://schema.org', '@type': 'Product', name: cat.name, description: cat.description }}
      />
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
              <a href={`https://wa.me/919845579049?text=I'm%20interested%20in%20${encodeURIComponent(cat.name)}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 font-sub text-sm text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
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
