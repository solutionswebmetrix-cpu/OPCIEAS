/*
# Create RFQ inquiries and newsletter subscribers tables

1. New Tables
- `rfq_inquiries`: stores Request For Quotation submissions from the website contact/RFQ form.
  - id (uuid pk), company_name, contact_name, email, phone, country, city, gst, category,
    product, quantity, budget, expected_delivery, message, status, created_at.
- `newsletter_subscribers`: stores email subscriptions from the footer newsletter.
  - id (uuid pk), email (unique), created_at.
2. Security
- Enable RLS on both tables.
- Single-tenant no-auth app: allow anon + authenticated INSERT (public submission) and SELECT.
  No UPDATE/DELETE from the anon client — submissions are managed server-side.
*/

CREATE TABLE IF NOT EXISTS rfq_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text,
  city text,
  gst text,
  category text,
  product text,
  quantity text,
  budget text,
  expected_delivery text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rfq_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_rfq" ON rfq_inquiries;
CREATE POLICY "anon_insert_rfq" ON rfq_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_rfq" ON rfq_inquiries;
CREATE POLICY "anon_select_rfq" ON rfq_inquiries FOR SELECT
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_select_newsletter" ON newsletter_subscribers FOR SELECT
  TO anon, authenticated USING (true);
