import { supabase } from './supabase';

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

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from('categories').select('*').order('name');
  if (error) throw error;
  return data ?? [];
}

export async function fetchCategory(slug: string): Promise<Category | null> {
  const { data, error } = await supabase.from('categories').select('*').eq('slug', slug).maybeSingle();
  if (error) throw error;
  return data;
}

export async function fetchProducts(categoryId?: string): Promise<Product[]> {
  let q = supabase.from('products').select('*').order('created_at', { ascending: false });
  if (categoryId) q = q.eq('category_id', categoryId);
  const { data, error } = await q;
  if (error) throw error;
  return data ?? [];
}

export async function fetchProduct(slug: string): Promise<Product | null> {
  const { data, error } = await supabase.from('products').select('*').eq('slug', slug).maybeSingle();
  if (error) throw error;
  return data;
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*').eq('featured', true);
  if (error) throw error;
  return data ?? [];
}

export async function fetchIndustries(): Promise<Industry[]> {
  const { data, error } = await supabase.from('industries').select('*').order('name');
  if (error) throw error;
  return data ?? [];
}

export async function fetchIndustry(slug: string): Promise<Industry | null> {
  const { data, error } = await supabase.from('industries').select('*').eq('slug', slug).maybeSingle();
  if (error) throw error;
  return data;
}

export async function fetchIndustryProjects(industryId: string): Promise<IndustryProject[]> {
  const { data, error } = await supabase.from('industry_projects').select('*').eq('industry_id', industryId);
  if (error) throw error;
  return data ?? [];
}

export async function fetchClients(): Promise<Client[]> {
  const { data, error } = await supabase.from('clients').select('*').order('name');
  if (error) throw error;
  return data ?? [];
}

export async function fetchCertifications(): Promise<Certification[]> {
  const { data, error } = await supabase.from('certifications').select('*').order('name');
  if (error) throw error;
  return data ?? [];
}

export async function fetchCareers(): Promise<Career[]> {
  const { data, error } = await supabase.from('careers').select('*').eq('status', 'open').order('posted_date', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function fetchCareer(slug: string): Promise<Career | null> {
  const { data, error } = await supabase.from('careers').select('*').eq('slug', slug).maybeSingle();
  if (error) throw error;
  return data;
}

export async function submitRFQ(payload: Record<string, string>) {
  const { error } = await supabase.from('rfq_inquiries').insert([payload]);
  if (error) throw error;
}

export async function submitContact(payload: Record<string, string>) {
  const { error } = await supabase.from('contact_messages').insert([payload]);
  if (error) throw error;
}

export async function submitJobApplication(payload: Record<string, string>) {
  const { error } = await supabase.from('job_applications').insert([payload]);
  if (error) throw error;
}

export async function subscribeNewsletter(email: string) {
  const { error } = await supabase.from('newsletter_subscribers').insert([{ email }]);
  if (error) throw error;
}
