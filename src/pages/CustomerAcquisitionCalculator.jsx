
import { useState } from 'react'

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
    currentBudget: '',
    currentCPA: ''
  })
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6 text-primary">Marketing Budget & Customer Acquisition Calculator</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Gross Monthly Revenue ($)</label>
          <input
            type="number"
            name="revenue"
            value={formData.revenue}
            onChange={handleChange}
            className="w-full border border-border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Business Growth Strategy</label>
          <select
            name="growth"
            value={formData.growth}
            onChange={handleChange}
            className="w-full border border-border rounded px-3 py-2"
          >
            <option value="maintenance">Maintenance</option>
            <option value="growth">Growth</option>
            <option value="aggressive">Aggressive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Business Type</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full border border-border rounded px-3 py-2"
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
          <label className="block text-sm font-medium text-foreground mb-1">Current Marketing Budget (optional)</label>
          <input
            type="number"
            name="currentBudget"
            value={formData.currentBudget}
            onChange={handleChange}
            className="w-full border border-border rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-primary text-white font-semibold px-6 py-2 rounded hover:bg-primary/80 transition">
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-8 p-6 border border-border rounded-lg bg-muted text-foreground space-y-4">
          <h2 className="text-xl font-bold text-primary">Results</h2>
          <p><strong>Recommended Monthly Budget:</strong> ${result.recommendedBudget}</p>
          <p><strong>Target Cost Per Acquisition:</strong> ${result.targetCPA}</p>
          <p><strong>Estimated Customers Acquired:</strong> {result.customers} / month</p>

          <div>
            <h3 className="font-semibold mb-1">Recommended Budget Allocation</h3>
            <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="flex h-full">
                <div className="bg-primary h-full" style={{ width: '60%' }} title="Customer Acquisition"></div>
                <div className="bg-secondary h-full" style={{ width: '25%' }} title="Brand & Content"></div>
                <div className="bg-gray-400 h-full" style={{ width: '15%' }} title="Testing"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs mt-1 text-muted-foreground">
              <span>Customer Acquisition (60%)</span>
              <span>Brand & Content (25%)</span>
              <span>Testing (15%)</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 text-xs text-gray-600 p-4 bg-gray-50 rounded-lg border border-gray-200">
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
