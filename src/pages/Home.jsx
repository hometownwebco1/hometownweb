import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ArrowRight, Globe, Settings, TrendingUp, Mail, Facebook, Instagram, Youtube } from 'lucide-react'
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
    <div className="min-h-screen bg-site-gradient text-foreground">
      <Helmet>
        <title>Hometown Web Co | Affordable Website Design for Local Businesses</title>
        <meta name="description" content="We build professional websites for small businesses that want to grow online. Fast, affordable, and optimized for local success." />
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

        {/* Organization JSON-LD (no physical address; “local anywhere”) */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hometown Web Co",
          "url": "https://www.hometownwebco.com",
          "logo": "https://www.hometownwebco.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61578313660385",
            "https://www.instagram.com/hometownwebco/",
            "https://www.youtube.com/@hometownwebco"
          ]
        })}</script>
      </Helmet>

      {/* Hero Section with Logo */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <img
            src={logo}
            alt="Hometown Web Co Logo"
            className="mx-auto mb-6 w-32 h-auto md:w-48"
            draggable={false}
          />
          <h1 className="text-3xl md:text-5xl font-bold gradient-text-strong mb-6 mt-4">
            Hometown Website Design for Small Business Growth
          </h1>
          <p className="text-base md:text-lg gradient-text max-w-2xl mx-auto mb-8">
            We believe every local business deserves a strong online presence. Whether you're a family restaurant,
            local shop, or service provider, we make it simple and affordable to get your business online and
            connect with more customers in your community.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium text-base md:text-lg rounded-lg hover:bg-primary/90 transition-all shadow-md"
          >
            Get Your Free Website Demo
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">How We Help Your Business Grow</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our three core services work together to give your business the online presence it needs to thrive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-background p-6 md:p-8 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10">
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
      <section className="py-16 md:py-24 px-4 bg-background border-t border-border text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Not Sure What You Should Be Spending on Marketing?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Use our free calculator to estimate your ideal marketing budget and see how many new customers you could be reaching.
          </p>
          <Link
            to="/calculator"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium text-base md:text-lg rounded-lg hover:bg-primary/90 transition-all shadow-md"
          >
            Try the Free Marketing Calculator
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-site-gradient text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold gradient-text-strong mb-4">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-base md:text-lg gradient-text mb-6 max-w-2xl mx-auto">
            Let's talk about how we can help your business reach more customers and grow your local presence online.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium text-base md:text-lg rounded-lg hover:bg-primary/90 transition-all shadow-lg"
          >
            <Mail className="mr-2" size={18} />
            Request Free Website Demo
          </Link>
        </div>
      </section>

      {/* Footer Social Links */}
      <footer className="py-10 bg-muted text-center px-4">
        <p className="text-sm text-muted-foreground mb-4">Follow Us:</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
          <a
            href="https://www.facebook.com/profile.php?id=61578313660385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            <Facebook className="mr-1" size={18} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/hometownwebco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            <Instagram className="mr-1" size={18} />
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@hometownwebco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            <Youtube className="mr-1" size={18} />
            YouTube
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
