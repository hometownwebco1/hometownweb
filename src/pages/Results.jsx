import { Helmet } from 'react-helmet'
import {
  Lightbulb,
  Target,
  Wrench,
  Smile,
  Facebook,
  Instagram,
  Youtube,
  Home,     // for Oak City badge
  Hammer    // for Boles badge
} from 'lucide-react'
import { Link } from 'react-router-dom'
import bksScreenshot from '../assets/bks-screenshot.png'
import rbkScreenshot from '../assets/rbk-screenshot.png' // Raleigh Bookkeeping

const Results = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: 'Strategic Design',
      description:
        'We build websites that align with your business goals — not just templates that look good.'
    },
    {
      icon: Wrench,
      title: 'Technical Reliability',
      description:
        'All of our sites are fast, secure, and mobile-ready from day one — no hassle for you.'
    },
    {
      icon: Target,
      title: 'Local SEO First',
      description:
        'Every page, heading, and image is structured to rank in your market and convert real leads.'
    },
    {
      icon: Smile,
      title: 'Client-Friendly Editing',
      description:
        'We keep content management simple so you can update services, pricing, and galleries without stress.'
    }
  ]

  const schemaPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Website Results",
    "url": "https://www.hometownwebco.com/results",
    "description":
      "See how Hometown Web Co builds strategic, high-performing websites for small businesses.",
    "publisher": {
      "@type": "Organization",
      "name": "Hometown Web Co"
    }
  }

  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hometownwebco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Results", "item": "https://www.hometownwebco.com/results" }
    ]
  }

  // Brand-aligned square badge: orange gradient, soft glow, centered icon
  const SiteBadge = ({ Icon, label }) => (
    <div
      className="w-24 h-24 md:w-28 md:h-28 rounded-lg shadow-md grid place-items-center"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,132,60,1) 0%, rgba(204,72,36,1) 100%)',
        boxShadow:
          '0 10px 18px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.25)'
      }}
      aria-label={label}
    >
      <Icon className="text-white" size={34} strokeWidth={2.5} />
    </div>
  )

  // Shared card shell — matches About page (white cards on orange gradient)
  const Card = ({ children }) => (
    <div className="bg-white p-8 rounded-lg shadow-md">{children}</div>
  )

  const ctaBtn =
    'inline-block px-5 py-2 rounded font-semibold bg-primary text-white hover:opacity-90 transition'

  return (
    <div className="min-h-screen py-20 bg-site-gradient">
      <Helmet>
        <title>Website Results | Hometown Web Co</title>
        <meta
          name="description"
          content="Discover what makes our websites stand out — strategic design, local SEO, and conversions that matter."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/results" />
        {/* Open Graph */}
        <meta property="og:title" content="Website Results | Hometown Web Co" />
        <meta
          property="og:description"
          content="Discover what makes our websites stand out — and why small businesses trust us to help them grow online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hometownwebco.com/results" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Results | Hometown Web Co" />
        <meta name="twitter:description" content="Discover what makes our websites stand out — and why small businesses trust us to help them grow online." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumbs)}</script>
      </Helmet>

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Results for Small Businesses
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Built to rank. Built to convert. Here’s how we turn websites into real lead engines.
          </p>
        </div>
      </section>

      {/* Benefits (white tiles like About values) */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="p-6 bg-white rounded-lg shadow-md">
              <Icon className="text-primary mx-auto mb-4" size={32} />
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h4>
              <p className="text-gray-700 text-sm text-center">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 space-y-12">
        {/* BKS Concrete (uses provided screenshot) */}
        <Card>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={bksScreenshot}
              alt="BKS Concrete website screenshot"
              className="w-28 h-28 object-contain rounded-lg border border-gray-200 bg-gray-50"
              loading="lazy"
            />
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Build: BKS Concrete</h2>
              <p className="text-gray-700 mb-4">
                Portfolio-forward structure, fast load, and clear service pages designed for search visibility and mobile-first usability.
              </p>
              <a href="https://www.bksconcrete.com/" target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                View Live Site
              </a>
            </div>
          </div>
        </Card>

        {/* Raleigh Bookkeeping (uses provided screenshot) */}
        <Card>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={rbkScreenshot}
              alt="Raleigh Bookkeeping website screenshot"
              className="w-28 h-28 object-contain rounded-lg border border-gray-200 bg-gray-50"
              loading="lazy"
            />
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Build: Raleigh Bookkeeping</h2>
              <p className="text-gray-700 mb-4">
                Clean structure, clear services, and trust-building content for small-business decision-makers.
              </p>
              <a href="https://www.raleighbookkeeping.com/" target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                View Live Site
              </a>
            </div>
          </div>
        </Card>

        {/* Oak City Simulator — brand tile (no blurry favicon) */}
        <Card>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <SiteBadge Icon={Home} label="Oak City Simulator brand tile" />
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Build: Oak City Simulator Co.</h2>
              <p className="text-gray-700 mb-4">
                Clear steps, vendor transparency, and a modern layout that guides homeowners through the process.
              </p>
              <a href="https://www.oakcitysimulator.com/" target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                View Live Site
              </a>
            </div>
          </div>
        </Card>

        {/* Boles Concrete — brand tile (no blurry favicon) */}
        <Card>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <SiteBadge Icon={Hammer} label="Boles Concrete brand tile" />
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Build: Boles Concrete</h2>
              <p className="text-gray-700 mb-4">
                Residential and commercial concrete with a gallery-forward structure for credibility and clarity.
              </p>
              <a href="https://www.bolesconcrete.com/" target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                View Live Site
              </a>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">Want results like these?</h2>
        <p className="text-gray-100 mt-2">
          We’ll build you a clean, fast, and search-optimized site that actually drives leads.
        </p>
        <Link to="/free-website" className={`${ctaBtn} mt-6`}>
          Request Free Website Demo
        </Link>
      </section>

      {/* Social Footer */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 text-center">
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
      </section>
    </div>
  )
}

export default Results
