import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

// Main pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Results from './pages/Results'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import BlogPost from './pages/BlogPost'

// Service detail pages
import WebsiteDesign from './pages/services/WebsiteDesign'
import WebsiteManagement from './pages/services/WebsiteManagement'
import DigitalMarketing from './pages/services/DigitalMarketing'
import EmailMarketing from './pages/services/EmailMarketing'

// Legal pages
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AffiliateDisclosure from './pages/AffiliateDisclosure'
import FaqPage from './pages/Faq'

// Calculator pages
import CalculatorsIndex from './pages/calculators/index'
import CustomerAcquisitionCalculator from './pages/calculators/CustomerAcquisitionCalculator'
import LocalSeoRoi from './pages/calculators/local-seo-roi'
import WebsiteCost from './pages/calculators/website-cost'
import GoogleAdsRoi from './pages/calculators/google-ads-roi'
import EmailMarketingRoi from './pages/calculators/email-marketing-roi'
import BreakEven from './pages/calculators/break-even'
import LeadValueCalculator from './pages/calculators/lead-value-calculator'
import ConversionRate from './pages/calculators/conversion-rate'
import WebsiteTrafficEstimator from './pages/calculators/website-traffic-estimator'
import LifetimeValue from './pages/calculators/lifetime-value'
import ProfitMargin from './pages/calculators/profit-margin'
import SocialMediaRoi from './pages/calculators/social-media-roi'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-site-gradient text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/results" element={<Results />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/services/website-design" element={<WebsiteDesign />} />
            <Route path="/services/website-management" element={<WebsiteManagement />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/calculators" element={<CalculatorsIndex />} />
            <Route path="/calculators/customer-acquisition" element={<CustomerAcquisitionCalculator />} />
            <Route path="/calculators/local-seo-roi" element={<LocalSeoRoi />} />
            <Route path="/calculators/website-cost" element={<WebsiteCost />} />
            <Route path="/calculators/google-ads-roi" element={<GoogleAdsRoi />} />
            <Route path="/calculators/email-marketing-roi" element={<EmailMarketingRoi />} />
            <Route path="/calculators/break-even" element={<BreakEven />} />
            <Route path="/calculators/lead-value-calculator" element={<LeadValueCalculator />} />
            <Route path="/calculators/conversion-rate" element={<ConversionRate />} />
            <Route path="/calculators/website-traffic-estimator" element={<WebsiteTrafficEstimator />} />
            <Route path="/calculators/lifetime-value" element={<LifetimeValue />} />
            <Route path="/calculators/profit-margin" element={<ProfitMargin />} />
            <Route path="/calculators/social-media-roi" element={<SocialMediaRoi />} />
          </Routes>
        </main>
        <Footer />
        {/* Chatbot is rendered once, outside the layout, safe for all routes */}
        <Chatbot />
      </div>
    </Router>
  )
}

export default App
