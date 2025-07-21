import { Helmet } from 'react-helmet'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const EmailMarketing = () => {
  const features = [
    'Custom-designed email campaigns tailored to your brand',
    'Subscriber list management and segmentation',
    'Automated follow-up sequences to increase conversions',
    'Monthly newsletters to keep your audience engaged',
    'Campaign analytics and performance reports',
    'A/B testing to improve open and click-through rates'
  ]

  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>Email Marketing Services | Hometown Web Co</title>
        <meta
          name="description"
          content="We help small businesses stay top-of-mind and drive conversions with professional email marketing campaigns — fully managed and optimized."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/services/email-marketing" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Email Marketing Services | Hometown Web Co" />
        <meta property="og:description" content="We help small businesses stay top-of-mind and drive conversions with professional email marketing campaigns — fully managed and optimized." />
        <meta property="og:url" content="https://www.hometownwebco.com/services/email-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Marketing Services | Hometown Web Co" />
        <meta name="twitter:description" content="We help small businesses stay top-of-mind and drive conversions with professional email marketing campaigns — fully managed and optimized." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Email Marketing Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Keep your business top-of-mind with beautifully crafted, strategic email campaigns that turn subscribers into loyal customers.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What We Offer in Email Marketing:
          </h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-muted-foreground text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-20 space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Email marketing remains one of the most cost-effective tools to build customer relationships, increase retention, and drive consistent sales. 
            If you’re not communicating with your audience regularly, you’re leaving money on the table.
          </p>
          <p>
            Our email marketing services help local businesses grow by delivering timely, well-designed messages that speak to your customers’ needs — all without adding to your workload.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Connect with Your Customers?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We’ll design, write, and automate your email campaigns so you stay top-of-mind and drive consistent sales.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Start Email Marketing Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmailMarketing
