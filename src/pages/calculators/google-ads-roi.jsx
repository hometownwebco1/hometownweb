import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Calculator, DollarSign, TrendingUp, PieChart, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const GoogleAdsRoiCalculator = () => {
  const [form, setForm] = useState({
    monthlySpend: '',
    avgCPC: '',
    convRate: '',
    avgSale: ''
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

    const spend = parseFloat(form.monthlySpend)
    const cpc = parseFloat(form.avgCPC)
    const conv = parseFloat(form.convRate) / 100
    const sale = parseFloat(form.avgSale)

    if (isNaN(spend) || isNaN(cpc) || isNaN(conv) || isNaN(sale) || cpc <= 0 || conv <= 0) return

    const clicks = spend / cpc
    const leads = clicks * conv
    const revenue = leads * sale
    const roi = ((revenue - spend) / spend) * 100

    setResult({
      clicks: Math.round(clicks),
      leads: Math.round(leads),
      revenue: Math.round(revenue),
      roi: Math.round(roi)
    })
    setTimeout(() => setShowResult(true), 120)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Google Ads ROI Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Estimate your Google Ads ROI: enter your ad spend, CPC, conversion rate, and average sale to see clicks, leads, revenue, and ROI instantly. Free calculator for small business."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/google-ads-roi" />
        <meta property="og:title" content="Google Ads ROI Calculator | Hometown Web Co" />
        <meta property="og:description" content="Estimate your Google Ads return on investment—see if you're making money on your PPC. Try our free small business calculator." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/google-ads-roi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Ads ROI Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Estimate your Google Ads return on investment—see if you're making money on your PPC. Try our free small business calculator." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Google Ads ROI Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Estimate your small business Google Ads ROI and pay-per-click profitability for free.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculators/google-ads-roi",
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
          <PieChart className="text-primary" size={32} />
          Google Ads ROI Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Want to know if your Google Ads are really paying off? Plug in your numbers and see your true pay-per-click ROI.
        </p>
        <p className="text-base text-gray-600">
          See total clicks, conversions, revenue, and profit—before you spend another dollar. Ideal for small businesses and service pros.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Need expert PPC help? <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">See our digital marketing services.</Link>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Monthly Google Ads Spend ($)</label>
            <input
              type="number"
              name="monthlySpend"
              value={form.monthlySpend}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 1500"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Average Cost Per Click ($)</label>
            <input
              type="number"
              name="avgCPC"
              value={form.avgCPC}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0.01"
              step="0.01"
              required
              placeholder="e.g. 3.50"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Conversion Rate (%)</label>
            <input
              type="number"
              name="convRate"
              value={form.convRate}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0.1"
              step="0.1"
              required
              placeholder="e.g. 5"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Average Sale Value ($)</label>
            <input
              type="number"
              name="avgSale"
              value={form.avgSale}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 100"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <Calculator size={22} />
            Calculate ROI
          </button>
        </form>

        {result && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <DollarSign className="inline-block mr-2" size={28} />
              Google Ads Results
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span><strong>Estimated Clicks:</strong> {result.clicks}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span><strong>Estimated Leads:</strong> {result.leads}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <DollarSign className="text-primary" size={20} />
                <span><strong>Estimated Revenue:</strong> ${result.revenue}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <PieChart className="text-primary" size={20} />
                <span><strong>ROI:</strong> {result.roi}%</span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Want more profit from your ad budget?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl transition text-base"
              >
                <Mail size={18} />
                Talk to a PPC Expert
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto mt-14 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Google Ads ROI Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does this calculator estimate ROI?</strong>
            <p>
              It uses your ad spend, cost per click, conversion rate, and average sale to project clicks, leads, revenue, and ROI.
            </p>
          </div>
          <div>
            <strong>What’s a good ROI for Google Ads?</strong>
            <p>
              It depends on your industry, profit margins, and goals. Many small businesses aim for at least 200% ROI, but higher is always better.
            </p>
          </div>
          <div>
            <strong>Can I use this to plan campaigns?</strong>
            <p>
              Absolutely—this tool helps you set targets, avoid overspending, and maximize your PPC profit.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mt-10 mb-4 text-xs text-gray-500 p-4 bg-gray-100 rounded-xl border border-gray-200">
        <h4 className="font-bold mb-2">Legal Disclaimer</h4>
        <p className="mb-2">
          This calculator is for informational use only. Real-world results may vary.
        </p>
        <p className="mb-2">
          Consult a digital marketing expert for in-depth ROI analysis.
        </p>
        <p className="mb-0">
          Calculations based on standard industry formulas and your provided data.
        </p>
      </div>
    </div>
  )
}

export default GoogleAdsRoiCalculator
