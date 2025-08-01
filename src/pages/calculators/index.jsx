import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Calculator,
  TrendingUp,
  Globe,
  DollarSign,
  Users,
  BarChart3,
  PieChart,
  Mail,
  Briefcase
} from 'lucide-react'

const calculators = [
  {
    icon: Calculator,
    title: "Small Business Marketing Budget Calculator",
    path: "/calculators/customer-acquisition",
    description: "Estimate your marketing budget, target CPA, and new customer potential based on your goals and industry.",
    linkTo: "/services/digital-marketing"
  },
  {
    icon: Globe,
    title: "Local SEO ROI Calculator",
    path: "/calculators/local-seo-roi",
    description: "See the ROI your business could earn from local SEO. Get traffic, leads, and sales projections.",
    linkTo: "/services/digital-marketing"
  },
  {
    icon: DollarSign,
    title: "Website Cost Estimator",
    path: "/calculators/website-cost",
    description: "Estimate what it costs to build or redesign your business website — with all must-have features.",
    linkTo: "/services/website-design"
  },
  {
    icon: TrendingUp,
    title: "Google Ads ROI Calculator",
    path: "/calculators/google-ads-roi",
    description: "Find out the real return you can expect from running local Google Ads campaigns.",
    linkTo: "/services/digital-marketing"
  },
  {
    icon: Users,
    title: "Email Marketing ROI Calculator",
    path: "/calculators/email-marketing-roi",
    description: "Project how much revenue email marketing can generate for your business — before you hit send.",
    linkTo: "/services/email-marketing"
  },
  {
    icon: BarChart3,
    title: "Lead Value Calculator",
    path: "/calculators/lead-value",
    description: "See what each new lead is actually worth to your business (and how much you can pay for them).",
    linkTo: "/services/digital-marketing"
  },
  {
    icon: PieChart,
    title: "Break-Even Calculator",
    path: "/calculators/break-even",
    description: "Know exactly how many sales you need to break even and start making profit — fast.",
    linkTo: "/services/website-management"
  },
  {
    icon: Briefcase,
    title: "Social Media ROI Calculator",
    path: "/calculators/social-media-roi",
    description: "Estimate the true return on your social media campaigns so you can double down on what works.",
    linkTo: "/services/digital-marketing"
  },
  {
    icon: BarChart3,
    title: "Website Traffic Estimator",
    path: "/calculators/website-traffic-estimator",
    description: "Forecast your future website visitors based on current performance and growth goals.",
    linkTo: "/services/digital-marketing"
  },
  {
    icon: Users,
    title: "Lifetime Value (LTV) Calculator",
    path: "/calculators/lifetime-value",
    description: "Find out how much a single customer is worth to your business over their lifetime.",
    linkTo: "/services/website-management"
  },
  {
    icon: Globe,
    title: "Conversion Rate Calculator",
    path: "/calculators/conversion-rate",
    description: "Easily calculate your website or campaign conversion rates. Great for measuring marketing wins.",
    linkTo: "/services/digital-marketing"
  }
]

export default function Calculators() {
  return (
    <div className="min-h-screen bg-site-gradient py-20">
      <Helmet>
        <title>Free Marketing & Business Calculators for Small Businesses | Hometown Web Co</title>
        <meta
          name="description"
          content="Discover 10 powerful calculators for small business owners — estimate marketing budget, ROI, lead value, website cost, and more. Built for real-world results."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/calculators" />
        <meta property="og:title" content="Free Marketing & Business Calculators for Small Businesses | Hometown Web Co" />
        <meta property="og:description" content="Instantly estimate your marketing budget, ROI, and growth potential. Try our free calculators — designed for contractors, service pros, retail, restaurants, and more." />
        <meta property="og:url" content="https://www.hometownwebco.com/calculators" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Marketing & Business Calculators for Small Businesses | Hometown Web Co" />
        <meta name="twitter:description" content="Powerful calculators for local business growth. Budget, ROI, cost — all the numbers you need to win online." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Small Business Marketing & Growth Calculators",
          "itemListElement": calculators.map((calc, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "url": `https://www.hometownwebco.com${calc.path}`,
            "name": calc.title
          }))
        })}</script>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Free Marketing & Business Calculators for Small Businesses</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 max-w-3xl mx-auto">
            10 calculators built for local business owners — estimate your marketing budget, ROI, website cost, and more. Get instant answers and make smarter decisions, fast.
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Contractors, service pros, restaurants, healthcare, retail: this is for you. <Link to="/services/digital-marketing" className="text-primary underline">Need expert help? See our digital marketing services.</Link>
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {calculators.map((calc, idx) => (
            <div key={idx} className="bg-white/90 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition hover:-translate-y-1">
              <calc.icon size={40} className="text-primary mb-3" aria-hidden="true" />
              <h2 className="text-xl font-bold text-foreground mb-2">{calc.title}</h2>
              <p className="text-base text-muted-foreground mb-6">{calc.description}</p>
              <Link
                to={calc.path}
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded font-semibold hover:bg-primary/90 hover:shadow-xl transition"
                aria-label={`Try ${calc.title}`}
              >
                Try Calculator →
              </Link>
              <Link
                to={calc.linkTo}
                className="mt-3 text-sm text-primary underline hover:text-primary/80"
                aria-label={`See related service for ${calc.title}`}
              >
                Related Service
              </Link>
            </div>
          ))}
        </div>
        {/* SEO FAQ Section */}
        <section className="bg-muted rounded-xl p-8 text-sm text-muted-foreground max-w-4xl mx-auto">
          <h3 className="font-bold mb-3">Calculator FAQs</h3>
          <div className="space-y-3">
            <div>
              <strong>Who are these calculators for?</strong>
              <p>Local business owners: contractors, service pros, healthcare, restaurants, retail, and more. Use them to plan smarter marketing and business moves.</p>
            </div>
            <div>
              <strong>How accurate are the results?</strong>
              <p>Our tools use industry benchmarks and proven formulas. They’re for guidance — always consult an expert before making big investments.</p>
            </div>
            <div>
              <strong>Can I use more than one calculator?</strong>
              <p>Yes! Every tool is free and always available. Use them as often as you need — and share with your team.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
