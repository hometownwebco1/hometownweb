import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidgetLauncher from './components/ChatWidgetLauncher'

// Lazy-loaded pages (route-level code splitting)
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Results = lazy(() => import('./pages/Results'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Faq = lazy(() => import('./pages/Faq'))
const FreeWebsite = lazy(() => import('./pages/FreeWebsite'))
const ThankYouFreeWebsite = lazy(() => import('./pages/ThankYouFreeWebsite'))

// Legal/Policy
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const AffiliateDisclosure = lazy(() => import('./pages/AffiliateDisclosure'))

// Services detail
const WebsiteDesign = lazy(() => import('./pages/services/WebsiteDesign'))
const WebsiteManagement = lazy(() => import('./pages/services/WebsiteManagement'))
const EmailMarketing = lazy(() => import('./pages/services/EmailMarketing'))
const DigitalMarketing = lazy(() => import('./pages/services/DigitalMarketing'))

// Calculators
const CalculatorsIndex = lazy(() => import('./pages/calculators/index'))
const WebsiteCost = lazy(() => import('./pages/calculators/website-cost'))
const LeadValue = lazy(() => import('./pages/calculators/lead-value-calculator'))
const BreakEven = lazy(() => import('./pages/calculators/break-even'))
const ConversionRate = lazy(() => import('./pages/calculators/conversion-rate'))
const ProfitMargin = lazy(() => import('./pages/calculators/profit-margin'))
const LTV = lazy(() => import('./pages/calculators/lifetime-value'))
const LocalSEOROI = lazy(() => import('./pages/calculators/local-seo-roi'))
const EmailMarketingROI = lazy(() => import('./pages/calculators/email-marketing-roi'))
const GoogleAdsROI = lazy(() => import('./pages/calculators/google-ads-roi'))
const WebsiteTrafficEstimator = lazy(() => import('./pages/calculators/website-traffic-estimator'))
const CustomerAcquisition = lazy(() => import('./pages/calculators/CustomerAcquisitionCalculator'))

function NotFound() {
  return (
    <div className="min-h-screen py-20 bg-site-gradient text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-white/80">The page you’re looking for doesn’t exist.</p>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
            <Routes>
              {/* Core */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/results" element={<Results />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />

              {/* Offer */}
              <Route path="/free-website" element={<FreeWebsite />} />
              <Route path="/thank-you-free-website" element={<ThankYouFreeWebsite />} />

              {/* Legal */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />

              {/* Service detail */}
              <Route path="/services/website-design" element={<WebsiteDesign />} />
              <Route path="/services/website-management" element={<WebsiteManagement />} />
              <Route path="/services/email-marketing" element={<EmailMarketing />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

              {/* Calculators */}
              <Route path="/calculators" element={<CalculatorsIndex />} />
              <Route path="/calculators/website-cost" element={<WebsiteCost />} />
              <Route path="/calculators/lead-value-calculator" element={<LeadValue />} />
              <Route path="/calculators/break-even" element={<BreakEven />} />
              <Route path="/calculators/conversion-rate" element={<ConversionRate />} />
              <Route path="/calculators/profit-margin" element={<ProfitMargin />} />
              <Route path="/calculators/lifetime-value" element={<LTV />} />
              <Route path="/calculators/local-seo-roi" element={<LocalSEOROI />} />
              <Route path="/calculators/email-marketing-roi" element={<EmailMarketingROI />} />
              <Route path="/calculators/google-ads-roi" element={<GoogleAdsROI />} />
              <Route path="/calculators/website-traffic-estimator" element={<WebsiteTrafficEstimator />} />
              <Route path="/calculators/customer-acquisition-cost" element={<CustomerAcquisition />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>

      {/* Lazy chat launcher (loads widget on demand) */}
      <ChatWidgetLauncher />
    </Router>
  )
}
