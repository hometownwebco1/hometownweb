import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { DollarSign, Calculator, TrendingUp, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProfitMarginCalculator = () => {
  const [form, setForm] = useState({
    revenue: '',
    cost: ''
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

    const revenue = parseFloat(form.revenue)
    const cost = parseFloat(form.cost)

    if (isNaN(revenue) || isNaN(cost) || revenue <= 0) return

    const grossProfit = revenue - cost
    const profitMargin = ((grossProfit / revenue) * 100).toFixed(2)

    setResult({
      grossProfit: grossProfit.toFixed(2),
      profitMargin
    })
    setTimeout(() => setShowResult(true), 120)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Profit Margin Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Calculate your business profit margin quickly and easily. Free tool for small business owners — see your gross profit and profit margin instantly."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/profit-margin" />
        <meta property="og:title" content="Profit Margin Calculator | Hometown Web Co" />
        <meta property="og:description" content="Find your gross profit and profit margin in seconds with our free calculator. Perfect for small business and entrepreneurs." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/profit-margin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Profit Margin Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Instant profit margin calculator for small businesses and local entrepreneurs. Find your numbers fast." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Profit Margin Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Calculate gross profit and profit margin for your business — free, fast, and simple.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculators/profit-margin",
          "publisher": {
            "@type": "Organization",
            "name": "Hometown Web Co",
            "url": "https://www.hometownwebco.com"
          }
        })}</script>
      </Helmet>
      {/* SEO Intro */}
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex justify-center items-center gap-2">
          <Calculator className="text-primary" size={32} />
          Profit Margin Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Need to know your business profit margin fast? Enter your revenue and cost of goods sold to see your gross profit and margin in seconds.
        </p>
        <p className="text-base text-gray-600">
          Essential for small businesses, contractors, retail, or any business owner. 
          Use your numbers for any month, quarter, or year.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Want help boosting your profits? <Link to="/services/website-management" className="text-primary underline hover:text-primary/80">See our business management services.</Link>
        </div>
      </div>
      {/* Calculator Card */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Total Revenue ($)</label>
            <input
              type="number"
              name="revenue"
              value={form.revenue}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 8000"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Cost of Goods Sold ($)</label>
            <input
              type="number"
              name="cost"
              value={form.cost}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 4200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <TrendingUp size={22} />
            Calculate Profit Margin
          </button>
        </form>

        {result && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <DollarSign className="inline-block mr-2" size={28} />
              Your Profit Margin
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <DollarSign className="text-primary" size={20} />
                <span><strong>Gross Profit:</strong> ${result.grossProfit}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <Calculator className="text-primary" size={20} />
                <span><strong>Profit Margin:</strong> {result.profitMargin}%</span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Want to maximize your profit margin and grow your business?</p>
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
        <h2 className="text-xl font-bold mb-4">Profit Margin Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does the profit margin calculator work?</strong>
            <p>
              Enter your total revenue and cost of goods sold. The calculator shows your gross profit and what percentage you’re keeping as profit.
            </p>
          </div>
          <div>
            <strong>Why does profit margin matter?</strong>
            <p>
              Profit margin shows how efficiently your business is operating and how much you’re keeping after expenses. Higher is better.
            </p>
          </div>
          <div>
            <strong>What is a good profit margin?</strong>
            <p>
              It depends on your industry, but most small businesses should target at least 10–20%. Service businesses are often higher, retail is sometimes lower.
            </p>
          </div>
          <div>
            <strong>Does this include overhead or just product/service cost?</strong>
            <p>
              This calculator uses gross profit — just revenue minus direct costs. For net margin, subtract all operating expenses as well.
            </p>
          </div>
        </div>
      </div>
      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mt-10 mb-4 text-xs text-gray-500 p-4 bg-gray-100 rounded-xl border border-gray-200">
        <h4 className="font-bold mb-2">Legal Disclaimer</h4>
        <p className="mb-2">
          This calculator provides estimates for informational purposes only. Actual results may vary.
        </p>
        <p className="mb-2">
          This is not financial or professional advice. Consult a qualified marketing or business expert before making important decisions.
        </p>
        <p className="mb-0">
          Calculator assumptions are based on common industry practices and do not guarantee results.
        </p>
      </div>
    </div>
  )
}

export default ProfitMarginCalculator
