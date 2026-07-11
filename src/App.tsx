import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import IndustryPage from './pages/IndustryPage';
import CompanyPage from './pages/CompanyPage';
import CareersPage from './pages/CareersPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader done={loaded} />
      <Cursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:slug" element={<ProductCategoryPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/company/:page" element={<CompanyPage />} />
          <Route path="/company/careers" element={<CareersPage />} />
          <Route path="/company/careers/:slug" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
