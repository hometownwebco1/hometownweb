import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Users, PieChart, TrendingUp, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const SocialMediaRoi = () => {
  const [form, setForm] = useState({
    spend: '',
    revenue: '',
    followers: '',
    leads: ''
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

    const spend = parseFloat(form.spend)
    const revenue = parseFloat(form.revenue)
    const leads = parseFloat(form.leads)
    const followers = parseFloat(form.followers)

    if (isNaN(spend) || isNaN(revenue) || spend <= 0) return

    const roi = (((revenue - spend) / spend) * 100).toFixed(2)
    const costPerLead = leads > 0 ? (spend / leads).toFixed(2) : 'N/A'
    const costPerFollower = followers > 0 ? (spend / followers).toFixed(2) : 'N/A'

    setResult({
      roi,
      costPerLead,
      costPerFollower
    })
    setTimeout(() => setShowResult(true), 120)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Social Media ROI Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Estimate your true ROI from social media marketing. See your return, cost per lead, and cost per follower instantly. Free tool for small business owners."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/social-media-roi" />
        <meta property="og:title" content="Social Media ROI Calculator | Hometown Web Co" />
        <meta property="og:description" content="Estimate your real ROI, cost per lead, and cost per follower from social media campaigns. Free calculator for small business." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/social-media-roi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media ROI Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="See the true ROI of your social media marketing, plus cost per lead and follower, with our free calculator." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Social Media ROI Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Estimate your true return on investment, cost per lead, and cost per follower for your social media marketing.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculators/social-media-roi",
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
          <PieChart className="text-primary" size={32} />
          Social Media ROI Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Want to know if your social media campaigns are really working? Enter your numbers below to instantly see your true ROI, cost per lead, and cost per follower.
        </p>
        <p className="text-base text-gray-600">
          Built for local businesses, contractors, retail, healthcare, and more. 
          Use your numbers from Facebook, Instagram, LinkedIn, or any social platform.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Want to turn more followers into leads? <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">See our digital marketing services.</Link>
        </div>
      </div>
      {/* Calculator Card */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Ad Spend / Promotion Budget ($)</label>
            <input
              type="number"
              name="spend"
              value={form.spend}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 350"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Revenue Generated ($)</label>
            <input
              type="number"
              name="revenue"
              value={form.revenue}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 1100"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">New Leads from Social (optional)</label>
            <input
              type="number"
              name="leads"
              value={form.leads}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              placeholder="e.g. 8"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">New Followers Gained (optional)</label>
            <input
              type="number"
              name="followers"
              value={form.followers}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              placeholder="e.g. 70"
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
              <PieChart className="inline-block mr-2" size={28} />
              Your Social Media ROI
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span><strong>ROI:</strong> {result.roi}%</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <Users className="text-primary" size={20} />
                <span><strong>Cost Per Lead:</strong> ${result.costPerLead}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <Users className="text-primary" size={20} />
                <span><strong>Cost Per Follower:</strong> ${result.costPerFollower}</span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Want to boost your ROI even higher?</p>
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
        <h2 className="text-xl font-bold mb-4">Social Media ROI Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does the calculator work?</strong>
            <p>Just enter your ad spend, revenue, and optionally new leads or followers. We’ll estimate ROI, cost per lead, and cost per follower.</p>
          </div>
          <div>
            <strong>Why does ROI matter?</strong>
            <p>ROI (Return on Investment) shows whether your social campaigns are profitable or need improvement. Track it every month.</p>
          </div>
          <div>
            <strong>What if I don’t know my leads or followers?</strong>
            <p>No problem. We’ll still give you your basic ROI calculation — fill in what you can measure.</p>
          </div>
          <div>
            <strong>What social platforms can I use this for?</strong>
            <p>Any — Facebook, Instagram, LinkedIn, X/Twitter, Pinterest, TikTok, YouTube, and more.</p>
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

export default SocialMediaRoi
