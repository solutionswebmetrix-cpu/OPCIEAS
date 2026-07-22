
import { IMG, PRODUCT_IMAGES } from './images';

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

// Helper to create slug from name
const createSlug = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Helper to clean product name - remove numbers, (x), _xx, etc.
const cleanProductName = (originalName: string): string => {
  return originalName
    .replace(/\s*\(\d+\)\s*$/g, '') // Remove trailing (1), (10), etc.
    .replace(/\s*_\d+\s*$/g, '') // Remove trailing _01, _10, etc.
    .replace(/\s*-\d+\s*$/g, '') // Remove trailing -01, -10, etc.
    .replace(/\s*final\s*$/gi, '') // Remove trailing "final" (case insensitive)
    .replace(/\s*copy\s*$/gi, '') // Remove trailing "copy" (case insensitive)
    .replace(/\s*duplicate\s*$/gi, '') // Remove trailing "duplicate" (case insensitive)
    .trim();
};

// Mock data
const mockCategories: Category[] = [
  { id: '1', slug: 'office-furniture', name: 'Office Furniture', tagline: 'Ergonomic and premium solutions', description: 'Executive, conference, and modern office furniture for workspaces.', banner_image: null, icon: null },
  { id: '2', slug: 'educational-furniture', name: 'Educational Furniture', tagline: 'Classroom and campus essentials', description: 'School, hostel, and institutional furniture for education.', banner_image: null, icon: null },
  { id: '3', slug: 'hospital-furniture', name: 'Hospital Furniture', tagline: 'Healthcare and medical furniture', description: 'Patient beds, examination tables, and hospital furnishings.', banner_image: null, icon: null },
  { id: '4', slug: 'industrial-storage', name: 'Industrial Storage', tagline: 'Warehouse and storage solutions', description: 'Heavy-duty racks, shelves, and industrial storage systems.', banner_image: null, icon: null },
  { id: '5', slug: 'hotel-furniture', name: 'Hotel Furniture', tagline: 'Hospitality furniture', description: 'Hotel room, lobby, and restaurant furniture.', banner_image: null, icon: null },
  { id: '6', slug: 'steel-furniture', name: 'Steel Furniture', tagline: 'Durable steel furniture', description: 'Industrial and commercial steel furniture.', banner_image: null, icon: null },
  { id: '7', slug: 'auditorium-furniture', name: 'Auditorium Furniture', tagline: 'Cinema and stadium seating', description: 'Auditorium chairs, cinema seats, and stadium furniture.', banner_image: null, icon: null },
  { id: '8', slug: 'hostel-furniture', name: 'Hostel Furniture', tagline: 'Durable hostel and dormitory furniture', description: 'Robust hostel furniture and bedding for student housing and institutional accommodations.', banner_image: IMG.heroBg, icon: null },
  { id: '9', slug: 'school-furniture', name: 'School Furniture', tagline: 'Classroom and campus furniture solutions', description: 'Student desks, chairs, teacher furniture and laboratory storage for schools and colleges.', banner_image: IMG.heroBg, icon: null },
  { id: '10', slug: 'bathroom-collection', name: 'Bathroom Collection', tagline: 'Premium bathroom storage and stainless steel accessories', description: 'Waterproof mirrors, storage racks and rust-resistant bathroom fixtures for commercial and hospitality washrooms.', banner_image: IMG.heroBg, icon: null },
  { id: '11', slug: 'letter-boxes', name: 'Letter Boxes', tagline: 'Premium letter boxes for homes and societies', description: 'ABS, metal and wooden letter boxes for apartments, societies and office entrances.', banner_image: IMG.heroBg, icon: null },
  { id: '12', slug: 'premium-seating', name: 'Premium Seating', tagline: 'Auditorium, cinema and stadium seating solutions', description: 'Comfortable and durable premium seating systems for auditoriums, cinemas and stadiums.', banner_image: IMG.heroBg, icon: null },
  { id: '13', slug: 'play-equipment', name: 'Play Equipment', tagline: 'Safe playground furniture for schools and parks', description: 'Durable play equipment and outdoor activity structures for schools, parks and residential complexes.', banner_image: IMG.heroBg, icon: null },
];

