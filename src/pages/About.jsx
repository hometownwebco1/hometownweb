import { Helmet } from 'react-helmet'
import { Heart, Users, Target, Award, Facebook, Instagram, Youtube } from 'lucide-react'
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Hometown Web Co",
    "description": "Learn about Hometown Web Co — local website designers helping small businesses grow with fast, affordable, and professional sites built for real results.",
    "url": "https://www.hometownwebco.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "Hometown Web Co",
      "url": "https://www.hometownwebco.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hometownwebco.com/logo.png"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61578313660385",
        "https://www.instagram.com/hometownwebco/",
        "https://www.youtube.com/@hometownwebco"
      ]
    }
  }

  return (
    <div className="min-h-screen py-20 bg-site-gradient">
      <Helmet>
        <title>About Hometown Web Co | Local Website Designers for Small Business</title>
        <meta
          name="description"
          content="Learn about Hometown Web Co — local website designers helping small businesses grow with fast, affordable, and professional sites built for real results."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/about" />
        {/* Open Graph */}
        <meta property="og:title" content="About Hometown Web Co | Local Website Designers for Small Business" />
        <meta property="og:description" content="Learn about Hometown Web Co — local website designers helping small businesses grow with fast, affordable, and professional sites built for real results." />
        <meta property="og:url" content="https://www.hometownwebco.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Hometown Web Co | Local Website Designers for Small Business" />
        <meta name="twitter:description" content="Learn about Hometown Web Co — local website designers helping small businesses grow with fast, affordable, and professional sites built for real results." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Hometown Web Co — Local Business Website Experts
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            We specialize in helping local businesses grow online with affordable, professional web design and digital strategy.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg text-gray-100 leading-relaxed">
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

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Hometown Web Co?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  <strong className="text-gray-900">Local Focus:</strong> We know what small businesses need — and what they don’t.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  <strong className="text-gray-900">Simple Process:</strong> We keep things easy, affordable, and stress-free.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  <strong className="text-gray-900">Real Results:</strong> Our sites are built to convert — not just look good.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <value.icon className="text-primary mx-auto mb-4" size={32} />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-700 text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Social Footer */}
        <div className="mt-20 text-center">
          <p className="text-gray-100 mb-4">Follow Us:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61578313660385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white hover:text-primary"
            >
              <Facebook className="mr-2" size={20} />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hometownwebco/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white hover:text-primary"
            >
              <Instagram className="mr-2" size={20} />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@hometownwebco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white hover:text-primary"
            >
              <Youtube className="mr-2" size={20} />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
