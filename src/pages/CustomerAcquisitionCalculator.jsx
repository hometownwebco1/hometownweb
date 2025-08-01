import { useState } from 'react'
import { Link } from 'react-router-dom'
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
    setTimeout(() => setShowResult(true), 120) // quick fade-in
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col gap-y-8 mt-10">
        <div className="flex items-center mb-2">
          <Calculator className="text-primary mr-3" size={32} />
          <h1 className="text-3xl font-bold text-primary">Marketing Budget & Customer Acquisition Calculator</h1>
        </div>
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
              <option value="growth">Growth (aim for steady new business)</option>
              <option value="aggressive">Aggressive (maximum growth mode)</option>
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

        <div className="mt-12 text-xs text-gray-500 p-4 bg-gray-100 rounded-xl border border-gray-200">
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
    </div>
  )
}

export default CustomerAcquisitionCalculator

