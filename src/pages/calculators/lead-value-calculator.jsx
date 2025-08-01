import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { BarChart2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const LeadValueCalculator = () => {
  const [form, setForm] = useState({
    closeRate: '',
    avgSale: '',
    leads: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Lead Value Calculator | Hometown Web Co</title>
      </Helmet>
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex justify-center items-center gap-2">
          <BarChart2 className="text-primary" size={32} />
          Lead Value Calculator
        </h1>
        <form className="flex flex-col gap-y-6 max-w-lg mx-auto">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Average Monthly Leads</label>
            <input
              type="number"
              name="leads"
              value={form.leads}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              placeholder="e.g. 25"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Lead-to-Customer Close Rate (%)</label>
            <input
              type="number"
              name="closeRate"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              max="100"
              placeholder="e.g. 35"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">Average Sale Value ($)</label>
            <input
              type="number"
              name="avgSale"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary text-lg bg-white shadow-inner"
              min="0"
              placeholder="e.g. 1200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            Calculate Lead Value
          </button>
        </form>
        <p className="mt-4">
          <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">
            See our digital marketing services.
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LeadValueCalculator