const baseMockProducts: Product[] = [
  { id: '1', slug: 'executive-desk', name: 'Premium Executive Desk', category_id: '1', short_desc: 'High-end executive desk with storage', long_desc: 'Luxurious executive desk with premium finish, cable management, and storage compartments.', image: null, gallery: [], specs: { Material: 'Engineered Wood + Steel', Finish: 'Laminate', Dimensions: '1800mm x 900mm x 750mm' }, features: ['Cable Management', 'Lockable Drawers', 'Ergonomic Design'], price_range: '₹45,000 - ₹75,000', featured: true, created_at: new Date().toISOString() },
  { id: '2', slug: 'conference-table', name: 'Executive Conference Table', category_id: '1', short_desc: 'Large conference table for meetings', long_desc: 'Premium conference table with inbuilt power and data ports, suitable for boardrooms.', image: null, gallery: [], specs: { Material: 'Engineered Wood', Finish: 'High Gloss', Dimensions: '3000mm x 1500mm x 750mm' }, features: ['Power & Data Ports', 'Modular Design', 'Cable Management'], price_range: '₹80,000 - ₹1,50,000', featured: true, created_at: new Date().toISOString() },
  { id: '3', slug: 'office-workstation', name: 'Modular Office Workstation', category_id: '1', short_desc: 'Ergonomic workstation for offices', long_desc: 'Space-saving modular workstations with partitions and storage.', image: null, gallery: [], specs: { Material: 'Engineered Wood + Steel', Finish: 'Laminate', Dimensions: '1200mm x 600mm x 1100mm' }, features: ['Modular', 'Ergonomic', 'Storage'], price_range: '₹18,000 - ₹35,000', featured: true, created_at: new Date().toISOString() },
  { id: '4', slug: 'reception-desk', name: 'Stylish Reception Desk', category_id: '1', short_desc: 'Modern reception desk for lobbies', long_desc: 'Premium reception desk with LED lighting and storage.', image: null, gallery: [], specs: { Material: 'Engineered Wood + Acrylic', Finish: 'High Gloss', Dimensions: '2400mm x 800mm x 1100mm' }, features: ['LED Lighting', 'Storage', 'Modern Design'], price_range: '₹50,000 - ₹90,000', featured: false, created_at: new Date().toISOString() },
  { id: '5', slug: 'classroom-desk', name: 'Student Classroom Desk', category_id: '2', short_desc: 'Durable classroom desk with chair', long_desc: 'Sturdy classroom furniture for schools, ergonomic and stackable.', image: null, gallery: [], specs: { Material: 'Steel + Plastic', Finish: 'Powder Coated', Dimensions: '600mm x 450mm x 750mm' }, features: ['Stackable', 'Ergonomic', 'Durable'], price_range: '₹4,500 - ₹8,500', featured: true, created_at: new Date().toISOString() },
  { id: '6', slug: 'hostel-bunk-bed', name: 'Hostel Bunk Bed', category_id: '8', short_desc: 'Space-saving bunk beds for hostels', long_desc: 'Heavy-duty steel bunk beds for student hostels.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel', Finish: 'Powder Coated', Dimensions: '1900mm x 900mm x 1800mm' }, features: ['Heavy Duty', 'Safety Rails', 'Ladder'], price_range: '₹12,000 - ₹20,000', featured: false, created_at: new Date().toISOString() },
  { id: '7', slug: 'library-table', name: 'Library Reading Table', category_id: '9', short_desc: 'Reading table for libraries', long_desc: 'Sturdy library tables with storage and durability.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Engineered Wood', Finish: 'Laminate', Dimensions: '2400mm x 1200mm x 750mm' }, features: ['Durable', 'Spacious', 'Storage'], price_range: '₹25,000 - ₹45,000', featured: false, created_at: new Date().toISOString() },
  { id: '8', slug: 'patient-bed', name: 'Hospital Patient Bed', category_id: '3', short_desc: 'Adjustable patient bed for hospitals', long_desc: 'Semi-fowler patient bed with adjustable height and backrest.', image: null, gallery: [], specs: { Material: 'Steel', Finish: 'Epoxy Coated', Dimensions: '2000mm x 900mm x 600mm' }, features: ['Adjustable', 'Side Rails', 'Wheels'], price_range: '₹35,000 - ₹65,000', featured: true, created_at: new Date().toISOString() },
  { id: '9', slug: 'examination-table', name: 'Medical Examination Table', category_id: '3', short_desc: 'Examination table for clinics', long_desc: 'Comfortable and sturdy examination table for medical use.', image: null, gallery: [], specs: { Material: 'Steel + Foam', Finish: 'Powder Coated', Dimensions: '1800mm x 600mm x 800mm' }, features: ['Comfortable', 'Sturdy', 'Easy Clean'], price_range: '₹18,000 - ₹30,000', featured: false, created_at: new Date().toISOString() },
  { id: '10', slug: 'warehouse-rack', name: 'Heavy-Duty Warehouse Rack', category_id: '4', short_desc: 'Industrial storage rack', long_desc: 'Heavy-duty rack system for warehouses with high load capacity.', image: null, gallery: [], specs: { Material: 'Steel', Finish: 'Galvanized / Powder Coated', Dimensions: '3000mm x 1000mm x 3000mm' }, features: ['High Load Capacity', 'Boltless Assembly', 'Adjustable Shelves'], price_range: '₹25,000 - ₹60,000', featured: true, created_at: new Date().toISOString() },
  { id: '11', slug: 'ss-wire-rack', name: 'Stainless Steel Wire Rack', category_id: '4', short_desc: 'Stainless steel storage rack', long_desc: 'Corrosion-resistant SS wire racks for storage.', image: null, gallery: [], specs: { Material: 'Stainless Steel 304', Finish: 'Mirror Finish', Dimensions: '1800mm x 600mm x 1800mm' }, features: ['Corrosion Resistant', 'Hygienic', 'Easy Clean'], price_range: '₹15,000 - ₹30,000', featured: false, created_at: new Date().toISOString() },
  { id: '12', slug: 'hotel-double-bed', name: 'Hotel Room Double Bed', category_id: '5', short_desc: 'Premium hotel double bed', long_desc: 'Luxurious bed for hotel rooms with premium upholstery.', image: null, gallery: [], specs: { Material: 'Engineered Wood', Finish: 'Laminate', Dimensions: '2000mm x 1800mm' }, features: ['Premium Upholstery', 'Storage', 'Modern Design'], price_range: '₹40,000 - ₹80,000', featured: true, created_at: new Date().toISOString() },
  { id: '13', slug: 'restaurant-table', name: 'Restaurant Dining Table', category_id: '5', short_desc: 'Restaurant table and chairs', long_desc: 'Stylish dining tables for restaurants and hotels.', image: null, gallery: [], specs: { Material: 'Wood + Steel', Finish: 'Natural', Dimensions: '1200mm x 800mm x 750mm' }, features: ['Durable', 'Modern', 'Easy Clean'], price_range: '₹18,000 - ₹35,000', featured: false, created_at: new Date().toISOString() },
  { id: '14', slug: 'steel-almirah', name: 'Steel Almirah', category_id: '6', short_desc: 'Heavy-duty steel almirah', long_desc: 'Secure steel almirah with lockable compartments.', image: null, gallery: [], specs: { Material: 'Steel', Finish: 'Powder Coated', Dimensions: '1900mm x 900mm x 450mm' }, features: ['Lockable', 'Durable', 'Storage'], price_range: '₹12,000 - ₹25,000', featured: true, created_at: new Date().toISOString() },
  { id: '15', slug: 'steel-stool', name: 'Industrial Steel Stool', category_id: '6', short_desc: 'Heavy-duty steel stool', long_desc: 'Sturdy steel stools for industrial use.', image: null, gallery: [], specs: { Material: 'Steel', Finish: 'Powder Coated', Dimensions: '450mm x 450mm x 500mm' }, features: ['Heavy Duty', 'Stackable', 'Durable'], price_range: '₹1,500 - ₹3,500', featured: false, created_at: new Date().toISOString() },
  { id: '16', slug: 'auditorium-chair', name: 'Premium Auditorium Chair', category_id: '12', short_desc: 'Auditorium chair with folding', long_desc: 'Comfortable auditorium chairs with folding and cupholders.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel + Fabric', Finish: 'Powder Coated', Dimensions: '600mm x 600mm x 1000mm' }, features: ['Folding', 'Cupholder', 'Comfortable'], price_range: '₹8,000 - ₹18,000', featured: true, created_at: new Date().toISOString() },
  { id: '17', slug: 'cinema-seat', name: 'Cinema Recliner Seat', category_id: '12', short_desc: 'Reclining cinema seats', long_desc: 'Luxury reclining cinema seats with premium upholstery.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel + Leatherette', Finish: 'Premium', Dimensions: '900mm x 900mm x 1100mm' }, features: ['Reclining', 'Cupholder', 'Premium'], price_range: '₹25,000 - ₹50,000', featured: false, created_at: new Date().toISOString() },
  { id: '18', slug: 'stadium-chair', name: 'Stadium Seating', category_id: '12', short_desc: 'Outdoor stadium chairs', long_desc: 'Durable outdoor stadium seating with weather resistance.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'HDPE + Steel', Finish: 'UV Protected', Dimensions: '520mm x 520mm x 820mm' }, features: ['Weather Resistant', 'Durable', 'Stackable'], price_range: '₹3,200 - ₹7,800', featured: false, created_at: new Date().toISOString() },
  { id: '19', slug: 'playground-slide', name: 'Playground Slide', category_id: '13', short_desc: 'Safe and sturdy playground slide for schools', long_desc: 'Safe and sturdy playground slide designed for school parks and outdoor play areas.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'HDPE + Steel', Finish: 'UV Protected', Dimensions: '3000mm x 1500mm x 2500mm' }, features: ['Safe', 'Durable', 'Fun'], price_range: '₹20,000 - ₹45,000', featured: false, created_at: new Date().toISOString() },
  { id: '20', slug: 'letter-box', name: 'Stainless Steel Letter Box', category_id: '11', short_desc: 'SS letter boxes for offices', long_desc: 'Premium stainless steel letter boxes with lock.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Stainless Steel 304', Finish: 'Mirror Finish', Dimensions: '400mm x 300mm x 150mm' }, features: ['Lockable', 'Durable', 'Premium'], price_range: '₹3,000 - ₹6,000', featured: false, created_at: new Date().toISOString() },
  { id: '21', slug: 'dustbin', name: 'Industrial Dustbin', category_id: '6', short_desc: 'Large capacity dustbins', long_desc: 'Heavy-duty industrial dustbins for factories and offices.', image: null, gallery: [], specs: { Material: 'HDPE / Steel', Finish: 'UV Protected', Capacity: '50L - 200L' }, features: ['Durable', 'Large Capacity', 'Easy Clean'], price_range: '₹2,000 - ₹8,000', featured: false, created_at: new Date().toISOString() },
  { id: '22', slug: 'bathroom-vanity', name: 'Bathroom Vanity Unit', category_id: '10', short_desc: 'Bathroom storage vanity', long_desc: 'Premium bathroom storage units with cabinets.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'PVC / Wood', Finish: 'Waterproof', Dimensions: '800mm x 500mm x 850mm' }, features: ['Waterproof', 'Storage', 'Modern'], price_range: '₹15,000 - ₹30,000', featured: false, created_at: new Date().toISOString() },
  { id: '23', slug: 'single-cot', name: 'Single Cot', category_id: '8', short_desc: 'Durable single cot for hostels', long_desc: 'Heavy-duty single cot designed for hostel rooms with powder-coated steel and comfortable mattress support.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'MS Steel', Finish: 'Powder Coated', Dimensions: '1900mm x 900mm x 450mm' }, features: ['Strong Frame', 'Easy Clean', 'Space Efficient'], price_range: '₹8,000 - ₹12,000', featured: false, created_at: new Date().toISOString() },
  { id: '24', slug: 'two-tier-bunk-bed', name: 'Two Tier Bunk Bed', category_id: '8', short_desc: 'Space-saving bunk bed for hostels', long_desc: 'Premium two tier bunk bed with sturdy ladder and safety rails, ideal for student housing.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel', Finish: 'Powder Coated', Dimensions: '1900mm x 1000mm x 1700mm' }, features: ['Safety Rails', 'Compact Design', 'Durable'], price_range: '₹18,000 - ₹24,000', featured: false, created_at: new Date().toISOString() },
  { id: '25', slug: 'three-tier-steel-cot', name: 'Three Tier Steel Cot', category_id: '8', short_desc: 'Robust three tier steel cot', long_desc: 'Heavy-duty three tier steel cot for large hostels and dormitories with reinforced frame design.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel', Finish: 'Powder Coated', Dimensions: '1900mm x 1000mm x 2400mm' }, features: ['High Capacity', 'Stacked Design', 'Safety Ladder'], price_range: '₹24,000 - ₹32,000', featured: false, created_at: new Date().toISOString() },
  { id: '26', slug: 'commercial-mattress', name: 'Commercial Mattress', category_id: '8', short_desc: 'Comfort mattress for hostels', long_desc: 'Commercial mattress designed for hostel beds with high-density foam and breathability.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Foam', Finish: 'Fabric Cover', Dimensions: '1900mm x 900mm x 150mm' }, features: ['High Density Foam', 'Anti-Microbial', 'Comfort Support'], price_range: '₹4,500 - ₹9,000', featured: false, created_at: new Date().toISOString() },
  { id: '27', slug: 'hostel-pillow', name: 'Hostel Pillow', category_id: '8', short_desc: 'Comfort pillow for hostels', long_desc: 'Durable hostel pillow with breathable fabric and supportive fill.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Polyester Fill', Finish: 'Breathable Cover', Dimensions: '72cm x 42cm' }, features: ['Soft Support', 'Washable Cover', 'Durable'], price_range: '₹350 - ₹750', featured: false, created_at: new Date().toISOString() },
  { id: '28', slug: 'premium-bed-sheets', name: 'Premium Bed Sheets', category_id: '8', short_desc: 'Soft premium bed sheets', long_desc: 'High-quality bed sheets for hostel and institutional bedding with long-lasting finish.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Cotton Blend', Finish: 'Soft Touch', Dimensions: '200cm x 280cm' }, features: ['Soft Finish', 'Durable', 'Easy Care'], price_range: '₹980 - ₹2,200', featured: false, created_at: new Date().toISOString() },
  { id: '29', slug: 'duvet', name: 'Hostel Duvet', category_id: '8', short_desc: 'Warm duvet for dormitories', long_desc: 'Premium duvet with breathable filling for comfort in hostel rooms.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Microfiber', Finish: 'Soft Cover', Dimensions: '220cm x 240cm' }, features: ['Warmth', 'Lightweight', 'Easy Wash'], price_range: '₹1,200 - ₹2,500', featured: false, created_at: new Date().toISOString() },
  { id: '30', slug: 'blanket', name: 'Hostel Blanket', category_id: '8', short_desc: 'Warm hostel blanket', long_desc: 'Soft and durable blanket designed for institutional use and easy maintenance.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Polyester', Finish: 'Soft Touch', Dimensions: '220cm x 260cm' }, features: ['Warm', 'Durable', 'Machine Washable'], price_range: '₹850 - ₹1,900', featured: false, created_at: new Date().toISOString() },
  { id: '31', slug: 'hostel-accessories', name: 'Hostel Accessories', category_id: '8', short_desc: 'Essential hostel accessories', long_desc: 'Hostel bed accessories and dormitory essentials including study lamps, racks and storage frames.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Metal + Plastic', Finish: 'Powder Coated', Dimensions: 'Varied' }, features: ['Functional', 'Durable', 'Compact'], price_range: '₹750 - ₹3,500', featured: false, created_at: new Date().toISOString() },
  { id: '32', slug: 'bathroom-storage-rack', name: 'Bathroom Storage Rack', category_id: '10', short_desc: 'Waterproof bathroom storage rack', long_desc: 'Premium bathroom storage rack with rust-resistant finish and compact design.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Stainless Steel', Finish: 'Chrome', Dimensions: '1200mm x 500mm x 300mm' }, features: ['Waterproof', 'Rust Resistant', 'Compact Design'], price_range: '₹9,500 - ₹16,000', featured: false, created_at: new Date().toISOString() },
  { id: '33', slug: 'waterproof-mirror', name: 'Waterproof Mirror', category_id: '10', short_desc: 'Bathroom waterproof mirror', long_desc: 'Premium waterproof mirror built for bathrooms and wet zones.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Glass', Finish: 'Waterproof Coating', Dimensions: '800mm x 600mm' }, features: ['Waterproof', 'Premium Finish', 'Easy Clean'], price_range: '₹6,500 - ₹10,500', featured: false, created_at: new Date().toISOString() },
  { id: '34', slug: 'heart-shape-mirror', name: 'Heart Shape Mirror', category_id: '10', short_desc: 'Decorative heart-shaped mirror', long_desc: 'Premium heart-shaped bathroom mirror for luxury washrooms.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Glass', Finish: 'Polished', Dimensions: '700mm x 700mm' }, features: ['Premium Finish', 'Decorative', 'Rust Resistant'], price_range: '₹7,500 - ₹12,000', featured: false, created_at: new Date().toISOString() },
  { id: '35', slug: 'premium-ss-rack', name: 'Premium Stainless Steel Rack', category_id: '10', short_desc: 'Stainless steel bathroom rack', long_desc: 'High-end stainless steel rack for bathroom storage with premium finish.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Stainless Steel', Finish: 'Mirror Finish', Dimensions: '1000mm x 450mm x 300mm' }, features: ['Premium Finish', 'Rust Resistant', 'Compact Design'], price_range: '₹12,500 - ₹20,000', featured: false, created_at: new Date().toISOString() },
  { id: '36', slug: 'marine-grade-ss-rack', name: 'Marine Grade SS Rack', category_id: '10', short_desc: 'Marine grade stainless steel rack', long_desc: 'Marine grade stainless steel bathroom rack built for humidity-resistant commercial use.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Marine Grade SS', Finish: 'Brushed', Dimensions: '1000mm x 450mm x 300mm' }, features: ['Rust Resistant', 'Waterproof', 'Premium Finish'], price_range: '₹18,000 - ₹28,000', featured: false, created_at: new Date().toISOString() },
  { id: '37', slug: 'abs-plastic-letter-box', name: 'ABS Plastic Letter Box', category_id: '11', short_desc: 'ABS plastic letter box for residential use', long_desc: 'Lightweight and durable ABS plastic letter box ideal for societies and apartments.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'ABS Plastic', Finish: 'Matte', Dimensions: '400mm x 300mm x 150mm' }, features: ['Weatherproof', 'Durable', 'Easy Install'], price_range: '₹2,500 - ₹4,500', featured: false, created_at: new Date().toISOString() },
  { id: '38', slug: 'metal-letter-box', name: 'Metal Letter Box', category_id: '11', short_desc: 'Heavy-duty metal letter box', long_desc: 'Premium metal letter box designed for security and endurance.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Mild Steel', Finish: 'Powder Coated', Dimensions: '420mm x 320mm x 160mm' }, features: ['Lockable', 'Weatherproof', 'Premium'], price_range: '₹3,500 - ₹6,500', featured: false, created_at: new Date().toISOString() },
  { id: '39', slug: 'wooden-letter-box', name: 'Wooden Letter Box', category_id: '11', short_desc: 'Wooden letter box with classic styling', long_desc: 'Elegant wooden letter box for premium society and apartment entrances.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Teak Wood', Finish: 'Natural Polish', Dimensions: '420mm x 320mm x 160mm' }, features: ['Premium Design', 'Durable', 'Secure'], price_range: '₹4,500 - ₹8,000', featured: false, created_at: new Date().toISOString() },
  { id: '40', slug: 'apartment-letter-box', name: 'Apartment Letter Box', category_id: '11', short_desc: 'Apartment mail box system', long_desc: 'Modular apartment letter box system built for societies and residential complexes.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel + Powder Coating', Finish: 'Textured', Dimensions: 'Multiple Compartments' }, features: ['Modular', 'Secure', 'Easy Access'], price_range: '₹18,000 - ₹45,000', featured: false, created_at: new Date().toISOString() },
  { id: '41', slug: 'society-letter-box', name: 'Society Letter Box', category_id: '11', short_desc: 'Society letter box cluster', long_desc: 'Large letter box cluster ideal for gated communities and housing societies.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel', Finish: 'Powder Coated', Dimensions: 'Multiple Modules' }, features: ['Secure', 'Large Capacity', 'Organized'], price_range: '₹22,000 - ₹55,000', featured: false, created_at: new Date().toISOString() },
  { id: '42', slug: 'auditorium-chairs', name: 'Auditorium Chairs', category_id: '12', short_desc: 'Premium auditorium seating', long_desc: 'Comfortable auditorium chairs designed for premium event halls and lecture theatres.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel + Fabric', Finish: 'Powder Coated', Dimensions: '600mm x 600mm x 1000mm' }, features: ['Comfort', 'Durable', 'Premium Finish'], price_range: '₹9,000 - ₹16,000', featured: false, created_at: new Date().toISOString() },
  { id: '43', slug: 'cinema-seats', name: 'Cinema Seats', category_id: '12', short_desc: 'Premium cinema seating', long_desc: 'Recliner cinema seats with premium upholstery and cup holders.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'Steel + Leatherette', Finish: 'Premium', Dimensions: '900mm x 900mm x 1100mm' }, features: ['Reclining', 'Cup Holder', 'Premium Comfort'], price_range: '₹24,000 - ₹42,000', featured: false, created_at: new Date().toISOString() },
  { id: '44', slug: 'stadium-chairs', name: 'Stadium Chairs', category_id: '12', short_desc: 'Durable stadium seating', long_desc: 'Weather-resistant stadium chairs built for sports arenas and outdoor venues.', image: IMG.heroBg, gallery: [IMG.heroBg], specs: { Material: 'HDPE + Steel', Finish: 'UV Protected', Dimensions: '520mm x 520mm x 820mm' }, features: ['Weather Resistant', 'Durable', 'Stackable'], price_range: '₹3,200 - ₹7,800', featured: false, created_at: new Date().toISOString() },
];

// Create School Furniture products from PRODUCT_IMAGES
const nameCount: Record<string, number> = {};
const schoolFurnitureProducts: Product[] = Object.entries(PRODUCT_IMAGES).map(([originalName, img], index) => {
  const cleanName = cleanProductName(originalName);
  // Track how many times this clean name has been used
  nameCount[cleanName] = (nameCount[cleanName] || 0) + 1;
  const count = nameCount[cleanName];
  
  // Create unique slug: base-clean-name or base-clean-name-2, etc.
  let slugBase = createSlug(cleanName);
  let slug = slugBase;
  if (count > 1) {
    slug = `${slugBase}-${count}`;
  }
  
  return {
    id: `school-${index}`,
    slug,
    name: cleanName, // Keep the name clean (no numbers)
    category_id: '9',
    short_desc: `Premium ${cleanName.toLowerCase()} for schools, classrooms, and educational institutions`,
    long_desc: `Durable and ergonomic ${cleanName.toLowerCase()} designed for schools, colleges, and educational institutions. Built with high-quality materials for long-lasting use in high-traffic environments.`,
    image: img,
    gallery: [img],
    specs: {
      Material: 'Steel + Plastic / Wood',
      Finish: 'Powder Coated',
      Dimensions: 'Standard',
    },
    features: ['Durable', 'Ergonomic', 'School Ready'],
    price_range: '₹2,000 - ₹25,000',
    featured: index < 5,
    created_at: new Date().toISOString(),
  };
});

