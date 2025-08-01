import { Helmet } from 'react-helmet'
import { BarChart2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const LeadValueCalculator = () => {
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
        <p>This is a static render test.</p>
        <Link to="/services/digital-marketing" className="text-primary underline hover:text-primary/80">
          See our digital marketing services.
        </Link>
      </div>
    </div>
  )
}

export default LeadValueCalculator
