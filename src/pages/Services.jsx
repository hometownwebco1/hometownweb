import { Helmet } from 'react-helmet'
import {
  Globe,
  Settings,
  TrendingUp,
  Mail,
  Check,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Beautiful, professional websites that represent your business perfectly and attract more customers.',
      path: '/services/website-design',
      features: [
        'Custom design tailored to your brand',
        'Mobile-responsive layouts',
        'Fast loading speeds',
        'SEO-optimized structure',
        'Easy content management',
        'Professional photography integration'
      ]
    },
    {
      icon: Settings,
      title: 'Website Management',
      description: 'Keep your website updated, secure, and running smoothly with our ongoing maintenance services.',
      path: '/services/website-management',
      features: [
        'Regular security updates',
        'Content updates and changes',
        'Performance monitoring',
        'Backup and recovery',
        'Technical support',
        'Monthly performance reports'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Get found online with SEO, social media, and targeted advertising that brings real results.',
      path: '/services/digital-marketing',
      features: [
        'Local SEO optimization',
        'Google My Business setup',
        'Social media management',
        'Content marketing strategy',
        'Online review management',
        'Analytics and reporting'
      ]
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Stay connected with your customers through professional email campaigns that drive sales.',
      path: '/services/email-marketing',
      features: [
        'Email campaign design',
        'Customer list management',
        'Automated follow-up sequences',
        'Newsletter creation',
        'Performance tracking',
        'A/B testing optimization'
      ]
    }
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Hometown Web Co Services",
    "description": "Explore professional web design, SEO, digital marketing, and email services crafted for small local businesses.",
    "url": "https://www.hometownwebco.com/services",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://www.hometownwebco.com${service.path}`
      }
    }))
  }

  // Added: Breadcrumbs JSON-LD (discussed change)
  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hometownwebco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.hometownwebco.com/services" }
    ]
  }

  return (
    <div className="min-h-screen py-20 bg-site-gradient">
      <Helmet>
        <title>Our Services | Hometown Web Co</title>
        <meta
          name="description"
          content="Explore our professional web services — including design, management, SEO, and email marketing — crafted specifically for small local businesses."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/services" />
        {/* Open Graph */}
        <meta property="og:title" content="Our Services | Hometown Web Co" />
        <meta property="og:description" content="Explore our professional web services — including design, management, SEO, and email marketing — crafted specifically for small local businesses." />
        <meta property="og:url" content="https://www.hometownwebco.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Hometown Web Co" />
        <meta name="twitter:description" content="Explore our professional web services — including design, management, SEO, and email marketing — crafted specifically for small local businesses." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        {/* Added: Breadcrumbs JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumbs)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions built to help small businesses grow online.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mr-4">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What’s Included:</h3>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to={service.path}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </article>
            )
          })}
        </section>

        <section className="bg-white p-12 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We make getting online simple with our step-by-step approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your business, goals, and customers'
              },
              {
                step: '02',
                title: 'Design',
                description: 'We create a custom design that reflects your brand'
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your website with modern, reliable technology'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We go live and provide ongoing support and maintenance'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Let’s talk about your goals and how we can help. Schedule a free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Request Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </section>

        <div className="text-center">
          <p className="text-gray-100 mb-4">Follow Us:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61578313660385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white hover:text-primary"
            >
              <Facebook className="mr-2" size={20} />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hometownwebco/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white hover:text-primary"
            >
              <Instagram className="mr-2" size={20} />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@hometownwebco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white hover:text-primary"
            >
              <Youtube className="mr-2" size={20} />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