// Combine all products
const mockProducts: Product[] = [...baseMockProducts, ...schoolFurnitureProducts];

const mockIndustries: Industry[] = [
  { id: '1', slug: 'government', name: 'Government', tagline: 'Trusted for government tenders', overview: 'OPCIEAS is an approved supplier for government and public sector furniture tenders.', hero_image: null, solutions: [{ title: 'Tender Ready', desc: 'Compliant products for government procurement.' }, { title: 'Bulk Manufacturing', desc: 'High volume production capability.' }, { title: 'Timely Delivery', desc: 'On-time execution of large projects.' }], certifications: ['ISO 9001:2015', 'NSIC', 'MSME'] },
  { id: '2', slug: 'corporate', name: 'Corporate', tagline: 'Modern office furniture', overview: 'Premium corporate office furniture solutions.', hero_image: null, solutions: [{ title: 'Modular Workstations', desc: 'Customizable office setups.' }, { title: 'Executive Furniture', desc: 'Premium office suites.' }, { title: 'Ergonomic Design', desc: 'Comfort-focused furniture.' }], certifications: ['ISO 9001:2015'] },
  { id: '3', slug: 'healthcare', name: 'Healthcare', tagline: 'Hospital and medical furniture', overview: 'Specialized furniture for hospitals and clinics.', hero_image: null, solutions: [{ title: 'Patient Beds', desc: 'Adjustable and safe.' }, { title: 'Examination Tables', desc: 'Comfortable and hygienic.' }, { title: 'Hospital Furniture', desc: 'Complete range for hospitals.' }], certifications: ['ISO 9001:2015'] },
  { id: '4', slug: 'hospitality', name: 'Hospitality', tagline: 'Hotel and restaurant furniture', overview: 'Luxurious furniture for hotels and restaurants.', hero_image: null, solutions: [{ title: 'Hotel Rooms', desc: 'Premium room furniture.' }, { title: 'Restaurants', desc: 'Dining and seating solutions.' }, { title: 'Lobbies', desc: 'Elegant lobby furniture.' }], certifications: ['ISO 9001:2015'] },
  { id: '5', slug: 'education', name: 'Education', tagline: 'School and institutional furniture', overview: 'Complete furniture solutions for educational institutions.', hero_image: null, solutions: [{ title: 'Classrooms', desc: 'Ergonomic classroom furniture.' }, { title: 'Hostels', desc: 'Hostel furniture and beds.' }, { title: 'Libraries', desc: 'Library tables and storage.' }], certifications: ['ISO 9001:2015', 'NSIC'] },
  { id: '6', slug: 'industrial', name: 'Industrial', tagline: 'Industrial and warehouse solutions', overview: 'Heavy-duty industrial and warehouse furniture.', hero_image: null, solutions: [{ title: 'Warehouse Racks', desc: 'High capacity storage.' }, { title: 'Workbenches', desc: 'Industrial workstations.' }, { title: 'Steel Furniture', desc: 'Durable steel furniture.' }], certifications: ['ISO 9001:2015'] },
  { id: '7', slug: 'exports', name: 'Exports', tagline: 'Export ready furniture', overview: 'Internationally compliant furniture for global markets.', hero_image: null, solutions: [{ title: 'Export Packaging', desc: 'International standard packaging.' }, { title: 'Customization', desc: 'Tailored to market requirements.' }, { title: 'Compliance', desc: 'International standards.' }], certifications: ['ISO 9001:2015', 'IEC'] },
];

const mockClients: Client[] = [
  { id: '1', name: 'TATA', logo_url: null, industry: 'Corporate', website: null },
  { id: '2', name: 'NOKIA', logo_url: null, industry: 'Corporate', website: null },
  { id: '3', name: 'JW Marriott', logo_url: null, industry: 'Hospitality', website: null },
  { id: '4', name: 'Government Organizations', logo_url: null, industry: 'Government', website: null },
  { id: '5', name: 'Educational Institutions', logo_url: null, industry: 'Education', website: null },
  { id: '6', name: 'Corporate Clients', logo_url: null, industry: 'Corporate', website: null },
];

const mockCertifications: Certification[] = [
  { id: '1', name: 'ISO 9001:2015', issuer: 'Quality Management System', image: null, description: 'Certified quality management processes.' },
  { id: '2', name: 'NSIC', issuer: 'National Small Industries Corporation', image: null, description: 'Registered with NSIC for government supplies.' },
  { id: '3', name: 'MSME UDYAM', issuer: 'Ministry of MSME', image: null, description: 'Registered MSME enterprise.' },
  { id: '4', name: 'Trademark Registration', issuer: 'Government of India', image: null, description: 'Registered brand identity.' },
  { id: '5', name: 'IEC', issuer: 'DGFT', image: null, description: 'Import Export Code for international trade.' },
  { id: '6', name: 'Government Approvals', issuer: 'Various Government Bodies', image: null, description: 'Approved for public sector procurement.' },
];

