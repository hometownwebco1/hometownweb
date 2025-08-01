import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Users, DollarSign, BarChart2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const LifetimeValueCalculator = () => {
  const [orderValue, setOrderValue] = useState('')
  const [frequency, setFrequency] = useState('')
  const [retention, setRetention] = useState('')
  const [ltv, setLTV] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResult(false)
    const ov = parseFloat(orderValue)
    const fq = parseFloat(frequency)
    const rt = parseFloat(retention)
    if (isNaN(ov) || isNaN(fq) || isNaN(rt) || ov <= 0 || fq <= 0 || rt <= 0) return
    const result = ov * fq * rt
    setLTV(result)
    setTimeout(() => setShowResult(true), 150)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Customer Lifetime Value (LTV) Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Estimate your customer's lifetime value (LTV). Input average order value, purchase frequency, and retention to find out how much each customer is really worth. Free, SEO-optimized tool."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/lifetime-value" />
        <meta property="og:title" content="Customer Lifetime Value (LTV) Calculator | Hometown Web Co" />
        <meta property="og:description" content="Find your customer lifetime value. See how much a customer is worth over time to help you plan smarter marketing and business growth." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/lifetime-value" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Lifetime Value (LTV) Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Estimate customer LTV with our free, easy calculator. Enter order value, frequency, and retention—get instant answers." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Customer Lifetime Value Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Estimate customer lifetime value (LTV) with your order value, frequency, and retention. Free, simple, and fast.",
          "url": "https://www.hometownwebco.com/calculators/lifetime-value",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Hometown Web Co",
            "url": "https://www.hometownwebco.com"
          }
        })}</script>
      </Helmet>

      {/* Intro Content */}
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex justify-center items-center gap-2">
          <BarChart2 className="text-primary" size={32} />
          Customer Lifetime Value (LTV) Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-3">
          Find out what a customer is really worth to your business—over the entire relationship. Enter your average order value, purchase frequency, and customer retention to see the true LTV.
        </p>
        <p className="text-base text-gray-600">
          Great for small business, agencies, consultants, and anyone planning smart marketing.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Average Order Value ($)</label>
            <input
              type="number"
              value={orderValue}
              onChange={e => setOrderValue(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 100"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Purchases Per Year (per customer)</label>
            <input
              type="number"
              value={frequency}
              onChange={e => setFrequency(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 4"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Customer Retention (years)</label>
            <input
              type="number"
              value={retention}
              onChange={e => setRetention(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 3"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <DollarSign size={22} />
            Calculate LTV
          </button>
        </form>

        {ltv !== null && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <Users className="inline-block mr-2" size={28} />
              Estimated Customer Lifetime Value: ${ltv.toFixed(2)}
            </div>
            <div className="mt-8 text-center">
              <p className="text-base mb-2">Want to increase your customer LTV? See how we help businesses grow with retention strategies.</p>
              <Link
                to="/services/digital-marketing"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl transition text-base"
              >
                <ArrowRight size={18} />
                See Digital Marketing Services
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section for SEO */}
      <div className="max-w-2xl mx-auto mt-14 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Lifetime Value Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>What is customer lifetime value (LTV)?</strong>
            <p>
              LTV is the total revenue a business expects from a single customer account over the whole relationship. It’s a critical metric for budgeting, marketing, and growth.
            </p>
          </div>
          <div>
            <strong>Why does LTV matter?</strong>
            <p>
              If you know your LTV, you can spend more to acquire and retain customers—and still grow profitably.
            </p>
          </div>
          <div>
            <strong>How can I increase my LTV?</strong>
            <p>
              Improve retention, upsell/cross-sell, and offer great service. Happy, loyal customers buy more, stay longer, and refer others.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80 text-base">
            Grow Customer Value With Us
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mt-10 mb-4 text-xs text-gray-500 p-4 bg-gray-100 rounded-xl border border-gray-200">
        <h4 className="font-bold mb-2">Legal Disclaimer</h4>
        <p className="mb-2">
          This calculator provides estimates based on your input and simplified assumptions. Results may vary significantly.
        </p>
        <p className="mb-2">
          This is not financial or professional advice. Always consult a qualified expert before making business decisions.
        </p>
      </div>
    </div>
  )
}

export default LifetimeValueCalculator
