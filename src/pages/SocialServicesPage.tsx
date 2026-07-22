
import { motion } from 'framer-motion';
import { ArrowRight, Users, Heart, GraduationCap, Briefcase, TrendingUp, Sparkles, Building2, UserCircle, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionBanner from '../components/SectionBanner';
import { IMG } from '../lib/images';

const socialFeatures = [
  { icon: Building2, title: 'Community Development', desc: 'Grassroots initiatives to strengthen and develop local communities.' },
  { icon: TrendingUp, title: 'Rural Empowerment', desc: 'Programs aimed at empowering rural populations and enhancing livelihoods.' },
  { icon: GraduationCap, title: 'Skill Development', desc: 'Training and skill-building programs to enhance employability and capabilities.' },
  { icon: Sparkles, title: 'Self Reliance', desc: 'Initiatives to promote self-reliance and sustainable living among communities.' },
  { icon: Briefcase, title: 'Employment Generation', desc: 'Creating meaningful employment opportunities for youth and adults alike.' },
  { icon: UserCircle, title: "Women's Empowerment", desc: 'Special programs focused on empowering women and promoting gender equality.' },
  { icon: Users, title: 'Youth Development', desc: 'Engaging and developing young people for a better future.' },
  { icon: Sprout, title: 'Sustainable Growth', desc: 'Promoting environmentally sustainable and inclusive growth models.' },
  { icon: Heart, title: 'Community Partnerships', desc: 'Building strong partnerships with communities and stakeholders.' }
];

export default function SocialServicesPage() {
  return (
    <>
      <PageMeta
        title="Social Services | OPCIEAS Pvt. Ltd."
        description="OPCIEAS Social Services - community development, rural empowerment, skill development, women's empowerment, youth development, and sustainable growth."
        keywords="social services, community development, rural empowerment, skill development, women's empowerment, youth development"
      />
      <SectionBanner
        title="Social Services"
        tagline="Building better communities"
        image={IMG.heroBg}
        crumb="Social Services"
        crumbTo="/social-services"
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
              <h2 className="font-heading text-3xl font-black text-navy">Our Vision</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-navy/70">
                To create inclusive, empowered, and sustainable communities where every individual has the opportunity to thrive and reach their full potential.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-black text-navy">Our Mission</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-navy/70">
                To implement impactful social initiatives that drive community development, empower individuals, and foster sustainable growth through collaborative efforts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-navy/5 py-20">
        <div className="container-x px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sub text-sm uppercase tracking-[0.3em] text-gold">Our Initiatives</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 font-heading text-3xl font-black text-navy sm:text-4xl">Making a Difference</motion.h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {socialFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lux bg-white p-8 shadow-lg"
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
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl font-bold text-white sm:text-4xl">Join Us in Building Better Communities</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 font-body text-sm text-white/60">
              Partner with us to create lasting positive impact and contribute to social development.
            </motion.p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/company/contact" className="btn-gold flex items-center gap-2 rounded-full px-8 py-4 font-sub text-sm">
                Get Involved <ArrowRight className="h-4 w-4" />
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
