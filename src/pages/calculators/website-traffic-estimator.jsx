import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Users, TrendingUp, Globe, ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const WebsiteTrafficEstimator = () => {
  const [goal, setGoal] = useState('')
  const [orderValue, setOrderValue] = useState('')
  const [conversionRate, setConversionRate] = useState('')
  const [trafficNeeded, setTrafficNeeded] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResult(false)
    const goalVal = parseFloat(goal)
    const orderVal = parseFloat(orderValue)
    const convRate = parseFloat(conversionRate)
    if (isNaN(goalVal) || isNaN(orderVal) || isNaN(convRate) || orderVal <= 0 || convRate <= 0) return
    const conversionsNeeded = goalVal / orderVal
    const traffic = conversionsNeeded / (convRate / 100)
    setTrafficNeeded(Math.ceil(traffic))
    setTimeout(() => setShowResult(true), 150)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Website Traffic Estimator Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Estimate how much website traffic you need to hit your sales or lead goals. Enter your revenue target, average order value, and conversion rate. Free, SEO-optimized tool."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/website-traffic-estimator" />
        <meta property="og:title" content="Website Traffic Estimator Calculator | Hometown Web Co" />
        <meta property="og:description" content="How many website visitors do you need to hit your goals? Use our free estimator—just enter your sales target, order value, and conversion rate." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/website-traffic-estimator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Traffic Estimator Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Estimate the number of website visitors you need to achieve your sales or lead goals. Try the free calculator now!" />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Website Traffic Estimator Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Estimate how much website traffic you need to hit a revenue or sales goal. Enter your goal, order value, and conversion rate.",
          "url": "https://www.hometownwebco.com/calculators/website-traffic-estimator",
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
          <Globe className="text-primary" size={32} />
          Website Traffic Estimator
        </h1>
        <p className="text-lg text-gray-700 mb-3">
          Wondering how much traffic you need to reach your sales or lead goals? Just enter your revenue target, average order value, and website conversion rate to see your answer instantly.
        </p>
        <p className="text-base text-gray-600">
          Perfect for local businesses, e-commerce, and anyone building their online growth plan.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Revenue or Lead Goal ($ or #)</label>
            <input
              type="number"
              value={goal}
              onChange={e => setGoal(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 5000"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Average Order Value ($)</label>
            <input
              type="number"
              value={orderValue}
              onChange={e => setOrderValue(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 150"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Conversion Rate (%)</label>
            <input
              type="number"
              value={conversionRate}
              onChange={e => setConversionRate(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0.1"
              max="100"
              step="0.01"
              required
              placeholder="e.g. 3"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <TrendingUp size={22} />
            Estimate Traffic Needed
          </button>
        </form>

        {trafficNeeded !== null && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <Users className="inline-block mr-2" size={28} />
              Estimated Website Visitors Needed: {trafficNeeded}
            </div>
            <div className="mt-8 text-center">
              <p className="text-base mb-2">Want to get more traffic (and turn it into results)?</p>
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
        <h2 className="text-xl font-bold mb-4">Website Traffic Estimator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does this estimator work?</strong>
            <p>
              Enter your revenue/lead goal, average order value, and your conversion rate. We’ll tell you how many visitors you need to hit your target.
            </p>
          </div>
          <div>
            <strong>What is a good conversion rate?</strong>
            <p>
              Most small business sites convert at 2–5%. E-commerce is often lower (1–3%). Test and optimize for better results.
            </p>
          </div>
          <div>
            <strong>How do I get more traffic?</strong>
            <p>
              Invest in SEO, Google Ads, social media, and quality content. The right strategy depends on your market and goals.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80 text-base">
            Learn About Traffic-Boosting Services
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

export default WebsiteTrafficEstimator
