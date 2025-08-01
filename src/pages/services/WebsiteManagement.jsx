import { Helmet } from 'react-helmet'
import { Check, ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const WebsiteManagement = () => {
  const features = [
    'Ongoing security updates to keep your site protected',
    'Content updates and changes whenever you need them',
    'Performance monitoring to ensure fast loading times',
    'Backup and recovery setup for peace of mind',
    'Monthly health checks and uptime tracking',
    'Technical support from a team that knows your site'
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Management Services",
    "serviceType": "Website Maintenance and Support",
    "provider": {
      "@type": "Organization",
      "name": "Hometown Web Co",
      "url": "https://www.hometownwebco.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "url": "https://www.hometownwebco.com/services/website-management",
    "description": "Professional website management services including maintenance, security updates, content changes, and performance monitoring.",
    "mainEntityOfPage": "https://www.hometownwebco.com/services/website-management"
  }

  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>Website Management Services | Hometown Web Co</title>
        <meta
          name="description"
          content="We handle security updates, performance monitoring, content changes, and ongoing support — so your site runs smooth while you focus on business."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/services/website-management" />
        {/* Open Graph */}
        <meta property="og:title" content="Website Management Services | Hometown Web Co" />
        <meta property="og:description" content="We handle security updates, performance monitoring, content changes, and ongoing support — so your site runs smooth while you focus on business." />
        <meta property="og:url" content="https://www.hometownwebco.com/services/website-management" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Management Services | Hometown Web Co" />
        <meta name="twitter:description" content="We handle security updates, performance monitoring, content changes, and ongoing support — so your site runs smooth while you focus on business." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Website Management Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We handle the ongoing updates, security, and maintenance so your site stays healthy — and you stay focused on running your business.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What’s Included in Our Website Management:
          </h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-muted-foreground text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-20 space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            A website isn’t “done” the day it goes live. It needs regular care — updates, monitoring, and support — to continue delivering results. That’s where we come in.
          </p>
          <p>
            Our website management service ensures your site stays secure, updated, and running smoothly month after month.
            You get peace of mind and a professional team in your corner — without having to lift a finger.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Keep Your Website Running Smoothly
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We’ll handle the maintenance so you can focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Request a Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        {/* Social Media CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Follow Us:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61578313660385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-primary hover:text-primary/80"
            >
              <Facebook className="mr-2" size={20} />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hometownwebco/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-primary hover:text-primary/80"
            >
              <svg className="mr-2" width={20} height={20} fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7Zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3Zm5 2c-2.757 0-5 2.243-5 5 0 2.757 2.243 5 5 5 2.757 0 5-2.243 5-5 0-2.757-2.243-5-5-5Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@hometownwebco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-primary hover:text-primary/80"
            >
              <svg className="mr-2" width={20} height={20} fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10 15.5V8.5l7 3.5-7 3.5Z" /><path fill="currentColor" d="M21.8 7.8A3.001 3.001 0 0 0 19.8 5.8C18.6 5.2 12 5.2 12 5.2s-6.6 0-7.8.6a3.001 3.001 0 0 0-2 2A31.1 31.1 0 0 0 2 12c0 1.2.1 2.4.2 3.2a3.001 3.001 0 0 0 2 2C5.4 18.8 12 18.8 12 18.8s6.6 0 7.8-.6a3.001 3.001 0 0 0 2-2c.1-.8.2-2 .2-3.2 0-1.2-.1-2.4-.2-3.2ZM10 16v-8l8 4-8 4Z"/></svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteManagement

