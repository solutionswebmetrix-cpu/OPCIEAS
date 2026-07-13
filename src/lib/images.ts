
// Import all local assets
import OfficeFurnitureImg from '../assets/Office Furniture.png';
import EducationalFurnitureImg from '../assets/Educational Furniture.png';
import SchoolFurnitureImg from '../assets/School Furniture.png';
import HostelFurnitureImg from '../assets/Hostel Furniture.png';
import HotelFurnitureImg from '../assets/Hotel Furniture.png';
import HospitalFurnitureImg from '../assets/Hospital Furniture.png';
import IndustrialStorageImg from '../assets/Industrial Storage.png';
import SteelFurnitureImg from '../assets/Steel Furniture.png';
import LibraryFurnitureImg from '../assets/Library Furniture.png';
import WarehouseRacksImg from '../assets/Warehouse Racks.png';
import AuditoriumChairsImg from '../assets/Auditorium Chairs.png';

// Product asset mapping
export const PRODUCT_ASSETS: Record<
  string,
  { img?: string; count?: number }
> = {
  'Office Furniture': { img: OfficeFurnitureImg, count: 120 },
  'Educational Furniture': { img: EducationalFurnitureImg, count: 95 },
  'School Furniture': { img: SchoolFurnitureImg, count: 30 },
  'Hostel Furniture': { img: HostelFurnitureImg, count: 45 },
  'Hotel Furniture': { img: HotelFurnitureImg, count: 70 },
  'Hospital Furniture': { img: HospitalFurnitureImg, count: 60 },
  'Steel Furniture': { img: SteelFurnitureImg, count: 90 },
  'Industrial Storage': { img: IndustrialStorageImg, count: 85 },
  'Warehouse Racks': { img: WarehouseRacksImg, count: 40 },
  'Library Furniture': { img: LibraryFurnitureImg, count: 35 },
  'Auditorium Chairs': { img: AuditoriumChairsImg, count: 25 },
  'Commercial Furniture': { img: OfficeFurnitureImg, count: 100 },
  'Play Equipment': { img: SchoolFurnitureImg, count: 30 },
  'Letter Boxes': { img: SchoolFurnitureImg, count: 25 },
  'Cinema Seats': { img: AuditoriumChairsImg, count: 20 },
  'Stadium Chairs': { img: AuditoriumChairsImg, count: 18 },
  'Bathroom Storage': { img: IndustrialStorageImg, count: 22 },
  'SS Wire Racks': { img: WarehouseRacksImg, count: 28 },
};

export const IMG = {
  heroBg: IndustrialStorageImg,
  heroProduct: OfficeFurnitureImg,

  aboutFactory: IndustrialStorageImg,

  manufacturingBg: IndustrialStorageImg,

  products: Object.fromEntries(
    Object.entries(PRODUCT_ASSETS).map(([name, asset]) => [
      name,
      { img: asset.img, count: asset.count || 0 },
    ])
  ),

  featured: [
    { name: 'Executive Office Workstation', spec: 'Engineered wood • Powder-coated steel • Cable management', img: OfficeFurnitureImg, tag: 'Best Seller' },
    { name: 'Institutional Student Desk', spec: 'Tubular steel frame • Anti-scratch laminate • Stackable', img: EducationalFurnitureImg, tag: 'Tender Ready' },
    { name: 'Heavy-Duty Warehouse Rack', spec: 'Load capacity 2000kg/level • Boltless assembly • Galvanized', img: WarehouseRacksImg, tag: 'Export Grade' },
  ],

  industries: {
    Education: EducationalFurnitureImg,
    Government: OfficeFurnitureImg,
    Corporate: OfficeFurnitureImg,
    Healthcare: HospitalFurnitureImg,
    Hospitality: HotelFurnitureImg,
    Retail: OfficeFurnitureImg,
    Warehouses: WarehouseRacksImg,
    Factories: IndustrialStorageImg,
    Infrastructure: IndustrialStorageImg,
    Defence: OfficeFurnitureImg,
    Airports: OfficeFurnitureImg,
    'Metro Rail': EducationalFurnitureImg,
    'Smart Cities': OfficeFurnitureImg,
    Exports: IndustrialStorageImg,
  },

  gallery: [
    { src: IndustrialStorageImg, cat: 'Factory', h: 'tall' },
    { src: OfficeFurnitureImg, cat: 'Office', h: 'medium' },
    { src: EducationalFurnitureImg, cat: 'Educational', h: 'short' },
    { src: SchoolFurnitureImg, cat: 'Educational', h: 'tall' },
    { src: HospitalFurnitureImg, cat: 'Hospital', h: 'medium' },
    { src: HotelFurnitureImg, cat: 'Hotel', h: 'short' },
    { src: WarehouseRacksImg, cat: 'Warehouse', h: 'medium' },
    { src: SteelFurnitureImg, cat: 'Industrial', h: 'tall' },
    { src: LibraryFurnitureImg, cat: 'Library', h: 'short' },
    { src: AuditoriumChairsImg, cat: 'Auditorium', h: 'medium' },
  ],

  exportContainer: IndustrialStorageImg,
  exportGlobe: OfficeFurnitureImg,

  testimonials: [
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  ],
};