const mockCareers: Career[] = [
  { id: '1', slug: 'sales-manager', title: 'Sales Manager', department: 'Sales', location: 'Delhi', type: 'Full Time', experience: '5-10 Years', description: 'Lead sales team for commercial furniture.', requirements: ['Experience in B2B sales', 'Knowledge of furniture industry', 'Good communication skills'], posted_date: new Date().toISOString(), status: 'Open' },
  { id: '2', slug: 'production-supervisor', title: 'Production Supervisor', department: 'Production', location: 'Faridabad', type: 'Full Time', experience: '3-5 Years', description: 'Supervise manufacturing operations.', requirements: ['Production experience', 'Knowledge of furniture manufacturing', 'Leadership skills'], posted_date: new Date().toISOString(), status: 'Open' },
  { id: '3', slug: 'design-engineer', title: 'Design Engineer', department: 'Design', location: 'Delhi', type: 'Full Time', experience: '2-5 Years', description: 'Design furniture products using CAD.', requirements: ['CAD skills', 'Furniture design experience', 'Creative mindset'], posted_date: new Date().toISOString(), status: 'Open' },
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
  return mockIndustries;
}

export async function fetchIndustry(slug: string): Promise<Industry | null> {
  return mockIndustries.find(i => i.slug === slug) || null;
}

export async function fetchIndustryProjects(_industryId: string): Promise<IndustryProject[]> {
  return [];
}

export async function fetchClients(): Promise<Client[]> {
  return mockClients;
}

export async function fetchCertifications(): Promise<Certification[]> {
  return mockCertifications;
}

export async function fetchCareers(): Promise<Career[]> {
  return mockCareers;
}

export async function fetchCareer(slug: string): Promise<Career | null> {
  return mockCareers.find(c => c.slug === slug) || null;
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
