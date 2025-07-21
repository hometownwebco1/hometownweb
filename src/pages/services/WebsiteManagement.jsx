import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const WebsiteManagement = () => {
  const features = [
    'Ongoing security updates to keep your site protected',
    'Content updates and changes whenever you need them',
    'Performance monitoring to ensure fast loading times',
    'Backup and recovery setup for peace of mind',
    'Monthly health checks and uptime tracking',
    'Technical support from a team that knows your site'
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Website Management Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We handle the ongoing updates, security, and maintenance so your site stays healthy — and you stay focused on running your business.
          </p>
        </div>

        {/* Details Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What’s Included in Our Website Management:
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
            A website isn’t “done” the day it goes live. It needs regular care — updates, monitoring, and support — to continue delivering results.
            That’s where we come in.
          </p>
          <p>
            Our website management service ensures your site stays secure, updated, and running smoothly month after month. 
            You get peace of mind and a professional team in your corner — without having to lift a finger.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Keep Your Website Running Smoothly
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We’ll handle the maintenance so you can focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Request a Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WebsiteManagement
