import { Helmet } from 'react-helmet'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const WebsiteDesign = () => {
  const features = [
    'Custom design tailored to your brand and goals',
    'Mobile-first responsive layouts for all devices',
    'Fast-loading pages optimized for performance',
    'SEO-friendly structure to rank on Google',
    'Simple content management system (CMS)',
    'Visuals that reflect your unique business identity'
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Design Services",
    "serviceType": "Custom Website Design",
    "provider": {
      "@type": "Organization",
      "name": "Hometown Web Co",
      "url": "https://www.hometownwebco.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "url": "https://www.hometownwebco.com/services/website-design",
    "description": "Professional website design services for small businesses. Mobile-ready, SEO-optimized, fast-loading, and tailored to your brand.",
    "mainEntityOfPage": "https://www.hometownwebco.com/services/website-design"
  }

  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>Website Design Services | Hometown Web Co</title>
        <meta
          name="description"
          content="Get a beautiful, professional website built to help your local business grow. Fast, mobile-ready, SEO-optimized design tailored to you."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/services/website-design" />
        {/* Open Graph */}
        <meta property="og:title" content="Website Design Services | Hometown Web Co" />
        <meta property="og:description" content="Get a beautiful, professional website built to help your local business grow. Fast, mobile-ready, SEO-optimized design tailored to you." />
        <meta property="og:url" content="https://www.hometownwebco.com/services/website-design" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Design Services | Hometown Web Co" />
        <meta name="twitter:description" content="Get a beautiful, professional website built to help your local business grow. Fast, mobile-ready, SEO-optimized design tailored to you." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Website Design Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We craft professional, mobile-responsive websites that help local businesses stand out and grow online.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What’s Included in Our Web Design Services:
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
            A well-designed website is more than just a digital brochure — it’s your business’s first impression.
            We work with small business owners to build modern, fast, and functional websites that convert visitors into customers.
          </p>
          <p>
            Whether you're launching your first website or redesigning an outdated one, we guide you through the process
            with clear communication and proven results. All our websites are built for speed, mobile usability, and
            search engine visibility — because what good is a site if no one can find it?
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let’s Build Your Website
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We’ll create a website that works hard for your business — no stress, no tech headaches.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WebsiteDesign
