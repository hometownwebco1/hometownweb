import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Calculator, DollarSign, TrendingUp, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const EmailMarketingRoiCalculator = () => {
  const [form, setForm] = useState({
    emailsSent: '',
    openRate: '',
    ctr: '',
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
    const emails = parseFloat(form.emailsSent)
    const open = parseFloat(form.openRate) / 100
    const ctr = parseFloat(form.ctr) / 100
    const conv = parseFloat(form.convRate) / 100
    const sale = parseFloat(form.avgSale)

    if ([emails, open, ctr, conv, sale].some(isNaN)) return

    const opens = emails * open
    const clicks = opens * ctr
    const leads = clicks * conv
    const revenue = leads * sale

    setResult({
      opens: Math.round(opens),
      clicks: Math.round(clicks),
      leads: Math.round(leads),
      revenue: Math.round(revenue)
    })
    setTimeout(() => setShowResult(true), 120)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Email Marketing ROI Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Estimate your email marketing ROI: enter emails sent, open rate, CTR, conversion, and sale value to see leads and revenue. Free for small business."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/email-marketing-roi" />
        <meta property="og:title" content="Email Marketing ROI Calculator | Hometown Web Co" />
        <meta property="og:description" content="Estimate your email marketing revenue and leads. Free tool for small business owners and marketers." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/email-marketing-roi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Marketing ROI Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Estimate your email marketing revenue and leads. Free tool for small business owners and marketers." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Email Marketing ROI Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Estimate your small business email marketing ROI and revenue for free.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculators/email-marketing-roi",
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
          <Mail className="text-primary" size={32} />
          Email Marketing ROI Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Wondering if your email campaigns are paying off? Calculate how many leads and sales your next send could deliver — before you hit “send.”
        </p>
        <p className="text-base text-gray-600">
          Built for small business owners and marketers. Enter your campaign stats, get a clear answer on ROI. 
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Want better results? <Link to="/services/email-marketing" className="text-primary underline hover:text-primary/80">See our email marketing services.</Link>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Emails Sent</label>
            <input
              type="number"
              name="emailsSent"
              value={form.emailsSent}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 1000"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Open Rate (%)</label>
            <input
              type="number"
              name="openRate"
              value={form.openRate}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0.1"
              step="0.1"
              required
              placeholder="e.g. 30"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Click-Through Rate (%)</label>
            <input
              type="number"
              name="ctr"
              value={form.ctr}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0.1"
              step="0.1"
              required
              placeholder="e.g. 4"
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
              placeholder="e.g. 3"
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
              placeholder="e.g. 75"
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
              Email Results
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span><strong>Opens:</strong> {result.opens}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span><strong>Clicks:</strong> {result.clicks}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span><strong>Leads/Sales:</strong> {result.leads}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <DollarSign className="text-primary" size={20} />
                <span><strong>Revenue:</strong> ${result.revenue}</span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Want better email results?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl transition text-base"
              >
                <Mail size={18} />
                Start Email Marketing
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto mt-14 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Email Marketing Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does this calculator estimate ROI?</strong>
            <p>
              It uses your campaign’s delivery, open, click, and conversion rates, plus average sale, to estimate total leads and revenue.
            </p>
          </div>
          <div>
            <strong>What’s a good open/click/conversion rate?</strong>
            <p>
              Open: 25–40%. Click: 2–7%. Conversion: 2–5%. Results vary—this tool shows realistic outcomes for your input.
            </p>
          </div>
          <div>
            <strong>Can this improve my email strategy?</strong>
            <p>
              Absolutely — test different scenarios and set goals for future campaigns.
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
          Consult a marketing expert for tailored email campaign advice.
        </p>
        <p className="mb-0">
          Calculations based on standard formulas and your provided data.
        </p>
      </div>
    </div>
  )
}

export default EmailMarketingRoiCalculator
