import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GlobalCursor from './components/GlobalCursor';
import ScrollProgress from './components/ScrollProgress';
import PurpleLaserBeam from './components/PurpleLaserBeam';
import BackToTop from './components/BackToTop';
import PillarPage from './templates/PillarPage';
import SupportingPage from './templates/SupportingPage';
import BlogPage from './templates/BlogPage';
import CategoryPage from './templates/CategoryPage';
import {
  pillarRoutes,
  supportingRoutes,
  blogRoutes,
  industryRoutes,
  costRoutes,
  categoryConfigs,
} from './config/routes';

const WhoWeAre = lazy(() => import('./components/WhoWeAre'));
const Services = lazy(() => import('./components/Services'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const WhyFutura = lazy(() => import('./components/WhyFutura'));
const FAQ = lazy(() => import('./components/FAQ'));

const About = lazy(() => import('./pages/About'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Support = lazy(() => import('./pages/Support'));
const Status = lazy(() => import('./pages/Status'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const GDPR = lazy(() => import('./pages/GDPR'));
const Uslugi = lazy(() => import('./pages/Uslugi'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-screen" />}>
        <WhoWeAre />
        <Services />
        <HowItWorks />
        <WhyFutura />
        <FAQ />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white font-michroma relative">
        <PurpleLaserBeam />
        <ScrollProgress />
        <GlobalCursor />
        <BackToTop />
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
            <Route path="/status" element={<Status />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/gdpr" element={<GDPR />} />

            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/blog" element={<BlogIndex />} />

            {pillarRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<PillarPage route={route} />}
              />
            ))}

            {supportingRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<SupportingPage route={route} />}
              />
            ))}

            {industryRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<SupportingPage route={route} />}
              />
            ))}

            {costRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<SupportingPage route={route} />}
              />
            ))}

            {blogRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<BlogPage route={route} />}
              />
            ))}

            {categoryConfigs.map((category) => (
              <Route
                key={category.path}
                path={category.path}
                element={<CategoryPage category={category} />}
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
