import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Download, MessageCircle, Boxes } from 'lucide-react';
import SectionBanner from '../components/SectionBanner';
import ProductCard from '../components/ProductCard';
import InquiryForm from '../components/InquiryForm';
import { fetchCategory, fetchProducts, type Product, type Category } from '../lib/data';

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
