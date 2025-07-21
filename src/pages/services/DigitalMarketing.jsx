import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const DigitalMarketing = () => {
  const features = [
    'Local SEO to boost your visibility in Google Maps and search results',
    'Google My Business profile setup and optimization',
    'Social media posting and audience engagement strategies',
    'Content creation to attract, educate, and convert customers',
    'Online review monitoring and response support',
    'Analytics and performance tracking with monthly insights'
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Digital Marketing Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help local businesses grow their online reach and attract real customers through targeted digital marketing.
          </p>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What We Offer in Digital Marketing:
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

        {/* SEO Text Block */}
        <div className="mb-20 space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            If your business isn’t showing up online, you're missing out on customers who are actively looking for services like yours.
            We use proven local SEO and digital marketing strategies to get your business noticed — and keep it top-of-mind.
          </p>
          <p>
            Our marketing services are designed for small business owners who want real-world results: more phone calls, more website visits, and more local awareness.
            We’ll build you a strategy that fits your goals, budget, and bandwidth.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let’s Grow Your Reach
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'll handle the digital side — so you can focus on doing what you do best.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Talk to a Marketing Specialist
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing
