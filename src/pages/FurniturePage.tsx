
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Briefcase, GraduationCap, Building2, Utensils, Film, Landmark, TreePine, Dumbbell, ShoppingBag, Warehouse, Factory as FactoryIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionBanner from '../components/SectionBanner';
import { IMG } from '../lib/images';

const productCategories = [
  {
    title: 'Office Furniture',
    icon: Briefcase,
    description: 'Premium ergonomic office furniture designed for productivity and comfort. Built to last with high-quality materials.',
    applications: ['Executive offices', 'Open workstations', 'Conference rooms', 'Reception areas', 'Collaboration spaces'],
    endUsers: ['Corporate offices', 'Startups', 'Co-working spaces', 'Government offices', 'Business centers'],
    image: IMG.products['Office Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Institutional Furniture',
    icon: Building2,
    description: 'Durable institutional furniture engineered for high-traffic environments and heavy daily use.',
    applications: ['Administrative blocks', 'Staff rooms', 'Libraries', 'Laboratories', 'Common areas'],
    endUsers: ['Schools', 'Colleges', 'Universities', 'Government institutions', 'Public sector units'],
    image: IMG.products['Office Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Educational Furniture',
    icon: GraduationCap,
    description: 'Student-centric educational furniture that supports learning and ergonomic comfort for all ages.',
    applications: ['Classrooms', 'Lecture halls', 'Computer labs', 'Science labs', 'Library reading rooms'],
    endUsers: ['Play schools', 'Primary schools', 'High schools', 'Junior colleges', 'Coaching centers'],
    image: IMG.products['Educational Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'School Furniture',
    icon: GraduationCap,
    description: 'Safe, durable, and functional school furniture built to meet educational safety standards.',
    applications: ['Classrooms', 'Assembly halls', 'Art rooms', 'Music rooms', 'Activity centers'],
    endUsers: ['CBSE schools', 'ICSE schools', 'State board schools', 'International schools', 'Kindergartens'],
    image: IMG.products['School Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'College Furniture',
    icon: GraduationCap,
    description: 'Modern college furniture designed for diverse learning environments and student needs.',
    applications: ['Lecture theatres', 'Seminar halls', 'Tutorial rooms', 'Faculty rooms', 'Student common rooms'],
    endUsers: ['Degree colleges', 'Engineering colleges', 'Management institutes', 'Polytechnics', 'Universities'],
    image: IMG.products['Library Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Hostel Furniture',
    icon: Building2,
    description: 'Space-saving, durable hostel furniture that maximizes comfort in student living spaces.',
    applications: ['Student rooms', 'Hostel mess', 'Common rooms', 'Study areas', 'Recreation rooms'],
    endUsers: ['School hostels', 'College hostels', 'University hostels', 'Working women hostels', 'Guest houses'],
    image: IMG.products['Hostel Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Hospital Furniture',
    icon: Building2,
    description: 'Hygienic, durable hospital furniture designed for patient care and medical functionality.',
    applications: ['Patient wards', 'ICU rooms', 'OPD areas', 'Diagnostic centers', 'Recovery rooms'],
    endUsers: ['Hospitals', 'Clinics', 'Nursing homes', 'Medical colleges', 'Healthcare centers'],
    image: IMG.products['Hospital Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Healthcare Furniture',
    icon: Building2,
    description: 'Specialized healthcare furniture that meets clinical standards and patient comfort requirements.',
    applications: ['Doctor cabins', 'Waiting areas', 'Pharmacy counters', 'Laboratory spaces', 'Dental clinics'],
    endUsers: ['Multi-specialty hospitals', 'Private clinics', 'Diagnostic labs', 'Dental care centers', 'Rehabilitation centers'],
    image: IMG.products['Hospital Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Hospitality Furniture',
    icon: Utensils,
    description: 'Elegant hospitality furniture that enhances guest experience and complements interior design.',
    applications: ['Hotel lobbies', 'Guest rooms', 'Restaurants', 'Banquet halls', 'Conference facilities'],
    endUsers: ['Hotels', 'Resorts', 'Restaurants', 'Cafes', 'Banquet halls'],
    image: IMG.products['Hotel Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Restaurant Furniture',
    icon: Utensils,
    description: 'Stylish and durable restaurant furniture designed for comfort and high-traffic use.',
    applications: ['Dining areas', 'Outdoor seating', 'Private dining rooms', 'Bar areas', 'Cafeterias'],
    endUsers: ['Restaurants', 'Cafes', 'Food courts', 'Bars', 'Quick service restaurants'],
    image: IMG.products['Hotel Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Auditorium Seating',
    icon: Building2,
    description: 'Premium auditorium seating with ergonomic design and optimal viewing angles.',
    applications: ['Auditoriums', 'Lecture halls', 'Conference centers', 'Performing arts venues', ' Seminar halls'],
    endUsers: ['Colleges', 'Universities', 'Corporate campuses', 'Government auditoriums', 'Cultural centers'],
    image: IMG.products['Auditorium Chairs']?.img || IMG.heroProduct
  },
  {
    title: 'Cinema Seating',
    icon: Film,
    description: 'Luxury cinema seating designed for ultimate comfort and immersive movie experience.',
    applications: ['Movie theaters', 'Multiplexes', 'Home theaters', 'Screening rooms', 'Media rooms'],
    endUsers: ['Cinema chains', 'Independent theaters', 'Entertainment complexes', 'Corporate screening rooms', 'Residential projects'],
    image: IMG.products['Auditorium Chairs']?.img || IMG.heroProduct
  },
  {
    title: 'Stadium Seating',
    icon: Landmark,
    description: 'Durable, weather-resistant stadium seating built for large venues and outdoor events.',
    applications: ['Sports stadiums', 'Outdoor arenas', 'Indoor sports complexes', 'Race tracks', 'Amphitheaters'],
    endUsers: ['Sports authorities', 'Stadium management', 'Event venues', 'Educational institutions', 'Government bodies'],
    image: IMG.products['Auditorium Chairs']?.img || IMG.heroProduct
  },
  {
    title: 'Outdoor Furniture',
    icon: TreePine,
    description: 'Weather-resistant outdoor furniture designed for durability and aesthetic appeal.',
    applications: ['Garden areas', 'Patio seating', 'Outdoor cafes', 'Hotel poolside', 'Public parks'],
    endUsers: ['Hotels', 'Restaurants', 'Resorts', 'Residential complexes', 'Public spaces'],
    image: IMG.products['Steel Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Play Equipment',
    icon: GraduationCap,
    description: 'Safe, durable play equipment designed for fun and child development.',
    applications: ['School playgrounds', 'Public parks', 'Residential play areas', 'Daycare centers', 'Activity centers'],
    endUsers: ['Schools', 'Municipal corporations', 'Residential societies', 'Daycare centers', 'Play schools'],
    image: IMG.products['School Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Gym Equipment',
    icon: Dumbbell,
    description: 'Robust gym equipment and furniture designed for intense workouts and safety.',
    applications: ['Gymnasiums', 'Fitness centers', 'Corporate gyms', 'Hotel gyms', 'Sports clubs'],
    endUsers: ['Fitness chains', 'Independent gyms', 'Corporate wellness centers', 'Hotels', 'Sports clubs'],
    image: IMG.products['Steel Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Retail Furniture',
    icon: ShoppingBag,
    description: 'Custom retail furniture that enhances product display and customer experience.',
    applications: ['Retail stores', 'Showrooms', 'Mall outlets', 'Boutiques', 'Brand stores'],
    endUsers: ['Retail chains', 'Brand showrooms', 'Shopping malls', 'Independent stores', 'Exhibition spaces'],
    image: IMG.products['Office Furniture']?.img || IMG.heroProduct
  },
  {
    title: 'Supermarket Display Racks',
    icon: ShoppingBag,
    description: 'Sturdy, space-efficient supermarket display racks for organized product showcasing.',
    applications: ['Supermarkets', 'Grocery stores', 'Hypermarkets', 'Convenience stores', 'Department stores'],
    endUsers: ['Supermarket chains', 'Grocery stores', 'Hypermarkets', 'Retail outlets', 'Wholesale markets'],
    image: IMG.products['Warehouse Racks']?.img || IMG.heroProduct
  },
  {
    title: 'SS Detachable Wire Racks',
    icon: FactoryIcon,
    description: 'Versatile stainless steel detachable wire racks for flexible storage solutions.',
    applications: ['Warehouses', 'Kitchens', 'Retail stores', 'Hospitals', 'Industrial facilities'],
    endUsers: ['Warehouses', 'Restaurants', 'Hospitals', 'Retail stores', 'Industries'],
    image: IMG.products['Warehouse Racks']?.img || IMG.heroProduct
  },
  {
    title: 'Warehouse Storage',
    icon: Warehouse,
    description: 'Heavy-duty warehouse storage solutions for efficient inventory management.',
    applications: ['Warehouses', 'Distribution centers', 'Industrial facilities', 'Godowns', 'Storage yards'],
    endUsers: ['Logistics companies', 'Manufacturing units', 'Warehousing services', 'Retail distributors', 'Industries'],
    image: IMG.products['Warehouse Racks']?.img || IMG.heroProduct
  },
  {
    title: 'Industrial Storage',
    icon: FactoryIcon,
    description: 'Robust industrial storage systems built for heavy loads and demanding environments.',
    applications: ['Manufacturing plants', 'Industrial units', 'Workshops', 'Factories', 'Assembly lines'],
    endUsers: ['Manufacturing industries', 'Factories', 'Industrial units', 'Workshops', 'Production plants'],
    image: IMG.products['Industrial Storage']?.img || IMG.heroProduct
  }
];

export default function FurniturePage() {
  return (
    <>
      <PageMeta
        title="Premium Commercial Furniture | OPCIEAS Pvt. Ltd."
        description="Explore OPCIEAS wide range of premium commercial furniture - office, educational, institutional, hospitality, healthcare, and industrial storage solutions."
        keywords="commercial furniture, office furniture, educational furniture, institutional furniture, hospitality furniture, healthcare furniture, auditorium seating, industrial storage, warehouse racks"
      />
      <SectionBanner
        title="Commercial Furniture"
        tagline="Premium furniture solutions for every commercial need"
        image={IMG.heroBg}
        crumb="Furniture"
        crumbTo="/furniture"
      />

      {/* Introduction */}
      <section className="bg-white py-20">
        <div className="container-x px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-black text-navy">Our Expertise</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-navy/70">
                With over 25 years of experience, OPCIEAS delivers premium commercial furniture solutions tailored for offices, educational institutions, healthcare facilities, hospitality venues, and industrial spaces. Our products combine durability, functionality, and aesthetic excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-black text-navy">Our Commitment</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-navy/70">
                Every piece of furniture is manufactured with precision, using high-quality materials and following strict quality control processes. We ensure timely delivery and reliable after-sales support for all our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-navy/5 py-20">
        <div className="container-x px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sub text-sm uppercase tracking-[0.3em] text-gold">Our Products</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 font-heading text-3xl font-black text-navy sm:text-4xl">Complete Furniture Solutions</motion.h2>
          </div>

          <div className="space-y-12">
            {productCategories.map((category, i) => {
              const Icon = category.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className={`grid gap-8 items-center ${isEven ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:flex-row-reverse'}`}>
                    <div className={isEven ? 'order-1' : 'order-2 lg:order-1'}>
                      <div className="rounded-lux overflow-hidden shadow-lg">
                        <img src={category.image} alt={category.title} className="w-full h-72 object-cover" />
                      </div>
                    </div>
                    <div className={isEven ? 'order-2' : 'order-1 lg:order-2'}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-navy">{category.title}</h3>
                      </div>
                      <p className="font-body text-sm text-navy/70 mb-6">{category.description}</p>
                      
                      <div className="grid gap-4 mb-6 sm:grid-cols-2">
                        <div>
                          <h4 className="font-sub text-xs uppercase tracking-[0.2em] text-gold mb-2">Applications</h4>
                          <ul className="space-y-1">
                            {category.applications.slice(0, 3).map((app, idx) => (
                              <li key={idx} className="flex items-center gap-2 font-body text-xs text-navy/70">
                                <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-sub text-xs uppercase tracking-[0.2em] text-gold mb-2">End Users</h4>
                          <ul className="space-y-1">
                            {category.endUsers.slice(0, 3).map((user, idx) => (
                              <li key={idx} className="flex items-center gap-2 font-body text-xs text-navy/70">
                                <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                                {user}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link to="/products" className="btn-gold flex items-center gap-2 rounded-full px-6 py-3 font-sub text-sm">
                          View Products <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/rfq" className="btn-ghost flex items-center gap-2 rounded-full px-6 py-3 font-sub text-sm">
                          <FileText className="h-4 w-4" /> Request Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-dark py-20">
        <div className="container-x px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Space?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 font-body text-sm text-white/60">
              Get in touch with our team for customized furniture solutions tailored to your specific requirements.
            </motion.p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/company/contact" className="btn-gold flex items-center gap-2 rounded-full px-8 py-4 font-sub text-sm">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/rfq" className="btn-ghost flex items-center gap-2 rounded-full px-8 py-4 font-sub text-sm">
                <FileText className="h-4 w-4" /> Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
