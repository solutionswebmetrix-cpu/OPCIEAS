// Import all local assets
import OfficeFurniture from '../assets/Office Furniture.png';
import EducationalFurniture from '../assets/Educational Furniture.png';
import SchoolFurniture from '../assets/School Furniture.png';
import HostelFurniture from '../assets/Hostel Furniture.png';
import HotelFurniture from '../assets/Hotel Furniture.png';
import HospitalFurniture from '../assets/Hospital Furniture.png';
import IndustrialStorage from '../assets/Industrial Storage.png';
import SteelFurniture from '../assets/Steel Furniture.png';
import LibraryFurniture from '../assets/Library Furniture.png';
import WarehouseRacks from '../assets/Warehouse Racks.png';
import AuditoriumChairs from '../assets/Auditorium Chairs.png';

const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  heroBg: px(3825529, 1920),
  heroProduct: OfficeFurniture,

  aboutFactory: IndustrialStorage,

  manufacturingBg: px(3825529, 1920),

  products: {
    'Office Furniture': { img: OfficeFurniture, count: 120 },
    'Educational Furniture': { img: EducationalFurniture, count: 95 },
    'School Furniture': { img: SchoolFurniture, count: 80 },
    'Hostel Furniture': { img: HostelFurniture, count: 45 },
    'Hotel Furniture': { img: HotelFurniture, count: 70 },
    'Hospital Furniture': { img: HospitalFurniture, count: 60 },
    'Industrial Storage': { img: IndustrialStorage, count: 85 },
    'Steel Furniture': { img: SteelFurniture, count: 90 },
    'Library Furniture': { img: LibraryFurniture, count: 35 },
    'Warehouse Racks': { img: WarehouseRacks, count: 40 },
    'Auditorium Chairs': { img: AuditoriumChairs, count: 25 },
    'Play Equipment': { img: SchoolFurniture, count: 30 }, // Use School Furniture as placeholder for Play Equipment (no asset)
    'Commercial Furniture': { img: OfficeFurniture, count: 100 }, // Use Office Furniture as placeholder
  },

  featured: [
    { name: 'Executive Office Workstation', spec: 'Engineered wood • Powder-coated steel • Cable management', img: OfficeFurniture, tag: 'Best Seller' },
    { name: 'Institutional Student Desk', spec: 'Tubular steel frame • Anti-scratch laminate • Stackable', img: EducationalFurniture, tag: 'Tender Ready' },
    { name: 'Heavy-Duty Warehouse Rack', spec: 'Load capacity 2000kg/level • Boltless assembly • Galvanized', img: WarehouseRacks, tag: 'Export Grade' },
  ],

  industries: {
    Education: EducationalFurniture,
    Government: px(34672722, 600),
    Corporate: OfficeFurniture,
    Healthcare: HospitalFurniture,
    Hospitality: HotelFurniture,
    Retail: px(17502245, 600),
    Warehouses: WarehouseRacks,
    Factories: IndustrialStorage,
    Infrastructure: px(16678390, 600),
    Defence: px(54272, 600),
    Airports: px(11570539, 600),
    'Metro Rail': px(5098043, 600),
    'Smart Cities': px(2246476, 600),
    Exports: px(34168857, 600),
  },

  gallery: [
    { src: IndustrialStorage, cat: 'Factory', h: 'tall' },
    { src: OfficeFurniture, cat: 'Office', h: 'medium' },
    { src: EducationalFurniture, cat: 'Educational', h: 'short' },
    { src: SchoolFurniture, cat: 'Educational', h: 'tall' },
    { src: HospitalFurniture, cat: 'Hospital', h: 'medium' },
    { src: HotelFurniture, cat: 'Hotel', h: 'short' },
    { src: WarehouseRacks, cat: 'Warehouse', h: 'medium' },
    { src: SteelFurniture, cat: 'Industrial', h: 'tall' },
    { src: LibraryFurniture, cat: 'Library', h: 'short' },
    { src: AuditoriumChairs, cat: 'Auditorium', h: 'medium' },
  ],

  exportContainer: px(34168857, 1200),
  exportGlobe: px(8828394, 1200),

  testimonials: [
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  ],
};
