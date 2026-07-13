
// Import all local assets (images and videos)
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

// Import all videos
import OfficeFurnitureVid from '../assets/Office Furniture.mp4';
import EducationalFurnitureVid from '../assets/Educational Furniture.mp4';
import SchoolFurnitureVid from '../assets/School Furniture.mp4';
import HostelFurnitureVid from '../assets/Hostel Furniture.mp4';
import HotelFurnitureVid from '../assets/Hotel Furniture.mp4';
import HospitalFurnitureVid from '../assets/Hospital Furniture.mp4';
import IndustrialStorageVid from '../assets/Industrial Storage.mp4';
import SteelFurnitureVid from '../assets/Steel Furniture.mp4';
import LibraryFurnitureVid from '../assets/Library Furniture.mp4';
import WarehouseRacksVid from '../assets/Warehouse Racks.mp4';
import AuditoriumChairsVid from '../assets/Auditorium Chairs.mp4';

// Import banner videos
import BannerVid1 from '../assets/banner.mp4';
import BannerVid2 from '../assets/banner 1.mp4';
import BannerVid3 from '../assets/banner 2.mp4';

const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Product asset mapping
export const PRODUCT_ASSETS: Record<
  string,
  { img?: string; vid?: string; count?: number }
> = {
  'Office Furniture': { img: OfficeFurnitureImg, vid: OfficeFurnitureVid, count: 120 },
  'Educational Furniture': { img: EducationalFurnitureImg, vid: EducationalFurnitureVid, count: 95 },
  'School Furniture': { img: SchoolFurnitureImg, vid: SchoolFurnitureVid, count: 30 },
  'Hostel Furniture': { img: HostelFurnitureImg, vid: HostelFurnitureVid, count: 45 },
  'Hotel Furniture': { img: HotelFurnitureImg, vid: HotelFurnitureVid, count: 70 },
  'Hospital Furniture': { img: HospitalFurnitureImg, vid: HospitalFurnitureVid, count: 60 },
  'Steel Furniture': { img: SteelFurnitureImg, vid: SteelFurnitureVid, count: 90 },
  'Industrial Storage': { img: IndustrialStorageImg, vid: IndustrialStorageVid, count: 85 },
  'Warehouse Racks': { img: WarehouseRacksImg, vid: WarehouseRacksVid, count: 40 },
  'Library Furniture': { img: LibraryFurnitureImg, vid: LibraryFurnitureVid, count: 35 },
  'Auditorium Chairs': { img: AuditoriumChairsImg, vid: AuditoriumChairsVid, count: 25 },
  'Commercial Furniture': { img: OfficeFurnitureImg, count: 100 },
  'Play Equipment': { img: SchoolFurnitureImg, count: 30 },
  'Letter Boxes': { img: SchoolFurnitureImg, count: 25 },
  'Cinema Seats': { img: AuditoriumChairsImg, count: 20 },
  'Stadium Chairs': { img: AuditoriumChairsImg, count: 18 },
  'Bathroom Storage': { img: IndustrialStorageImg, count: 22 },
  'SS Wire Racks': { img: WarehouseRacksImg, count: 28 },
};

export const BANNER_VIDEOS = [BannerVid1, BannerVid2, BannerVid3];

export const IMG = {
  heroBg: px(3825529, 1920),
  heroProduct: OfficeFurnitureImg,

  aboutFactory: IndustrialStorageImg,

  manufacturingBg: px(3825529, 1920),

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
    Government: px(34672722, 600),
    Corporate: OfficeFurnitureImg,
    Healthcare: HospitalFurnitureImg,
    Hospitality: HotelFurnitureImg,
    Retail: px(17502245, 600),
    Warehouses: WarehouseRacksImg,
    Factories: IndustrialStorageImg,
    Infrastructure: px(16678390, 600),
    Defence: px(54272, 600),
    Airports: px(11570539, 600),
    'Metro Rail': px(5098043, 600),
    'Smart Cities': px(2246476, 600),
    Exports: px(34168857, 1200),
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

  exportContainer: px(34168857, 1200),
  exportGlobe: px(8828394, 1200),

  testimonials: [
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  ],
};
