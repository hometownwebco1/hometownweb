import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Calculator, DollarSign, Users, TrendingUp, Mail } from 'lucide-react'

const industryBenchmarks = {
  retail: 0.15,
  restaurant: 0.12,
  service_local: 0.18,
  professional: 0.25,
  construction: 0.20,
  healthcare: 0.16,
  other: 0.17
}

const calculateTargetCPA = (businessType, revenue) => {
  const benchmark = industryBenchmarks[businessType] || industryBenchmarks.other
  const avgCustomerValue = revenue / 100
  let targetCPA = avgCustomerValue * benchmark
  targetCPA = Math.max(targetCPA, 25)
  return Math.round(targetCPA)
}

const calculatePotentialCustomers = (budget, cpa) => {
  if (cpa <= 0) return 0
  return Math.floor(budget / cpa)
}

const CustomerAcquisitionCalculator = () => {
  const [formData, setFormData] = useState({
    revenue: '',
    growth: 'maintenance',
    businessType: 'other',
    currentBudget: ''
  })
  const [result, setResult] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResult(false)
    const revenue = parseFloat(formData.revenue)
    const currentBudget = parseFloat(formData.currentBudget || 0)

    if (isNaN(revenue)) return

    const targetCPA = calculateTargetCPA(formData.businessType, revenue)
    const budget = currentBudget || revenue * (formData.growth === 'aggressive' ? 0.15 : formData.growth === 'growth' ? 0.10 : 0.05)
    const customers = calculatePotentialCustomers(budget, targetCPA)

    setResult({
      recommendedBudget: Math.round(budget),
      targetCPA,
      customers
    })
    setTimeout(() => setShowResult(true), 120)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Marketing Budget & Customer Acquisition Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Estimate your recommended marketing budget, target customer acquisition cost (CPA), and potential customers for your small business. Free tool by Hometown Web Co."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculator" />
        <meta property="og:title" content="Marketing Budget & Customer Acquisition Calculator | Hometown Web Co" />
        <meta property="og:description" content="Estimate your recommended marketing budget, target CPA, and new customer potential with our free calculator for local businesses." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Budget & Customer Acquisition Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Estimate your recommended marketing budget, target CPA, and new customer potential with our free calculator for local businesses." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Marketing Budget & Customer Acquisition Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Estimate your small business marketing budget, target CPA, and potential new customers for free.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculator",
          "publisher": {
            "@type": "Organization",
            "name": "Hometown Web Co",
            "url": "https://www.hometownwebco.com"
          }
        })}</script>
      </Helmet>

      {/* SEO intro content */}
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex justify-center items-center gap-2">
          <Calculator className="text-primary" size={32} />
          Small Business Marketing Budget Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-3">
          How much should you spend on marketing? Use our free Customer Acquisition Calculator to estimate your ideal marketing budget, target cost per acquisition (CPA), and how many new customers your business could attract each month.
        </p>
        <p className="text-base text-gray-600">
          Designed for local businesses, contractors, restaurants, healthcare, retail, and more. 
          Backed by industry benchmarks—no guesswork, just smarter growth.
        </p>
      </div>

      {/* Modern calculator card */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Gross Monthly Revenue ($)</label>
            <input
              type="number"
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 12000"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Business Growth Strategy</label>
            <select
              name="growth"
              value={formData.growth}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
            >
              <option value="maintenance">Maintenance (hold steady)</option>
              <option value="growth">Growth (steady new business)</option>
              <option value="aggressive">Aggressive (max growth mode)</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Business Type</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
            >
              <option value="retail">Retail</option>
              <option value="restaurant">Restaurant</option>
              <option value="service_local">Local Service</option>
              <option value="professional">Professional Services</option>
              <option value="construction">Construction</option>
              <option value="healthcare">Healthcare</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Current Marketing Budget <span className="text-gray-400">(optional)</span></label>
            <input
              type="number"
              name="currentBudget"
              value={formData.currentBudget}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              placeholder="e.g. 1500"
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

        {result && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <DollarSign className="inline-block mr-2" size={28} />
              Your Estimated Results
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <DollarSign className="text-primary" size={20} />
                <span><strong>Recommended Monthly Budget:</strong> ${result.recommendedBudget}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <Users className="text-primary" size={20} />
                <span><strong>Target Cost Per Acquisition:</strong> ${result.targetCPA}</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span><strong>Estimated Customers Acquired:</strong> {result.customers} / month</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-lg text-gray-700 mb-2">Recommended Budget Allocation</h3>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden mb-1 max-w-md mx-auto">
                <div className="flex h-full">
                  <div className="bg-blue-600 h-full" style={{ width: '60%' }} title="Customer Acquisition"></div>
                  <div className="bg-indigo-500 h-full" style={{ width: '25%' }} title="Brand & Content"></div>
                  <div className="bg-gray-400 h-full" style={{ width: '15%' }} title="Testing"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs mt-1 text-muted-foreground max-w-md mx-auto">
                <span>Customer Acquisition (60%)</span>
                <span>Brand & Content (25%)</span>
                <span>Testing (15%)</span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Want help turning these numbers into real growth?</p>
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

      {/* FAQ/LSI Section for SEO */}
      <div className="max-w-2xl mx-auto mt-14 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Customer Acquisition Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does this calculator work?</strong>
            <p>
              Our calculator uses proven industry benchmarks for marketing spend and customer acquisition cost (CPA). Just enter your business info to get a smart estimate—no complex math required.
            </p>
          </div>
          <div>
            <strong>Why is cost per acquisition (CPA) important?</strong>
            <p>
              CPA helps you measure the real value of your marketing. If you know your target CPA, you can spend confidently, knowing you’ll stay profitable as you grow.
            </p>
          </div>
          <div>
            <strong>What’s a good marketing budget for my business?</strong>
            <p>
              Most small businesses spend 5–15% of revenue on marketing. Our tool gives you a custom estimate based on your goals and industry.
            </p>
          </div>
          <div>
            <strong>Does this replace professional advice?</strong>
            <p>
              No. This calculator is for educational purposes only. Always consult a marketing expert before making large investments.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80 text-base">
            See Our Digital Marketing Services
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mt-10 mb-4 text-xs text-gray-500 p-4 bg-gray-100 rounded-xl border border-gray-200">
        <h4 className="font-bold mb-2">Legal Disclaimer</h4>
        <p className="mb-2">
          This calculator provides estimates based on industry averages and simplified assumptions. Results may vary significantly.
        </p>
        <p className="mb-2">
          This is not financial or professional advice. Always consult a qualified expert before making business decisions.
        </p>
        <p className="mb-0">
          Benchmarks and assumptions are based on publicly available data and do not guarantee results.
        </p>
      </div>
    </div>
  )
}

export default CustomerAcquisitionCalculator
