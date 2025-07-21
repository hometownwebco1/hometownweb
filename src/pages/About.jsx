import { Helmet } from 'react-helmet'
import { Heart, Users, Target, Award, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Trust',
      description: 'We build lasting relationships with our clients based on honesty, transparency, and reliable service.'
    },
    {
      icon: Users,
      title: 'Simplicity',
      description: 'We make the complex world of web development simple and accessible for every business owner.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Every website we create is designed to help your business grow and connect with more customers.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We deliver professional, high-quality websites that you can be proud to share with your customers.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>About Us | Hometown Web Co</title>
        <meta
          name="description"
          content="Hometown Web Co builds high-quality websites for small businesses. Learn how our team helps local businesses grow online with professional, affordable design."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/about" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="About Us | Hometown Web Co" />
        <meta property="og:description" content="Hometown Web Co builds high-quality websites for small businesses. Learn how our team helps local businesses grow online with professional, affordable design." />
        <meta property="og:url" content="https://www.hometownwebco.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Hometown Web Co" />
        <meta name="twitter:description" content="Hometown Web Co builds high-quality websites for small businesses. Learn how our team helps local businesses grow online with professional, affordable design." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Hometown Web Co — Local Business Website Experts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in helping local businesses grow online with affordable, professional web design and digital strategy.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hometown Web Co builds custom websites for hometown businesses across the United States. 
                We focus on simplicity, trust, and real-world results — not buzzwords or gimmicks.
              </p>
              <p>
                Whether you're a family-owned restaurant, a local contractor, or a service provider, 
                we make it easy to get online and start attracting more customers. 
              </p>
              <p>
                We handle everything: web design, hosting, SEO, and support — so you don’t have to worry 
                about tech. You get a clean, fast, and mobile-ready website that reflects your business 
                and builds your credibility.
              </p>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose Hometown Web Co?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Local Focus:</strong> We know what small businesses need — and what they don’t.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Simple Process:</strong> We keep things easy, affordable, and stress-free.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Real Results:</strong> Our sites are built to convert — not just look good.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-muted rounded-lg shadow-md">
              <value.icon className="text-primary mx-auto mb-4" size={32} />
              <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Social Footer */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">Follow Us:</p>
          <a
            href="https://www.facebook.com/profile.php?id=61578313660385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-primary hover:text-primary/80"
          >
            <Facebook className="mr-2" size={20} />
            Facebook
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

