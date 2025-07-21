import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Results from './pages/Results'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import BlogPost from './pages/BlogPost'

import WebsiteDesign from './pages/services/WebsiteDesign'
import WebsiteManagement from './pages/services/WebsiteManagement'
import DigitalMarketing from './pages/services/DigitalMarketing'
import EmailMarketing from './pages/services/EmailMarketing'

import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AffiliateDisclosure from './pages/AffiliateDisclosure'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/results" element={<Results />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />

            {/* Individual service detail pages */}
            <Route path="/services/website-design" element={<WebsiteDesign />} />
            <Route path="/services/website-management" element={<WebsiteManagement />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />

            {/* Legal pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
