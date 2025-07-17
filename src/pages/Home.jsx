import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Settings, TrendingUp, Mail } from 'lucide-react'
import logo from '../assets/HometownWebCo.png'

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Beautiful, professional websites that represent your business perfectly and attract more customers.'
    },
    {
      icon: Settings,
      title: 'Website Management',
      description: 'Keep your website updated, secure, and running smoothly with our ongoing maintenance services.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Get found online with SEO, social media, and targeted advertising that brings real results.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src={logo} alt="HomeTown Web Co" className="h-24 w-auto" />
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Helping Hometown Businesses Get Online
            </h1>
            
            {/* CTA Button */}
            <div className="mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Get Your Free Website Demo
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            {/* Welcome Paragraph */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every local business deserves a strong online presence. 
                Whether you're a family restaurant, local shop, or service provider, 
                we make it simple and affordable to get your business online and 
                connect with more customers in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Help Your Business Grow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our three core services work together to give your business 
              the online presence it needs to thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-border"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Learn More About Our Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's talk about how we can help your business reach more customers 
            and grow your local presence online.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <Mail className="mr-2" size={20} />
            Request Free Website Demo
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

