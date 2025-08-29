import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import CompanyOverviewPage from './pages/CompanyOverviewPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import BusinessModelPage from './pages/BusinessModelPage.tsx';
import BrandGuidelinesPage from './pages/BrandGuidelinesPage.tsx';
import ContentStrategyPage from './pages/ContentStrategyPage.tsx';
import TemplatesPage from './pages/TemplatesPage.tsx';
import ComingSoonPage from './pages/ComingSoonPage.tsx';
import TargetMarketPage from './pages/TargetMarketPage.tsx';
import OperationsPage from './pages/OperationsPage.tsx';
import ResourcesPage from './pages/ResourcesPage.tsx';
import InfoProductPage from './pages/InfoProductPage.tsx';
import BusinessStrategyGuidePage from './pages/BusinessStrategyGuidePage.tsx';
import MarketingSalesGuidePage from './pages/MarketingSalesGuidePage.tsx';
import ProductSystemsGuidePage from './pages/ProductSystemsGuidePage.tsx';
import FaqsPage from './pages/FaqsPage.tsx';

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

          <Route path="faqs" element={<FaqsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;