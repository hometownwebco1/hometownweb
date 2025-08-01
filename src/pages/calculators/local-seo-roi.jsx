import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Calculator, TrendingUp, DollarSign, Users, MapPin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const LocalSeoRoiCalculator = () => {
  const [form, setForm] = useState({
    monthlySpend: '',
    extraLeads: '',
    closeRate: '',
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
    const monthlySpend = parseFloat(form.monthlySpend)
    const extraLeads = parseFloat(form.extraLeads)
    const closeRate = parseFloat(form.closeRate)
    const avgSale = parseFloat(form.avgSale)

    if ([monthlySpend, extraLeads, closeRate, avgSale].some(x => isNaN(x))) return

    const conversions = extraLeads * (closeRate / 100)
    const revenue = conversions * avgSale
    const roi = ((revenue - monthlySpend) / monthlySpend) * 100

    setResult({
      revenue: revenue.toFixed(2),
      roi: roi.toFixed(1)
    })
    setTimeout(() => setShowResult(true), 120)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Local SEO ROI Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Estimate the ROI of investing in Local SEO. Enter your monthly spend, leads gained, close rate, and average sale value to see your real return on investment."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/local-seo-roi" />
        <meta property="og:title" content="Local SEO ROI Calculator | Hometown Web Co" />
        <meta property="og:description" content="Estimate the ROI of your local SEO campaign with this free, easy calculator for small businesses." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/local-seo-roi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local SEO ROI Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Estimate the ROI of your local SEO campaign with this free, easy calculator for small businesses." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Local SEO ROI Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Estimate the return on investment for your local SEO campaign with this free calculator.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculators/local-seo-roi",
          "publisher": {
            "@type": "Organization",
            "name": "Hometown Web Co",
            "url": "https://www.hometownwebco.com"
          }
        })}</script>
      </Helmet>

      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex justify-center items-center gap-2">
          <MapPin className="text-primary" size={32} />
          Local SEO ROI Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Wondering if local SEO is worth it? Calculate your real return on investment based on your spend, new leads, and sales.
        </p>
        <p className="text-base text-gray-600">
          Perfect for local business owners, contractors, and service providers who want to see the numbers before investing.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Need professional help with Local SEO? <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">See our digital marketing services.</Link>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Monthly SEO Spend ($)</label>
            <input
              type="number"
              name="monthlySpend"
              value={form.monthlySpend}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 1000"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Estimated New Leads / Month from SEO</label>
            <input
              type="number"
              name="extraLeads"
              value={form.extraLeads}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 8"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Lead-to-Customer Close Rate (%)</label>
            <input
              type="number"
              name="closeRate"
              value={form.closeRate}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              max="100"
              required
              placeholder="e.g. 25"
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
              min="0"
              required
              placeholder="e.g. 900"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <TrendingUp size={22} />
            Calculate ROI
          </button>
        </form>

        {result && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <DollarSign className="inline-block mr-2" size={28} />
              Your SEO ROI
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <DollarSign className="text-primary" size={20} />
                <span><strong>Monthly Revenue from SEO:</strong> ${result.revenue}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span><strong>ROI:</strong> {result.roi}%</span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Want professional help maximizing your SEO ROI?</p>
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
        <h2 className="text-xl font-bold mb-4">Local SEO ROI Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does the Local SEO ROI Calculator work?</strong>
            <p>
              Enter your monthly SEO spend, estimated new leads from SEO, close rate, and average sale value. The calculator estimates your total new revenue and ROI from SEO efforts.
            </p>
          </div>
          <div>
            <strong>Why is ROI important for local SEO?</strong>
            <p>
              ROI tells you if your investment is generating real returns. Track it to make smarter, data-driven marketing decisions.
            </p>
          </div>
          <div>
            <strong>How can I improve my local SEO results?</strong>
            <p>
              Consistency, accurate listings, high-quality reviews, and a fast, mobile-friendly website all help. <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">We can help!</Link>
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

export default LocalSeoRoiCalculator
