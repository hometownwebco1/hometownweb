import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Users, TrendingUp, Percent, ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const ConversionRateCalculator = () => {
  const [visitors, setVisitors] = useState('')
  const [conversions, setConversions] = useState('')
  const [conversionRate, setConversionRate] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResult(false)
    const v = parseFloat(visitors)
    const c = parseFloat(conversions)
    if (isNaN(v) || isNaN(c) || v <= 0 || c < 0) return
    const rate = (c / v) * 100
    setConversionRate(rate)
    setTimeout(() => setShowResult(true), 150)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Website Conversion Rate Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Calculate your website conversion rate instantly! Find out what percentage of visitors take action (buy, call, sign up). Free tool for small business, e-commerce, and marketers."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/conversion-rate" />
        <meta property="og:title" content="Website Conversion Rate Calculator | Hometown Web Co" />
        <meta property="og:description" content="Calculate your website conversion rate instantly. See what percentage of visitors become leads or sales. Free, fast, and accurate tool for business owners and marketers." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/conversion-rate" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Conversion Rate Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Instantly calculate your website conversion rate. Enter visitors and conversions for your site or landing page—get your percentage, fast." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Website Conversion Rate Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Instantly calculate your website's conversion rate—just enter total visitors and conversions. Free, simple, and accurate tool for business owners.",
          "url": "https://www.hometownwebco.com/calculators/conversion-rate",
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
          <Percent className="text-primary" size={32} />
          Website Conversion Rate Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-3">
          Instantly calculate your website's conversion rate. Just enter your total visitors and conversions (leads, sales, or signups) to see what percentage of visitors are taking action.
        </p>
        <p className="text-base text-gray-600">
          Perfect for local businesses, e-commerce sites, and digital marketers. Use your results to optimize your website and grow faster.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Total Website Visitors</label>
            <input
              type="number"
              value={visitors}
              onChange={e => setVisitors(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="1"
              required
              placeholder="e.g. 1000"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Total Conversions (Leads, Sales, or Signups)</label>
            <input
              type="number"
              value={conversions}
              onChange={e => setConversions(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 54"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <TrendingUp size={22} />
            Calculate
          </button>
        </form>

        {conversionRate !== null && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <Percent className="inline-block mr-2" size={28} />
              Your Conversion Rate: {conversionRate.toFixed(2)}%
            </div>
            <div className="mt-8 text-center">
              <p className="text-base mb-2">Not happy with your conversion rate? We can help you improve it.</p>
              <Link
                to="/services/website-design"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl transition text-base"
              >
                <ArrowRight size={18} />
                See Website Design Services
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* FAQ/LSI Section for SEO */}
      <div className="max-w-2xl mx-auto mt-14 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Conversion Rate Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>What is a conversion rate?</strong>
            <p>
              Conversion rate is the percentage of website visitors who complete a desired action (like calling, filling out a form, or making a purchase). Higher conversion rates mean your site is doing its job.
            </p>
          </div>
          <div>
            <strong>What’s a “good” website conversion rate?</strong>
            <p>
              It depends on your industry and offer. Most local service businesses see 2–5%, while e-commerce sites may range from 1–3%. Always compare against your own past performance.
            </p>
          </div>
          <div>
            <strong>How can I improve my conversion rate?</strong>
            <p>
              Start by simplifying your website, improving your call-to-action, and building trust (testimonials, reviews, guarantees). Test changes and measure results!
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/services/website-design" className="text-primary underline hover:text-primary/80 text-base">
            Learn About Conversion-Focused Website Design
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

export default ConversionRateCalculator
