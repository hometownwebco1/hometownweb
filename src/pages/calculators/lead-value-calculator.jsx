import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Calculator, DollarSign, Users, BarChart2, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const LeadValueCalculator = () => {
  const [form, setForm] = useState({
    closeRate: '',
    avgSale: '',
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

    const closeRate = parseFloat(form.closeRate)
    const avgSale = parseFloat(form.avgSale)
    const leads = parseFloat(form.leads)

    if (isNaN(closeRate) || isNaN(avgSale) || isNaN(leads)) return

    // Lead value: ((Leads × Close Rate) × Avg Sale) / Leads = Close Rate × Avg Sale
    const leadValue = (closeRate / 100) * avgSale
    const estRevenue = leads * leadValue

    setResult({
      leadValue: leadValue.toFixed(2),
      estRevenue: estRevenue.toFixed(2)
    })

    setTimeout(() => setShowResult(true), 120)
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Lead Value Calculator | Hometown Web Co</title>
        <meta
          name="description"
          content="Find out exactly what each lead is worth to your business. Calculate your lead value and estimated revenue per month. Essential for local businesses, contractors, and service pros."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators/lead-value-calculator" />
        <meta property="og:title" content="Lead Value Calculator | Hometown Web Co" />
        <meta property="og:description" content="Calculate the real value of each lead and your estimated monthly revenue with our free local business lead value calculator." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators/lead-value-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lead Value Calculator | Hometown Web Co" />
        <meta name="twitter:description" content="Calculate the real value of each lead and your estimated monthly revenue with our free local business lead value calculator." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Lead Value Calculator",
          "operatingSystem": "All",
          "applicationCategory": "BusinessApplication",
          "description": "Calculate the true value of every lead and estimated revenue for your small business or local service.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://www.hometownwebco.com/calculators/lead-value-calculator",
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
          <BarChart2 className="text-primary" size={32} />
          Lead Value Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Want to know exactly what every lead is worth to your business? Plug in your numbers and get the true value of a new inquiry, phone call, or form submission—plus estimated revenue for your lead volume.
        </p>
        <p className="text-base text-gray-600">
          Perfect for contractors, service businesses, and anyone running digital marketing or ads. Understanding your lead value is the first step to spending smarter and closing more deals.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Need help increasing your lead quality or close rate? <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">See our digital marketing services.</Link>
        </div>
      </div>

      {/* Calculator Card */}
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Average Monthly Leads</label>
            <input
              type="number"
              name="leads"
              value={form.leads}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              required
              placeholder="e.g. 25"
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
              placeholder="e.g. 35"
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
              placeholder="e.g. 1200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            <TrendingUp size={22} />
            Calculate Lead Value
          </button>
        </form>

        {result && (
          <div className={`transition-all duration-300 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-4`}>
            <div className="p-8 bg-primary/10 rounded-2xl text-center text-2xl font-semibold text-primary shadow-inner animate-fade-in">
              <DollarSign className="inline-block mr-2" size={28} />
              Your Results
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <BarChart2 className="text-primary" size={20} />
                <span><strong>Lead Value:</strong> ${result.leadValue} per lead</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow text-xl w-full max-w-md flex items-center gap-3">
                <Users className="text-primary" size={20} />
                <span><strong>Estimated Monthly Revenue:</strong> ${result.estRevenue}</span>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-base mb-2">Ready to turn more leads into real revenue?</p>
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
        <h2 className="text-xl font-bold mb-4">Lead Value Calculator FAQ</h2>
        <div className="space-y-5 text-gray-800">
          <div>
            <strong>How does the lead value calculator work?</strong>
            <p>
              Enter your average close rate, average sale value, and monthly leads. The calculator estimates what each new lead is worth—and your expected revenue if you close at that rate.
            </p>
          </div>
          <div>
            <strong>Why is knowing my lead value important?</strong>
            <p>
              Knowing your lead value tells you how much you can afford to spend on marketing, advertising, and lead generation—without guessing.
            </p>
          </div>
          <div>
            <strong>How can I improve my close rate or lead value?</strong>
            <p>
              Focus on sales follow-up, qualification, and targeting higher-value customers. <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">Our team can help.</Link>
            </p>
          </div>
          <div>
            <strong>Is this calculator only for local businesses?</strong>
            <p>
              No, but it’s especially useful for local businesses, contractors, and service providers who run paid ads or want to know their real marketing ROI.
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

export default LeadValueCalculator
