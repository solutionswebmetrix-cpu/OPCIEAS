
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Briefcase, Globe, Sparkles, Network, Layers, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionBanner from '../components/SectionBanner';
import { IMG } from '../lib/images';

const techFeatures = [
  { icon: Zap, title: 'Digital Business Promotion', desc: 'Comprehensive digital marketing and promotion strategies to boost your business online presence.' },
  { icon: TrendingUp, title: 'Industrial Marketing', desc: 'Targeted marketing solutions for industrial and manufacturing sectors to reach key decision-makers.' },
  { icon: Globe, title: 'B2B Platforms', desc: 'Leverage business-to-business platforms for enhanced visibility and lead generation.' },
  { icon: Briefcase, title: 'Business Catalogues', desc: 'Professional digital and physical catalogues showcasing your products and services effectively.' },
  { icon: Sparkles, title: 'Industrial Visibility', desc: 'Strategies to enhance your industrial brand visibility across relevant channels.' },
  { icon: Layers, title: 'Product Showcase', desc: 'Interactive product showcases and virtual demonstrations to engage potential clients.' },
  { icon: Network, title: 'Business Networking', desc: 'Facilitate meaningful connections and partnerships within your industry ecosystem.' },
  { icon: Zap, title: 'Technology Promotion', desc: 'Promote innovative technologies and solutions to the right audience segments.' },
  { icon: BarChart3, title: 'Industrial Growth', desc: 'Data-driven strategies to drive sustainable industrial growth and expansion.' }
];

export default function TechnologyPage() {
  return (
    <>
      <PageMeta
        title="Technology Business Promotion | OPCIEAS Pvt. Ltd."
        description="OPCIEAS Technology Business Promotion services - digital marketing, industrial promotion, B2B platforms, business networking, and industrial growth strategies."
        keywords="technology business promotion, digital marketing, industrial marketing, B2B platforms, business networking, industrial growth"
      />
      <SectionBanner
        title="Technology Business Promotion"
        tagline="Promoting industries with trust and technology"
        image={IMG.heroBg}
        crumb="Technology"
        crumbTo="/technology"
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
              <h2 className="font-heading text-3xl font-black text-navy">Our Mission</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-navy/70">
                To empower businesses with innovative technology solutions and strategic promotion that drive growth, enhance visibility, and create lasting impact in their respective industries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-black text-navy">Our Approach</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-navy/70">
                We combine cutting-edge technology with deep industry expertise to deliver tailored promotion solutions that help businesses stand out, connect with their audience, and achieve their growth objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-navy/5 py-20">
        <div className="container-x px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sub text-sm uppercase tracking-[0.3em] text-gold">Our Services</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 font-heading text-3xl font-black text-navy sm:text-4xl">Comprehensive Solutions</motion.h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lux bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="font-body text-sm text-navy/70">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark py-20">
        <div className="container-x px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl font-bold text-white sm:text-4xl">Ready to Grow Your Business?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 font-body text-sm text-white/60">
              Join us and leverage our technology-driven promotion strategies to take your business to new heights.
            </motion.p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/company/contact" className="btn-gold flex items-center gap-2 rounded-full px-8 py-4 font-sub text-sm">
                Become a Member <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/company/contact" className="btn-ghost flex items-center gap-2 rounded-full px-8 py-4 font-sub text-sm">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
