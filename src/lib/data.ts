
export interface Category {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  description: string | null;
  banner_image: string | null;
  icon: string | null;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category_id: string | null;
  short_desc: string | null;
  long_desc: string | null;
  image: string | null;
  gallery: string[];
  specs: Record<string, string>;
  features: string[];
  price_range: string | null;
  featured: boolean;
  created_at: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  overview: string | null;
  hero_image: string | null;
  solutions: { title: string; desc: string }[];
  certifications: string[];
}

export interface IndustryProject {
  id: string;
  industry_id: string;
  title: string;
  client: string | null;
  location: string | null;
  year: string | null;
  description: string | null;
  image: string | null;
}

export interface Client {
  id: string;
  name: string;
  logo_url: string | null;
  industry: string | null;
  website: string | null;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string | null;
  image: string | null;
  description: string | null;
}

export interface Career {
  id: string;
  slug: string;
  title: string;
  department: string | null;
  location: string | null;
  type: string | null;
  experience: string | null;
  description: string | null;
  requirements: string[];
  posted_date: string;
  status: string;
}

// Mock data
const mockCategories: Category[] = [
  { id: '1', slug: 'office-furniture', name: 'Office Furniture', tagline: 'Ergonomic solutions', description: 'Premium office furniture', banner_image: null, icon: null },
  { id: '2', slug: 'educational-furniture', name: 'Educational Furniture', tagline: 'Classroom essentials', description: 'School furniture', banner_image: null, icon: null },
  { id: '3', slug: 'hospital-furniture', name: 'Hospital Furniture', tagline: 'Healthcare solutions', description: 'Medical furniture', banner_image: null, icon: null },
  { id: '4', slug: 'industrial-storage', name: 'Industrial Storage', tagline: 'Warehouse solutions', description: 'Storage systems', banner_image: null, icon: null },
];

const mockProducts: Product[] = [
  { id: '1', slug: 'executive-desk', name: 'Executive Desk', category_id: '1', short_desc: 'Premium desk', long_desc: 'High-quality office desk', image: null, gallery: [], specs: {}, features: [], price_range: null, featured: true, created_at: new Date().toISOString() },
  { id: '2', slug: 'classroom-chair', name: 'Classroom Chair', category_id: '2', short_desc: 'Durable chair', long_desc: 'School furniture', image: null, gallery: [], specs: {}, features: [], price_range: null, featured: false, created_at: new Date().toISOString() },
];

// Mock functions
export async function fetchCategories(): Promise<Category[]> {
  return mockCategories;
}

export async function fetchCategory(slug: string): Promise<Category | null> {
  return mockCategories.find(c => c.slug === slug) || null;
}

export async function fetchProducts(categoryId?: string): Promise<Product[]> {
  if (categoryId) {
    return mockProducts.filter(p => p.category_id === categoryId);
  }
  return mockProducts;
}

export async function fetchProduct(slug: string): Promise<Product | null> {
  return mockProducts.find(p => p.slug === slug) || null;
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  return mockProducts.filter(p => p.featured);
}

export async function fetchIndustries(): Promise<Industry[]> {
  return [];
}

export async function fetchIndustry(slug: string): Promise<Industry | null> {
  return null;
}

export async function fetchIndustryProjects(industryId: string): Promise<IndustryProject[]> {
  return [];
}

export async function fetchClients(): Promise<Client[]> {
  return [];
}

export async function fetchCertifications(): Promise<Certification[]> {
  return [];
}

export async function fetchCareers(): Promise<Career[]> {
  return [];
}

export async function fetchCareer(slug: string): Promise<Career | null> {
  return null;
}

export async function submitRFQ(payload: Record<string, string>) {
  console.log('Demo mode: RFQ submitted', payload);
}

export async function submitContact(payload: Record<string, string>) {
  console.log('Demo mode: Contact form submitted', payload);
}

export async function submitJobApplication(payload: Record<string, string>) {
  console.log('Demo mode: Job application submitted', payload);
}

export async function subscribeNewsletter(email: string) {
  console.log('Demo mode: Newsletter subscription for', email);
}
