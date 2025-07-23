import { Helmet } from 'react-helmet'
import { Check, ArrowRight } from 'lucide-react'
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
      </div>
    </div>
  )
}

export default WebsiteManagement
