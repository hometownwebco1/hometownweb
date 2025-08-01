import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ArrowRight, Globe, Settings, TrendingUp, Mail, Facebook } from 'lucide-react'
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
    <div className="min-h-screen bg-site-gradient">
      <Helmet>
        <title>Hometown Web Co | Affordable Website Design for Local Businesses</title>
        <meta
          name="description"
          content="We build professional websites for small businesses that want to grow online. Fast, affordable, and optimized for local success."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hometown Web Co | Affordable Website Design for Local Businesses" />
        <meta property="og:description" content="We build professional websites for small businesses that want to grow online. Fast, affordable, and optimized for local success." />
        <meta property="og:url" content="https://www.hometownwebco.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hometown Web Co | Affordable Website Design for Local Businesses" />
        <meta name="twitter:description" content="We build professional websites for small businesses that want to grow online. Fast, affordable, and optimized for local success." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Hometown Web Co logo" className="h-24 w-auto" loading="lazy" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text-strong mb-6">
            Hometown Website Design for Small Business Growth
          </h1>
          <div className="mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get Your Free Website Demo
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <p className="text-lg gradient-text leading-relaxed max-w-3xl mx-auto">
            We believe every local business deserves a strong online presence. Whether you're a family restaurant,
            local shop, or service provider, we make it simple and affordable to get your business online and
            connect with more customers in your community.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How We Help Your Business Grow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            Our three core services work together to give your business the online presence it needs to thrive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-border"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto" aria-hidden="true">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="mt-12">
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

      {/* Calculator Promo Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Not Sure What You Should Be Spending on Marketing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use our free calculator to estimate your ideal marketing budget and see how many new customers you could be reaching.
          </p>
          <Link
            to="/calculator"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-md"
          >
            Try the Free Marketing Calculator
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-site-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text-strong mb-6">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-lg gradient-text mb-8 max-w-2xl mx-auto">
            Let's talk about how we can help your business reach more customers and grow your local presence online.
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

      {/* Footer Social Link */}
      <footer className="py-10 bg-muted text-center">
        <p className="text-muted-foreground mb-4">Follow Us:</p>
        <a
          href="https://www.facebook.com/profile.php?id=61578313660385"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-primary hover:text-primary/80"
          aria-label="Visit our Facebook page"
        >
          <Facebook className="mr-2" size={20} />
          Facebook
        </a>
      </footer>
    </div>
  )
}

export default Home

