import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CompanyOverviewPage from './pages/CompanyOverviewPage';
import ServicesPage from './pages/ServicesPage';
import BusinessModelPage from './pages/BusinessModelPage';
import BrandGuidelinesPage from './pages/BrandGuidelinesPage';
import ContentStrategyPage from './pages/ContentStrategyPage';
import TemplatesPage from './pages/TemplatesPage';
import ComingSoonPage from './pages/ComingSoonPage';
import TargetMarketPage from './pages/TargetMarketPage';
import OperationsPage from './pages/OperationsPage';
import ResourcesPage from './pages/ResourcesPage';
import InfoProductPage from './pages/InfoProductPage';
import BusinessStrategyGuidePage from './pages/BusinessStrategyGuidePage';
import MarketingSalesGuidePage from './pages/MarketingSalesGuidePage';
import ProductSystemsGuidePage from './pages/ProductSystemsGuidePage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="company-overview" element={<CompanyOverviewPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="business-model" element={<BusinessModelPage />} />
          <Route path="target-market" element={<TargetMarketPage />} />
          <Route path="brand-guidelines" element={<BrandGuidelinesPage />} />
          <Route path="content-strategy" element={<ContentStrategyPage />} />
          <Route path="operations" element={<OperationsPage />} />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="info-product" element={<InfoProductPage />} />

          <Route path="guides/business-strategy" element={<BusinessStrategyGuidePage />} />
          <Route path="guides/marketing-sales" element={<MarketingSalesGuidePage />} />
          <Route path="guides/product-systems" element={<ProductSystemsGuidePage />} />

          <Route path="case-studies" element={<ComingSoonPage title="Case Studies" />} />
          <Route path="faqs" element={<ComingSoonPage title="FAQs" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;