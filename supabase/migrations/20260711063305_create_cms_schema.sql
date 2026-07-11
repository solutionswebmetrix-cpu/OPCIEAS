/*
# Create CMS schema for OPCIEAS commercial furniture website

1. New Tables
- `categories`: product categories (Office, Educational, Hospital, Industrial Storage, etc.)
  - id, slug (unique), name, tagline, description, banner_image, icon
- `products`: individual products belonging to categories
  - id, slug (unique), name, category_id (FK), short_desc, long_desc, image, gallery (text[]),
    specs (jsonb), features (text[]), price_range, featured (bool), created_at
- `industries`: industry sectors served (Government, Corporate, Healthcare, Hospitality, Export)
  - id, slug (unique), name, tagline, overview, hero_image, solutions (jsonb), certifications (text[])
- `industry_projects`: completed projects per industry
  - id, industry_id (FK), title, client, location, year, description, image
- `clients`: client logos / testimonials data
  - id, name, logo_url, industry, website
- `certifications`: company certifications (ISO, NSIC, MSME, etc.)
  - id, name, issuer, image, description
- `careers`: job openings
  - id, slug (unique), title, department, location, type, experience, description, requirements (text[]), posted_date, status
- `job_applications`: applications submitted via careers page
  - id, job_id (FK nullable), name, email, phone, resume_url, cover_letter, applied_at
- `contact_messages`: contact form submissions
  - id, name, email, phone, subject, message, created_at

2. Security
- Single-tenant no-auth app: allow anon + authenticated SELECT on all content tables.
- Allow anon + authenticated INSERT on rfq_inquiries, newsletter_subscribers, job_applications, contact_messages.
- No UPDATE/DELETE from anon client.
*/

-- Categories
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  tagline text,
  description text,
  banner_image text,
  icon text DEFAULT 'Boxes'
);
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_select_categories" ON categories;
CREATE POLICY "anon_select_categories" ON categories FOR SELECT TO anon, authenticated USING (true);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  short_desc text,
  long_desc text,
  image text,
  gallery text[] DEFAULT '{}',
  specs jsonb DEFAULT '{}'::jsonb,
  features text[] DEFAULT '{}',
  price_range text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_select_products" ON products;
CREATE POLICY "anon_select_products" ON products FOR SELECT TO anon, authenticated USING (true);

-- Industries
CREATE TABLE IF NOT EXISTS industries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  tagline text,
  overview text,
  hero_image text,
  solutions jsonb DEFAULT '[]'::jsonb,
  certifications text[] DEFAULT '{}'
);
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_select_industries" ON industries;
CREATE POLICY "anon_select_industries" ON industries FOR SELECT TO anon, authenticated USING (true);

-- Industry Projects
CREATE TABLE IF NOT EXISTS industry_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  industry_id uuid REFERENCES industries(id) ON DELETE CASCADE,
  title text NOT NULL,
  client text,
  location text,
  year text,
  description text,
  image text
);
ALTER TABLE industry_projects ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_select_industry_projects" ON industry_projects;
CREATE POLICY "anon_select_industry_projects" ON industry_projects FOR SELECT TO anon, authenticated USING (true);

-- Clients
CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  industry text,
  website text
);
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_select_clients" ON clients;
CREATE POLICY "anon_select_clients" ON clients FOR SELECT TO anon, authenticated USING (true);

-- Certifications
CREATE TABLE IF NOT EXISTS certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  issuer text,
  image text,
  description text
);
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_select_certifications" ON certifications;
CREATE POLICY "anon_select_certifications" ON certifications FOR SELECT TO anon, authenticated USING (true);

-- Careers
CREATE TABLE IF NOT EXISTS careers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  department text,
  location text,
  type text,
  experience text,
  description text,
  requirements text[] DEFAULT '{}',
  posted_date timestamptz DEFAULT now(),
  status text DEFAULT 'open'
);
ALTER TABLE careers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_select_careers" ON careers;
CREATE POLICY "anon_select_careers" ON careers FOR SELECT TO anon, authenticated USING (true);

-- Job Applications
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES careers(id) ON DELETE SET NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  resume_url text,
  cover_letter text,
  applied_at timestamptz DEFAULT now()
);
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_insert_job_applications" ON job_applications;
CREATE POLICY "anon_insert_job_applications" ON job_applications FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Contact Messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_industry_projects_industry ON industry_projects(industry_id);
CREATE INDEX IF NOT EXISTS idx_careers_status ON careers(status);
