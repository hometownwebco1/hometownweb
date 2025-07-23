import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Mail, MapPin, Send, CheckCircle, Facebook } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: '',
    consent: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.consent) return
    console.log('Form submitted:', formData)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        businessName: '',
        message: '',
        consent: false
      })
    }, 3000)
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Hometown Web Co",
    "description": "Contact Hometown Web Co for a free website demo and consultation. We help small businesses across the U.S. with professional, conversion-focused websites.",
    "url": "https://www.hometownwebco.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Hometown Web Co",
      "url": "https://www.hometownwebco.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "woody@hometownwebco.com",
        "contactType": "customer support",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61578313660385"
      ]
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center" role="status" aria-live="polite">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="text-primary mx-auto mb-4" size={64} />
          <h2 className="text-3xl font-bold text-foreground mb-4">Thank You!</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We've received your request. We'll get back to you within 24 hours.
          </p>
          <p className="text-muted-foreground">You’ll be redirected shortly...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>Contact Us | Hometown Web Co</title>
        <meta
          name="description"
          content="Get in touch with Hometown Web Co for a free consultation or demo. We help local businesses across the U.S. grow online."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/contact" />
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Hometown Web Co" />
        <meta property="og:description" content="Get in touch with Hometown Web Co for a free consultation or demo. We help local businesses across the U.S. grow online." />
        <meta property="og:url" content="https://www.hometownwebco.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Hometown Web Co" />
        <meta name="twitter:description" content="Get in touch with Hometown Web Co for a free consultation or demo. We help local businesses across the U.S. grow online." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* JSON-LD Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Contact Hometown Web Co</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help local businesses across the U.S. build a strong online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Request Your Free Website Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6" role="form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your business name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us what you're looking for in a website..."
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to the{' '}
                    <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">
                      Privacy Policy
                    </a>{' '}
                    and give consent to be contacted about my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  disabled={!formData.consent}
                >
                  <Send className="mr-2" size={20} />
                  Request Free Website Demo
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Panel */}
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you need a new site or a refresh, we help small businesses nationwide with results-driven web solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">woody@hometownwebco.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Typically replies within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Nationwide Service</h3>
                    <p className="text-muted-foreground">Based in the U.S.</p>
                    <p className="text-sm text-muted-foreground mt-1">Helping businesses coast to coast</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">What Happens Next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2"><span className="text-primary font-bold">1.</span><span>We review your request</span></li>
                  <li className="flex items-start space-x-2"><span className="text-primary font-bold">2.</span><span>We schedule a free consultation</span></li>
                  <li className="flex items-start space-x-2"><span className="text-primary font-bold">3.</span><span>You receive a tailored proposal</span></li>
                  <li className="flex items-start space-x-2"><span className="text-primary font-bold">4.</span><span>We build your online presence</span></li>
                </ul>
              </div>

              <div className="text-center pt-6">
                <p className="text-muted-foreground mb-2">Follow Us:</p>
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
        </div>
      </div>
    </div>
  )
}

export default Contact
