import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Mail, MapPin, Send, CheckCircle, Facebook, Phone, Instagram, Youtube } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: '',
    consent: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.consent) return

    setStatus('submitting')

    try {
      const res = await fetch(`${window.location.origin}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
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
          setStatus('idle')
        }, 3000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
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
        "telephone": "+1-910-477-4389",
        "contactType": "customer support",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61578313660385",
        "https://www.instagram.com/hometownwebco/",
        "https://www.youtube.com/@hometownwebco"
      ]
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center" role="status" aria-live="polite">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="text-primary mx-auto mb-4" size={64} />
          <h2 className="text-3xl font-bold text-foreground mb-4">Thank You!</h2>
          <p className="text-lg text-white drop-shadow mb-6">
            We've received your request. We'll get back to you within 24 hours.
          </p>
          <p className="text-white/80">You’ll be redirected shortly...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-site-gradient">
      <Helmet>
        <title>Contact Us | Hometown Web Co</title>
        <meta name="description" content="Get in touch with Hometown Web Co for a free consultation or demo. We help local businesses across the U.S. grow online." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow mb-6">Contact Hometown Web Co</h1>
          <p className="text-xl text-white/90 drop-shadow max-w-3xl mx-auto leading-relaxed">
            We're here to help local businesses across the U.S. build a strong online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Request Your Free Website Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6" role="form">
                <input type="hidden" name="phone" value="(910) 477-4389" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground"
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
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground"
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
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground"
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
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground resize-none"
                    placeholder="Tell us what you're looking for in a website..."
                  />
                </div>
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
                    and give consent to be contacted.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors"
                  disabled={status === 'submitting'}
                >
                  <Send className="mr-2" size={20} />
                  {status === 'submitting' ? 'Sending...' : 'Request Free Website Demo'}
                </button>
                {status === 'error' && (
                  <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white drop-shadow">Get In Touch</h2>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Call Us</h3>
                <p className="text-white/80">(910) 477-4389</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-white/80">woody@hometownwebco.com</p>
              </div>
            </div>
            <div className="text-center pt-6">
              <p className="text-white/90 mb-2">Follow Us:</p>
              <div className="flex justify-center gap-5">
                <a
                  href="https://www.facebook.com/profile.php?id=61578313660385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="mr-2" size={20} />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/hometownwebco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="mr-2" size={20} />
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@hometownwebco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="mr-2" size={20} />
                  YouTube
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

