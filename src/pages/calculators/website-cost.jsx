import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Calculator, Globe, Wrench, DollarSign, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const WebsiteCostCalculator = () => {
  const [form, setForm] = useState({
    pages: '',
    customFeatures: 'none',
    ecommerce: false,
    seo: false,
    maintenance: false
  })
  const [result, setResult] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResult(false)
    const pages = parseInt(form.pages) || 1
    let baseCost = 600 + (pages - 1) * 80 // base site + per page
    if (form.customFeatures === 'basic') baseCost += 500
    if (form.customFeatures === 'advanced') baseCost += 1200
    if (form.ecommerce) baseCost += 1200
    if (form.seo) baseCost += 350
    if (form.maintenance) baseCost += 60 * 12 // 1 year
    setResult({ total: baseCost })
    setTimeout(() => setShowResult(true), 120)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Website Cost Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Estimate the cost to build your website with our free calculator. Get transparent pricing for small business web design, custom features, e-commerce, SEO, and maintenance."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/website-cost" />
        <meta property="og:title" content="Website Cost Calculator | Hometown Web Co" />
        <meta property="og:description" content="Estimate the true cost of a new website. Enter your needs and see the breakdown. No surprises, just clarity." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/website-cost" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Cost Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Estimate the true cost of a new website. Enter your needs and see the breakdown. No surprises, just clarity." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Website Cost Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Estimate your website design and build costs for free. No sign-up, just real numbers for small businesses.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculators/website-cost",
          "publisher": {
            "@type": "Organization",
            "name": "Hometown Web Co",
            "url": "https://www.hometownwebco.com"
          }
        })}</script>
      </Helmet>

      {/* SEO intro */}
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex justify-center items-center gap-2">
          <Globe className="text-primary" size={32} />
          Website Cost Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Wondering what a new website should really cost? Enter your needs below for a fast, transparent estimate.
        </p>
        <p className="text-base text-gray-600">
          Get real numbers for custom features, e-commerce, SEO, and maintenance. Built for small business owners who hate surprises.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Need a custom quote? <Link to="/services/website-design" className="text-primary underline hover:text-primary/80">See our web design services.</Link>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">How many pages?</label>
            <input
              type="number"
              name="pages"
              value={form.pages}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 5"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Custom Features</label>
            <select
              name="customFeatures"
              value={form.customFeatures}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
            >
              <option value="none">None</option>
              <option value="basic">Basic (contact forms, maps, galleries)</option>
              <option value="advanced">Advanced (bookings, membership, portals, etc.)</option>
            </select>
          </div>
          <div className="flex gap-6 items-center">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="ecommerce"
                checked={form.ecommerce}
                onChange={handleChange}
                className="form-checkbox accent-primary h-5 w-5"
              />
              E-commerce (shop, payments)
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="seo"
                checked={form.seo}
                onChange={handleChange}
                className="form-checkbox accent-primary h-5 w-5"
              />
              Pro SEO Setup
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="maintenance"
                checked={form.maintenance}
                onChange={handleChange}
                className="form-checkbox accent-primary h-5 w-5"
              />
              Maintenance (1st year)
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <Calculator size={22} />
            Estimate Cost
          </button>
        </form>

        {result && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <DollarSign className="inline-block mr-2" size={28} />
              Estimated Website Cost
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <DollarSign className="text-primary" size={20} />
                <span><strong>Total:</strong> ${result.total}</span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Want a precise quote for your project?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl transition text-base"
              >
                <Mail size={18} />
                Contact Us Today
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto mt-14 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Website Cost Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does this calculator estimate website cost?</strong>
            <p>
              We use typical agency and freelancer rates for design, build, custom features, e-commerce, SEO, and 1st-year maintenance to give you a real-world price range.
            </p>
          </div>
          <div>
            <strong>Why is website cost so variable?</strong>
            <p>
              Factors like complexity, integrations, custom features, and ongoing support all affect pricing. This calculator helps clarify your actual needs and budget.
            </p>
          </div>
          <div>
            <strong>Can I get a custom proposal?</strong>
            <p>
              Yes. <Link to="/services/website-design" className="text-primary underline hover:text-primary/80">See our web design services</Link> or <Link to="/contact" className="text-primary underline hover:text-primary/80">contact us</Link> for a custom quote.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mt-10 mb-4 text-xs text-gray-500 p-4 bg-gray-100 rounded-xl border border-gray-200">
        <h4 className="font-bold mb-2">Legal Disclaimer</h4>
        <p className="mb-2">
          This calculator provides estimates for informational purposes only. Actual pricing may vary.
        </p>
        <p className="mb-2">
          This is not a binding quote. Please request a proposal for an exact project estimate.
        </p>
        <p className="mb-0">
          Estimates based on typical small business and agency web project rates.
        </p>
      </div>
    </div>
  )
}

export default WebsiteCostCalculator
