import { Link } from 'react-router-dom'
import { Mail, Facebook, Instagram, Youtube } from 'lucide-react'
import logo from '../assets/HometownWebCo.png'
import Faq from './Faq'

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4" aria-label="Hometown Web Co Home">
              <img
                src={logo}
                alt="Hometown Web Co logo - Website Design for Local Businesses"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              We help hometown businesses build a better online presence through professional web design, digital marketing, and reliable support — tailored for local success.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>woody@hometownwebco.com</span>
              </div>
              <div>
                <a
                  href="mailto:woody@hometownwebco.com"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61578313660385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Hometown Web Co Facebook"
                >
                  <Facebook className="mr-1" size={16} />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/hometownwebco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Hometown Web Co Instagram"
                >
                  <Instagram className="mr-1" size={16} />
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@hometownwebco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Hometown Web Co YouTube"
                >
                  <Youtube className="mr-1" size={16} />
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/results" className="text-muted-foreground hover:text-primary transition-colors">Results</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/affiliate-disclosure" className="text-muted-foreground hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/website-design" className="text-muted-foreground hover:text-primary transition-colors">Website Design</Link></li>
              <li><Link to="/services/website-management" className="text-muted-foreground hover:text-primary transition-colors">Website Management</Link></li>
              <li><Link to="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/email-marketing" className="text-muted-foreground hover:text-primary transition-colors">Email Marketing</Link></li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <Faq />
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Hometown Web Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
