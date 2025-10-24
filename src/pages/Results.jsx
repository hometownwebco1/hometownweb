import { Helmet } from 'react-helmet'
import {
  Lightbulb,
  Target,
  Wrench,
  Smile,
  Facebook,
  Instagram,
  Youtube
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

  // Helper for consistent card styling in dark theme
  const Card = ({ children }) => (
    <div className="rounded-xl border border-border bg-white/5 backdrop-blur-sm shadow-sm">{children}</div>
  )

  const CardImage = ({ src, alt }) => (
    <div className="shrink-0">
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-lg border border-border/60 bg-black/20"
        loading="lazy"
      />
    </div>
  )

  const ctaBtn =
    "inline-block px-5 py-2 rounded font-semibold bg-primary text-foreground hover:bg-primary/90 transition"

  return (
    <div className="min-h-screen bg-site-gradient text-foreground">
      <Helmet>
        <title>Website Results | Hometown Web Co</title>
        <meta
          name="description"
          content="Discover what makes our websites stand out — strategic design, local SEO, and conversions that matter."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/results" />
        <meta property="og:title" content="Website Results | Hometown Web Co" />
        <meta
          property="og:description"
          content="Discover what makes our websites stand out — and why small businesses trust us to help them grow online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hometownwebco.com/results" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Results | Hometown Web Co" />
        <meta name="twitter:description" content="Discover what makes our websites stand out — and why small businesses trust us to help them grow online." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumbs)}</script>
      </Helmet>

      {/* Header */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Real Results for Small Businesses
          </h1>
          <p className="mt-3 text-foreground/80 max-w-2xl">
            Built to rank. Built to convert. Here’s how we turn websites into real lead engines.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-border bg-white/5 p-6">
              <Icon className="text-primary mb-3" />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-foreground/80 mt-1">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured: BKS Concrete */}
      <section className="my-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
              <CardImage src={bksScreenshot} alt="BKS Concrete website screenshot" />
              <div className="flex-1 text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Featured Build: BKS Concrete</h2>
                <p className="text-foreground/80 mb-3">
                  BKS Concrete’s site showcases their work, loads fast, and is structured for search visibility and
                  mobile-first usability.
                </p>
                <a href="https://www.bksconcrete.com/" target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                  View Live Site
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured: Raleigh Bookkeeping */}
      <section className="my-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
              <CardImage src={rbkScreenshot} alt="Raleigh Bookkeeping website screenshot" />
              <div className="flex-1 text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Featured Build: Raleigh Bookkeeping</h2>
                <p className="text-foreground/80 mb-3">
                  Clean structure, clear services, and trust-building content designed for small-business decision-makers.
                </p>
                <a href="https://www.raleighbookkeeping.com/" target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                  View Live Site
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured: Oak City Simulator (using Google favicon proxy) */}
      <section className="my-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
              <CardImage
                src="https://www.google.com/s2/favicons?sz=128&domain_url=oakcitysimulator.com"
                alt="Oak City Simulator site icon"
              />
              <div className="flex-1 text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Featured Build: Oak City Simulator Co.</h2>
                <p className="text-foreground/80 mb-3">
                  Clear steps, vendor transparency, and a modern layout that guides homeowners through the process.
                </p>
                <a href="https://www.oakcitysimulator.com/" target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                  View Live Site
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured: Boles Concrete (using Google favicon proxy) */}
      <section className="my-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
              <CardImage
                src="https://www.google.com/s2/favicons?sz=128&domain_url=bolesconcrete.com"
                alt="Boles Concrete site icon"
              />
              <div className="flex-1 text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Featured Build: Boles Concrete</h2>
                <p className="text-foreground/80 mb-3">
                  Residential and commercial concrete with a gallery-forward structure for credibility and clarity.
                </p>
                <a href="https://www.bolesconcrete.com/" target="_blank" rel="noopener noreferrer" className={ctaBtn}>
                  View Live Site
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Want results like these?</h2>
          <p className="text-foreground/80 mt-2">
            We’ll build you a clean, fast, and search-optimized site that actually drives leads.
          </p>
          <Link to="/free-website" className={`${ctaBtn} mt-6`}>
            Request Free Website Demo
          </Link>
        </div>
      </section>

      {/* Social CTA */}
      <section className="text-center pb-10">
        <p className="text-sm text-foreground/70 mb-4">Follow Us:</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://www.facebook.com/profile.php?id=61578313660385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-primary"
          >
            <Facebook className="mr-1" size={18} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/hometownwebco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-primary"
          >
            <Instagram className="mr-1" size={18} />
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@hometownwebco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-primary"
          >
            <Youtube className="mr-1" size={18} />
            YouTube
          </a>
        </div>
      </section>
    </div>
  )
}

export default Results
