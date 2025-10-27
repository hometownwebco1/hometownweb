import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Calculator, DollarSign, TrendingUp, BarChart2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const BreakEvenCalculator = () => {
  const [form, setForm] = useState({
    fixedCosts: '',
    pricePerUnit: '',
    variableCostPerUnit: ''
  })
  const [result, setResult] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResult(false)
    const fixed = parseFloat(form.fixedCosts)
    const price = parseFloat(form.pricePerUnit)
    const variable = parseFloat(form.variableCostPerUnit)
    if ([fixed, price, variable].some(isNaN) || price <= variable) return
    const breakEvenUnits = Math.ceil(fixed / (price - variable))
    setResult({ breakEvenUnits })
    setTimeout(() => setShowResult(true), 120)
  }

  // Added: Breadcrumbs JSON-LD
  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hometownwebco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Calculators", "item": "https://www.hometownwebco.com/calculators" },
      { "@type": "ListItem", "position": 3, "name": "Break-Even", "item": "https://www.hometownwebco.com/calculators/break-even" }
    ]
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Break-Even Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Calculate your business break-even point. Enter fixed costs, price per unit, and variable cost per unit to find how many sales you need to cover expenses."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/break-even" />
        <meta property="og:title" content="Break-Even Calculator | Hometown Web Co" />
        <meta property="og:description" content="Find your business break-even point — how many sales you need to cover costs. Perfect for local businesses, contractors, and service pros." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/break-even" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Break-Even Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Find your business break-even point — how many sales you need to cover costs. Perfect for local businesses, contractors, and service pros." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Break-Even Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Calculate your small business break-even point quickly and easily.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculators/break-even",
          "publisher": {
            "@type": "Organization",
            "name": "Hometown Web Co",
            "url": "https://www.hometownwebco.com"
          }
        })}</script>
        {/* Added: Breadcrumbs JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumbs)}</script>
      </Helmet>

      {/* SEO intro */}
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex justify-center items-center gap-2">
          <BarChart2 className="text-primary" size={32} />
          Break-Even Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Wondering how many sales you need before your business becomes profitable? Enter your costs and pricing below to get your exact break-even point.
        </p>
        <p className="text-base text-gray-600">
          Ideal for local businesses, contractors, shops, restaurants, and service pros. Instant result — no math headaches.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Want to grow past your break-even? <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">See our digital marketing services.</Link>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Monthly Fixed Costs ($)</label>
            <input
              type="number"
              name="fixedCosts"
              value={form.fixedCosts}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 4000"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Price per Sale ($)</label>
            <input
              type="number"
              name="pricePerUnit"
              value={form.pricePerUnit}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 100"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Variable Cost per Sale ($)</label>
            <input
              type="number"
              name="variableCostPerUnit"
              value={form.variableCostPerUnit}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 25"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <Calculator size={22} />
            Calculate Break-Even
          </button>
        </form>

        {result && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <TrendingUp className="inline-block mr-2" size={28} />
              Break-Even Point
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <BarChart2 className="text-primary" size={20} />
                <span>
                  <strong>Sales Needed to Break Even:</strong> {result.breakEvenUnits}
                </span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Want to boost your profitability?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl transition text-base"
              >
                <DollarSign size={18} />
                Get Expert Help
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto mt-14 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Break-Even Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>What is a break-even point?</strong>
            <p>
              The break-even point is when your business’s total sales exactly cover your costs — neither profit nor loss.
            </p>
          </div>
          <div>
            <strong>How does this calculator work?</strong>
            <p>
              It uses your fixed costs, price per sale, and variable costs per sale to instantly calculate the number of sales you need to break even.
            </p>
          </div>
          <div>
            <strong>Why does price per sale need to be greater than variable cost?</strong>
            <p>
              If your variable costs are too high, you’ll never break even — and the calculator requires price to be higher than variable cost.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mt-10 mb-4 text-xs text-gray-500 p-4 bg-gray-100 rounded-xl border border-gray-200">
        <h4 className="font-bold mb-2">Legal Disclaimer</h4>
        <p className="mb-2">
          This calculator provides estimates only. Real results may vary. Always consult a business advisor for decisions.
        </p>
        <p className="mb-2">
          Calculations are based on standard business math and your input.
        </p>
      </div>
    </div>
  )
}

export default BreakEvenCalculator
