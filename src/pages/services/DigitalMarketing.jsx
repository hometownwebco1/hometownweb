import { Helmet } from 'react-helmet'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const DigitalMarketing = () => {
  const features = [
    'Local SEO to boost your visibility in Google Maps and search results',
    'Google My Business profile setup and optimization',
    'Social media posting and audience engagement strategies',
    'Content creation to attract, educate, and convert customers',
    'Online review monitoring and response support',
    'Analytics and performance tracking with monthly insights'
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "serviceType": "Local SEO, Social Media, Google Business Optimization",
    "provider": {
      "@type": "Organization",
      "name": "Hometown Web Co",
      "url": "https://www.hometownwebco.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "url": "https://www.hometownwebco.com/services/digital-marketing",
    "description": "We help small businesses grow online visibility through local SEO, Google My Business, social media marketing, and performance tracking.",
    "mainEntityOfPage": "https://www.hometownwebco.com/services/digital-marketing"
  }

  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>Digital Marketing Services | Hometown Web Co</title>
        <meta
          name="description"
          content="Our digital marketing services help small businesses grow online visibility through SEO, Google My Business, social media, content, and more."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/services/digital-marketing" />
        {/* Open Graph */}
        <meta property="og:title" content="Digital Marketing Services | Hometown Web Co" />
        <meta property="og:description" content="Our digital marketing services help small businesses grow online visibility through SEO, Google My Business, social media, content, and more." />
        <meta property="og:url" content="https://www.hometownwebco.com/services/digital-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Services | Hometown Web Co" />
        <meta name="twitter:description" content="Our digital marketing services help small businesses grow online visibility through SEO, Google My Business, social media, content, and more." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* JSON-LD Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Digital Marketing Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help local businesses grow their online reach and attract real customers through targeted digital marketing.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What We Offer in Digital Marketing:
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
            If your business isn’t showing up online, you're missing out on customers who are actively looking for services like yours.
            We use proven local SEO and digital marketing strategies to get your business noticed — and keep it top-of-mind.
          </p>
          <p>
            Our marketing services are designed for small business owners who want real-world results: more phone calls, more website visits, and more local awareness.
            We’ll build you a strategy that fits your goals, budget, and bandwidth.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let’s Grow Your Reach
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'll handle the digital side — so you can focus on doing what you do best.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Talk to a Marketing Specialist
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing