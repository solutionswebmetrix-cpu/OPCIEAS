
import { motion } from 'framer-motion';
import { ArrowRight, Sprout, Droplets, Users, TrendingUp, Globe, Layers, CheckCircle2, BarChart3, ShoppingBag, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionBanner from '../components/SectionBanner';
import { IMG } from '../lib/images';

const benefits = [
  { icon: Utensils, title: 'Healthy Food', desc: 'Promoting nutritious and healthy food production for better public health.' },
  { icon: Users, title: 'Rural Development', desc: 'Supporting comprehensive rural development through sustainable agricultural practices.' },
  { icon: TrendingUp, title: 'Employment', desc: 'Generating meaningful employment opportunities in agriculture and fisheries sectors.' },
  { icon: Globe, title: 'Exports', desc: 'Enhancing export capabilities and global market access for agricultural products.' },
  { icon: Sprout, title: 'Sustainability', desc: 'Implementing eco-friendly and sustainable farming and aquaculture methods.' },
  { icon: Layers, title: 'Modern Farming', desc: 'Introducing modern technology and innovative practices in agriculture and fisheries.' }
];

const processSteps = [
  { step: 1, icon: CheckCircle2, title: 'Licensing', desc: 'Guidance and support for obtaining necessary licenses and permits.' },
  { step: 2, icon: Layers, title: 'Land Preparation', desc: 'Expert assistance in land preparation and infrastructure development.' },
  { step: 3, icon: Droplets, title: 'Water Management', desc: 'Efficient water management systems and irrigation solutions.' },
  { step: 4, icon: Sprout, title: 'Feeding', desc: 'Quality feed and nutrition solutions for aquaculture and livestock.' },
  { step: 5, icon: BarChart3, title: 'Harvest', desc: 'Modern harvesting techniques and post-harvest management support.' },
  { step: 6, icon: ShoppingBag, title: 'Marketing', desc: 'Market linkage and promotion of agricultural and fisheries products.' }
];

export default function AgriculturePage() {
  return (
    <>
      <PageMeta
        title="Agriculture & Fisheries | OPCIEAS Pvt. Ltd."
        description="OPCIEAS Agriculture & Fisheries solutions - modern aquaculture, sustainable farming, livelihood opportunities, rural development, and employment generation."
        keywords="agriculture, fisheries, aquaculture, sustainable farming, rural development, employment generation, modern farming"
      />
      <SectionBanner
        title="Agriculture & Fisheries"
        tagline="Modern aquaculture & sustainable agriculture"
        image={IMG.heroBg}
        crumb="Agriculture"
        crumbTo="/agriculture"
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
                To transform agriculture and fisheries into sustainable, profitable, and progressive sectors that contribute to food security, rural development, and national economic growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-black text-navy">Our Commitment</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-navy/70">
                We are committed to empowering farmers and fishermen with modern technology, sustainable practices, and market access to enhance their livelihoods and drive inclusive growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="bg-navy/5 py-20">
        <div className="container-x px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sub text-sm uppercase tracking-[0.3em] text-gold">Our Impact</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 font-heading text-3xl font-black text-navy sm:text-4xl">Key Benefits</motion.h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lux bg-white p-8 shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="font-body text-sm text-navy/70">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-dark py-20">
        <div className="container-x px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sub text-sm uppercase tracking-[0.3em] text-gold">Our Process</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 font-heading text-3xl font-black text-white sm:text-4xl">Journey to Success</motion.h2>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy font-heading text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="glass rounded-lux p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-6 w-6 text-gold" />
                      <h3 className="font-heading text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="font-body text-sm text-white/60">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container-x px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl font-bold text-navy sm:text-4xl">Ready to Transform Your Farming?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 font-body text-sm text-navy/60">
              Join us and benefit from our comprehensive support system for modern agriculture and sustainable fisheries.
            </motion.p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/company/contact" className="btn-gold flex items-center gap-2 rounded-full px-8 py-4 font-sub text-sm">
                Get Started <ArrowRight className="h-4 w-4" />
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
