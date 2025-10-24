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
import rbkScreenshot from '../assets/rbk-screenshot.png' // <-- Add screenshot for Raleigh Bookkeeping

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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Website Results",
    "url": "https://www.hometownwebco.com/results",
    "description":
      "See how Hometown Web Co builds strategic, high-performing websites that drive real results for local businesses.",
    "publisher": {
      "@type": "Organization",
      "name": "Hometown Web Co"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
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
        <meta
          name="twitter:title"
          content="Website Results | Hometown Web Co"
        />
        <meta
          name="twitter:description"
          content="Discover what makes our websites stand out — and why small businesses trust us to help them grow online."
        />
        <meta
          name="twitter:image"
          content="https://www.hometownwebco.com/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Header */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Real Results for Local Businesses
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            Built to rank. Built to convert. Here’s how we turn websites into real lead engines.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Icon className="text-primary mb-3" />
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-300 mt-1">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Site Build: BKS Concrete */}
      <section className="my-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
          <img
            src={bksScreenshot}
            alt="BKS Concrete Website Screenshot"
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg shadow"
          />
          <div className="flex-1 text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Featured Build: BKS Concrete
            </h2>
            <p className="text-gray-700 mb-3">
              BKS Concrete is a leading concrete contractor in the Charlotte, NC
              area. Their new website showcases their work, brings in
              high-quality leads, and is built for search visibility and
              mobile-first usability.
            </p>
            <a
              href="https://www.bksconcrete.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-primary text-foreground font-semibold rounded hover:bg-primary/90 transition"
            >
              View Live Site
            </a>
          </div>
        </div>
      </section>

      {/* Featured Site Build: Raleigh Bookkeeping */}
      <section className="my-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
          <img
            src={rbkScreenshot}
            alt="Raleigh Bookkeeping Website Screenshot"
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg shadow"
          />
          <div className="flex-1 text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Featured Build: Raleigh Bookkeeping
            </h2>
            <p className="text-gray-700 mb-3">
              Raleigh Bookkeeping helps small businesses in the Triangle area
              manage their finances with accuracy and confidence. The new site
              highlights services, builds trust with clients, and supports
              scalable growth through clean design and SEO optimization.
            </p>
            <a
              href="https://www.raleighbookkeeping.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-primary text-foreground font-semibold rounded hover:bg-primary/90 transition"
            >
              View Live Site
            </a>
          </div>
        </div>
      </section>

      {/* Featured Site Build: Oak City Simulator */}
      <section className="my-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
          <img
            src="https://www.oakcitysimulator.com/favicon.ico"
            alt="Oak City Simulator Website Icon"
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg shadow"
          />
          <div className="flex-1 text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Featured Build: Oak City Simulator Co.
            </h2>
            <p className="text-gray-700 mb-3">
              Oak City Simulator Co. designs and installs custom home golf simulators in the Raleigh area.
              The site focuses on clear steps, vendor transparency, and clean visuals that convert.
            </p>
            <a
              href="https://www.oakcitysimulator.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-primary text-foreground font-semibold rounded hover:bg-primary/90 transition"
            >
              View Live Site
            </a>
          </div>
        </div>
      </section>

      {/* Featured Site Build: Boles Concrete */}
      <section className="my-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
          <img
            src="https://www.bolesconcrete.com/favicon.ico"
            alt="Boles Concrete Website Icon"
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg shadow"
          />
          <div className="flex-1 text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Featured Build: Boles Concrete
            </h2>
            <p className="text-gray-700 mb-3">
              Boles Concrete serves Lane County with residential and commercial concrete.
              The site is optimized for local SEO and showcases real project galleries.
            </p>
            <a
              href="https://www.bolesconcrete.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-primary text-foreground font-semibold rounded hover:bg-primary/90 transition"
            >
              View Live Site
            </a>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Want results like these?</h2>
          <p className="text-gray-300 mt-2">
            We’ll build you a clean, fast, and search-optimized site that actually drives leads.
          </p>
          <Link
            to="/free-website"
            className="inline-block mt-6 px-6 py-3 bg-primary text-foreground font-semibold rounded hover:bg-primary/90 transition"
          >
            Request Free Website Demo
          </Link>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="text-center">
        <p className="text-sm text-white mb-4">Follow Us:</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://www.facebook.com/profile.php?id=61578313660385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-primary"
          >
            <Facebook className="mr-1" size={18} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/hometownwebco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-primary"
          >
            <Instagram className="mr-1" size={18} />
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@hometownwebco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-primary"
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
