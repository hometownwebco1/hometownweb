import { Helmet } from 'react-helmet'
import { Globe, TrendingUp, Users, Lightbulb, Target, Wrench, Smile, Facebook, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const Results = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: 'Strategic Design',
      description: 'We build websites that align with your business goals — not just templates that look good.'
    },
    {
      icon: Wrench,
      title: 'Technical Reliability',
      description: 'All of our sites are fast, secure, and mobile-ready from day one — no hassle or hidden problems.'
    },
    {
      icon: Target,
      title: 'Customer Focused',
      description: 'Everything we build is aimed at helping your ideal customer take action and connect with you.'
    },
    {
      icon: Smile,
      title: 'Future-Proof Foundation',
      description: 'We use modern, scalable tech stacks so your site grows with your business — not against it.'
    }
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Website Results",
    "url": "https://www.hometownwebco.com/results",
    "description": "See how Hometown Web Co builds strategic, high-performing websites that drive real results for local businesses.",
    "publisher": {
      "@type": "Organization",
      "name": "Hometown Web Co",
      "url": "https://www.hometownwebco.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hometownwebco.com/logo.png"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61578313660385",
        "https://www.instagram.com/hometownwebco/",
        "https://www.youtube.com/@hometownwebco"
      ]
    }
  }

  return (
    <div className="min-h-screen py-20 bg-site-gradient">
      <Helmet>
        <title>Website Results | Hometown Web Co</title>
        <meta
          name="description"
          content="See how Hometown Web Co builds strategic, high-performing websites that drive real results for local businesses. Discover what sets our work apart."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/results" />
        {/* Open Graph */}
        <meta property="og:title" content="Website Results | Hometown Web Co" />
        <meta property="og:description" content="See how Hometown Web Co builds strategic, high-performing websites that drive real results for local businesses." />
        <meta property="og:url" content="https://www.hometownwebco.com/results" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Results | Hometown Web Co" />
        <meta name="twitter:description" content="Discover what makes our websites stand out — and why small businesses trust us to help them grow online." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Our Websites Work
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            We don’t believe in shortcuts — just solid websites that convert, rank, and perform.
            Here’s why our approach delivers results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white p-12 rounded-lg text-center shadow mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Be Our Next Success Story
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            We’re currently taking on a limited number of new projects. Work directly with our founder and get the attention your business deserves — from day one.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Request Free Website Demo
          </Link>
        </div>

        {/* Social Media CTA */}
        <div className="mt-20 text-center">
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

export default Results
