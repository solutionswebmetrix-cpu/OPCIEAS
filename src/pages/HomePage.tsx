import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Manufacturing from '../components/Manufacturing';
import Products from '../components/Products';
import Industries from '../components/Industries';
import GovernmentTender from '../components/GovernmentTender';
import Export from '../components/Export';
import QualityControl from '../components/QualityControl';
import Clients from '../components/Clients';
import Gallery from '../components/Gallery';
import Certificates from '../components/Certificates';
import Testimonials from '../components/Testimonials';
import RFQ from '../components/RFQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Manufacturing />
      <Products />
      <Industries />
      <GovernmentTender />
      <Export />
      <QualityControl />
      <Clients />
      <Gallery />
      <Certificates />
      <Testimonials />
      <RFQ />
      <Contact />
    </>
  );
}
